"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var StateService_1 = require("../services/StateService");
var AppSigninComponent = (function () {
    function AppSigninComponent(router, statesService) {
        this.router = router;
        this.statesService = statesService;
    }
    AppSigninComponent.prototype.cancel = function () {
        this.statesService.states.signingIn = false;
        this.router.navigate(["/home"]);
    };
    AppSigninComponent = __decorate([
        core_1.Component({
            templateUrl: '/app/views/signin.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, StateService_1.StateService])
    ], AppSigninComponent);
    return AppSigninComponent;
}());
exports.AppSigninComponent = AppSigninComponent;
//# sourceMappingURL=app.signin.component.js.map