"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var cookies_service_1 = require("angular2-cookie/services/cookies.service");
var app_component_1 = require("./app.component");
var router_1 = require("@angular/router");
var index_1 = require("./pack/index");
var index_2 = require("./abilitySearch/index");
var not_found_component_1 = require("./not-found.component");
var index_3 = require("./character/index");
var index_4 = require("./common/index");
var search_pipe_1 = require("./pipes/search.pipe");
var searchPackName_pipe_1 = require("./pipes/searchPackName.pipe");
var searchAbilityName_pipe_1 = require("./pipes/searchAbilityName.pipe");
var schemas = [core_1.CUSTOM_ELEMENTS_SCHEMA];
var appRoutes = [
    { path: 'ability-search', component: index_2.AbilitySearchComponent },
    { path: 'packs', component: index_1.PacksComponent, data: { title: 'Pack List' } },
    { path: '', redirectTo: '/packs', pathMatch: 'full' },
    { path: '**', component: not_found_component_1.PageNotFoundComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpModule,
            ng_bootstrap_1.NgbModule.forRoot(),
            router_1.RouterModule.forRoot(appRoutes)
        ],
        declarations: [
            app_component_1.AppComponent,
            index_1.PackComponent,
            index_1.PacksComponent,
            index_3.CharacterComponent,
            index_2.AbilitySearchComponent,
            not_found_component_1.PageNotFoundComponent,
            index_4.SearchBox,
            search_pipe_1.SearchPipe,
            searchPackName_pipe_1.SearchPackNamePipe,
            searchAbilityName_pipe_1.SearchAbilityNamePipe
        ],
        providers: [cookies_service_1.CookieService],
        bootstrap: [app_component_1.AppComponent],
        schemas: schemas,
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map