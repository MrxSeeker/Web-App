"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PhotoService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var httpOptions = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
};
var PhotoService = /** @class */ (function () {
    //Injectan http client za ajax zahteve
    function PhotoService(http) {
        this.http = http;
    }
    PhotoService_1 = PhotoService;
    //enostavna zahteva na strežnik, ki vrača json seznam vseh slik
    PhotoService.prototype.getPhotos = function () {
        return this.http.get(PhotoService_1.photoHost + 'photos');
    };
    //enostavna zahteva na strežnik, ki vrača json objekt ene slike
    PhotoService.prototype.getPhoto = function (_id) {
        return this.http.get(PhotoService_1.photoHost + 'photos/' + _id);
    };
    //dodajanje slike
    //file je nativen objekt, photo pa ostali podatki slike (v našem primeru samo name)
    //formData je objekt, v katerega lahko dodamo datoteko (sliko), zraven pa še ostale podatke
    PhotoService.prototype.addPhoto = function (fileToUpload, photo) {
        var formData = new FormData();
        var headers = new http_1.HttpHeaders();
        formData.append('slika', fileToUpload, fileToUpload.name);
        formData.append('name', photo.name);
        formData.append('likes', photo.likes.toString());
        formData.append('username', photo.username);
        formData.append('datetime', photo.datetime.toString());
        //kličemo z withCredentials, ker moramo za dodajanje slike biti prijavljeni
        return this.http.post(PhotoService_1.photoHost + 'photos', formData, { headers: headers, withCredentials: true });
    };
    //v vse storitve je pametno dodati obravnavanje napak
    //več o tem imate na vodiču Tour of Heroes
    PhotoService.prototype.updatePhoto = function (photo) {
        var formData = new FormData();
        formData.append('likes', photo.likes.toString());
        formData.append('comments', JSON.stringify(photo.comments));
        var headers = new http_1.HttpHeaders();
        return this.http.put(PhotoService_1.photoHost + 'photos/' + photo._id, formData, { headers: headers, withCredentials: true });
    };
    var PhotoService_1;
    //naslov storitve
    PhotoService.photoHost = 'http://localhost:3000/';
    PhotoService = PhotoService_1 = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], PhotoService);
    return PhotoService;
}());
exports.PhotoService = PhotoService;
