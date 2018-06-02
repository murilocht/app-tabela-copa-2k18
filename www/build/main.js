webpackJsonp([6],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OitavasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quartas_quartas__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OitavasPage = /** @class */ (function () {
    function OitavasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OitavasPage.prototype.proximaPagina = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__quartas_quartas__["a" /* QuartasPage */]);
    };
    OitavasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-oitavas',template:/*ion-inline-start:"C:\Users\Muril\Documents\ionic\myApp2\src\pages\oitavas\oitavas.html"*/'<ion-header no-border>\n    <ion-navbar>\n        <ion-title>Oitavas de Final</ion-title>\n\n        <ion-buttons end>\n            <button ion-button clear (click)="proximaPagina()">\n                <ion-icon name="md-arrow-forward"></ion-icon>\n            </button>\n        </ion-buttons>\n\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <div align="center">\n        <fieldset style="border-radius: 4px; color: #666; border: 1px solid; width: 85%; margin-bottom: 5%" align="center">\n            <legend style="border-radius: 8px; color: #666; border: 1px solid">Oitavas 1</legend>\n            <div>\n                <div style="font-weight: bold;">Sab 30/06/2018\n                    <span style="font-weight: normal;">Olímpico de Sochi</span> 15:00\n                </div>\n                <div>\n                    <span>\n                        <span style="font-weight: bold; font-size: 15pt">1º A</span>\n                        <img src="../../assets/imgs/escudo_default_65x65.png" width="30" height="30">\n                    </span>\n                    <span>\n                        <img src="../../assets/imgs/escudo_default_65x65.png" width="30" height="30">\n                        <span style="font-weight: bold;; font-size: 15pt">2º B</span>\n                    </span>\n                </div>\n            </div>\n        </fieldset>\n        <fieldset style="border-radius: 4px; color: #666; border: 1px solid; width: 85%; margin-bottom: 5%" align="center">\n            <legend style="border-radius: 8px; color: #666; border: 1px solid">Oitavas 2</legend>\n            <div>\n                <div style="font-weight: bold;">Sab 30/06/2018\n                    <span style="font-weight: normal;">Arena Kazan</span> 11:00\n                </div>\n                <div>\n                    <span>\n                        <span style="font-weight: bold;; font-size: 15pt">1º C</span>\n                        <img src="../../assets/imgs/escudo_default_65x65.png" width="30" height="30">\n                    </span>\n                    <span>\n                        <img src="../../assets/imgs/escudo_default_65x65.png" width="30" height="30">\n                        <span style="font-weight: bold;; font-size: 15pt">2º D</span>\n                    </span>\n                </div>\n            </div>\n        </fieldset>\n        <fieldset style="border-radius: 4px; color: #666; border: 1px solid; width: 85%; margin-bottom: 5%" align="center">\n            <legend style="border-radius: 8px; color: #666; border: 1px solid">Oitavas 3</legend>\n            <div>\n                <div style="font-weight: bold;">Seg 02/07/2018\n                    <span style="font-weight: normal;">Samarra</span> 11:00\n                </div>\n                <div>\n                    <span>\n                        <span style="font-weight: bold; font-size: 15pt">1º E</span>\n                        <img src="../../assets/imgs/escudo_default_65x65.png" width="30" height="30">\n                    </span>\n                    <span>\n                        <img src="../../assets/imgs/escudo_default_65x65.png" width="30" height="30">\n                        <span style="font-weight: bold;; font-size: 15pt">2º F</span>\n                    </span>\n                </div>\n            </div>\n        </fieldset>\n        <fieldset style="border-radius: 4px; color: #666; border: 1px solid; width: 85%; margin-bottom: 5%" align="center">\n            <legend style="border-radius: 8px; color: #666; border: 1px solid">Oitavas 4</legend>\n            <div>\n                <div style="font-weight: bold;">Seg 02/07/2018\n                    <span style="font-weight: normal;">Rostov</span> 15:00\n                </div>\n                <div>\n                    <span>\n                        <span style="font-weight: bold; font-size: 15pt">1º G</span>\n                        <img src="../../assets/imgs/escudo_default_65x65.png" width="30" height="30">\n                    </span>\n                    <span>\n                        <img src="../../assets/imgs/escudo_default_65x65.png" width="30" height="30">\n                        <span style="font-weight: bold;; font-size: 15pt">2º H</span>\n                    </span>\n                </div>\n            </div>\n        </fieldset>\n        <fieldset style="border-radius: 4px; color: #666; border: 1px solid; width: 85%; margin-bottom: 5%" align="center">\n            <legend style="border-radius: 8px; color: #666; border: 1px solid">Oitavas 5</legend>\n            <div>\n                <div style="font-weight: bold;">Dom 01/07/2018\n                    <span style="font-weight: normal;">Olímpico Lujniki</span> 11:00\n                </div>\n                <div>\n                    <span>\n                        <span style="font-weight: bold; font-size: 15pt">1º B</span>\n                        <img src="../../assets/imgs/escudo_default_65x65.png" width="30" height="30">\n                    </span>\n                    <span>\n                        <img src="../../assets/imgs/escudo_default_65x65.png" width="30" height="30">\n                        <span style="font-weight: bold;; font-size: 15pt">2º A</span>\n                    </span>\n                </div>\n            </div>\n        </fieldset>\n        <fieldset style="border-radius: 4px; color: #666; border: 1px solid; width: 85%; margin-bottom: 5%" align="center">\n            <legend style="border-radius: 8px; color: #666; border: 1px solid">Oitavas 6</legend>\n            <div>\n                <div style="font-weight: bold;">Dom 01/07/2018\n                    <span style="font-weight: normal;">Nizhny Novgorod</span> 15:00\n                </div>\n                <div>\n                    <span>\n                        <span style="font-weight: bold; font-size: 15pt">1º D</span>\n                        <img src="../../assets/imgs/escudo_default_65x65.png" width="30" height="30">\n                    </span>\n                    <span>\n                        <img src="../../assets/imgs/escudo_default_65x65.png" width="30" height="30">\n                        <span style="font-weight: bold;; font-size: 15pt">2º C</span>\n                    </span>\n                </div>\n            </div>\n        </fieldset>\n        <fieldset style="border-radius: 4px; color: #666; border: 1px solid; width: 85%; margin-bottom: 5%" align="center">\n            <legend style="border-radius: 8px; color: #666; border: 1px solid">Oitavas 7</legend>\n            <div>\n                <div style="font-weight: bold;">Ter 03/07/2018\n                    <span style="font-weight: normal;">São Petersburgo</span> 11:00\n                </div>\n                <div>\n                    <span>\n                        <span style="font-weight: bold; font-size: 15pt">1º F</span>\n                        <img src="../../assets/imgs/escudo_default_65x65.png" width="30" height="30">\n                    </span>\n                    <span>\n                        <img src="../../assets/imgs/escudo_default_65x65.png" width="30" height="30">\n                        <span style="font-weight: bold;; font-size: 15pt">2º E</span>\n                    </span>\n                </div>\n            </div>\n        </fieldset>\n        <fieldset style="border-radius: 4px; color: #666; border: 1px solid; width: 85%; margin-bottom: 5%" align="center">\n            <legend style="border-radius: 8px; color: #666; border: 1px solid">Oitavas 8</legend>\n            <div>\n                <div style="font-weight: bold;">Ter 03/07/2018\n                    <span style="font-weight: normal;">Spartak</span> 15:00\n                </div>\n                <div>\n                    <span>\n                        <span style="font-weight: bold; font-size: 15pt">1º H</span>\n                        <img src="../../assets/imgs/escudo_default_65x65.png" width="30" height="30">\n                    </span>\n                    <span>\n                        <img src="../../assets/imgs/escudo_default_65x65.png" width="30" height="30">\n                        <span style="font-weight: bold;; font-size: 15pt">2º G</span>\n                    </span>\n                </div>\n            </div>\n        </fieldset>\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Muril\Documents\ionic\myApp2\src\pages\oitavas\oitavas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], OitavasPage);
    return OitavasPage;
}());

