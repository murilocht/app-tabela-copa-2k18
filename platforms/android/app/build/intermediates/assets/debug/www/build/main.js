webpackJsonp([7],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FasesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__oitavas_oitavas__ = __webpack_require__(101);
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
                dia1: 'Qui', data1: '14/06/2018', local1: 'Olím. Lujniki', horas1: '12:00', time11: 'RUS', time12: 'ARA',
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
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */])
    ], FasesPage.prototype, "slider", void 0);
    FasesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fases',template:/*ion-inline-start:"C:\Users\Muril\Documents\ionic\myApp2\src\pages\fases\fases.html"*/'<ion-header no-border>\n\n    <ion-navbar>\n\n        <ion-title>Fase de Grupos</ion-title>\n\n\n\n        <ion-buttons end>\n\n            <button ion-button clear (click)="proximaPagina()">\n\n                <ion-icon name="md-arrow-forward"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content id="main">\n\n    <ion-slides>\n\n        <ion-slide *ngFor="let slideGrupo of slideGrupos">\n\n            <div id="conteudo">\n\n                <ion-grid id="bloco-1">\n\n                    <ion-row>\n\n                        <ion-col>{{ slideGrupo.titulo }}</ion-col>\n\n                    </ion-row>\n\n                    <ion-row>\n\n                        <ion-col>POS.</ion-col>\n\n                        <ion-col col-1>P</ion-col>\n\n                        <ion-col col-1>J</ion-col>\n\n                        <ion-col col-1>V</ion-col>\n\n                        <ion-col col-1>E</ion-col>\n\n                        <ion-col col-1>D</ion-col>\n\n                        <ion-col col-1>GP</ion-col>\n\n                        <ion-col col-1>GC</ion-col>\n\n                        <ion-col col-1>SG</ion-col>\n\n                        <ion-col col-1>%</ion-col>\n\n                        <ion-col>JOG.</ion-col>\n\n                    </ion-row>\n\n                    <ion-row>\n\n                        <ion-col>{{ slideGrupo.selecao1 }}</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0.0</ion-col>\n\n                        <ion-col>0</ion-col>\n\n                    </ion-row>\n\n                    <ion-row>\n\n                        <ion-col>{{ slideGrupo.selecao2 }}</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0.0</ion-col>\n\n                        <ion-col>0</ion-col>\n\n                    </ion-row>\n\n                    <ion-row>\n\n                        <ion-col>{{ slideGrupo.selecao3 }}</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0.0</ion-col>\n\n                        <ion-col>0</ion-col>\n\n                    </ion-row>\n\n                    <ion-row>\n\n                        <ion-col>{{ slideGrupo.selecao4 }}</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0.0</ion-col>\n\n                        <ion-col>0</ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n                <ion-grid id="bloco-2">\n\n                    <p>Jogos</p>\n\n                    <ion-row id="row-times">\n\n                        <ion-col>\n\n                            <ion-card id="bloco-2-card">\n\n                                <ion-card-header>\n\n                                    <ion-segment [(ngModel)]="guia">\n\n                                        <ion-segment-button value="1">\n\n                                            1ª Rodada\n\n                                        </ion-segment-button>\n\n                                        <ion-segment-button value="2">\n\n                                            2ª Rodada\n\n                                        </ion-segment-button>\n\n                                        <ion-segment-button value="3">\n\n                                            3ª Rodada\n\n                                        </ion-segment-button>\n\n                                    </ion-segment>\n\n                                </ion-card-header>\n\n                                <ion-card-content>\n\n                                    <div [ngSwitch]="guia" id="card-corpo">\n\n                                        <ion-list *ngSwitchCase="\'1\'">\n\n                                            <ion-grid>\n\n                                                <ion-row>\n\n                                                    <ion-col>{{ slideGrupo.dia1 }}</ion-col>\n\n                                                    <ion-col>{{ slideGrupo.data1 }}</ion-col>\n\n                                                    <ion-col>{{ slideGrupo.local1 }}</ion-col>\n\n                                                    <ion-col>{{ slideGrupo.horas1 }}</ion-col>\n\n                                                </ion-row>\n\n                                                <ion-row id="row-maior">\n\n                                                    <ion-col>{{ slideGrupo.time11 }}</ion-col>\n\n                                                    <ion-col>x</ion-col>\n\n                                                    <ion-col>{{ slideGrupo.time12 }}</ion-col>\n\n                                                </ion-row>\n\n                                                <ion-row>\n\n                                                        <ion-col>{{ slideGrupo.dia12 }}</ion-col>\n\n                                                        <ion-col>{{ slideGrupo.data12 }}</ion-col>\n\n                                                        <ion-col>{{ slideGrupo.local12 }}</ion-col>\n\n                                                        <ion-col>{{ slideGrupo.horas12 }}</ion-col>\n\n                                                </ion-row>\n\n                                                <ion-row id="row-maior">\n\n                                                    <ion-col>{{ slideGrupo.time121 }}</ion-col>\n\n                                                    <ion-col>x</ion-col>\n\n                                                    <ion-col>{{ slideGrupo.time122 }}</ion-col>\n\n                                                </ion-row>\n\n                                            </ion-grid>\n\n                                        </ion-list>\n\n\n\n                                        <ion-list *ngSwitchCase="\'2\'">\n\n                                            <ion-grid>\n\n                                                <ion-row>\n\n                                                    <ion-col>q1</ion-col>\n\n                                                    <ion-col>2</ion-col>\n\n                                                    <ion-col>3</ion-col>\n\n                                                    <ion-col>4</ion-col>\n\n                                                </ion-row>\n\n                                                <ion-row id="row-maior">\n\n                                                    <ion-col>1</ion-col>\n\n                                                    <ion-col>2</ion-col>\n\n                                                    <ion-col>3</ion-col>\n\n                                                </ion-row>\n\n                                                <ion-row>\n\n                                                    <ion-col>1</ion-col>\n\n                                                    <ion-col>2</ion-col>\n\n                                                    <ion-col>3</ion-col>\n\n                                                    <ion-col>4</ion-col>\n\n                                                </ion-row>\n\n                                                <ion-row id="row-maior">\n\n                                                    <ion-col>1</ion-col>\n\n                                                    <ion-col>2</ion-col>\n\n                                                    <ion-col>3</ion-col>\n\n                                                </ion-row>\n\n                                            </ion-grid>\n\n                                        </ion-list>\n\n\n\n                                        <ion-list *ngSwitchCase="\'3\'">\n\n                                            <ion-grid>\n\n                                                <ion-row>\n\n                                                    <ion-col>d1</ion-col>\n\n                                                    <ion-col>2</ion-col>\n\n                                                    <ion-col>3</ion-col>\n\n                                                    <ion-col>4</ion-col>\n\n                                                </ion-row>\n\n                                                <ion-row id="row-maior">\n\n                                                    <ion-col>1</ion-col>\n\n                                                    <ion-col>2</ion-col>\n\n                                                    <ion-col>3</ion-col>\n\n                                                </ion-row>\n\n                                                <ion-row>\n\n                                                    <ion-col>1</ion-col>\n\n                                                    <ion-col>2</ion-col>\n\n                                                    <ion-col>3</ion-col>\n\n                                                    <ion-col>4</ion-col>\n\n                                                </ion-row>\n\n                                                <ion-row id="row-maior">\n\n                                                    <ion-col>1</ion-col>\n\n                                                    <ion-col>2</ion-col>\n\n                                                    <ion-col>3</ion-col>\n\n                                                </ion-row>\n\n                                            </ion-grid>\n\n                                        </ion-list>\n\n                                    </div>\n\n                                </ion-card-content>\n\n                            </ion-card>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </div>\n\n        </ion-slide>\n\n    </ion-slides>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Muril\Documents\ionic\myApp2\src\pages\fases\fases.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], FasesPage);
    return FasesPage;
}());

