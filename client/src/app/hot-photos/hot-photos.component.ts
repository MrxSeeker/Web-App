import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserLoginService } from '../user-login.service';
import { Photo } from '../photo';
import { PhotoService } from '../photo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hot-photos',
  templateUrl: './hot-photos.component.html',
  styleUrls: ['./hot-photos.component.css']
})
export class HotPhotosComponent implements OnInit {
  user: User = { _id: "", username: "", password: "", email: "" };
  userHost: string = UserLoginService.userHost;
  //objekt za slike in predpona naslovov slik, ker se nahjajo na "drugem" strežniku
  photos: Photo[];
  photoHost = PhotoService.photoHost;


  constructor(private photoService: PhotoService, private userLoginService: UserLoginService, private route: ActivatedRoute, private router: Router) { }
  //preberemo vse slike, in jih damo v objekt, ki je povezan z html-jem
  getHotPhotos(): void {
    this.photoService.getHotPhotos()
      .subscribe(photos => this.photos = photos);
  }
  ngOnInit() {
    this.getHotPhotos();
  }

  sortHotPhotos(a, b) {
    return new Date(b.CREATE_TS).getTime() - new Date(a.CREATE_TS).getTime();
  }

}
