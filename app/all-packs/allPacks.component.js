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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var pack_service_1 = require("../services/pack.service");
var AllPacksComponent = (function () {
    function AllPacksComponent() {
        this.ownedPacks = new Array();
        this.neededAbilities = new Array();
    }
    AllPacksComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Rx observable version with subscribe function to a pack array
        this._packsService.getPacks_RxObservable()
            .subscribe(function (packs) {
            _this.packs = packs,
                _this.searchAbilitiesResults = packs,
                _this.getOwnedPacks();
        });
    };
    ;
    return AllPacksComponent;
}());
AllPacksComponent = __decorate([
    core_1.Component({
        selector: 'allPacks',
        templateUrl: 'app/all-packs/allPacks.component.html',
        providers: [pack_service_1.PackService, AbilityService]
    }),
    __metadata("design:paramtypes", [])
], AllPacksComponent);
exports.AllPacksComponent = AllPacksComponent;
//# sourceMappingURL=allPacks.component.js.map