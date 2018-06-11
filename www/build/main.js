webpackJsonp([9],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FasesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
            //esse é o grupo A, essas são as seleções 
            { titulo: 'Grupo A', selecao1: 'ARA', selecao2: 'EGI', selecao3: 'RUS', selecao4: 'URU',
                //dados da 1ª rodada, incluindo dia, quem vs quem, hora e tal...
                dia1: 'Qui', data1: '14/06/2018', local1: 'Olím. Lujniki', horas1: '12:00', time11: 'RUS', time12: 'ARA',
                dia12: 'Sex', data12: '15/06/2018', local12: 'Ecaterimburgo', horas12: '09:00', time121: 'EGI', time122: 'URU',
                //dados da 2ª rodada
                dia2: 'Ter', data2: '19/06/2018', local2: 'S.Petersburgo', horas2: '15:00', time21: 'RUS', time222: 'ARA',
                dia22: 'Qua', data22: '20/06/2018', local22: 'Rostov', horas22: '12:00', time22: 'EGI', time221: 'URU',
                //dados da 3ª rodada
                dia3: 'Seg', data3: '25/06/2018', local3: 'Samarra', horas3: '11:00', time31: 'URU', time32: 'RUS',
                dia32: 'Seg', data32: '25/06/2018', local32: 'Volgogrado', horas32: '11:00', time321: 'ARA', time322: 'EGI' },
            //grupo B
            { titulo: 'Grupo B', selecao1: 'IRA', selecao2: 'POR', selecao3: 'MAR', selecao4: 'ESP',
                dia1: 'Sex', data1: '15/06/2018', local1: 'S.Petersburgo', horas1: '12:00', time11: 'MAR', time12: 'IRA',
                dia12: 'Sex', data12: '15/06/2018', local12: 'Olím.Sochi ', horas12: '15:00', time121: 'POR', time122: 'ESP',
                dia2: 'Qua', data2: '20/06/2018', local2: 'Olím.Lujniki', horas2: '09:00', time22: 'POR', time21: 'MAR',
                dia22: 'Qua', data22: '20/06/2018', local22: 'Ar.Kazan', horas22: '15:00', time222: 'IRA', time221: 'ESP',
                dia3: 'Seg', data3: '25/06/2018', local3: 'Saransk', horas3: '15:00', time31: 'ESP', time32: 'MAR',
                dia32: 'Seg', data32: '25/06/2018', local32: 'Kaliningrado', horas32: '15:00', time321: 'IRA', time322: 'POR' },
            //grupo C 
            { titulo: 'Grupo C', selecao1: 'AUS', selecao2: 'PER', selecao3: 'FRA', selecao4: 'DIN',
                dia1: 'Sab', data1: '16/06/2018', local1: 'Ar.Kazan', horas1: '07:00', time11: 'FRA', time12: 'AUS',
                dia12: 'Sab', data12: '16/06/2018', local12: 'Saransk', horas12: '13:00', time121: 'PER', time122: 'DIN',
                dia2: 'Qui', data2: '21/06/2018', local2: 'Samara', horas2: '09:00', time21: 'FRA', time22: 'PER',
                dia22: 'Qui', data22: '21/06/2018', local22: 'Ecaterimburgo', horas22: '12:00', time221: 'DIN', time222: 'AUS',
                dia3: 'Ter', data3: '26/06/2018', local3: 'Olím.Lujniki', horas3: '11:00', time31: 'DIN', time32: 'FRA',
                dia32: 'Ter', data32: '26/06/2018', local32: 'Olím.Sochi', horas32: '11:00', time321: 'AUS', time322: 'PER' },
            //grupo D 
            { titulo: 'Grupo D', selecao1: 'ISL', selecao2: 'CRO', selecao3: 'ARG', selecao4: 'NIG',
                dia1: 'Sab', data1: '16/06/2018', local1: 'Spartak', horas1: '10:00', time11: 'ARG', time12: 'ISL',
                dia12: 'Sab', data12: '16/06/2018', local12: 'Kaliningrado', horas12: '16:00', time121: 'CRO', time122: 'NIG',
                dia2: 'Qui', data2: '21/06/2018', local2: 'N.Novgorod', horas2: '15:00', time222: 'ISL', time22: 'CRO',
                dia22: 'Qui', data22: '21/06/2018', local22: 'Volgogrado', horas22: '12:00', time221: 'NIG', time21: 'ARG',
                dia3: 'Ter', data3: '26/06/2018', local3: 'S.Petersburgo', horas3: '15:00', time31: 'NIG', time321: 'ISL',
                dia32: 'Ter', data32: '26/06/2018', local32: 'Rostov', horas32: '15:00', time32: 'ARG', time322: 'CRO' },
            //grupo E
            { titulo: 'Grupo E', selecao1: 'SER', selecao2: 'BRA', selecao3: 'COS', selecao4: 'SUI',
                dia1: 'Dom', data1: '17/06/2018', local1: 'Samara', horas1: '9:00', time11: 'COS', time12: 'SER',
                dia12: 'Dom', data12: '17/06/2018', local12: 'Rostov', horas12: '15:00', time121: 'BRA', time122: 'SUI',
                dia2: 'Sex', data2: '22/06/2018', local2: 'S.Petersburgo', horas2: '09:00', time21: 'COS', time22: 'BRA',
                dia22: 'Ser', data22: '22/06/2018', local22: 'Kaliningrado', horas22: '15:00', time221: 'SUI', time222: 'SER',
                dia3: 'Qua', data3: '27/06/2018', local3: 'Spartak', horas3: '15:00', time31: 'SUI', time32: 'COS',
                dia32: 'Qua', data32: '27/06/2018', local32: 'N.Novgorod', horas32: '15:00', time321: 'SER', time322: 'BRA' },
            //grupo F
            { titulo: 'Grupo F', selecao1: 'MEX', selecao2: 'SUE', selecao3: 'ALE', selecao4: 'COR',
                dia1: 'Dom', data1: '17/06/2018', local1: 'Olím.Lujniki', horas1: '12:00', time11: 'ALE', time12: 'MEX',
                dia12: 'Seg', data12: '18/06/2018', local12: 'N.Novgorod', horas12: '09:00', time121: 'SUE', time122: 'COR',
                dia2: 'Sab', data2: '23/06/2018', local2: 'Olím.Sochi', horas2: '15:00', time21: 'ALE', time22: 'SUE',
                dia22: 'Sab', data22: '23/06/2018', local22: 'Rostov', horas22: '12:00', time221: 'COR', time222: 'MEX',
                dia3: 'Qua', data3: '27/06/2018', local3: 'Rostov', horas3: '11:00', time31: 'COR', time32: 'ALE',
                dia32: 'Qua', data32: '27/06/2018', local32: 'Ecaterimburgo', horas32: '11:00', time321: 'MEX', time322: 'SUI' },
            //grupo G
            { titulo: 'Grupo G', selecao1: 'PAN', selecao2: 'TUN', selecao3: 'BEL', selecao4: 'ING',
                dia1: 'Seg', data1: '18/06/2018', local1: 'Olím.Sochi', horas1: '12:00', time11: 'BEL', time12: 'PAN',
                dia12: 'Seg', data12: '18/06/2018', local12: 'Volgograd', horas12: '15:00', time121: 'TUN', time122: 'ING',
                dia2: 'Sab', data2: '23/06/2018', local2: 'Spartak', horas2: '09:00', time21: 'BEL', time22: 'TUN',
                dia22: 'Dom', data22: '23/06/2018', local22: 'N.Novgorod', horas22: '09:00', time221: 'ING', time222: 'PAN',
                dia3: 'Qui', data3: '28/06/2018', local3: 'Kaliningrado', horas3: '15:00', time31: 'ING', time32: 'BEL',
                dia32: 'Qui', data32: '28/06/2018', local32: 'Saransk', horas32: '15:00', time321: 'PAN', time322: 'TUN' },
            ///oia a poi
            //grupo H
            { titulo: 'Grupo H', selecao1: 'JAP', selecao2: 'POL', selecao3: 'COL', selecao4: 'SEN',
                dia1: 'Ter', data1: '19/06/2018', local1: 'Saransk', horas1: '09:00', time11: 'COL', time12: 'JAP',
                dia12: 'Ter', data12: '19/06/2018', local12: 'Spartak', horas12: '12:00', time121: 'POL', time122: 'SEN',
                dia2: 'Dom', data2: '24/06/2018', local2: 'Ecaterimburgo', horas2: '12:00', time21: 'COL', time22: 'POL',
                dia22: 'Dom', data22: '24/06/2018', local22: 'Ar.Kazan', horas22: '15:00', time221: 'SEN', time222: 'JAP',
                dia3: 'Qui', data3: '28/06/2018', local3: 'Volgogrado', horas3: '11:00', time31: 'SEN', time32: 'COL',
                dia32: 'Qui', data32: '28/06/2018', local32: 'Samara', horas32: '11:00', time321: 'JAP', time322: 'POL' },
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
            selector: 'page-fases',template:/*ion-inline-start:"C:\Users\Muril\Documents\ionic\myApp2\src\pages\fases\fases.html"*/'<ion-header no-border>\n\n    <ion-navbar color="branco">\n\n        <ion-title>\n\n            <p>Fase de Grupos</p>\n\n        </ion-title>\n\n\n\n        <ion-buttons end>\n\n            <button ion-button clear (click)="proximaPagina()">\n\n                <ion-icon name="md-arrow-forward"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content id="main">\n\n    <ion-slides>\n\n        <ion-slide *ngFor="let slideGrupo of slideGrupos">\n\n            <div id="conteudo">\n\n                <ion-grid id="bloco-1">\n\n                    <ion-row>\n\n                        <ion-col style="font-size: 15pt">\n\n                            <div id="text">\n\n                                <span class=\'cut left\'></span>\n\n                                {{ slideGrupo.titulo }}\n\n                                <span class=\'cut right\'></span>\n\n                            </div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <ion-row style="background-color: rgb(193, 0, 13)">\n\n                        <ion-col>POS.</ion-col>\n\n                        <ion-col col-1>P</ion-col>\n\n                        <ion-col col-1>J</ion-col>\n\n                        <ion-col col-1>V</ion-col>\n\n                        <ion-col col-1>E</ion-col>\n\n                        <ion-col col-1>D</ion-col>\n\n                        <ion-col col-1>GP</ion-col>\n\n                        <ion-col col-1>GC</ion-col>\n\n                        <ion-col col-1>SG</ion-col>\n\n                        <ion-col col-1>%</ion-col>\n\n                        <ion-col>JOG.</ion-col>\n\n                    </ion-row>\n\n                    <ion-row style="background-color: #0074B1">\n\n                        <ion-col>{{ slideGrupo.selecao1 }}</ion-col>\n\n                        <ion-col col-1 >0</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0.0</ion-col>\n\n                        <ion-col>0</ion-col>\n\n                    </ion-row>\n\n                    <ion-row style="background-color: rgb(193, 0, 13)">\n\n                        <ion-col>{{ slideGrupo.selecao2 }}</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0.0</ion-col>\n\n                        <ion-col>0</ion-col>\n\n                    </ion-row>\n\n                    <ion-row style="background-color: #0074B1">\n\n                        <ion-col>{{ slideGrupo.selecao3 }}</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0.0</ion-col>\n\n                        <ion-col>0</ion-col>\n\n                    </ion-row>\n\n                    <ion-row style="background-color: rgb(193, 0, 13)">\n\n                        <ion-col>{{ slideGrupo.selecao4 }}</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0</ion-col>\n\n                        <ion-col col-1>0.0</ion-col>\n\n                        <ion-col>0</ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n                <ion-grid id="bloco-2">\n\n                    <p  style="padding-top: 2%; font-size: 17pt">Jogos</p>\n\n                    <ion-row id="row-times">\n\n                        <ion-col>\n\n                            <ion-card id="bloco-2-card">\n\n                                <ion-card-header>\n\n                                    <ion-segment [(ngModel)]="guia" color="light">\n\n                                        <ion-segment-button value="1" >\n\n                                            1ª Rodada\n\n                                        </ion-segment-button>\n\n                                        <ion-segment-button value="2">\n\n                                            2ª Rodada\n\n                                        </ion-segment-button>\n\n                                        <ion-segment-button value="3">\n\n                                            3ª Rodada\n\n                                        </ion-segment-button>\n\n                                    </ion-segment>\n\n                                </ion-card-header>\n\n                                <ion-card-content class="card-content-bg">\n\n                               \n\n                                    <div [ngSwitch]="guia" id="card-corpo">\n\n                                        <ion-list *ngSwitchCase="\'1\'">\n\n                                            <ion-grid>\n\n                                                <ion-row class="row-menor" style="background-color: #0074B1; opacity: 0.8">\n\n                                                    <ion-col>{{ slideGrupo.dia1 }}</ion-col>\n\n                                                    <ion-col>{{ slideGrupo.data1 }}</ion-col>\n\n                                                    <ion-col>{{ slideGrupo.local1 }}</ion-col>\n\n                                                    <ion-col>{{ slideGrupo.horas1 }}</ion-col>\n\n                                                </ion-row>\n\n                                                <ion-row id="row-maior">\n\n                                                    <ion-col style="font-size:15pt">\n\n                                                        <tr>\n\n                                                            <td>{{ slideGrupo.time11 }}</td>\n\n                                                            <td>\n\n                                                                <img src="../../assets/bandeiras/{{slideGrupo.selecao3}}.gif">\n\n                                                            </td>\n\n                                                        </tr>\n\n                                                    </ion-col>\n\n\n\n                                                    <ion-col class="col-vs">x</ion-col>\n\n                                                    <ion-col style="font-size:15pt">\n\n                                                        <tr>\n\n                                                            <td>\n\n                                                                <img src="../../assets/bandeiras/{{slideGrupo.selecao1}}.gif">\n\n                                                            </td>\n\n                                                            <td>{{ slideGrupo.time12 }}</td>\n\n\n\n                                                        </tr>\n\n                                                    </ion-col>\n\n                                                </ion-row>\n\n                                                <ion-row class="row-menor" style="background-color: #0074B1; opacity: 0.8">\n\n                                                    <ion-col>{{ slideGrupo.dia12 }}</ion-col>\n\n                                                    <ion-col>{{ slideGrupo.data12 }}</ion-col>\n\n                                                    <ion-col>{{ slideGrupo.local12 }}</ion-col>\n\n                                                    <ion-col>{{ slideGrupo.horas12 }}</ion-col>\n\n                                                </ion-row>\n\n                                                <ion-row id="row-maior">\n\n                                                    <ion-col style="font-size:15pt">\n\n                                                        <tr>\n\n\n\n                                                            <td>{{ slideGrupo.time121 }}</td>\n\n                                                            <td>\n\n                                                                <img src="../../assets/bandeiras/{{slideGrupo.selecao2}}.gif">\n\n                                                            </td>\n\n                                                        </tr>\n\n                                                    </ion-col>\n\n                                                    <ion-col class="col-vs">x</ion-col>\n\n                                                    <ion-col style="font-size:15pt">\n\n                                                        <tr>\n\n                                                            <td>\n\n                                                                <img src="../../assets/bandeiras/{{slideGrupo.selecao4}}.gif">\n\n                                                            </td>\n\n                                                            <td>{{ slideGrupo.time122 }}</td>\n\n\n\n                                                        </tr>\n\n                                                    </ion-col>\n\n                                                </ion-row>\n\n                                            </ion-grid>\n\n                                        </ion-list>\n\n\n\n                                        <ion-list *ngSwitchCase="\'2\'">\n\n                                            <ion-grid>\n\n                                                <ion-row class="row-menor" style="background-color: #0074B1; opacity: 0.8">\n\n                                                        <ion-col>{{ slideGrupo.dia2 }}</ion-col>\n\n                                                        <ion-col>{{ slideGrupo.data2 }}</ion-col>\n\n                                                        <ion-col>{{ slideGrupo.local2 }}</ion-col>\n\n                                                        <ion-col>{{ slideGrupo.horas2 }}</ion-col>\n\n                                                </ion-row>\n\n                                                <ion-row id="row-maior">\n\n                                                    <ion-col style="font-size:15pt">\n\n                                                        <tr>\n\n                                                            <td>{{ slideGrupo.time21 }}</td>\n\n                                                            <td>\n\n                                                                    <img src="../../assets/bandeiras/{{slideGrupo.selecao3}}.gif">\n\n                                                            </td>\n\n                                                        </tr>\n\n                                                    </ion-col>\n\n                                                    <ion-col class="col-vs">x</ion-col>\n\n                                                    <ion-col style="font-size:15pt">\n\n                                                        <tr>\n\n                                                            <td>\n\n                                                                    <img src="../../assets/bandeiras/{{slideGrupo.selecao2}}.gif">\n\n                                                            </td>\n\n                                                            <td>{{ slideGrupo.time22 }}</td>\n\n\n\n                                                        </tr>\n\n                                                    </ion-col>\n\n                                                </ion-row>\n\n                                                <ion-row class="row-menor" style="background-color: #0074B1; opacity: 0.8">\n\n                                                        <ion-col>{{ slideGrupo.dia22 }}</ion-col>\n\n                                                        <ion-col>{{ slideGrupo.data22 }}</ion-col>\n\n                                                        <ion-col>{{ slideGrupo.local22 }}</ion-col>\n\n                                                        <ion-col>{{ slideGrupo.horas22 }}</ion-col>\n\n                                                </ion-row>\n\n                                                <ion-row id="row-maior">\n\n                                                    <ion-col style="font-size:15pt">\n\n                                                        <tr>\n\n                                                            <td>{{ slideGrupo.time221 }}</td>\n\n                                                            <td>\n\n                                                                    <img src="../../assets/bandeiras/{{slideGrupo.selecao4}}.gif">\n\n                                                            </td>\n\n                                                        </tr>\n\n                                                    </ion-col>\n\n                                                    <ion-col class="col-vs">x</ion-col>\n\n                                                    <ion-col style="font-size:15pt">\n\n                                                        <tr>\n\n                                                            <td>\n\n                                                                    <img src="../../assets/bandeiras/{{slideGrupo.selecao1}}.gif">\n\n                                                            </td>\n\n                                                            <td>{{ slideGrupo.time222 }}</td>\n\n\n\n                                                        </tr>\n\n                                                    </ion-col>\n\n                                                </ion-row>\n\n                                            </ion-grid>\n\n                                        </ion-list>\n\n\n\n                                        <ion-list *ngSwitchCase="\'3\'">\n\n                                            <ion-grid>\n\n                                                <ion-row class="row-menor" style="background-color: #0074B1; opacity: 0.8">\n\n                                                        <ion-col>{{ slideGrupo.dia3 }}</ion-col>\n\n                                                        <ion-col>{{ slideGrupo.data3 }}</ion-col>\n\n                                                        <ion-col>{{ slideGrupo.local3 }}</ion-col>\n\n                                                        <ion-col>{{ slideGrupo.horas3 }}</ion-col>\n\n                                                </ion-row>\n\n                                                <ion-row id="row-maior">\n\n                                                    <ion-col style="font-size:15pt">\n\n                                                        <tr>\n\n                                                            <td>{{ slideGrupo.time31 }}</td>\n\n                                                            <td>\n\n                                                                    <img src="../../assets/bandeiras/{{slideGrupo.selecao4}}.gif">\n\n                                                            </td>\n\n                                                        </tr>\n\n                                                    </ion-col>\n\n                                                    <ion-col class="col-vs">x</ion-col>\n\n                                                    <ion-col style="font-size:15pt">\n\n                                                        <tr>\n\n                                                            <td>\n\n                                                                    <img src="../../assets/bandeiras/{{slideGrupo.selecao3}}.gif">\n\n                                                            </td>\n\n                                                            <td>{{ slideGrupo.time32 }}</td>\n\n\n\n                                                        </tr>\n\n                                                    </ion-col>\n\n                                                </ion-row>\n\n                                                <ion-row class="row-menor" style="background-color: #0074B1; opacity: 0.8">\n\n                                                        <ion-col>{{ slideGrupo.dia32 }}</ion-col>\n\n                                                        <ion-col>{{ slideGrupo.data32 }}</ion-col>\n\n                                                        <ion-col>{{ slideGrupo.local32 }}</ion-col>\n\n                                                        <ion-col>{{ slideGrupo.horas32 }}</ion-col>\n\n                                                </ion-row>\n\n                                                <ion-row id="row-maior">\n\n                                                    <ion-col style="font-size:15pt">\n\n                                                        <tr>\n\n                                                            <td>{{ slideGrupo.time321 }}</td>\n\n                                                            <td>\n\n                                                                <img src="../../assets/bandeiras/{{slideGrupo.selecao1}}.gif">\n\n                                                            </td>\n\n                                                        </tr>\n\n                                                    </ion-col>\n\n                                                    <ion-col class="col-vs">x </ion-col>\n\n                                                    <ion-col style="font-size:15pt">\n\n                                                        <tr>\n\n                                                            <td>\n\n                                                                <img src="../../assets/bandeiras/{{slideGrupo.selecao2}}.gif">\n\n                                                            </td>\n\n                                                            <td>{{ slideGrupo.time322 }}</td>\n\n\n\n                                                        </tr>\n\n                                                    </ion-col>\n\n                                                </ion-row>\n\n                                            </ion-grid>\n\n                                        </ion-list>\n\n                                    </div>\n\n                                </ion-card-content>\n\n                            </ion-card>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </div>\n\n        </ion-slide>\n\n    </ion-slides>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Muril\Documents\ionic\myApp2\src\pages\fases\fases.html"*/,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
            selector: 'page-oitavas',template:/*ion-inline-start:"C:\Users\Muril\Documents\ionic\myApp2\src\pages\oitavas\oitavas.html"*/'<ion-header no-border>\n    <ion-navbar>\n        <ion-title><p>Oitavas de Final</p></ion-title>\n\n        <ion-buttons end>\n            <button ion-button clear (click)="proximaPagina()">\n                <ion-icon name="md-arrow-forward"></ion-icon>\n            </button>\n        </ion-buttons>\n\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <div align="center">\n        <fieldset style="border-radius: 4px; border: 1px solid; width: 86%; margin-top: 5%; margin-bottom: 5%" align="center" *ngFor="let fieldset of fieldsets">\n            <legend style="border-radius: 8px; border: 1px solid">{{ fieldset.titulo }}</legend>\n            <div>\n                <div style="font-weight: bold;">{{ fieldset.dia }} {{ fieldset.data }}\n                    <span style="font-weight: normal;">{{ fieldset.local }}</span> {{ fieldset.hora }}\n                </div>\n                <div>\n                    <span>\n                        <span style="font-weight: bold">{{ fieldset.time1 }}</span>\n                        <img src="../../assets/imgs/escudo_default_65x65.png" width="30" height="30">\n                    </span>\n                    <span>\n                        <img src="../../assets/imgs/escudo_default_65x65.png" width="30" height="30">\n                        <span style="font-weight: bold">{{ fieldset.time2 }}</span>\n                    </span>\n                </div>\n            </div>\n        </fieldset>\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Muril\Documents\ionic\myApp2\src\pages\oitavas\oitavas.html"*/,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
            selector: 'page-quartas',template:/*ion-inline-start:"C:\Users\Muril\Documents\ionic\myApp2\src\pages\quartas\quartas.html"*/'<ion-header no-border>\n    <ion-navbar>\n\n        <ion-title><p>Quartas de Final</p></ion-title>\n\n        <ion-buttons end>\n            <button ion-button clear (click)="proximaPagina()">\n                <ion-icon name="md-arrow-forward"></ion-icon>\n            </button>\n        </ion-buttons>\n\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <div align="center">\n        <fieldset style="border-radius: 4px; border: 1px solid; width: 86%; margin-top: 5%" align="center" *ngFor="let fieldset of fieldsets">\n            <legend style="border-radius: 8px; border: 1px solid">{{ fieldset.titulo }}</legend>\n            <div>\n                <div style="font-weight: bold;">{{ fieldset.dia }} {{ fieldset.data }}\n                    <span style="font-weight: normal;">{{ fieldset.local }}</span> {{ fieldset.hora }}\n                </div>\n                <div>\n                    <span>\n                        <span style="font-weight: bold">{{ fieldset.time1 }}</span>\n                        <img src="../../assets/imgs/escudo_default_65x65.png" width="30" height="30">\n                    </span>\n                    <span>\n                        <img src="../../assets/imgs/escudo_default_65x65.png" width="30" height="30">\n                        <span style="font-weight: bold">{{ fieldset.time2 }}</span>\n                    </span>\n                </div>\n            </div>\n        </fieldset>\n        \n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Muril\Documents\ionic\myApp2\src\pages\quartas\quartas.html"*/,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
            selector: 'page-semi-final',template:/*ion-inline-start:"C:\Users\Muril\Documents\ionic\myApp2\src\pages\semi-final\semi-final.html"*/'<ion-header no-border>\n    <ion-navbar>\n        <ion-title><p>Semifinal</p></ion-title>\n\n        <ion-buttons end>\n            <button ion-button clear (click)="proximaPagina()">\n                <ion-icon name="md-arrow-forward"></ion-icon>\n            </button>\n        </ion-buttons>\n\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <div align="center">\n        <fieldset style="border-radius: 4px; border: 1px solid; width: 85%; margin-top: 5%" align="center" *ngFor="let fieldset of fieldsets">\n            <legend style="border-radius: 8px; border: 1px solid">{{ fieldset.titulo }}</legend>\n            <div>\n                <div style="font-weight: bold;">{{ fieldset.dia }} {{ fieldset.data }}\n                    <span style="font-weight: normal;">{{ fieldset.local }}</span> {{ fieldset.hora }}\n                </div>\n                <div>\n                    <span>\n                        <span style="font-weight: bold">{{ fieldset.time1 }}</span>\n                        <img src="../../assets/imgs/escudo_default_65x65.png" width="30" height="30">\n                    </span>\n                    <span>\n                        <img src="../../assets/imgs/escudo_default_65x65.png" width="30" height="30">\n                        <span style="font-weight: bold">{{ fieldset.time2 }}</span>\n                    </span>\n                </div>\n            </div>\n        </fieldset>\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Muril\Documents\ionic\myApp2\src\pages\semi-final\semi-final.html"*/,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
            selector: 'page-third-lugar',template:/*ion-inline-start:"C:\Users\Muril\Documents\ionic\myApp2\src\pages\third-lugar\third-lugar.html"*/'<ion-header no-border>\n    <ion-navbar>\n\n        <ion-title><p>Disputa do 3º Lugar</p></ion-title>\n\n        <ion-buttons end>\n            <button ion-button clear (click)="proximaPagina()">\n                <ion-icon name="md-arrow-forward"></ion-icon>\n            </button>\n        </ion-buttons>\n\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <div align="center">\n        <fieldset style="border-radius: 4px; border: 1px solid; width: 86%; margin-top: 5%" align="center" *ngFor="let fieldset of fieldsets">\n            <legend style="border-radius: 8px; border: 1px solid">{{ fieldset.titulo }}</legend>\n            <div>\n                <div style="font-weight: bold;">{{ fieldset.dia }} {{ fieldset.data }}\n                    <span style="font-weight: normal;">{{ fieldset.local }}</span> {{ fieldset.hora }}\n                </div>\n                <div>\n                    <span>\n                        <span style="font-weight: bold">{{ fieldset.time1 }}</span>\n                        <img src="../../assets/imgs/escudo_default_65x65.png" width="30" height="30">\n                    </span>\n                    <span>\n                        <img src="../../assets/imgs/escudo_default_65x65.png" width="30" height="30">\n                        <span style="font-weight: bold">{{ fieldset.time2 }}</span>\n                    </span>\n                </div>\n            </div>\n        </fieldset>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Muril\Documents\ionic\myApp2\src\pages\third-lugar\third-lugar.html"*/,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
            selector: 'page-final',template:/*ion-inline-start:"C:\Users\Muril\Documents\ionic\myApp2\src\pages\final\final.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <ion-title><p>Final</p></ion-title>\n    <ion-buttons end>\n      <button ion-button clear>\n          <ion-icon name="md-arrow-forward" class="iconNulo"></ion-icon>\n      </button>\n  </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <div align="center">\n    <fieldset style="border-radius: 4px; border: 1px solid; width: 88%; margin-top: 5%" align="center" *ngFor="let fieldset of fieldsets">\n      <legend style="border-radius: 8px; border: 1px solid">{{ fieldset.titulo }}</legend>\n      \n      <div>\n        <div style="font-weight: bold;">{{ fieldset.dia }} {{ fieldset.data }}\n          <span style="font-weight: normal;">{{ fieldset.local }}</span> {{ fieldset.hora }}\n        </div>\n        <div>\n          <span>\n            <span style="font-weight: bold">{{ fieldset.time1 }}</span>\n            <img src="../../assets/imgs/escudo_default_65x65.png" width="30" height="30">\n          </span>\n          <span>\n            <img src="../../assets/imgs/escudo_default_65x65.png" width="30" height="30">\n            <span style="font-weight: bold">{{ fieldset.time2 }}</span>\n          </span>\n        </div>\n     \n      </div>\n    </fieldset>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\Muril\Documents\ionic\myApp2\src\pages\final\final.html"*/,
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoriaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the HistoriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistoriaPage = /** @class */ (function () {
    function HistoriaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HistoriaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HistoriaPage');
    };
    HistoriaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-historia',template:/*ion-inline-start:"C:\Users\Muril\Documents\ionic\myApp2\src\pages\historia\historia.html"*/'<ion-header no-border>\n\n    <ion-navbar>\n\n      <ion-title><p>Seleções na Copa</p></ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button clear>\n\n            <ion-icon name="md-arrow-forward" class="iconNulo"></ion-icon>\n\n        </button>\n\n    </ion-buttons>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content padding>\n\n      <ion-card>\n\n          <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="../../assets/selecoes/uru.gif">\n\n            </ion-avatar>\n\n            <h2 class="feed_title">URUGUAI</h2>\n\n            <p class="feed_soul">Campeão da Copa de 1930</p>\n\n          </ion-item>\n\n        \n\n          <img src="../../assets/selecoes/Uruguai.png">\n\n        \n\n          <ion-card-content>\n\n            <p>A primeira Copa do Mundo, disputada em 1930, no Uruguai, surgiu do sonho do presidente da Fifa, na época uma entidade de apenas 24 anos, Jules Rimet, em realizar um torneio reunindo seleções de todo o planeta.</p>\n\n          </ion-card-content>\n\n        </ion-card>\n\n  \n\n        <ion-card>\n\n            <ion-item>\n\n              <ion-avatar item-start>\n\n                  <img src="../../assets/selecoes/ita.gif">\n\n              </ion-avatar>\n\n              <h2 class="feed_title">ITÁLIA</h2>\n\n              <p class="feed_soul">Campeã da Copa de 1934</p>\n\n            </ion-item>\n\n          \n\n            <img src="../../assets/selecoes/Italia.png">\n\n          \n\n            <ion-card-content>\n\n              <p>A segunda Copa do Mundo da história, disputada em 1934, na Itália, foi marcada pela política e pelo fascismo que ganhava força no território italiano. Através de seu líder, Benito Mussolini, o governo queria mostrar "a nova face do país" e, com esse propósito, o futebol era uma excelente ferramenta.</p>\n\n            </ion-card-content>\n\n          </ion-card>\n\n  \n\n        \n\n  </ion-content>'/*ion-inline-end:"C:\Users\Muril\Documents\ionic\myApp2\src\pages\historia\historia.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HistoriaPage);
    return HistoriaPage;
}());

