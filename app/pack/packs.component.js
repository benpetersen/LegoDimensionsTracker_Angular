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
var ability_service_1 = require('./services/ability.service');
var PacksComponent = (function () {
    function PacksComponent(_packsService, _abilitiesService, _cookieService) {
        this._packsService = _packsService;
        this._abilitiesService = _abilitiesService;
        this._cookieService = _cookieService;
        this.ownedPacks = new Array();
        this.neededAbilities = new Array();
    }
    PacksComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Rx observable version with subscribe function to a pack array
        this._packsService.getPacks_RxObservable()
            .subscribe(function (packs) {
            _this.packs = packs,
                _this.searchAbilitiesResults = packs,
                _this.getOwnedPacks();
        });
        this._abilitiesService.getAbilities_RxObservable()
            .subscribe(function (abilities) {
            _this.abilities = abilities,
                _this.getAbilitiesNeededForCompletion(_this.abilities);
        });
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
        var cookie = this.getCookie("LegoDimentionsOwnedPacks");
        var ownedPack = false;
        if (cookie != undefined) {
            ownedPack = cookie.includes(pack.packNumber);
            if (!ownedPack) {
                cookie += ", " + pack.packNumber;
                this.ownedPacks.push(pack);
            }
        }
        else {
            cookie = pack.packNumber;
            this.ownedPacks.push(pack);
        }
        this._cookieService.put("LegoDimentionsOwnedPacks", cookie);
        this.getAbilitiesNeededForCompletion(this.abilities);
    };
    PacksComponent.prototype.removePack = function (pack) {
        //implement remove pack
    };
    PacksComponent.prototype.getCookie = function (key) {
        return this._cookieService.get(key);
    };
    PacksComponent.prototype.getAbilitiesNeededForCompletion = function (abilities) {
        /*
        Check if ability is owned by iterating through ownedPacks characters
        Comparing the list of characters with the ability to ownedPacks character names
        --Brute force, it's probably the worst way to do this, but it works
        */
        this.neededAbilities = new Array();
        for (var i = 0; i < this.abilities.length; i++) {
            var ability = this.abilities[i];
            var owned = false;
            if (this.neededAbilities.indexOf(ability) != -1) {
                //ability already in neededAbilities
                break;
            }
            //Messy way to iterate through characters, checking if character is owned
            for (var j = 0; j < this.abilities[i].CharactersWithAbility.length; j++) {
                var characterWithAbility = this.abilities[i].CharactersWithAbility[j];
                //Do you own this character? If not, add to needed abilities 
                for (var k = 0; k < this.ownedPacks.length; k++) {
                    for (var l = 0; l < this.ownedPacks[k].characters.length; l++) {
                        var ownedCharacter = this.ownedPacks[k].characters[l].name;
                        if (ownedCharacter == characterWithAbility) {
                            owned = true;
                            break;
                        }
                    }
                    if (owned == true) {
                        //character is owned, exit out of outer loop
                        break;
                    }
                }
            }
            //If not owned, add to neededAbilities
            if (owned == false) {
                this.neededAbilities.push(ability);
            }
        }
    };
    PacksComponent = __decorate([
        core_1.Component({
            selector: 'app-packs',
            templateUrl: 'app/pack/packs.component.html',
            providers: [pack_service_1.PackService, ability_service_1.AbilityService]
        }), 
        __metadata('design:paramtypes', [pack_service_1.PackService, ability_service_1.AbilityService, core_2.CookieService])
    ], PacksComponent);
    return PacksComponent;
}());
exports.PacksComponent = PacksComponent;
//# sourceMappingURL=packs.component.js.map