//# sourceMappingURL=oitavas.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuartasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__semi_final_semi_final__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuartasPage = /** @class */ (function () {
    function QuartasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    QuartasPage.prototype.proximaPagina = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__semi_final_semi_final__["a" /* SemiFinalPage */]);
    };
    QuartasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-quartas',template:/*ion-inline-start:"C:\Users\Muril\Documents\ionic\myApp2\src\pages\quartas\quartas.html"*/'<ion-header no-border>\n    <ion-navbar>\n\n        <ion-title>Quartas de Final</ion-title>\n\n        <ion-buttons end>\n            <button ion-button clear (click)="proximaPagina()">\n                <ion-icon name="md-arrow-forward"></ion-icon>\n            </button>\n        </ion-buttons>\n\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <div align="center">\n        <fieldset style="border-radius: 4px; color: #666; border: 1px solid; width: 85%; margin-bottom: 5%" align="center">\n            <legend style="border-radius: 8px; color: #666; border: 1px solid">Quartas 1</legend>\n            <div>\n                <div style="font-weight: bold;">Sex 06/07/2018\n                    <span style="font-weight: normal;">Nizhny Novgorod</span> 11:00\n                </div>\n                <div>\n                    <span>\n                        <span style="font-weight: bold">Venc. Oitavas 1</span>\n                        <img src="../../assets/imgs/escudo_default_65x65.png" width="30" height="30">\n                    </span>\n                    <span>\n                        <img src="../../assets/imgs/escudo_default_65x65.png" width="30" height="30">\n                        <span style="font-weight: bold">Venc. Oitavas 2</span>\n                    </span>\n                </div>\n            </div>\n        </fieldset>\n        <fieldset style="border-radius: 4px; color: #666; border: 1px solid; width: 85%; margin-bottom: 5%" align="center">\n            <legend style="border-radius: 8px; color: #666; border: 1px solid">Quartas 2</legend>\n            <div>\n                <div style="font-weight: bold;">Sex 06/07/2018\n                    <span style="font-weight: normal;">Arena Kazan</span>15:00\n                </div>\n                <div>\n                    <span>\n                        <span style="font-weight: bold">Venc. Oitavas 3</span>\n                        <img src="../../assets/imgs/escudo_default_65x65.png" width="30" height="30">\n                    </span>\n                    <span>\n                        <img src="../../assets/imgs/escudo_default_65x65.png" width="30" height="30">\n                        <span style="font-weight: bold">Venc. Oitavas 4</span>\n                    </span>\n                </div>\n            </div>\n        </fieldset>\n        <fieldset style="border-radius: 4px; color: #666; border: 1px solid; width: 85%; margin-bottom: 5%" align="center">\n            <legend style="border-radius: 8px; color: #666; border: 1px solid">Quartas 3</legend>\n            <div>\n                <div style="font-weight: bold;">Sab 07/07/2018\n                    <span style="font-weight: normal;">Olímpico de Sochi</span> 15:00\n                </div>\n                <div>\n                    <span>\n                        <span style="font-weight: bold">Venc. Oitavas 5</span>\n                        <img src="../../assets/imgs/escudo_default_65x65.png" width="30" height="30">\n                    </span>\n                    <span>\n                        <img src="../../assets/imgs/escudo_default_65x65.png" width="30" height="30">\n                        <span style="font-weight: bold">Venc. Oitavas 6</span>\n                    </span>\n                </div>\n            </div>\n        </fieldset>\n        <fieldset style="border-radius: 4px; color: #666; border: 1px solid; width: 85%; margin-bottom: 5%" align="center">\n            <legend style="border-radius: 8px; color: #666; border: 1px solid">Quartas 4</legend>\n            <div>\n                <div style="font-weight: bold;">Sab 07/07/2018\n                    <span style="font-weight: normal;">Samarra</span> 11:00\n                </div>\n                <div>\n                    <span>\n                        <span style="font-weight: bold">Venc. Oitavas 7</span>\n                        <img src="../../assets/imgs/escudo_default_65x65.png" width="30" height="30">\n                    </span>\n                    <span>\n                        <img src="../../assets/imgs/escudo_default_65x65.png" width="30" height="30">\n                        <span style="font-weight: bold">Venc. Oitavas 8</span>\n                    </span>\n                </div>\n            </div>\n        </fieldset>\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Muril\Documents\ionic\myApp2\src\pages\quartas\quartas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], QuartasPage);
    return QuartasPage;
}());

