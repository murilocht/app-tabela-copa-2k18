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
        this.fieldsets = [
            { titulo: 'Oitavas 1', dia: 'Sab', data: '30/06/2018', local: 'Olímpico de Sochi', hora: '15:00', time1: '1º A', time2: '2º B' },
            { titulo: 'Oitavas 2', dia: 'Sab', data: '30/06/2018', local: 'Arena Kazan', hora: '11:00', time1: '1º C', time2: '2º D' },
            { titulo: 'Oitavas 3', dia: 'Seg', data: '02/07/2018', local: 'Samarra', hora: '11:00', time1: '1º E', time2: '2º F' },
            { titulo: 'Oitavas 4', dia: 'Seg', data: '02/07/2018', local: 'Rostov', hora: '15:00', time1: '1º G', time2: '2º H' },
            { titulo: 'Oitavas 1', dia: 'Dom', data: '01/07/2018', local: 'Olímpico Lujniki', hora: '11:00', time1: '1º B', time2: '2º A' },
            { titulo: 'Oitavas 2', dia: 'Dom', data: '01/07/2018', local: 'Nizhny Novgorod', hora: '15:00', time1: '1º D', time2: '2º C' },
            { titulo: 'Oitavas 3', dia: 'Ter', data: '03/07/2018', local: 'São Petersburgo', hora: '11:00', time1: '1º F', time2: '2º E' },
            { titulo: 'Oitavas 4', dia: 'Ter', data: '03/07/2018', local: 'Spartak', hora: '15:00', time1: '1º H', time2: '2º G' }
        ];
    }
    OitavasPage.prototype.proximaPagina = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__quartas_quartas__["a" /* QuartasPage */]);
    };
    OitavasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-oitavas',template:/*ion-inline-start:"C:\Users\Muril\Documents\ionic\myApp2\src\pages\oitavas\oitavas.html"*/'<ion-header no-border>\n    <ion-navbar>\n        <ion-title>Oitavas de Final</ion-title>\n\n        <ion-buttons end>\n            <button ion-button clear (click)="proximaPagina()">\n                <ion-icon name="md-arrow-forward"></ion-icon>\n            </button>\n        </ion-buttons>\n\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <div align="center">\n        <fieldset style="border-radius: 4px; color: #666; border: 1px solid; width: 86%; margin-top: 5%" align="center" *ngFor="let fieldset of fieldsets">\n            <legend style="border-radius: 8px; color: #666; border: 1px solid">{{ fieldset.titulo }}</legend>\n            <div>\n                <div style="font-weight: bold;">{{ fieldset.dia }} {{ fieldset.data }}\n                    <span style="font-weight: normal;">{{ fieldset.local }}</span> {{ fieldset.hora }}\n                </div>\n                <div>\n                    <span>\n                        <span style="font-weight: bold">{{ fieldset.time1 }}</span>\n                        <img src="../../assets/imgs/escudo_default_65x65.png" width="30" height="30">\n                    </span>\n                    <span>\n                        <img src="../../assets/imgs/escudo_default_65x65.png" width="30" height="30">\n                        <span style="font-weight: bold">{{ fieldset.time2 }}</span>\n                    </span>\n                </div>\n            </div>\n        </fieldset>\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Muril\Documents\ionic\myApp2\src\pages\oitavas\oitavas.html"*/,
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
        this.fieldsets = [
            { titulo: 'Quartas 1', dia: 'Sex', data: '06/07/2018', local: 'Nizhny Novgorod', hora: '11:00', time1: 'Venc. Oitavas 1', time2: 'Venc. Oitavas 2' },
            { titulo: 'Quartas 2', dia: 'Sex', data: '06/07/2018', local: 'Arena Kazan', hora: '15:00', time1: 'Venc. Oitavas 3', time2: 'Venc. Oitavas 4' },
            { titulo: 'Quartas 3', dia: 'Sab', data: '07/07/2018', local: 'Olímpico de Sochi', hora: '15:00', time1: 'Venc. Oitavas 5', time2: 'Venc. Oitavas 6' },
            { titulo: 'Quartas 4', dia: 'Sab', data: '07/07/2018', local: 'Samarra', hora: '11:00', time1: 'Venc. Oitavas 7', time2: 'Venc. Oitavas 8' }
        ];
    }
    QuartasPage.prototype.proximaPagina = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__semi_final_semi_final__["a" /* SemiFinalPage */]);
    };
    QuartasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-quartas',template:/*ion-inline-start:"C:\Users\Muril\Documents\ionic\myApp2\src\pages\quartas\quartas.html"*/'<ion-header no-border>\n    <ion-navbar>\n\n        <ion-title>Quartas de Final</ion-title>\n\n        <ion-buttons end>\n            <button ion-button clear (click)="proximaPagina()">\n                <ion-icon name="md-arrow-forward"></ion-icon>\n            </button>\n        </ion-buttons>\n\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <div align="center">\n        <fieldset style="border-radius: 4px; color: #666; border: 1px solid; width: 86%; margin-top: 5%" align="center" *ngFor="let fieldset of fieldsets">\n            <legend style="border-radius: 8px; color: #666; border: 1px solid">{{ fieldset.titulo }}</legend>\n            <div>\n                <div style="font-weight: bold;">{{ fieldset.dia }} {{ fieldset.data }}\n                    <span style="font-weight: normal;">{{ fieldset.local }}</span> {{ fieldset.hora }}\n                </div>\n                <div>\n                    <span>\n                        <span style="font-weight: bold">{{ fieldset.time1 }}</span>\n                        <img src="../../assets/imgs/escudo_default_65x65.png" width="30" height="30">\n                    </span>\n                    <span>\n                        <img src="../../assets/imgs/escudo_default_65x65.png" width="30" height="30">\n                        <span style="font-weight: bold">{{ fieldset.time2 }}</span>\n                    </span>\n                </div>\n            </div>\n        </fieldset>\n        \n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Muril\Documents\ionic\myApp2\src\pages\quartas\quartas.html"*/,
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
        this.fieldsets = [
            { titulo: 'Semifinal 1', dia: 'Ter', data: '10/07/2018', local: 'São Petersburgo', hora: '15:00', time1: 'Venc. Quartas 1', time2: 'Venc. Quartas 2' },
            { titulo: 'Semifinal 2', dia: 'Qua', data: '11/07/2018', local: 'Olímpico Lujniki', hora: '15:00', time1: 'Venc. Quartas 3', time2: 'Venc. Quartas 4' }
        ];
    }
    SemiFinalPage.prototype.proximaPagina = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__third_lugar_third_lugar__["a" /* ThirdLugarPage */]);
    };
    SemiFinalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-semi-final',template:/*ion-inline-start:"C:\Users\Muril\Documents\ionic\myApp2\src\pages\semi-final\semi-final.html"*/'<ion-header no-border>\n    <ion-navbar>\n        <ion-title>Semifinal</ion-title>\n\n        <ion-buttons end>\n            <button ion-button clear (click)="proximaPagina()">\n                <ion-icon name="md-arrow-forward"></ion-icon>\n            </button>\n        </ion-buttons>\n\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <div align="center">\n        <fieldset style="border-radius: 4px; color: #666; border: 1px solid; width: 85%; margin-top: 5%" align="center" *ngFor="let fieldset of fieldsets">\n            <legend style="border-radius: 8px; color: #666; border: 1px solid">{{ fieldset.titulo }}</legend>\n            <div>\n                <div style="font-weight: bold;">{{ fieldset.dia }} {{ fieldset.data }}\n                    <span style="font-weight: normal;">{{ fieldset.local }}</span> {{ fieldset.hora }}\n                </div>\n                <div>\n                    <span>\n                        <span style="font-weight: bold">{{ fieldset.time1 }}</span>\n                        <img src="../../assets/imgs/escudo_default_65x65.png" width="30" height="30">\n                    </span>\n                    <span>\n                        <img src="../../assets/imgs/escudo_default_65x65.png" width="30" height="30">\n                        <span style="font-weight: bold">{{ fieldset.time2 }}</span>\n                    </span>\n                </div>\n            </div>\n        </fieldset>\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Muril\Documents\ionic\myApp2\src\pages\semi-final\semi-final.html"*/,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__final_final__ = __webpack_require__(104);
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
        this.fieldsets = [
            { titulo: 'Disputa do 3º Lugar', dia: 'Sab', data: '14/07/2018', local: 'São Petersburgo', hora: '11:00', time1: 'Perd. Semifinal 1', time2: 'Perd. Semifinal 2' }
        ];
    }
    ThirdLugarPage.prototype.proximaPagina = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__final_final__["a" /* FinalPage */]);
    };
    ThirdLugarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-third-lugar',template:/*ion-inline-start:"C:\Users\Muril\Documents\ionic\myApp2\src\pages\third-lugar\third-lugar.html"*/'<ion-header no-border>\n    <ion-navbar>\n\n        <ion-title>Disputa do 3º Lugar</ion-title>\n\n        <ion-buttons end>\n            <button ion-button clear (click)="proximaPagina()">\n                <ion-icon name="md-arrow-forward"></ion-icon>\n            </button>\n        </ion-buttons>\n\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <div align="center">\n        <fieldset style="border-radius: 4px; color: #666; border: 1px solid; width: 86%; margin-top: 5%" align="center" *ngFor="let fieldset of fieldsets">\n            <legend style="border-radius: 8px; color: #666; border: 1px solid">{{ fieldset.titulo }}</legend>\n            <div>\n                <div style="font-weight: bold;">{{ fieldset.dia }} {{ fieldset.data }}\n                    <span style="font-weight: normal;">{{ fieldset.local }}</span> {{ fieldset.hora }}\n                </div>\n                <div>\n                    <span>\n                        <span style="font-weight: bold">{{ fieldset.time1 }}</span>\n                        <img src="../../assets/imgs/escudo_default_65x65.png" width="30" height="30">\n                    </span>\n                    <span>\n                        <img src="../../assets/imgs/escudo_default_65x65.png" width="30" height="30">\n                        <span style="font-weight: bold">{{ fieldset.time2 }}</span>\n                    </span>\n                </div>\n            </div>\n        </fieldset>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Muril\Documents\ionic\myApp2\src\pages\third-lugar\third-lugar.html"*/,
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


