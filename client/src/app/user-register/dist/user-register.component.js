"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserRegisterComponent = void 0;
var core_1 = require("@angular/core");
var UserRegisterComponent = /** @class */ (function () {
    function UserRegisterComponent(userRegisterService, route, router) {
        this.userRegisterService = userRegisterService;
        this.route = route;
        this.router = router;
        this.user = { _id: "", username: "", password: "", email: "" };
    }
    UserRegisterComponent.prototype.ngOnInit = function () {
    };
    UserRegisterComponent.prototype.tryRegister = function () {
        var _this = this;
        this.userRegisterService.register(this.user).subscribe(function (user) {
            _this.route.queryParams.subscribe(function (params) {
                _this.router.navigate([params['returnUrl'] || 'photos']);
            });
        });
    };
    UserRegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-user-register',
            templateUrl: './user-register.component.html',
            styleUrls: ['./user-register.component.css']
        })
    ], UserRegisterComponent);
    return UserRegisterComponent;
}());
exports.UserRegisterComponent = UserRegisterComponent;
