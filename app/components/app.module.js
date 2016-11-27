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
var platform_browser_1 = require('@angular/platform-browser');
var body_component_1 = require('./body.component');
var app_signin_component_1 = require('./app.signin.component');
var app_home_guest_component_1 = require('./app.home.guest.component');
var router_1 = require('@angular/router');
var StateService_1 = require('../services/StateService');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot([
                    {
                        path: 'body.html',
                        component: body_component_1.AppBodyComponent
                    },
                    {
                        path: 'signin',
                        component: app_signin_component_1.AppSigninComponent
                    },
                    {
                        path: 'home',
                        component: app_home_guest_component_1.AppHomeGuestComponent
                    }
                ])
            ],
            providers: [StateService_1.StateService],
            declarations: [body_component_1.AppBodyComponent, app_signin_component_1.AppSigninComponent, app_home_guest_component_1.AppHomeGuestComponent],
            bootstrap: [body_component_1.AppBodyComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map