//# sourceMappingURL=fases.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OitavasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quartas_quartas__ = __webpack_require__(102);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], OitavasPage);
    return OitavasPage;
}());

//# sourceMappingURL=oitavas.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuartasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__semi_final_semi_final__ = __webpack_require__(103);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], QuartasPage);
    return QuartasPage;
}());

//# sourceMappingURL=quartas.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SemiFinalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__third_lugar_third_lugar__ = __webpack_require__(104);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SemiFinalPage);
    return SemiFinalPage;
}());

//# sourceMappingURL=semi-final.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThirdLugarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__final_final__ = __webpack_require__(105);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ThirdLugarPage);
    return ThirdLugarPage;
}());

//# sourceMappingURL=third-lugar.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
            selector: 'page-final',template:/*ion-inline-start:"C:\Users\Muril\Documents\ionic\myApp2\src\pages\final\final.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <ion-title>Final</ion-title>\n    <ion-buttons end>\n      <button ion-button clear>\n          <ion-icon name="md-arrow-forward"></ion-icon>\n      </button>\n  </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <div align="center">\n    <fieldset style="border-radius: 4px; color: #666; border: 1px solid; width: 88%; margin-top: 5%" align="center" *ngFor="let fieldset of fieldsets">\n      <legend style="border-radius: 8px; color: #666; border: 1px solid">{{ fieldset.titulo }}</legend>\n      \n      <div>\n        <div style="font-weight: bold;">{{ fieldset.dia }} {{ fieldset.data }}\n          <span style="font-weight: normal;">{{ fieldset.local }}</span> {{ fieldset.hora }}\n        </div>\n        <div>\n          <span>\n            <span style="font-weight: bold">{{ fieldset.time1 }}</span>\n            <img src="../../assets/imgs/escudo_default_65x65.png" width="30" height="30">\n          </span>\n          <span>\n            <img src="../../assets/imgs/escudo_default_65x65.png" width="30" height="30">\n            <span style="font-weight: bold">{{ fieldset.time2 }}</span>\n          </span>\n        </div>\n     \n      </div>\n    </fieldset>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\Muril\Documents\ionic\myApp2\src\pages\final\final.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], FinalPage);
    return FinalPage;
}());

//# sourceMappingURL=final.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(77);
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
 * Generated class for the SplashPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SplashPage = /** @class */ (function () {
    function SplashPage(navCtrl, navParams, viewCtrl, splashScreen) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.splashScreen = splashScreen;
    }
    SplashPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.splashScreen.hide();
        setTimeout(function () {
            _this.viewCtrl.dismiss();
        }, 4000);
    };
    SplashPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-splash',template:/*ion-inline-start:"C:\Users\Muril\Documents\ionic\myApp2\src\pages\splash\splash.html"*/'<ion-content>\n \n  <svg id="bars" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.15 224.35">\n      <defs>\n          <style>.cls-1{fill:#dd238c;}.cls-2{fill:#ef4328;}.cls-3{fill:#7dd0df;}.cls-4{fill:#febf12;}.cls-5{fill:#282828;}</style>\n      </defs>\n      <title>jmlogo</title>\n      <rect class="cls-1" x="27.22" width="20.06" height="163.78"/>\n      <rect class="cls-2" y="4" width="20.06" height="163.78"/>\n      <rect class="cls-3" x="13.9" y="13.1" width="20.06" height="163.78"/>\n      <rect class="cls-4" x="43.1" y="7.45" width="20.06" height="163.78"/>\n      <path class="cls-5" d="M243.5,323a12,12,0,0,1-.5,3.43,8.88,8.88,0,0,1-1.63,3.1,8.24,8.24,0,0,1-3,2.26,10.8,10.8,0,0,1-4.58.86,9.63,9.63,0,0,1-6-1.82,8.48,8.48,0,0,1-3.07-5.47l4-.82a5.64,5.64,0,0,0,1.66,3.19,4.86,4.86,0,0,0,3.43,1.18,5.71,5.71,0,0,0,2.83-.62,4.53,4.53,0,0,0,1.7-1.63,7,7,0,0,0,.84-2.33,15.15,15.15,0,0,0,.24-2.71V297.82h4V323Z" transform="translate(-224.04 -108.31)"/>\n      <path class="cls-5" d="M252,297.82h6l11.52,26.64h0.1l11.62-26.64H287v34h-4V303.29h-0.1L270.72,331.8h-2.45l-12.19-28.51H256V331.8h-4v-34Z" transform="translate(-224.04 -108.31)"/>\n  </svg>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Muril\Documents\ionic\myApp2\src\pages\splash\splash.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], SplashPage);
    return SplashPage;
}());