var FinalPage = /** @class */ (function () {
    function FinalPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fieldsets = [
            { titulo: 'Final', dia: 'Dom', data: '15/07/2018', local: 'Olímpico Lujniki', hora: '12:00', time1: 'Venc. Semifinal 1', time2: 'Venc. Semifinal 2' }
        ];
    }
    FinalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-final',template:/*ion-inline-start:"C:\Users\Muril\Documents\ionic\myApp2\src\pages\final\final.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <ion-title>Final</ion-title>\n    <ion-buttons end>\n\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <div align="center">\n    <fieldset style="border-radius: 4px; color: #666; border: 1px solid; width: 88%; margin-top: 5%" align="center" *ngFor="let fieldset of fieldsets">\n      <legend style="border-radius: 8px; color: #666; border: 1px solid">{{ fieldset.titulo }}</legend>\n      \n      <div>\n        <div style="font-weight: bold;">{{ fieldset.dia }} {{ fieldset.data }}\n          <span style="font-weight: normal;">{{ fieldset.local }}</span> {{ fieldset.hora }}\n        </div>\n        <div>\n          <span>\n            <span style="font-weight: bold">{{ fieldset.time1 }}</span>\n            <img src="../../assets/imgs/escudo_default_65x65.png" width="30" height="30">\n          </span>\n          <span>\n            <img src="../../assets/imgs/escudo_default_65x65.png" width="30" height="30">\n            <span style="font-weight: bold">{{ fieldset.time2 }}</span>\n          </span>\n        </div>\n     \n      </div>\n    </fieldset>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\Muril\Documents\ionic\myApp2\src\pages\final\final.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], FinalPage);
    return FinalPage;
}());