//# sourceMappingURL=quartas.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SemiFinalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__third_lugar_third_lugar__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SemiFinalPage = /** @class */ (function () {
    function SemiFinalPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SemiFinalPage.prototype.proximaPagina = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__third_lugar_third_lugar__["a" /* ThirdLugarPage */]);
    };
    SemiFinalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-semi-final',template:/*ion-inline-start:"C:\Users\Muril\Documents\ionic\myApp2\src\pages\semi-final\semi-final.html"*/'<ion-header no-border>\n    <ion-navbar>\n        <ion-title>Semifinal</ion-title>\n\n        <ion-buttons end>\n            <button ion-button clear (click)="proximaPagina()">\n                <ion-icon name="md-arrow-forward"></ion-icon>\n            </button>\n        </ion-buttons>\n\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <div align="center">\n        <fieldset style="border-radius: 4px; color: #666; border: 1px solid; width: 85%; margin-bottom: 5%" align="center">\n            <legend style="border-radius: 8px; color: #666; border: 1px solid">Semifinal 1</legend>\n            <div>\n                <div style="font-weight: bold;">Ter 10/07/2018\n                    <span style="font-weight: normal;">São Petersburgo</span> 15:00\n                </div>\n                <div>\n                    <span>\n                        <span style="font-weight: bold">Venc. Quartas 1</span>\n                        <img src="../../assets/imgs/escudo_default_65x65.png" width="30" height="30">\n                    </span>\n                    <span>\n                        <img src="../../assets/imgs/escudo_default_65x65.png" width="30" height="30">\n                        <span style="font-weight: bold">Venc. Quartas 2</span>\n                    </span>\n                </div>\n            </div>\n        </fieldset>\n        <fieldset style="border-radius: 4px; color: #666; border: 1px solid; width: 85%; margin-bottom: 5%" align="center">\n            <legend style="border-radius: 8px; color: #666; border: 1px solid">Semifinal 2</legend>\n            <div>\n                <div style="font-weight: bold;">Qua 11/07/2018\n                    <span style="font-weight: normal;">Olímpico Lujniki</span>15:00\n                </div>\n                <div>\n                    <span>\n                        <span style="font-weight: bold">Venc. Quartas 3</span>\n                        <img src="../../assets/imgs/escudo_default_65x65.png" width="30" height="30">\n                    </span>\n                    <span>\n                        <img src="../../assets/imgs/escudo_default_65x65.png" width="30" height="30">\n                        <span style="font-weight: bold">Venc. Quartas 4</span>\n                    </span>\n                </div>\n            </div>\n        </fieldset>\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Muril\Documents\ionic\myApp2\src\pages\semi-final\semi-final.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], SemiFinalPage);
    return SemiFinalPage;
}());

