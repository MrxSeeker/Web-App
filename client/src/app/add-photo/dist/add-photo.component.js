"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddPhotoComponent = void 0;
var core_1 = require("@angular/core");
var AddPhotoComponent = /** @class */ (function () {
    function AddPhotoComponent(photoService, router) {
        this.photoService = photoService;
        this.router = router;
        this.fileToUpload = null;
        this.photo = { name: '', _id: '', path: '', likes: 0, username: JSON.parse(localStorage.getItem('currentUser')).username, datetime: new Date(), comments: [] };
    }
    AddPhotoComponent.prototype.ngOnInit = function () {
    };
    AddPhotoComponent.prototype.addPhoto = function () {
        var _this = this;
        this.photoService.addPhoto(this.fileToUpload, this.photo)
            .subscribe(function (photos) { return _this.router.navigate(['photos']); });
    };
    AddPhotoComponent.prototype.handleFileInput = function (files) {
        this.fileToUpload = files.item(0);
    };
    AddPhotoComponent = __decorate([
        core_1.Component({
            selector: 'app-add-photo',
            templateUrl: './add-photo.component.html',
            styleUrls: ['./add-photo.component.css']
        })
    ], AddPhotoComponent);
    return AddPhotoComponent;
}());
exports.AddPhotoComponent = AddPhotoComponent;
