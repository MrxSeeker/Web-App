import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo';
import { PhotoService } from '../photo.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css']
})
export class AddPhotoComponent implements OnInit {

  fileToUpload: File = null;
  photo: Photo = { name: '', _id: '', path: '', likes: 0, username: JSON.parse(localStorage.getItem('currentUser')).username, date: new Date(), comments: [], reports: 0 };
  constructor(private photoService: PhotoService, private router: Router) { }

  ngOnInit() {
  }
  addPhoto() {

    this.photoService.addPhoto(this.fileToUpload, this.photo)
      .subscribe(photos => this.router.navigate(['photos']));

  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

}