//# sourceMappingURL=semi-final.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThirdLugarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__final_final__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ThirdLugarPage = /** @class */ (function () {
    function ThirdLugarPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ThirdLugarPage.prototype.proximaPagina = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__final_final__["a" /* FinalPage */]);
    };
    ThirdLugarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-third-lugar',template:/*ion-inline-start:"C:\Users\Muril\Documents\ionic\myApp2\src\pages\third-lugar\third-lugar.html"*/'<ion-header no-border>\n    <ion-navbar>\n\n        <ion-title>Disputa do 3º Lugar</ion-title>\n\n        <ion-buttons end>\n            <button ion-button clear (click)="proximaPagina()">\n                <ion-icon name="md-arrow-forward"></ion-icon>\n            </button>\n        </ion-buttons>\n\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <div align="center">\n        <fieldset style="border-radius: 4px; color: #666; border: 1px solid; width: 86%; margin-bottom: 5%" align="center">\n            <legend style="border-radius: 8px; color: #666; border: 1px solid">Disputa do 3º Lugar</legend>\n            <div>\n                <div style="font-weight: bold;">Sab 14/07/2018\n                    <span style="font-weight: normal;">São Petersburgo</span> 11:00\n                </div>\n                <div>\n                    <span>\n                        <span style="font-weight: bold">Perd. Semifinal 1</span>\n                        <img src="../../assets/imgs/escudo_default_65x65.png" width="30" height="30">\n                    </span>\n                    <span>\n                        <img src="../../assets/imgs/escudo_default_65x65.png" width="30" height="30">\n                        <span style="font-weight: bold">Perd. Semifinal 2</span>\n                    </span>\n                </div>\n            </div>\n        </fieldset>\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Muril\Documents\ionic\myApp2\src\pages\third-lugar\third-lugar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ThirdLugarPage);
    return ThirdLugarPage;
}());