//# sourceMappingURL=splash.js.map

/***/ }),

/***/ 116:
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
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/fases/fases.module": [
		276,
		6
	],
	"../pages/final/final.module": [
		277,
		5
	],
	"../pages/oitavas/oitavas.module": [
		278,
		4
	],
	"../pages/quartas/quartas.module": [
		279,
		3
	],
	"../pages/semi-final/semi-final.module": [
		280,
		2
	],
	"../pages/splash/splash.module": [
		281,
		1
	],
	"../pages/third-lugar/third-lugar.module": [
		282,
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
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fases_fases__ = __webpack_require__(100);
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
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Muril\Documents\ionic\myApp2\src\pages\home\home.html"*/'\n<ion-header no-border>\n  <ion-navbar>\n    \n    <ion-title>\n      Menu\n    </ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <button ion-button (click)="proximaPagina()">\n      siga\n    </button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Muril\Documents\ionic\myApp2\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_fases_fases__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_oitavas_oitavas__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_quartas_quartas__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_semi_final_semi_final__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_third_lugar_third_lugar__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_final_final__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_splash_splash__ = __webpack_require__(106);
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
                __WEBPACK_IMPORTED_MODULE_12__pages_final_final__["a" /* FinalPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_splash_splash__["a" /* SplashPage */]
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
                        { loadChildren: '../pages/splash/splash.module#SplashPageModule', name: 'SplashPage', segment: 'splash', priority: 'low', defaultHistory: [] },
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
                __WEBPACK_IMPORTED_MODULE_12__pages_final_final__["a" /* FinalPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_splash_splash__["a" /* SplashPage */]
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

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_splash_splash__ = __webpack_require__(106);
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
    function MyApp(platform, statusBar, splashScreen, modalCtrl) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            //splashScreen.hide();
            var splash = modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__pages_splash_splash__["a" /* SplashPage */]);
            splash.present();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Muril\Documents\ionic\myApp2\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Muril\Documents\ionic\myApp2\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map