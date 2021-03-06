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
var ability_service_1 = require("../services/ability.service");
var AbilitySearchComponent = (function () {
    function AbilitySearchComponent(_abilitiesService) {
        this._abilitiesService = _abilitiesService;
    }
    AbilitySearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Rx observable with subscribe function to a abilities array
        this._abilitiesService.getAbilities_RxObservable()
            .subscribe(function (abilities) {
            _this.abilities = abilities;
        });
    };
    ;
    return AbilitySearchComponent;
}());
AbilitySearchComponent = __decorate([
    core_1.Component({
        selector: 'abilitySearch-app',
        templateUrl: 'app/abilitySearch/abilitySearch.component.html',
        providers: [ability_service_1.AbilityService]
    }),
    __metadata("design:paramtypes", [ability_service_1.AbilityService])
], AbilitySearchComponent);
exports.AbilitySearchComponent = AbilitySearchComponent;
//# sourceMappingURL=abilitySearch.component.js.map