//# sourceMappingURL=historia.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelecoesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the SelecoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SelecoesPage = /** @class */ (function () {
    function SelecoesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SelecoesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SelecoesPage');
    };
    SelecoesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-selecoes',template:/*ion-inline-start:"C:\Users\Muril\Documents\ionic\myApp2\src\pages\selecoes\selecoes.html"*/'<ion-header no-border>\n    <ion-navbar>\n      <ion-title><p>Seleções na Copa</p></ion-title>\n      <ion-buttons end>\n        <button ion-button clear>\n            <ion-icon name="md-arrow-forward" class="iconNulo"></ion-icon>\n        </button>\n    </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Muril\Documents\ionic\myApp2\src\pages\selecoes\selecoes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SelecoesPage);
    return SelecoesPage;
}());

//# sourceMappingURL=selecoes.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
            selector: 'page-splash',template:/*ion-inline-start:"C:\Users\Muril\Documents\ionic\myApp2\src\pages\splash\splash.html"*/'<ion-content>\n  \n <div>\n    <img style="padding-top: 20%" src="../../assets/kk[.png">\n</div>\n</ion-content>'/*ion-inline-end:"C:\Users\Muril\Documents\ionic\myApp2\src\pages\splash\splash.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], SplashPage);
    return SplashPage;
}());

//# sourceMappingURL=splash.js.map

/***/ }),

