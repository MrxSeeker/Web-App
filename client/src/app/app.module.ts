import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PhotosComponent } from './photos/photos.component';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { UserLoginComponent } from './user-login/user-login.component';
import { AddPhotoComponent } from './add-photo/add-photo.component';
import { PhotoComponent } from './photo/photo.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import { HotPhotosComponent } from './hot-photos/hot-photos.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    UserLoginComponent,
    AddPhotoComponent,
    PhotoComponent,
    UserRegisterComponent,
    ProfileComponent,
    UsersComponent,
    HotPhotosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
