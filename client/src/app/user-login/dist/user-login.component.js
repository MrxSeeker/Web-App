"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserLoginComponent = void 0;
var core_1 = require("@angular/core");
var UserLoginComponent = /** @class */ (function () {
    function UserLoginComponent(userLoginService, route, router) {
        this.userLoginService = userLoginService;
        this.route = route;
        this.router = router;
        //objekt, s katerim bomo povezovali podatke v htmlju
        this.user = { username: '', password: '', _id: '', email: '' };
    }
    //ob prijavi vemo, da je v objektu user, trenutna vpisana vrednost iz vnosnih polj, ker smo jih povezali z ngmodel 
    //zato lahko pokličemo storitev prijave s tem objektom
    UserLoginComponent.prototype.tryLogin = function () {
        var _this = this;
        this.userLoginService.login(this.user).subscribe(function (user) {
            //ob uspešni prijavi pogledamo stanje query parametrov
            //V koliokr so nastavljeni, uporabnika preusmerimo na naslov, iz katerega je zahtevana prijava
            //V nasprotnem primeru ga preusmerimo na privzeto stran (photos)
            _this.route.queryParams.subscribe(function (params) {
                _this.router.navigate([params['returnUrl'] || 'photos']);
            });
        });
    };
    UserLoginComponent.prototype.ngOnInit = function () {
    };
    UserLoginComponent = __decorate([
        core_1.Component({
            selector: 'app-user-login',
            templateUrl: './user-login.component.html',
            styleUrls: ['./user-login.component.css']
        })
    ], UserLoginComponent);
    return UserLoginComponent;
}());
exports.UserLoginComponent = UserLoginComponent;
