import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo';
import { PhotoService } from '../photo.service';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  photo: Photo = { "_id": "", name: "", "path": "", likes: 0, username: "", date: new Date(), comments: [], reports: 0 };
  photoHost = PhotoService.photoHost;


  constructor(private photoService: PhotoService, private route: ActivatedRoute, private component: AppComponent) { }

  //naložimo eno sliko, glede na id
  getPhoto(_id: string): void {

    this.photoService.getPhoto(_id).subscribe(photo => this.photo = photo);
  }
  //če je id nastavljen, poiščemo sliko na strežniku
  ngOnInit() {
    this.route.params.subscribe(params => this.getPhoto(params['_id']));

  }

  likePhoto(): void {
    if (this.isLiked()) {
      this.photo.likes--;
      localStorage.removeItem(JSON.parse(localStorage.getItem('currentUser')).username + "like" + this.photo._id);
    }
    else {
      this.photo.likes++;
      localStorage.setItem(JSON.parse(localStorage.getItem('currentUser')).username + "like" + this.photo._id, this.photo._id);
    }
    this.photoService.updatePhoto(this.photo).subscribe(photo => this.photo = photo);
  }

  commentPhoto(): void {
    var input = (<HTMLInputElement>document.getElementById("comment")).value;
    if (input === "") return;
    var comment = "[" + new Date().toLocaleString() + "] " + JSON.parse(localStorage.getItem('currentUser')).username + ": " + input;
    (<HTMLInputElement>document.getElementById("comment")).value = "";
    this.photo.comments.push(comment);
    this.photoService.updatePhoto(this.photo).subscribe(photo => this.photo = photo);
  }

  isLoggedIn(): boolean {
    return this.component.isLoggedIn();
  }

  isLiked(): boolean {
    return localStorage.getItem(JSON.parse(localStorage.getItem('currentUser')).username + "like" + this.photo._id) ? true : false;
  }

  reportPhoto(): void {
    if (this.isReported()) {
      this.photo.reports--;
      localStorage.removeItem(JSON.parse(localStorage.getItem('currentUser')).username + "report" + this.photo._id);
    }
    else {
      this.photo.reports++;
      localStorage.setItem(JSON.parse(localStorage.getItem('currentUser')).username + "report" + this.photo._id, this.photo._id);
    }
    this.photoService.updatePhoto(this.photo).subscribe(photo => this.photo = photo);
  }

  isReported(): boolean {
    return localStorage.getItem(JSON.parse(localStorage.getItem('currentUser')).username + "report" + this.photo._id) ? true : false;
  }

}
