"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var photos_component_1 = require("./photos/photos.component");
var photo_component_1 = require("./photo/photo.component");
var user_login_component_1 = require("./user-login/user-login.component");
var user_register_component_1 = require("./user-register/user-register.component");
var add_photo_component_1 = require("./add-photo/add-photo.component");
var login_guard_1 = require("./login.guard");
var routes = [
    { path: '', component: photos_component_1.PhotosComponent },
    { path: 'photos', component: photos_component_1.PhotosComponent },
    { path: 'photo/:_id', component: photo_component_1.PhotoComponent },
    { path: 'user-login', component: user_login_component_1.UserLoginComponent },
    { path: 'user-register', component: user_register_component_1.UserRegisterComponent },
    { path: 'add-photo', component: add_photo_component_1.AddPhotoComponent, canActivate: [login_guard_1.LoginGuard] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forRoot(routes)
            ],
            exports: [router_1.RouterModule],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
