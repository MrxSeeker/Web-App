"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserRegisterService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var UserRegisterService = /** @class */ (function () {
    //static registerHost: string;
    //http: HttpClient;
    function UserRegisterService(http) {
        this.http = http;
        //UserRegisterService.registerHost= "http://localhost:3000";
    }
    UserRegisterService_1 = UserRegisterService;
    UserRegisterService.prototype.register = function (user) {
        var headers = new http_1.HttpHeaders();
        return this.http.post(UserRegisterService_1.registerHost + 'users', user, { headers: headers }).pipe(operators_1.map(function (user) { return user; }));
    };
    var UserRegisterService_1;
    UserRegisterService.registerHost = 'http://localhost:3000/';
    UserRegisterService = UserRegisterService_1 = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], UserRegisterService);
    return UserRegisterService;
}());
exports.UserRegisterService = UserRegisterService;
