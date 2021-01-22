import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../user-login.service';
import { PhotoService } from '../photo.service';
import { Photo } from '../photo';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userHost: string = UserLoginService.userHost;
  photoHost: string = PhotoService.photoHost;
  posts: number = 0;
  likes: number = 0;
  photos: Photo[];

  constructor(private photoService: PhotoService, private userLoginService: UserLoginService, private route: ActivatedRoute, private router: Router) { }

  user: User = { _id: "", username: "", password: "", email: "" };

  ngOnInit(): void {
    this.route.params.subscribe((params) => this.readUser(params["_id"]));
    this.photoService.getPhotos().subscribe((photos) => {
      photos.forEach((element) => {
        if (element.username == this.user.username) {
          this.posts++;
          this.likes = this.likes + element.likes;
        }
      });
    });
    this.reloadPage();
  }

  reloadPage() {
    setTimeout(() => {
      window.location.reload();
    }, 1000 * 5);
  }

  readUser(_id: string): void {
    this.userLoginService.readUser(_id).subscribe((user) =>
      (this.user = user));
  }


}
