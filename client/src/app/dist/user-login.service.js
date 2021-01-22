"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserLoginService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var UserLoginService = /** @class */ (function () {
    function UserLoginService(http) {
        this.http = http;
    }
    UserLoginService_1 = UserLoginService;
    UserLoginService.prototype.login = function (user) {
        var headers = new http_1.HttpHeaders();
        //pomembno je, da nastavimo header na withCredentials:true
        //slednje pomeni, da se ob zahtevi pošiljajo tudi piškotki, kar pomeni, da bomo z strežnikom ob prijavi vzpostavili sejo (sejni piškotek)
        //to nam omogoča, da pri naslednjih zahtevan na strežnik, ostanemo avtenticirani
        //.pipe(map(x=y); kombinacija omogoča, da ob uspešni izvedbi zahteve objekt, ki ga storitev vrača spermenimo
        //pri tem lahko seveda naredimo tudi "stranske" korake, kot je shranjevanje objekta v localstorage
        //.pipe(map()) še vedno vrača observable z enakim tipom
        return this.http.post(UserLoginService_1.userHost + 'users/login', user, { headers: headers, withCredentials: true }).pipe(operators_1.map(function (user) {
            if (user) {
                //uporabnika si zapišemo v localStorage, da bomo tudi v naši Angular aplikaciji vedeli, da je prijava uspela
                //vedno, ko bomo želeli preveriti, če je uporabnik prijavljen, lahko pogledamo v sejo
                //alternativa bi bila preveranje sejnega piškotka, pri čemer pa ne bi vedeli, če je bila prijava uspešna
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return user;
        }));
    };
    UserLoginService.prototype.logout = function () {
        this.http.get(UserLoginService_1.userHost + 'users/logout');
        //odstranimo uporabnika iz local storage, pravilno bi bilo tudi na strežnik poslati zahtevo po odjavi, da se na strežniški strani uniči seja
        //this.http.get(UserLoginService.userHost+'users/logout');
        localStorage.removeItem('currentUser');
    };
    var UserLoginService_1;
    //naslov storitve
    UserLoginService.userHost = 'http://localhost:3000/';
    UserLoginService = UserLoginService_1 = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], UserLoginService);
    return UserLoginService;
}());
exports.UserLoginService = UserLoginService;