/***/ 120:
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
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/fases/fases.module": [
		284,
		8
	],
	"../pages/final/final.module": [
		285,
		7
	],
	"../pages/historia/historia.module": [
		286,
		6
	],
	"../pages/oitavas/oitavas.module": [
		287,
		5
	],
	"../pages/quartas/quartas.module": [
		288,
		4
	],
	"../pages/selecoes/selecoes.module": [
		289,
		3
	],
	"../pages/semi-final/semi-final.module": [
		290,
		2
	],
	"../pages/splash/splash.module": [
		291,
		1
	],
	"../pages/third-lugar/third-lugar.module": [
		292,
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
webpackAsyncContext.id = 162;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fases_fases__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selecoes_selecoes__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__historia_historia__ = __webpack_require__(106);
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
        this.PaginaSelecoes = function () {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__selecoes_selecoes__["a" /* SelecoesPage */]);
        };
        this.PaginaHistoria = function () {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__historia_historia__["a" /* HistoriaPage */]);
        };
    }
    HomePage.prototype.PaginaFases = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__fases_fases__["a" /* FasesPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Muril\Documents\ionic\myApp2\src\pages\home\home.html"*/'\n\n<ion-header no-border>\n\n  <ion-navbar>\n\n    \n\n    <ion-title>\n\n      <p>CUP WORLD 2018</p>\n\n    </ion-title>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n  <ion-content class="card-background-page">\n\n\n\n      <ion-card (click)="PaginaFases()">\n\n          <img src="../../assets/tabela.jpg"/>\n\n          <div class="card-title">Tabela de Classificação</div>\n\n          <div class="card-subtitle">Fase de Grupos, Oitavas, Quartas, Semifinal, 3º Lugar e Final</div>\n\n        </ion-card>\n\n\n\n      <ion-card (click)="PaginaSelecoes()">\n\n        <img src="../../assets/selecoes.jpg"/>\n\n        <div class="card-title">Seleções</div>\n\n        <div class="card-subtitle">Lista de seleções na Copa da Rússia 2018</div>\n\n      </ion-card>\n\n    \n\n      <ion-card (click)="PaginaHistoria()">\n\n        <img src="../../assets/historia.jpg"/>\n\n        <div class="card-title">História das Copas anteriores</div>\n\n      </ion-card>\n\n    \n\n      \n\n    \n\n    </ion-content>'/*ion-inline-end:"C:\Users\Muril\Documents\ionic\myApp2\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_fases_fases__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_oitavas_oitavas__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_quartas_quartas__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_semi_final_semi_final__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_third_lugar_third_lugar__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_final_final__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_splash_splash__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_historia_historia__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_selecoes_selecoes__ = __webpack_require__(107);
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
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_fases_fases__["a" /* FasesPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_oitavas_oitavas__["a" /* OitavasPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_quartas_quartas__["a" /* QuartasPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_semi_final_semi_final__["a" /* SemiFinalPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_third_lugar_third_lugar__["a" /* ThirdLugarPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_final_final__["a" /* FinalPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_splash_splash__["a" /* SplashPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_historia_historia__["a" /* HistoriaPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_selecoes_selecoes__["a" /* SelecoesPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/fases/fases.module#FasesPageModule', name: 'FasesPage', segment: 'fases', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/final/final.module#FinalPageModule', name: 'FinalPage', segment: 'final', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/historia/historia.module#HistoriaPageModule', name: 'HistoriaPage', segment: 'historia', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/oitavas/oitavas.module#OitavasPageModule', name: 'OitavasPage', segment: 'oitavas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/quartas/quartas.module#QuartasPageModule', name: 'QuartasPage', segment: 'quartas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/selecoes/selecoes.module#SelecoesPageModule', name: 'SelecoesPage', segment: 'selecoes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/semi-final/semi-final.module#SemiFinalPageModule', name: 'SemiFinalPage', segment: 'semi-final', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/splash/splash.module#SplashPageModule', name: 'SplashPage', segment: 'splash', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/third-lugar/third-lugar.module#ThirdLugarPageModule', name: 'ThirdLugarPage', segment: 'third-lugar', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_fases_fases__["a" /* FasesPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_oitavas_oitavas__["a" /* OitavasPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_quartas_quartas__["a" /* QuartasPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_semi_final_semi_final__["a" /* SemiFinalPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_third_lugar_third_lugar__["a" /* ThirdLugarPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_final_final__["a" /* FinalPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_splash_splash__["a" /* SplashPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_historia_historia__["a" /* HistoriaPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_selecoes_selecoes__["a" /* SelecoesPage */]
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

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_splash_splash__ = __webpack_require__(108);
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

},[206]);
//# sourceMappingURL=main.js.map