//# sourceMappingURL=third-lugar.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FasesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__oitavas_oitavas__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FasesPage = /** @class */ (function () {
    function FasesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.selectedSegment = "1";
        this.slideGrupos = [
            { titulo: 'Grupo A' },
            { titulo: 'Grupo B' },
            { titulo: 'Grupo C' },
            { titulo: 'Grupo D' },
            { titulo: 'Grupo E' },
            { titulo: 'Grupo F' },
            { titulo: 'Grupo G' },
            { titulo: 'Grupo H' }
        ];
        this.slideRodadas = [
            { id: "1", titulo: 'dado1' },
            { id: "2", titulo: 'dado2' },
            { id: "3", titulo: 'dado3' }
        ];
    }
    FasesPage.prototype.proximaPagina = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__oitavas_oitavas__["a" /* OitavasPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('mySlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Slides */])
    ], FasesPage.prototype, "slider", void 0);
    FasesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fases',template:/*ion-inline-start:"C:\Users\Muril\Documents\ionic\myApp2\src\pages\fases\fases.html"*/'<ion-header no-border>\n\n    <ion-navbar>\n\n        <ion-title>Fase de Grupos</ion-title>\n\n\n\n        <ion-buttons end>\n\n            <button ion-button clear (click)="proximaPagina()">\n\n                <ion-icon name="md-arrow-forward"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content id="main">\n\n    <ion-slides>\n\n        <ion-slide *ngFor="let slideGrupo of slideGrupos">\n\n            <ion-grid id="conteudo">\n\n                <ion-row id="grupo">\n\n                    <table id="tabela" width="100%">\n\n                        <thead>\n\n                            <tr class="placar-jogo-informacoes-local">\n\n                                <th colspan="12">\n\n                                    <h2 id="titulo">{{ slideGrupo.titulo }}</h2>\n\n                                </th>\n\n                            </tr>\n\n                            <tr class="placar-jogo-informacoes-local" style="color: #666">\n\n                                <th colspan="2" class="selecoes">POS.</th>\n\n                                <th>P</th>\n\n                                <th>J</th>\n\n                                <th>V</th>\n\n                                <th>E</th>\n\n                                <th>D</th>\n\n                                <th>GP</th>\n\n                                <th>GC</th>\n\n                                <th>SG</th>\n\n                                <th>%</th>\n\n                                <th>JOG.</th>\n\n                            </tr>\n\n                        </thead>\n\n                        <tbody class="placar-jogo-informacoes">\n\n                            <tr>\n\n                                <td>\n\n                                    <strong>1</strong>\n\n                                </td>\n\n                                <td class="selecoes">\n\n                                    <strong>ARA</strong>\n\n                                </td>\n\n                                <td bgcolor="#F5EED5" class="placar-jogo-informacoes-local">0</td>\n\n                                <td class="placar-jogo-informacoes-local">0</td>\n\n                                <td bgcolor="#F5EED5" class="placar-jogo-informacoes-local">0</td>\n\n                                <td class="placar-jogo-informacoes-local">0</td>\n\n                                <td bgcolor="#F5EED5" class="placar-jogo-informacoes-local">0</td>\n\n                                <td class="placar-jogo-informacoes-local">0</td>\n\n                                <td bgcolor="#F5EED5" class="placar-jogo-informacoes-local">0</td>\n\n                                <td class="placar-jogo-informacoes-local">0</td>\n\n                                <td bgcolor="#F5EED5" class="placar-jogo-informacoes-local">0.0</td>\n\n                                <td class="placar-jogo-informacoes-local"></td>\n\n                            </tr>\n\n                            <tr>\n\n                                <td>\n\n                                    <strong>1</strong>\n\n                                </td>\n\n                                <td class="selecoes">\n\n                                    <strong>EGI</strong>\n\n                                </td>\n\n                                <td bgcolor="#F5EED5" class="placar-jogo-informacoes-local">0</td>\n\n                                <td class="placar-jogo-informacoes-local">0</td>\n\n                                <td bgcolor="#F5EED5" class="placar-jogo-informacoes-local">0</td>\n\n                                <td class="placar-jogo-informacoes-local">0</td>\n\n                                <td bgcolor="#F5EED5" class="placar-jogo-informacoes-local">0</td>\n\n                                <td class="placar-jogo-informacoes-local">0</td>\n\n                                <td bgcolor="#F5EED5" class="placar-jogo-informacoes-local">0</td>\n\n                                <td class="placar-jogo-informacoes-local">0</td>\n\n                                <td bgcolor="#F5EED5" class="placar-jogo-informacoes-local">0.0</td>\n\n                                <td class="placar-jogo-informacoes-local"></td>\n\n                            </tr>\n\n                            <tr>\n\n                                <td>\n\n                                    <strong>1</strong>\n\n                                </td>\n\n                                <td class="selecoes">\n\n                                    <strong>RUS</strong>\n\n                                </td>\n\n                                <td bgcolor="#F5EED5" class="placar-jogo-informacoes-local">0</td>\n\n                                <td class="placar-jogo-informacoes-local">0</td>\n\n                                <td bgcolor="#F5EED5" class="placar-jogo-informacoes-local">0</td>\n\n                                <td class="placar-jogo-informacoes-local">0</td>\n\n                                <td bgcolor="#F5EED5" class="placar-jogo-informacoes-local">0</td>\n\n                                <td class="placar-jogo-informacoes-local">0</td>\n\n                                <td bgcolor="#F5EED5" class="placar-jogo-informacoes-local">0</td>\n\n                                <td class="placar-jogo-informacoes-local">0</td>\n\n                                <td bgcolor="#F5EED5" class="placar-jogo-informacoes-local">0.0</td>\n\n                                <td class="placar-jogo-informacoes-local"></td>\n\n                            </tr>\n\n                            <tr>\n\n                                <td>\n\n                                    <strong>1</strong>\n\n                                </td>\n\n                                <td class="selecoes">\n\n                                    <strong>URU</strong>\n\n                                </td>\n\n                                <td bgcolor="#F5EED5" class="placar-jogo-informacoes-local">0</td>\n\n                                <td class="placar-jogo-informacoes-local">0</td>\n\n                                <td bgcolor="#F5EED5" class="placar-jogo-informacoes-local">0</td>\n\n                                <td class="placar-jogo-informacoes-local">0</td>\n\n                                <td bgcolor="#F5EED5" class="placar-jogo-informacoes-local">0</td>\n\n                                <td class="placar-jogo-informacoes-local">0</td>\n\n                                <td bgcolor="#F5EED5" class="placar-jogo-informacoes-local">0</td>\n\n                                <td class="placar-jogo-informacoes-local">0</td>\n\n                                <td bgcolor="#F5EED5" class="placar-jogo-informacoes-local">0.0</td>\n\n                                <td class="placar-jogo-informacoes-local"></td>\n\n                            </tr>\n\n                        </tbody>\n\n                    </table>\n\n                </ion-row>\n\n                <ion-row id="rodadaGrupo">\n\n\n\n                    <h2 id="jogos" class="placar-jogo-informacoes-local">Jogos</h2>\n\n\n\n                    <ion-card id="cardRodadas">\n\n                        <ion-card-header id="headerCard">\n\n                            <ion-segment [(ngModel)]="guia" color="cinza">\n\n                                <ion-segment-button value="1">\n\n                                    1ª Rodada\n\n                                </ion-segment-button>\n\n                                <ion-segment-button value="2">\n\n                                    2ª Rodada\n\n                                </ion-segment-button>\n\n                                <ion-segment-button value="3">\n\n                                    3ª Rodada\n\n                                </ion-segment-button>\n\n                            </ion-segment>\n\n                        </ion-card-header>\n\n\n\n                        <ion-card-content no-padding>\n\n                            <ion-slides [ngSwitch]="guia">\n\n                                <ion-slide *ngSwitchCase="\'1\'">\n\n                                    <table id="tabela2" class="placar-jogo-informacoes">\n\n                                        <tr style="border-top: 1pt solid">\n\n                                            <td colspan="2" style="padding: 2%">Dia e Data </td>\n\n                                            <td colspan="1" class="placar-jogo-informacoes-local">Local</td>\n\n                                            <td colspan="2">Horas</td>\n\n                                        </tr>\n\n\n\n                                        <tr class="linhaTab" style="border-bottom: 1pt solid">\n\n                                            <td class="placar-jogo-informacoes-local" style="font-size:25px;">RUS</td>\n\n                                            <td>band</td>\n\n                                            <td align="center" class="placar-jogo-informacoes-local">x</td>\n\n                                            <td>band</td>\n\n                                            <td class="placar-jogo-informacoes-local" style="font-size:25px;">ARU</td>\n\n                                        </tr>\n\n                                        <tr>\n\n                                            <td colspan="2" style="padding: 2%">Dia e Data </td>\n\n                                            <td colspan="1" class="placar-jogo-informacoes-local">Local</td>\n\n                                            <td colspan="2">Horas</td>\n\n                                        </tr>\n\n                                        <tr class="linhaTab" style="border-bottom: 1pt solid">\n\n                                            <td class="placar-jogo-informacoes-local" style="font-size:25px;">RUS</td>\n\n                                            <td>band</td>\n\n                                            <td align="center" class="placar-jogo-informacoes-local">x</td>\n\n                                            <td>band</td>\n\n                                            <td class="placar-jogo-informacoes-local" style="font-size:25px;">ARU</td>\n\n                                        </tr>\n\n\n\n                                    </table>\n\n                                </ion-slide>\n\n                                <ion-slide *ngSwitchCase="\'2\'">\n\n                                    <table id="tabela2" class="placar-jogo-informacoes">\n\n                                        <tr style="border-top: 1pt solid">\n\n                                            <td colspan="2" style="padding: 2%">Dia e Data </td>\n\n                                            <td colspan="1" class="placar-jogo-informacoes-local">Local</td>\n\n                                            <td colspan="2">Horas</td>\n\n                                        </tr>\n\n\n\n                                        <tr class="linhaTab" style="border-bottom: 1pt solid">\n\n                                            <td class="placar-jogo-informacoes-local" style="font-size:25px;">RUS</td>\n\n                                            <td>band</td>\n\n                                            <td align="center" class="placar-jogo-informacoes-local">x</td>\n\n                                            <td>band</td>\n\n                                            <td class="placar-jogo-informacoes-local" style="font-size:25px;">ARU</td>\n\n                                        </tr>\n\n                                        <tr>\n\n                                            <td colspan="2" style="padding: 2%">Dia e Data </td>\n\n                                            <td colspan="1" class="placar-jogo-informacoes-local">Local</td>\n\n                                            <td colspan="2">Horas</td>\n\n                                        </tr>\n\n                                        <tr class="linhaTab" style="border-bottom: 1pt solid">\n\n                                            <td class="placar-jogo-informacoes-local" style="font-size:25px;">RUS</td>\n\n                                            <td>band</td>\n\n                                            <td align="center" class="placar-jogo-informacoes-local">x</td>\n\n                                            <td>band</td>\n\n                                            <td class="placar-jogo-informacoes-local" style="font-size:25px;">ARU</td>\n\n                                        </tr>\n\n\n\n                                    </table>\n\n                                </ion-slide>\n\n                                <ion-slide *ngSwitchCase="\'3\'">\n\n                                    <table id="tabela2" class="placar-jogo-informacoes">\n\n                                        <tr style="border-top: 1pt solid">\n\n                                            <td colspan="2" style="padding: 2%">Dia e Data </td>\n\n                                            <td colspan="1" class="placar-jogo-informacoes-local">Local</td>\n\n                                            <td colspan="2">Horas</td>\n\n                                        </tr>\n\n\n\n                                        <tr class="linhaTab" style="border-bottom: 1pt solid">\n\n                                            <td class="placar-jogo-informacoes-local" style="font-size:25px;">RUS</td>\n\n                                            <td>band</td>\n\n                                            <td align="center" class="placar-jogo-informacoes-local">x</td>\n\n                                            <td>band</td>\n\n                                            <td class="placar-jogo-informacoes-local" style="font-size:25px;">ARU</td>\n\n                                        </tr>\n\n                                        <tr>\n\n                                            <td colspan="2" style="padding: 2%">Dia e Data </td>\n\n                                            <td colspan="1" class="placar-jogo-informacoes-local">Local</td>\n\n                                            <td colspan="2">Horas</td>\n\n                                        </tr>\n\n                                        <tr class="linhaTab" style="border-bottom: 1pt solid">\n\n                                            <td class="placar-jogo-informacoes-local" style="font-size:25px;">RUS</td>\n\n                                            <td>band</td>\n\n                                            <td align="center" class="placar-jogo-informacoes-local">x</td>\n\n                                            <td>band</td>\n\n                                            <td class="placar-jogo-informacoes-local" style="font-size:25px;">ARU</td>\n\n                                        </tr>\n\n\n\n                                    </table>\n\n                                </ion-slide>\n\n                            </ion-slides>\n\n                        </ion-card-content>\n\n\n\n                    </ion-card>\n\n                </ion-row>\n\n            </ion-grid>\n\n        </ion-slide>\n\n    </ion-slides>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Muril\Documents\ionic\myApp2\src\pages\fases\fases.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], FasesPage);
    return FasesPage;
}());

