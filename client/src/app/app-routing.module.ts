import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PhotosComponent } from './photos/photos.component';
import { PhotoComponent } from './photo/photo.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { AddPhotoComponent } from './add-photo/add-photo.component';

import { LoginGuard } from './login.guard';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import { HotPhotosComponent } from './hot-photos/hot-photos.component';

const routes: Routes = [
  { path: '', component: PhotosComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'photo/:_id', component: PhotoComponent },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'user-register', component: UserRegisterComponent },
  { path: 'add-photo', component: AddPhotoComponent, canActivate: [LoginGuard] },
  { path: 'user/:_id', component: ProfileComponent },
  { path: 'users', component: UsersComponent },
  { path: 'hot-photos', component: HotPhotosComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
