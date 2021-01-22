import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo';
import { User } from '../user';
import { PhotoService } from '../photo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserLoginService } from '../user-login.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  user: User = { _id: "", username: "", password: "", email: "" };
  userHost: string = UserLoginService.userHost;
  //objekt za slike in predpona naslovov slik, ker se nahjajo na "drugem" strežniku
  photos: Photo[];
  photoHost = PhotoService.photoHost;


  constructor(private photoService: PhotoService, private userLoginService: UserLoginService, private route: ActivatedRoute, private router: Router) { }
  //preberemo vse slike, in jih damo v objekt, ki je povezan z html-jem
  getPhotos(): void {
    this.photoService.getPhotos()
      .subscribe(photos => this.photos = photos);
  }
  ngOnInit() {
    this.getPhotos();    
  }
  getUser(){
    this.route.params.subscribe(photos => this.router.navigate([this.readUser]));    
  }

  readUser(_id: string): void {
    this.userLoginService.readUser(_id).subscribe((user) => (this.user = user));
  }

}
