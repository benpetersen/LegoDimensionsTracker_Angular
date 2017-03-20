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
var pack_service_1 = require('./pack.service');
var search_pipe_1 = require('./search-pipe');
var PacksComponent = (function () {
    function PacksComponent(_packsService) {
        this._packsService = _packsService;
        this.searchResults = new Array();
    }
    PacksComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Rx observable version with subscribe function to a pack array
        this._packsService.getPacks_RxObservable()
            .subscribe(function (packs) { return _this.packs = packs; }, function (packs) { return _this.searchResults = packs; }, function (err) { console.log(err); });
    };
    ;
    PacksComponent = __decorate([
        core_1.Component({
            selector: 'app-packs',
            pipes: [search_pipe_1.SearchPipe],
            templateUrl: 'app/pack/packs.component.html',
            providers: [pack_service_1.PackService]
        }), 
        __metadata('design:paramtypes', [pack_service_1.PackService])
    ], PacksComponent);
    return PacksComponent;
}());
exports.PacksComponent = PacksComponent;
//# sourceMappingURL=packs.component.js.map