//# sourceMappingURL=final.js.map

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
		275,
		5
	],
	"../pages/final/final.module": [
		276,
		4
	],
	"../pages/oitavas/oitavas.module": [
		277,
		3
	],
	"../pages/quartas/quartas.module": [
		278,
		2
	],
	"../pages/semi-final/semi-final.module": [
		279,
		1
	],
	"../pages/third-lugar/third-lugar.module": [
		280,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fases_fases__ = __webpack_require__(99);
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
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object])
    ], HomePage);
    return HomePage;
    var _a;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_fases_fases__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_oitavas_oitavas__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_quartas_quartas__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_semi_final_semi_final__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_third_lugar_third_lugar__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_final_final__ = __webpack_require__(104);
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
                        { loadChildren: '../pages/fases/fases.module#FasesPageModule', name: 'FasesPage', segment: 'fases', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/final/final.module#FinalPageModule', name: 'FinalPage', segment: 'final', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/oitavas/oitavas.module#OitavasPageModule', name: 'OitavasPage', segment: 'oitavas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/quartas/quartas.module#QuartasPageModule', name: 'QuartasPage', segment: 'quartas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/semi-final/semi-final.module#SemiFinalPageModule', name: 'SemiFinalPage', segment: 'semi-final', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/third-lugar/third-lugar.module#ThirdLugarPageModule', name: 'ThirdLugarPage', segment: 'third-lugar', priority: 'low', defaultHistory: [] }
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
        this.guia = "1";
        this.slideGrupos = [
            { titulo: 'Grupo A', selecao1: 'ARA', selecao2: 'EGI', selecao3: 'RUS', selecao4: 'URU',
                dia1: 'Qui', data1: '14/06/2018', local1: 'Olímpico Lujniki', horas1: '12:00', time11: 'RUS', time12: 'ARA',
                dia12: 'Sex', data12: '15/06/2018', local12: 'Ecaterimburgo', horas12: '09:00', time121: 'EGI', time122: 'URU',
                dia2: 'Ter', data2: '19/06/2018', local2: 'São Petersburgo', horas2: '15:00', time21: 'RUS', time22: 'EGI',
                dia22: 'Qua', data22: '20/06/2018', local22: 'Rostov', horas22: '12:00', time221: 'URU', time222: 'ARA',
                dia3: 'Seg', data3: '25/06/2018', local3: 'Samarra', horas3: '11:00', time31: 'URU', time32: 'RUS',
                dia32: 'Seg', data32: '25/06/2018', local32: 'Volgogrado', horas32: '11:00', time321: 'ARA', time322: 'EGI' },
            { titulo: 'Grupo B', selecao1: 'ESP', selecao2: 'IRA', selecao3: 'MAR', selecao4: 'POR',
                dia1: '', data1: '', local1: '', horas1: '', time11: '', time12: '',
                dia12: '', data12: '', local12: '', horas12: '', time121: '', time122: '',
                dia2: '', data2: '', local2: '', horas2: '', time21: '', time22: '',
                dia22: '', data22: '', local22: '', horas22: '', time221: '', time222: '',
                dia3: '', data3: '', local3: '', horas3: '', time31: '', time32: '',
                dia32: '', data32: '', local32: '', horas32: '', time321: '', time322: '' },
            { titulo: 'Grupo C', selecao1: 'AUS', selecao2: 'DIN', selecao3: 'FRA', selecao4: 'PER',
                dia1: '', data1: '', local1: '', horas1: '', time11: '', time12: '',
                dia12: '', data12: '', local12: '', horas12: '', time121: '', time122: '',
                dia2: '', data2: '', local2: '', horas2: '', time21: '', time22: '',
                dia22: '', data22: '', local22: '', horas22: '', time221: '', time222: '',
                dia3: '', data3: '', local3: '', horas3: '', time31: '', time32: '',
                dia32: '', data32: '', local32: '', horas32: '', time321: '', time322: '' },
            { titulo: 'Grupo D', selecao1: 'ARG', selecao2: 'CRO', selecao3: 'ISL', selecao4: 'NIG',
                dia1: '', data1: '', local1: '', horas1: '', time11: '', time12: '',
                dia12: '', data12: '', local12: '', horas12: '', time121: '', time122: '',
                dia2: '', data2: '', local2: '', horas2: '', time21: '', time22: '',
                dia22: '', data22: '', local22: '', horas22: '', time221: '', time222: '',
                dia3: '', data3: '', local3: '', horas3: '', time31: '', time32: '',
                dia32: '', data32: '', local32: '', horas32: '', time321: '', time322: '' },
            { titulo: 'Grupo E', selecao1: 'BRA', selecao2: 'COS', selecao3: 'SER', selecao4: 'SUI',
                dia1: '', data1: '', local1: '', horas1: '', time11: '', time12: '',
                dia12: '', data12: '', local12: '', horas12: '', time121: '', time122: '',
                dia2: '', data2: '', local2: '', horas2: '', time21: '', time22: '',
                dia22: '', data22: '', local22: '', horas22: '', time221: '', time222: '',
                dia3: '', data3: '', local3: '', horas3: '', time31: '', time32: '',
                dia32: '', data32: '', local32: '', horas32: '', time321: '', time322: '' },
            { titulo: 'Grupo F', selecao1: 'ALE', selecao2: 'COR', selecao3: 'MEX', selecao4: 'SUE',
                dia1: '', data1: '', local1: '', horas1: '', time11: '', time12: '',
                dia12: '', data12: '', local12: '', horas12: '', time121: '', time122: '',
                dia2: '', data2: '', local2: '', horas2: '', time21: '', time22: '',
                dia22: '', data22: '', local22: '', horas22: '', time221: '', time222: '',
                dia3: '', data3: '', local3: '', horas3: '', time31: '', time32: '',
                dia32: '', data32: '', local32: '', horas32: '', time321: '', time322: '' },
            { titulo: 'Grupo G', selecao1: 'BEL', selecao2: 'ING', selecao3: 'PAN', selecao4: 'TUN',
                dia1: '', data1: '', local1: '', horas1: '', time11: '', time12: '',
                dia12: '', data12: '', local12: '', horas12: '', time121: '', time122: '',
                dia2: '', data2: '', local2: '', horas2: '', time21: '', time22: '',
                dia22: '', data22: '', local22: '', horas22: '', time221: '', time222: '',
                dia3: '', data3: '', local3: '', horas3: '', time31: '', time32: '',
                dia32: '', data32: '', local32: '', horas32: '', time321: '', time322: '' },
            { titulo: 'Grupo H', selecao1: 'COL', selecao2: 'JAP', selecao3: 'POL', selecao4: 'SEN',
                dia1: '', data1: '', local1: '', horas1: '', time11: '', time12: '',
                dia12: '', data12: '', local12: '', horas12: '', time121: '', time122: '',
                dia2: '', data2: '', local2: '', horas2: '', time21: '', time22: '',
                dia22: '', data22: '', local22: '', horas22: '', time221: '', time222: '',
                dia3: '', data3: '', local3: '', horas3: '', time31: '', time32: '',
                dia32: '', data32: '', local32: '', horas32: '', time321: '', time322: '' },
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
            selector: 'page-fases',template:/*ion-inline-start:"C:\Users\Muril\Documents\ionic\myApp2\src\pages\fases\fases.html"*/'<ion-header no-border>\n\n    <ion-navbar>\n\n        <ion-title>Fase de Grupos</ion-title>\n\n\n\n        <ion-buttons end>\n\n            <button ion-button clear (click)="proximaPagina()">\n\n                <ion-icon name="md-arrow-forward"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content id="main">\n\n    <ion-slides>\n\n        <ion-slide *ngFor="let slideGrupo of slideGrupos">\n\n            <ion-grid id="conteudo">\n\n                <ion-row id="grupo">\n\n                    <table id="tabela" align="center">\n\n                        <thead>\n\n                            <tr class="placar-jogo-informacoes-local">\n\n                                <th colspan="12">\n\n                                    <h2 id="titulo">{{ slideGrupo.titulo }}</h2>\n\n                                </th>\n\n                            </tr>\n\n                            <tr class="placar-jogo-informacoes-local" style="color: #666">\n\n                                <th colspan="2" class="selecoes">POS.</th>\n\n                                <th>P</th>\n\n                                <th>J</th>\n\n                                <th>V</th>\n\n                                <th>E</th>\n\n                                <th>D</th>\n\n                                <th>GP</th>\n\n                                <th>GC</th>\n\n                                <th>SG</th>\n\n                                <th>%</th>\n\n                                <th>JOG.</th>\n\n                            </tr>\n\n                        </thead>\n\n                        <tbody class="placar-jogo-informacoes">\n\n                            <tr>\n\n                                <td>\n\n                                    <strong>1</strong>\n\n                                </td>\n\n                                <td class="selecoes">\n\n                                    <strong>{{ slideGrupo.selecao1 }}</strong>\n\n                                </td>\n\n                                <td bgcolor="#F5EED5" class="placar-jogo-informacoes-local">0</td>\n\n                                <td class="placar-jogo-informacoes-local">0</td>\n\n                                <td bgcolor="#F5EED5" class="placar-jogo-informacoes-local">0</td>\n\n                                <td class="placar-jogo-informacoes-local">0</td>\n\n                                <td bgcolor="#F5EED5" class="placar-jogo-informacoes-local">0</td>\n\n                                <td class="placar-jogo-informacoes-local">0</td>\n\n                                <td bgcolor="#F5EED5" class="placar-jogo-informacoes-local">0</td>\n\n                                <td class="placar-jogo-informacoes-local">0</td>\n\n                                <td bgcolor="#F5EED5" class="placar-jogo-informacoes-local">0.0</td>\n\n                                <td class="placar-jogo-informacoes-local"></td>\n\n                            </tr>\n\n                            <tr>\n\n                                <td>\n\n                                    <strong>1</strong>\n\n                                </td>\n\n                                <td class="selecoes">\n\n                                    <strong>{{ slideGrupo.selecao2 }}</strong>\n\n                                </td>\n\n                                <td bgcolor="#F5EED5" class="placar-jogo-informacoes-local">0</td>\n\n                                <td class="placar-jogo-informacoes-local">0</td>\n\n                                <td bgcolor="#F5EED5" class="placar-jogo-informacoes-local">0</td>\n\n                                <td class="placar-jogo-informacoes-local">0</td>\n\n                                <td bgcolor="#F5EED5" class="placar-jogo-informacoes-local">0</td>\n\n                                <td class="placar-jogo-informacoes-local">0</td>\n\n                                <td bgcolor="#F5EED5" class="placar-jogo-informacoes-local">0</td>\n\n                                <td class="placar-jogo-informacoes-local">0</td>\n\n                                <td bgcolor="#F5EED5" class="placar-jogo-informacoes-local">0.0</td>\n\n                                <td class="placar-jogo-informacoes-local"></td>\n\n                            </tr>\n\n                            <tr>\n\n                                <td>\n\n                                    <strong>1</strong>\n\n                                </td>\n\n                                <td class="selecoes">\n\n                                    <strong>{{ slideGrupo.selecao3 }}</strong>\n\n                                </td>\n\n                                <td bgcolor="#F5EED5" class="placar-jogo-informacoes-local">0</td>\n\n                                <td class="placar-jogo-informacoes-local">0</td>\n\n                                <td bgcolor="#F5EED5" class="placar-jogo-informacoes-local">0</td>\n\n                                <td class="placar-jogo-informacoes-local">0</td>\n\n                                <td bgcolor="#F5EED5" class="placar-jogo-informacoes-local">0</td>\n\n                                <td class="placar-jogo-informacoes-local">0</td>\n\n                                <td bgcolor="#F5EED5" class="placar-jogo-informacoes-local">0</td>\n\n                                <td class="placar-jogo-informacoes-local">0</td>\n\n                                <td bgcolor="#F5EED5" class="placar-jogo-informacoes-local">0.0</td>\n\n                                <td class="placar-jogo-informacoes-local"></td>\n\n                            </tr>\n\n                            <tr>\n\n                                <td>\n\n                                    <strong>1</strong>\n\n                                </td>\n\n                                <td class="selecoes">\n\n                                    <strong>{{ slideGrupo.selecao4 }}</strong>\n\n                                </td>\n\n                                <td bgcolor="#F5EED5" class="placar-jogo-informacoes-local">0</td>\n\n                                <td class="placar-jogo-informacoes-local">0</td>\n\n                                <td bgcolor="#F5EED5" class="placar-jogo-informacoes-local">0</td>\n\n                                <td class="placar-jogo-informacoes-local">0</td>\n\n                                <td bgcolor="#F5EED5" class="placar-jogo-informacoes-local">0</td>\n\n                                <td class="placar-jogo-informacoes-local">0</td>\n\n                                <td bgcolor="#F5EED5" class="placar-jogo-informacoes-local">0</td>\n\n                                <td class="placar-jogo-informacoes-local">0</td>\n\n                                <td bgcolor="#F5EED5" class="placar-jogo-informacoes-local">0.0</td>\n\n                                <td class="placar-jogo-informacoes-local"></td>\n\n                            </tr>\n\n                        </tbody>\n\n                    </table>\n\n                </ion-row>\n\n                <ion-row id="rodadaGrupo">\n\n\n\n                    <h2 id="jogos" class="placar-jogo-informacoes-local">Jogos</h2>\n\n\n\n                    <ion-card id="cardRodadas">\n\n                        <ion-card-header id="headerCard">\n\n                            <ion-segment [(ngModel)]="guia" color="cinza">\n\n                                <ion-segment-button value="1">\n\n                                    1ª Rodada\n\n                                </ion-segment-button>\n\n                                <ion-segment-button value="2">\n\n                                    2ª Rodada\n\n                                </ion-segment-button>\n\n                                <ion-segment-button value="3">\n\n                                    3ª Rodada\n\n                                </ion-segment-button>\n\n                            </ion-segment>\n\n                        </ion-card-header>\n\n\n\n                        <ion-card-content no-padding>\n\n                            <ion-slides [ngSwitch]="guia">\n\n                                <ion-slide *ngSwitchCase="\'1\'">\n\n                                    <table id="tabela2" class="placar-jogo-informacoes">\n\n                                        <tr style="border-top: 1pt solid">\n\n                                            <td colspan="2" style="padding: 2%">{{ slideGrupo.dia1 }} {{ slideGrupo.data1 }} </td>\n\n                                            <td colspan="1" class="placar-jogo-informacoes-local">{{ slideGrupo.local1 }}</td>\n\n                                            <td colspan="2">{{ slideGrupo.horas1 }}</td>\n\n                                        </tr>\n\n\n\n                                        <tr class="linhaTab" style="border-bottom: 1pt solid">\n\n                                            <td class="placar-jogo-informacoes-local" style="font-size:25px;">{{ slideGrupo.time11 }}</td>\n\n                                            <td>band</td>\n\n                                            <td align="center" class="placar-jogo-informacoes-local">x</td>\n\n                                            <td>band</td>\n\n                                            <td class="placar-jogo-informacoes-local" style="font-size:25px;">{{ slideGrupo.time12 }}</td>\n\n                                        </tr>\n\n                                        <tr>\n\n                                            <td colspan="2" style="padding: 2%">{{ slideGrupo.dia12 }} {{ slideGrupo.data12 }} </td>\n\n                                            <td colspan="1" class="placar-jogo-informacoes-local">{{ slideGrupo.local12 }}</td>\n\n                                            <td colspan="2">{{ slideGrupo.horas12 }}</td>\n\n                                        </tr>\n\n                                        <tr class="linhaTab">\n\n                                            <td class="placar-jogo-informacoes-local" style="font-size:25px;">{{ slideGrupo.time121 }}</td>\n\n                                            <td>band</td>\n\n                                            <td align="center" class="placar-jogo-informacoes-local">x</td>\n\n                                            <td>band</td>\n\n                                            <td class="placar-jogo-informacoes-local" style="font-size:25px;">{{ slideGrupo.time122 }}</td>\n\n                                        </tr>\n\n\n\n                                    </table>\n\n                                </ion-slide>\n\n                                <ion-slide *ngSwitchCase="\'2\'">\n\n                                    <table id="tabela2" class="placar-jogo-informacoes">\n\n                                        <tr style="border-top: 1pt solid">\n\n                                            <td colspan="2" style="padding: 2%">{{ slideGrupo.dia2 }} {{ slideGrupo.data2 }} </td>\n\n                                            <td colspan="1" class="placar-jogo-informacoes-local">{{ slideGrupo.local2 }}</td>\n\n                                            <td colspan="2">{{ slideGrupo.horas2 }}</td>\n\n                                        </tr>\n\n\n\n                                        <tr class="linhaTab" style="border-bottom: 1pt solid">\n\n                                            <td class="placar-jogo-informacoes-local" style="font-size:25px;">{{ slideGrupo.time21 }}</td>\n\n                                            <td>band</td>\n\n                                            <td align="center" class="placar-jogo-informacoes-local">x</td>\n\n                                            <td>band</td>\n\n                                            <td class="placar-jogo-informacoes-local" style="font-size:25px;">{{ slideGrupo.time22 }}</td>\n\n                                        </tr>\n\n                                        <tr>\n\n                                            <td colspan="2" style="padding: 2%">{{ slideGrupo.dia22 }} {{ slideGrupo.data22 }} </td>\n\n                                            <td colspan="1" class="placar-jogo-informacoes-local">{{ slideGrupo.local22 }}</td>\n\n                                            <td colspan="2">{{ slideGrupo.horas22 }}</td>\n\n                                        </tr>\n\n                                        <tr class="linhaTab">\n\n                                            <td class="placar-jogo-informacoes-local" style="font-size:25px;">{{ slideGrupo.time221 }}</td>\n\n                                            <td>band</td>\n\n                                            <td align="center" class="placar-jogo-informacoes-local">x</td>\n\n                                            <td>band</td>\n\n                                            <td class="placar-jogo-informacoes-local" style="font-size:25px;">{{ slideGrupo.time222 }}</td>\n\n                                        </tr>\n\n\n\n                                    </table>\n\n                                </ion-slide>\n\n                                <ion-slide *ngSwitchCase="\'3\'">\n\n                                    <table id="tabela2" class="placar-jogo-informacoes">\n\n                                        <tr style="border-top: 1pt solid">\n\n                                            <td colspan="2" style="padding: 2%">{{ slideGrupo.dia3 }} {{ slideGrupo.data3 }} </td>\n\n                                            <td colspan="1" class="placar-jogo-informacoes-local">{{ slideGrupo.local3 }}</td>\n\n                                            <td colspan="2">{{ slideGrupo.horas3 }}</td>\n\n                                        </tr>\n\n\n\n                                        <tr class="linhaTab" style="border-bottom: 1pt solid">\n\n                                            <td class="placar-jogo-informacoes-local" style="font-size:25px;">{{ slideGrupo.time31 }}</td>\n\n                                            <td>band</td>\n\n                                            <td align="center" class="placar-jogo-informacoes-local">x</td>\n\n                                            <td>band</td>\n\n                                            <td class="placar-jogo-informacoes-local" style="font-size:25px;">{{ slideGrupo.time32 }}</td>\n\n                                        </tr>\n\n                                        <tr>\n\n                                            <td colspan="2" style="padding: 2%">{{ slideGrupo.dia32 }} {{ slideGrupo.data32 }} </td>\n\n                                            <td colspan="1" class="placar-jogo-informacoes-local">{{ slideGrupo.local32 }}</td>\n\n                                            <td colspan="2">{{ slideGrupo.horas32 }}</td>\n\n                                        </tr>\n\n                                        <tr class="linhaTab">\n\n                                            <td class="placar-jogo-informacoes-local" style="font-size:25px;">{{ slideGrupo.time321 }}</td>\n\n                                            <td>band</td>\n\n                                            <td align="center" class="placar-jogo-informacoes-local">x</td>\n\n                                            <td>band</td>\n\n                                            <td class="placar-jogo-informacoes-local" style="font-size:25px;">{{ slideGrupo.time322 }}</td>\n\n                                        </tr>\n\n\n\n                                    </table>\n\n                                </ion-slide>\n\n                            </ion-slides>\n\n                        </ion-card-content>\n\n\n\n                    </ion-card>\n\n                </ion-row>\n\n            </ion-grid>\n\n        </ion-slide>\n\n    </ion-slides>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Muril\Documents\ionic\myApp2\src\pages\fases\fases.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], FasesPage);
    return FasesPage;
}());

//# sourceMappingURL=fases.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map