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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var URL_ABILITIES = 'app/abilities.json';
var AbilityService = (function () {
    function AbilityService(_http) {
        this._http = _http;
    }
    AbilityService.prototype.getAbilities_RxObservable = function () {
        return this._http.get(URL_ABILITIES)
            .map(function (response) { return response.json(); })
            .catch(this._handleError);
    };
    AbilityService.prototype._handleError = function (err) {
        console.log(err);
        return Rx_1.Observable.throw(err);
    };
    return AbilityService;
}());
AbilityService = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject(http_1.Http)),
    __metadata("design:paramtypes", [http_1.Http])
], AbilityService);
exports.AbilityService = AbilityService;
//# sourceMappingURL=ability.service.js.map