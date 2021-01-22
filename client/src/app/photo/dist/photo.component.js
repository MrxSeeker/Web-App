"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PhotoComponent = void 0;
var core_1 = require("@angular/core");
var photo_service_1 = require("../photo.service");
var PhotoComponent = /** @class */ (function () {
    function PhotoComponent(photoService, route, component) {
        this.photoService = photoService;
        this.route = route;
        this.component = component;
        this.photo = { "_id": "", "name": "", "path": "", likes: 0, username: "", datetime: new Date(), comments: [] };
        this.photoHost = photo_service_1.PhotoService.photoHost;
    }
    //naložimo eno sliko, glede na id
    PhotoComponent.prototype.getPhoto = function (_id) {
        var _this = this;
        this.photoService.getPhoto(_id).subscribe(function (photo) { return _this.photo = photo; });
    };
    //če je id nastavljen, poiščemo sliko na strežniku
    PhotoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { return _this.getPhoto(params['_id']); });
    };
    PhotoComponent.prototype.likePhoto = function () {
        var _this = this;
        if (this.isLiked()) {
            this.photo.likes--;
            localStorage.removeItem(JSON.parse(localStorage.getItem('currentUser')).username + " " + this.photo._id);
        }
        else {
            this.photo.likes++;
            localStorage.setItem(JSON.parse(localStorage.getItem('currentUser')).username + " " + this.photo._id, this.photo._id);
        }
        this.photoService.updatePhoto(this.photo).subscribe(function (photo) { return _this.photo = photo; });
    };
    PhotoComponent.prototype.commentPhoto = function () {
        var _this = this;
        var input = document.getElementById("comment").value;
        if (input === "")
            return;
        var comment = "[" + new Date().toLocaleString() + "] " + JSON.parse(localStorage.getItem('currentUser')).username + ": " + input;
        document.getElementById("comment").value = "";
        this.photo.comments.push(comment);
        this.photoService.updatePhoto(this.photo).subscribe(function (photo) { return _this.photo = photo; });
    };
    PhotoComponent.prototype.isLoggedIn = function () {
        return this.component.isLoggedIn();
    };
    PhotoComponent.prototype.isLiked = function () {
        return localStorage.getItem(JSON.parse(localStorage.getItem('currentUser')).username + " " + this.photo._id) ? true : false;
    };
    PhotoComponent = __decorate([
        core_1.Component({
            selector: 'app-photo',
            templateUrl: './photo.component.html',
            styleUrls: ['./photo.component.css']
        })
    ], PhotoComponent);
    return PhotoComponent;
}());
exports.PhotoComponent = PhotoComponent;
