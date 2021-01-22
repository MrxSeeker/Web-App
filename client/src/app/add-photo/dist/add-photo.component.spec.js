"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var add_photo_component_1 = require("./add-photo.component");
describe('AddPhotoComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [add_photo_component_1.AddPhotoComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(add_photo_component_1.AddPhotoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
