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
var core_2 = require('angular2-cookie/core');
var pack_service_1 = require('./services/pack.service');
var PacksComponent = (function () {
    function PacksComponent(_packsService, _cookieService) {
        this._packsService = _packsService;
        this._cookieService = _cookieService;
        this.ownedPacks = new Array();
    }
    PacksComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Rx observable version with subscribe function to a pack array
        this._packsService.getPacks_RxObservable()
            .subscribe(function (packs) { return _this.packs = packs; }, function (packs) { return _this.searchAbilitiesResults = packs; }, function (packs) { return _this.getOwnedPacks(); });
    };
    ;
    PacksComponent.prototype.getOwnedPacks = function () {
        var cookie = this.getCookie("LegoDimentionsOwnedPacks");
        if (cookie != undefined) {
            var ownedPackNumbers = cookie.split(',');
            for (var i = 0; i < ownedPackNumbers.length; i++) {
                for (var j = 0; j < this.packs.length; j++) {
                    if (this.packs[j].packNumber == ownedPackNumbers[i]) {
                        this.ownedPacks.push(this.packs[j]);
                    }
                }
            }
        }
    };
    PacksComponent.prototype.showCharacter = function (event, i, item) {
        item.show = !item.show;
        alert(item);
    };
    PacksComponent.prototype.addPack = function (pack) {
        //implement .indexOf
        this.ownedPacks.push(pack);
        var cookie = this.getCookie("LegoDimentionsOwnedPacks");
        var ownedPack = false;
        if (cookie != undefined) {
            ownedPack = cookie.includes(pack.packNumber);
            if (!ownedPack) {
                cookie += ", " + pack.packNumber;
            }
        }
        else {
            cookie = pack.packNumber;
        }
        this._cookieService.put("LegoDimentionsOwnedPacks", cookie);
    };
    PacksComponent.prototype.removePack = function (pack) {
        //implement remove pack
    };
    PacksComponent.prototype.getCookie = function (key) {
        return this._cookieService.get(key);
    };
    PacksComponent = __decorate([
        core_1.Component({
            selector: 'app-packs',
            templateUrl: 'app/pack/packs.component.html',
            providers: [pack_service_1.PackService]
        }), 
        __metadata('design:paramtypes', [pack_service_1.PackService, core_2.CookieService])
    ], PacksComponent);
    return PacksComponent;
}());
exports.PacksComponent = PacksComponent;
//# sourceMappingURL=packs.component.js.map