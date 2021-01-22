"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var user_register_component_1 = require("./user-register.component");
describe('UserRegisterComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [user_register_component_1.UserRegisterComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(user_register_component_1.UserRegisterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
