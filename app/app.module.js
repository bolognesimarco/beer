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
var header_component_1 = require('./header.component');
var footer_component_1 = require('./footer.component');
var app_test_component_1 = require('./app.test.component');
var app_test2_component_1 = require('./app.test2.component');
var app_testF_component_1 = require('./app.testF.component');
var app_test2F_component_1 = require('./app.test2F.component');
var router_1 = require('@angular/router');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot([
                    {
                        path: 'header.html',
                        component: header_component_1.AppHeaderComponent
                    },
                    {
                        path: 'footer.html',
                        component: footer_component_1.AppFooterComponent
                    },
                    {
                        path: 'h1',
                        component: app_test_component_1.AppTestComponent
                    },
                    {
                        path: 'h2',
                        component: app_test2_component_1.AppTest2Component
                    },
                    {
                        path: 'f1',
                        component: app_testF_component_1.AppTestFComponent
                    },
                    {
                        path: 'f2',
                        component: app_test2F_component_1.AppTest2FComponent
                    }
                ])],
            declarations: [header_component_1.AppHeaderComponent, footer_component_1.AppFooterComponent, app_test_component_1.AppTestComponent, app_test2_component_1.AppTest2Component, app_testF_component_1.AppTestFComponent, app_test2F_component_1.AppTest2FComponent],
            bootstrap: [header_component_1.AppHeaderComponent, footer_component_1.AppFooterComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map