//# sourceMappingURL=fases.js.map

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/fases/fases.module": [
		280,
		5
	],
	"../pages/final/final.module": [
		275,
		4
	],
	"../pages/oitavas/oitavas.module": [
		276,
		3
	],
	"../pages/quartas/quartas.module": [
		277,
		2
	],
	"../pages/semi-final/semi-final.module": [
		278,
		1
	],
	"../pages/third-lugar/third-lugar.module": [
		279,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fases_fases__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.proximaPagina = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__fases_fases__["a" /* FasesPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Muril\Documents\ionic\myApp2\src\pages\home\home.html"*/'<ion-header no-border>\n  <ion-navbar>\n    \n    <ion-title>\n      Menu\n    </ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <button ion-button (click)="proximaPagina()">\n      siga\n    </button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Muril\Documents\ionic\myApp2\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_fases_fases__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_oitavas_oitavas__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_quartas_quartas__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_semi_final_semi_final__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_third_lugar_third_lugar__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_final_final__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_fases_fases__["a" /* FasesPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_oitavas_oitavas__["a" /* OitavasPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_quartas_quartas__["a" /* QuartasPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_semi_final_semi_final__["a" /* SemiFinalPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_third_lugar_third_lugar__["a" /* ThirdLugarPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_final_final__["a" /* FinalPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/final/final.module#FinalPageModule', name: 'FinalPage', segment: 'final', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/oitavas/oitavas.module#OitavasPageModule', name: 'OitavasPage', segment: 'oitavas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/quartas/quartas.module#QuartasPageModule', name: 'QuartasPage', segment: 'quartas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/semi-final/semi-final.module#SemiFinalPageModule', name: 'SemiFinalPage', segment: 'semi-final', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/third-lugar/third-lugar.module#ThirdLugarPageModule', name: 'ThirdLugarPage', segment: 'third-lugar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fases/fases.module#FasesPageModule', name: 'FasesPage', segment: 'fases', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_fases_fases__["a" /* FasesPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_oitavas_oitavas__["a" /* OitavasPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_quartas_quartas__["a" /* QuartasPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_semi_final_semi_final__["a" /* SemiFinalPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_third_lugar_third_lugar__["a" /* ThirdLugarPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_final_final__["a" /* FinalPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Muril\Documents\ionic\myApp2\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Muril\Documents\ionic\myApp2\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FinalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FinalPage = /** @class */ (function () {
    function FinalPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FinalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FinalPage');
    };
    FinalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-final',template:/*ion-inline-start:"C:\Users\Muril\Documents\ionic\myApp2\src\pages\final\final.html"*/'<ion-header no-border>\n\n  <ion-navbar>\n    <ion-title>Final</ion-title>\n\n    <ion-buttons end>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div align="center">\n    <fieldset style="border-radius: 4px; color: #666; border: 1px solid; width: 88%; margin-bottom: 5%" align="center">\n      <legend style="border-radius: 8px; color: #666; border: 1px solid">Final</legend>\n      <div>\n        <div style="font-weight: bold;">Dom 15/07/2018\n          <span style="font-weight: normal;">Olímpico Lujniki</span> 12:00\n        </div>\n        <div>\n          <span>\n            <span style="font-weight: bold">Venc. Semifinal 1</span>\n            <img src="../../assets/imgs/escudo_default_65x65.png" width="30" height="30">\n          </span>\n          <span>\n            <img src="../../assets/imgs/escudo_default_65x65.png" width="30" height="30">\n            <span style="font-weight: bold">Venc. Semifinal 2</span>\n          </span>\n        </div>\n      </div>\n    </fieldset>\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Muril\Documents\ionic\myApp2\src\pages\final\final.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], FinalPage);
    return FinalPage;
}());

//# sourceMappingURL=final.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map