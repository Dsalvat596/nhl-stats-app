(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _players_list_players_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./players-list/players-list.component */ "./src/app/players-list/players-list.component.ts");
/* harmony import */ var _player_detail_player_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player-detail/player-detail.component */ "./src/app/player-detail/player-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var appRoutes = [
    { path: '', redirectTo: '/teams', pathMatch: 'full' },
    { path: 'teams', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], children: [
            { path: ':id/roster', component: _players_list_players_list_component__WEBPACK_IMPORTED_MODULE_3__["PlayersListComponent"] },
        ] },
    { path: 'player/details/:playerId', component: _player_detail_player_detail_component__WEBPACK_IMPORTED_MODULE_4__["PlayerDetailComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'hockey-app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _players_list_players_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./players-list/players-list.component */ "./src/app/players-list/players-list.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _player_popup_player_popup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./player-popup/player-popup.component */ "./src/app/player-popup/player-popup.component.ts");
/* harmony import */ var _player_detail_player_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./player-detail/player-detail.component */ "./src/app/player-detail/player-detail.component.ts");
/* harmony import */ var _season_stats_season_stats_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./season-stats/season-stats.component */ "./src/app/season-stats/season-stats.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _players_list_players_list_component__WEBPACK_IMPORTED_MODULE_10__["PlayersListComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _player_popup_player_popup_component__WEBPACK_IMPORTED_MODULE_12__["PlayerPopupComponent"],
                _player_detail_player_detail_component__WEBPACK_IMPORTED_MODULE_13__["PlayerDetailComponent"],
                _season_stats_season_stats_component__WEBPACK_IMPORTED_MODULE_14__["SeasonStatsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"]
            ],
            providers: [],
            entryComponents: [_player_popup_player_popup_component__WEBPACK_IMPORTED_MODULE_12__["PlayerPopupComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\r\n    margin-bottom: 1px;\r\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light\">\n  <div class=\"container-fluid\"> <div class=\"navbar-header\"> \n    <a routerLink=\"/\" class=\"navbar-brand\">Hockey App</a>\n    </div>\n  </div>\n</nav>\n  \n   "

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\r\n    scroll-behavior: smooth;\r\n  }\r\n\r\n.logo-tabs {\r\n    width: 40px;\r\n    min-height: 30px;\r\n    margin-right: 9px;\r\n}\r\n\r\n/* ul {\r\n    display: grid;\r\n    grid-template-columns: 50% 50%;\r\n  } */\r\n\r\n.teams-list{\r\n    margin-left: 5px;\r\n}\r\n\r\n@media only screen and (max-width: 660px){\r\n  #team-name-tab {\r\n    display: none;\r\n  }\r\n  .teams-list {\r\n    align-content: center;\r\n  }\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\"> -->\n  <div name=\"top\"></div>\n    <div class=\"row\">\n      <div class=\"col-md-2 col-3 teams-list\">\n        <ul class=\"list-group row\">\n        <li class=\"list-group-item clearfix list-group-item-action\"\n        (click)=\"backToTop()\"\n         style=\"cursor: pointer;\" \n         *ngFor=\"let team of allTeams\"\n         routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\" \n         [routerLink]=\"['/teams', team.id, 'roster']\"\n         ><img class=\"logo-tabs\" src=\"src\\assets\\img\\logo\\{{team.id}}.png\"><span id=\"team-name-tab\">{{team.name}}</span></li>\n      </ul>\n      </div>\n      <div class=\"col-8\">\n        <div class=\"team-logo\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  </div>\n<!-- </div> -->"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_teams_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/teams.service */ "./src/app/services/teams.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(teamsService, router, route) {
        this.teamsService = teamsService;
        this.router = router;
        this.route = route;
        this.title = 'hockey-app';
        this.allTeams = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.teamsService.getTeams();
        this.teamsService.teamsUpdated.subscribe(function (data) {
            _this.allTeams = data.sort(function (a, b) {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
                return 0;
            });
        });
    };
    HomeComponent.prototype.backToTop = function () {
        window.scrollTo(1, 1);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_teams_service__WEBPACK_IMPORTED_MODULE_1__["TeamsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/models/player.ts":
/*!**********************************!*\
  !*** ./src/app/models/player.ts ***!
  \**********************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
var Player = /** @class */ (function () {
    function Player() {
    }
    return Player;
}());



/***/ }),

/***/ "./src/app/player-detail/player-detail.component.css":
/*!***********************************************************!*\
  !*** ./src/app/player-detail/player-detail.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (max-width: 660px){\r\n   div {\r\n       margin-left : 2px;\r\n   }\r\n}\r\n\r\np {\r\n    color: rgba(95, 94, 99, 0.726);\r\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif\r\n}\r\n\r\nimg.profile {\r\n    height: 100%;\r\n    width: 100%;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}\r\n\r\n.profile-box {\r\n    max-width: 255px;\r\n    max-height: 330px;\r\n    border: groove rgba(12, 12, 12, 0.397) 0.5px;\r\n    box-shadow: -4px 6px 16px #8888887a;\r\n    background-color: rgba(255, 255, 255, 0.336);\r\n}\r\n\r\n.rookie {\r\n    font-size: 14px;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif\r\n}\r\n\r\n.teamName {\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\n#small-team-logo {\r\n    max-width: 50px;\r\n}\r\n\r\n#small-team-logo:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n#small-flag {\r\n    max-width: 30px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n#playerNumber {\r\n    margin-left: 32px;\r\n    color: rgb(118, 118, 236);\r\n    font-family: fantasy\r\n}\r\n\r\n#playerName {\r\n    color: rgba(69, 70, 71, 0.726);\r\n    font-family: fantasy\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/player-detail/player-detail.component.html":
/*!************************************************************!*\
  !*** ./src/app/player-detail/player-detail.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ccontainer\">\n  <div class=\"row\">\n    <div class=\"col-md-2 spacing\"></div>\n    <div class=\"col-md-5\" *ngIf=\"thisPlayer\">\n      <h3 id=\"playerName\">{{ thisPlayer.fullName }} <img id=\"small-flag\" src=\"src\\assets\\img\\flag\\{{thisPlayer.nationality}}.png\"> <span id=\"playerNumber\">{{ thisPlayer.primaryNumber }}</span></h3>\n      <h5 id=\"team\">\n          <span><img id=\"small-team-logo\" src=\"src\\assets\\img\\logo\\{{thisPlayer.currentTeam.id}}.png\" (click)=\"navBackToTeam(thisPlayer.currentTeam.id)\"></span>\n         {{ thisPlayer.currentTeam.name }}\n          <span id=\"captain\" *ngIf=\"thisPlayer.captain\">(Captain)</span>\n          <span id=\"alternateCaptain\" *ngIf=\"thisPlayer.alternateCaptain\">Alt Captain</span>\n          <span class=\"rookie \"*ngIf=\"thisPlayer.rookie\" style=\"color: red; font-style: italic\">Rookie</span>\n      </h5>\n      <p>Position: {{thisPlayer.primaryPosition.name}}</p>\n      <p *ngIf=\"thisPlayer.primaryPosition.name !=='Goalie'\">Shoots: {{thisPlayer.shootsCatches}}</p>\n      <p *ngIf=\"thisPlayer.primaryPosition.name ==='Goalie'\">Catches: {{thisPlayer.shootsCatches}}</p>\n      <p>Height: {{thisPlayer.height}}</p>\n      <p>Weight: {{thisPlayer.weight}} lbs</p>\n      <p>Date of Birth: {{thisPlayer.birthDate | date}} ({{thisPlayer.currentAge}} years old)</p>\n      <p>Place of Birth: {{thisPlayer.birthCity}},\n          <span *ngIf=\"thisPlayer.nationality === 'USA' || thisPlayer.nationality === 'CAN'\"> {{thisPlayer.birthStateProvince}}</span>\n          <span *ngIf=\"thisPlayer.nationality !== 'USA' && thisPlayer.nationality !== 'CAN'\"> {{thisPlayer.birthCountry}}</span>\n        </p> \n    </div>\n    <div class=\"col-md-3 profile-box\" *ngIf=\"thisPlayer\">\n      <!-- <img class=\"profile\" src=\"src\\assets\\img\\profile\\{{thisPlayer.id}}.png\"  alt=\"missing-img\"> -->\n      <img class=\"profile\" #img src=\"src/assets/img/profile/{{thisPlayer.id}}.png\" (error)=\"img.src = 'src/assets/img/profile/profile.png'\">\n    </div>\n  </div>\n  <div class=\"row\" *ngIf=\"thisPlayer\">\n    <div class=\"col-md-2\"></div>\n    <div class=\"col-md-10\">\n      <hr>\n      <app-season-stats [player]=\"thisPlayer\"></app-season-stats>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/player-detail/player-detail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/player-detail/player-detail.component.ts ***!
  \**********************************************************/
/*! exports provided: PlayerDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerDetailComponent", function() { return PlayerDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_players_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/players.service */ "./src/app/services/players.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlayerDetailComponent = /** @class */ (function () {
    function PlayerDetailComponent(playersService, route, router) {
        this.playersService = playersService;
        this.route = route;
        this.router = router;
    }
    PlayerDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var playerId = this.route.snapshot.params['playerId'];
        this.playersService.getPlayerDetails(playerId);
        this.sub = this.playersService.selectedPlayerUpdated.subscribe(function (data) {
            _this.thisPlayer = data;
            console.log(_this.thisPlayer);
        });
    };
    PlayerDetailComponent.prototype.navBackToTeam = function (id) {
        this.router.navigateByUrl('/teams/' + id + '/roster');
    };
    PlayerDetailComponent.prototype.noProfile = function (element) {
        element.onerror = '';
        element.src = 'src/assets/img/profile/profile.png';
    };
    PlayerDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    PlayerDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-player-detail',
            template: __webpack_require__(/*! ./player-detail.component.html */ "./src/app/player-detail/player-detail.component.html"),
            styles: [__webpack_require__(/*! ./player-detail.component.css */ "./src/app/player-detail/player-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_services_players_service__WEBPACK_IMPORTED_MODULE_1__["PlayersService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PlayerDetailComponent);
    return PlayerDetailComponent;
}());



/***/ }),

/***/ "./src/app/player-popup/player-popup.component.css":
/*!*********************************************************!*\
  !*** ./src/app/player-popup/player-popup.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\r\n    margin: 4px\r\n}\r\n\r\np {\r\n    color: rgba(95, 94, 99, 0.726);\r\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif\r\n}\r\n\r\n#playerNumber {\r\n    float: right;\r\n    color: rgb(118, 118, 236);\r\n    font-family: fantasy\r\n}\r\n\r\n#playerName {\r\n    color: rgba(69, 70, 71, 0.726);\r\n    font-family: fantasy\r\n}\r\n\r\n#captain {\r\n    color: red;\r\n    font-family: fantasy;\r\n    margin-left: 6px;\r\n    /* font-size: 14px; */\r\n}\r\n\r\n#alternateCaptain {\r\n    color: blue;\r\n    font-family: fantasy;\r\n    margin-left: 6px;\r\n    /* font-size: 14px; */\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/player-popup/player-popup.component.html":
/*!**********************************************************!*\
  !*** ./src/app/player-popup/player-popup.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <h4 mat-dialog-title><span id=\"playerName\">{{thisPlayer.fullName}}</span> \n        <span id=\"captain\" *ngIf=\"thisPlayer.captain\">C</span>\n        <span id=\"alternateCaptain\" *ngIf=\"thisPlayer.alternateCaptain\">A</span>\n        <span id=\"playerNumber\"> #{{thisPlayer.primaryNumber}}</span></h4>\n      <img src=\"src\\assets\\img\\flag\\{{thisPlayer.nationality}}.png\">\n      <p *ngIf=\"thisPlayer.rookie\" style=\"color: red; font-style: italic\">Rookie</p>\n      <p>Age: {{thisPlayer.currentAge}}</p>\n      <p>Pos: {{thisPlayer.primaryPosition.name}}</p>\n      <p>Height: {{thisPlayer.height}} </p>\n      <p>Weight: {{thisPlayer.weight}} </p>\n      <mat-dialog-actions>\n        <button class=\"btn btn-info\" (click)=\"goToPlayerDetails(thisPlayer.id)\">See More Details\n        </button>\n        <button class=\"btn btn-danger\" mat-dialog-close style=\"font-weight: 800\">&times;</button>\n      </mat-dialog-actions>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/player-popup/player-popup.component.ts":
/*!********************************************************!*\
  !*** ./src/app/player-popup/player-popup.component.ts ***!
  \********************************************************/
/*! exports provided: PlayerPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerPopupComponent", function() { return PlayerPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var PlayerPopupComponent = /** @class */ (function () {
    function PlayerPopupComponent(dialogRef, data, route, router) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.route = route;
        this.router = router;
    }
    PlayerPopupComponent.prototype.ngOnInit = function () {
        this.thisPlayer = this.data;
    };
    PlayerPopupComponent.prototype.goToPlayerDetails = function (playerId) {
        this.router.navigate(['player/details/' + playerId]);
        this.dialogRef.close();
    };
    PlayerPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-player-popup',
            template: __webpack_require__(/*! ./player-popup.component.html */ "./src/app/player-popup/player-popup.component.html"),
            styles: [__webpack_require__(/*! ./player-popup.component.css */ "./src/app/player-popup/player-popup.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PlayerPopupComponent);
    return PlayerPopupComponent;
}());



/***/ }),

/***/ "./src/app/players-list/players-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/players-list/players-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".roster-player {\r\n    color: rgba(45, 45, 46, 0.726);\r\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif\r\n}\r\n\r\n.roster-player:hover {\r\n    color: red;\r\n    cursor: pointer;\r\n}\r\n\r\nimg {\r\n    max-width: 150px;\r\n    padding-bottom: 13px;\r\n}\r\n\r\n@media only screen and (max-width: 620px){\r\n  \r\n}"

/***/ }),

/***/ "./src/app/players-list/players-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/players-list/players-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-4\"></div>\n    <div class=\"col-md-4\">\n      <div class=\"team-logo\">\n        <img src=\"src\\assets\\img\\logo\\{{teamId}}.png\">\n      </div>\n    </div>\n    <div class=\"col-md-4\"></div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3 roster-player\" *ngFor=\"let player of teamPlayers\" (click)=\"getPlayerDetails(player)\" >\n      <p>{{ player.person.fullName }}</p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/players-list/players-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/players-list/players-list.component.ts ***!
  \********************************************************/
/*! exports provided: PlayersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayersListComponent", function() { return PlayersListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_players_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/players.service */ "./src/app/services/players.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _player_popup_player_popup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../player-popup/player-popup.component */ "./src/app/player-popup/player-popup.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_teams_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/teams.service */ "./src/app/services/teams.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PlayersListComponent = /** @class */ (function () {
    function PlayersListComponent(playersService, teamsService, route, router, dialog) {
        this.playersService = playersService;
        this.teamsService = teamsService;
        this.route = route;
        this.router = router;
        this.dialog = dialog;
        this.teamPlayers = [];
    }
    PlayersListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.teamId = +params.id;
            _this.playersService.getRoster(_this.teamId);
            _this.playersService.playersUpdated.subscribe(function (data) {
                _this.teamPlayers = data.sort(function (a, b) {
                    var aName = a.person.fullName.split(" ");
                    var bName = b.person.fullName.split(" ");
                    var aLast = aName[aName.length - 1];
                    var bLast = bName[bName.length - 1];
                    if (aLast < bLast) {
                        return -1;
                    }
                    if (aLast > bLast) {
                        return 1;
                    }
                    return 0;
                });
            });
        });
    };
    PlayersListComponent.prototype.getPlayerDetails = function (player) {
        var _this = this;
        var playerId = +player.person.id;
        this.playersService.getPlayerDetails(playerId);
        this.playersService.selectedPlayerUpdated
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
            .subscribe(function (data) {
            _this.selectedPlayer = data;
            var dialogRef = _this.dialog.open(_player_popup_player_popup_component__WEBPACK_IMPORTED_MODULE_4__["PlayerPopupComponent"], {
                data: _this.selectedPlayer
            });
            dialogRef.afterClosed()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
                .subscribe(function (result) {
                dialogRef = null;
            });
        });
    };
    PlayersListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-players-list',
            template: __webpack_require__(/*! ./players-list.component.html */ "./src/app/players-list/players-list.component.html"),
            styles: [__webpack_require__(/*! ./players-list.component.css */ "./src/app/players-list/players-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_players_service__WEBPACK_IMPORTED_MODULE_1__["PlayersService"], _services_teams_service__WEBPACK_IMPORTED_MODULE_6__["TeamsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], PlayersListComponent);
    return PlayersListComponent;
}());



/***/ }),

/***/ "./src/app/season-stats/season-stats.component.css":
/*!*********************************************************!*\
  !*** ./src/app/season-stats/season-stats.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\r\n    color: rgba(95, 94, 99, 0.726);\r\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif\r\n}\r\n\r\n.nostats {\r\n    min-height: 400px;\r\n}\r\n\r\n.stats {\r\n    min-height: 400px;\r\n}"

/***/ }),

/***/ "./src/app/season-stats/season-stats.component.html":
/*!**********************************************************!*\
  !*** ./src/app/season-stats/season-stats.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <h2>{{season}} Stats</h2> -->\n<!-- <button class='btn btn-danger' (click)=\"onSelectSeason('20172018')\">2018</button> -->\n<mat-form-field>\n<mat-select placeholder=\"select season\">\n    <mat-option *ngFor=\"let season of seasons\" [value]=\"season\" (click)=\"onSelectSeason(season)\">\n        {{season}}\n    </mat-option>\n</mat-select>\n</mat-form-field>\n<h5>Season: {{seasonFormatted}}</h5>\n<p class=\"nostats\" *ngIf=\"noStats\">Sorry, no NHL stats found for {{player.fullName}} for {{seasonFormatted}}</p>\n<div *ngIf=\"!noStats\">\n<div class=\"row stats\" *ngIf=\"player.primaryPosition.name!=='Goalie'\">\n  <div class=\"col-md-6\">\n      <p>Games played: {{currentYearStats?.games}}</p>\n      <p>Goals {{currentYearStats?.goals}}</p>\n      <p>Assists: {{currentYearStats?.assists}}</p>\n      <p>Total Points: {{currentYearStats?.points}}</p>\n      <p>Average TOI: {{currentYearStats?.timeOnIcePerGame}}</p>\n      <p>Points Per Game: {{currentYearStats?.points / currentYearStats?.games|number: '1.2-2'}}</p>\n      <p *ngIf=\"currentYearStats?.games >= 20\">Points Pace(82 games): {{currentYearStats?.points / currentYearStats?.games * 82|number: '1.0-0'}}</p>\n      <p *ngIf=\"currentYearStats?.games < 20\">Points Pace(82 games): N/A</p>\n  </div>\n  <div class=\"col-md-6\">\n      <p>Plus/Minus: {{currentYearStats?.plusMinus}} </p>\n      <p>PowerPlay Goals: {{currentYearStats?.powerPlayGoals}}</p>\n      <p>PowerPlay Points: {{currentYearStats?.powerPlayPoints}}</p>\n      <p>PIM: {{currentYearStats?.pim}}</p>\n      <p>Shots on Goal: {{currentYearStats?.shots}}</p>\n      <p>Shots Blocked: {{currentYearStats?.blocked}}</p>\n      <p>Hits: {{currentYearStats?.hits}}</p>\n  </div>\n</div>\n<div class=\"row stats\" *ngIf=\"player.primaryPosition.name==='Goalie'\">\n    <div class=\"col-md-6\">\n        <p>Starts: {{currentYearStats?.gamesStarted}}</p>\n        <p>Wins: {{currentYearStats?.wins}} </p>\n        <p>Losses: {{currentYearStats?.losses}} </p>\n        <p>OT Losses: {{currentYearStats?.ot}}</p>\n        <p>GAA: {{currentYearStats?.goalAgainstAverage | number: '1.2-2'}}</p>\n        <p>Save %: {{currentYearStats?.savePercentage |number: '0.3-3'}}</p>\n        <p>Shutouts: {{currentYearStats?.shutouts}}</p>\n    </div>\n    <div class=\"col-md-6\">\n        <p>Total Saves: {{currentYearStats?.saves}}</p>\n        <p>ES Saves: {{currentYearStats?.evenSaves}}</p>\n        <p>ES Shots Faced: {{currentYearStats?.evenShots}}</p>\n        <p>ES Save%: {{currentYearStats?.evenStrengthSavePercentage /100 |number: '0.3-3'}}</p>\n        <p>PP Saves: {{currentYearStats?.powerPlaySaves}}</p>\n        <p>PP Shots Faced: {{currentYearStats?.powerPlayShots}}</p>\n        <p>PP Save%: {{currentYearStats?.powerPlaySavePercentage /100 |number: '0.3-3'}} </p>\n    </div>\n\n</div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/season-stats/season-stats.component.ts":
/*!********************************************************!*\
  !*** ./src/app/season-stats/season-stats.component.ts ***!
  \********************************************************/
/*! exports provided: SeasonStatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeasonStatsComponent", function() { return SeasonStatsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_stats_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/stats.service */ "./src/app/services/stats.service.ts");
/* harmony import */ var _models_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/player */ "./src/app/models/player.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SeasonStatsComponent = /** @class */ (function () {
    function SeasonStatsComponent(statsService) {
        this.statsService = statsService;
        // seasonUnf: string;
        this.noStats = false;
        this.seasons = ['2018-2019', '2017-2018', '2016-2017', '2015-2016', '2014-2015', '2013-2014', '2012-2013', '2011-2012', '2010-2011', '2009-2010', '2008-2009'];
    }
    SeasonStatsComponent.prototype.ngOnInit = function () {
        // this.statsService.getCurrentSeasonStats(this.player.id);
        // this.sub = this.statsService.statsUpdated.subscribe((data)=>{
        //   this.season = data[0].season;
        //   this.currentYearStats = data[0].stat;
        // })
        // this.seasonFormatted = this.seasons[0];
        // let seasonUnf = this.seasonFormatted.replace("-", "");
        this.onSelectSeason(this.seasons[0]);
    };
    SeasonStatsComponent.prototype.onSelectSeason = function (season) {
        var _this = this;
        this.seasonFormatted = season;
        var seasonUnf = this.seasonFormatted.replace("-", "");
        this.statsService.getSelectSeasonStats(this.player.id, seasonUnf);
        this.sub = this.statsService.statsUpdated.subscribe(function (data) {
            if (data.length < 1) {
                _this.noStats = true;
                _this.seasonFormatted = season;
            }
            else if (data.length >= 1) {
                _this.noStats = false;
                _this.seasonFormatted = season;
                _this.currentYearStats = data[0].stat;
            }
        });
    };
    SeasonStatsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_player__WEBPACK_IMPORTED_MODULE_2__["Player"])
    ], SeasonStatsComponent.prototype, "player", void 0);
    SeasonStatsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-season-stats',
            template: __webpack_require__(/*! ./season-stats.component.html */ "./src/app/season-stats/season-stats.component.html"),
            styles: [__webpack_require__(/*! ./season-stats.component.css */ "./src/app/season-stats/season-stats.component.css")]
        }),
        __metadata("design:paramtypes", [_services_stats_service__WEBPACK_IMPORTED_MODULE_1__["StatsService"]])
    ], SeasonStatsComponent);
    return SeasonStatsComponent;
}());



/***/ }),

/***/ "./src/app/services/players.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/players.service.ts ***!
  \*********************************************/
/*! exports provided: PlayersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayersService", function() { return PlayersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlayersService = /** @class */ (function () {
    function PlayersService(http) {
        this.http = http;
        this.teamPlayers = [];
        this.playersSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.playersUpdated = this.playersSubject.asObservable();
        this.selectedPlayerSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.selectedPlayerUpdated = this.selectedPlayerSubject.asObservable();
    }
    PlayersService.prototype.getRoster = function (teamId) {
        var _this = this;
        this.http.get('https://statsapi.web.nhl.com/api/v1/teams/' + teamId + '?expand=team.roster').subscribe(function (data) {
            var parsed = data['teams'];
            var roster = parsed[0].roster.roster;
            _this.teamPlayers = roster;
            _this.playersSubject.next(_this.teamPlayers);
        });
    };
    PlayersService.prototype.getPlayerDetails = function (playerId) {
        var _this = this;
        this.http.get('https://statsapi.web.nhl.com/api/v1/people/' + playerId).subscribe(function (data) {
            var parsedPlayer = data.people[0];
            _this.selectedPlayer = parsedPlayer;
            _this.selectedPlayerSubject.next(_this.selectedPlayer);
        });
    };
    PlayersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PlayersService);
    return PlayersService;
}());



/***/ }),

/***/ "./src/app/services/stats.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/stats.service.ts ***!
  \*******************************************/
/*! exports provided: StatsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsService", function() { return StatsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StatsService = /** @class */ (function () {
    function StatsService(http) {
        this.http = http;
        this.statsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.statsUpdated = this.statsSubject.asObservable();
    }
    StatsService.prototype.getCurrentSeasonStats = function (playerId) {
        var _this = this;
        this.http.get('https://statsapi.web.nhl.com/api/v1/people/' + playerId + '/stats?stats=statsSingleSeason&season=20182019')
            .subscribe(function (data) {
            var parsed = data['stats'][0].splits;
            _this.seasonStats = parsed;
            _this.statsSubject.next(_this.seasonStats);
        });
    };
    StatsService.prototype.getSelectSeasonStats = function (playerId, season) {
        var _this = this;
        this.http.get('https://statsapi.web.nhl.com/api/v1/people/' + playerId + '/stats?stats=statsSingleSeason&season=' + season)
            .subscribe(function (data) {
            var parsed = data['stats'][0].splits;
            _this.seasonStats = parsed;
            _this.statsSubject.next(_this.seasonStats);
        });
    };
    StatsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], StatsService);
    return StatsService;
}());



/***/ }),

/***/ "./src/app/services/teams.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/teams.service.ts ***!
  \*******************************************/
/*! exports provided: TeamsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsService", function() { return TeamsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TeamsService = /** @class */ (function () {
    function TeamsService(http) {
        this.http = http;
        this.allTeams = [];
        this.teamsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.teamsUpdated = this.teamsSubject.asObservable();
    }
    TeamsService.prototype.getTeams = function () {
        var _this = this;
        this.http.get('https://statsapi.web.nhl.com/api/v1/teams').subscribe(function (data) {
            var parsed = data['teams'];
            _this.allTeams = parsed;
            _this.teamsSubject.next(_this.allTeams);
        });
    };
    TeamsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TeamsService);
    return TeamsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\dsalv\Desktop\Portfolio\hockey-app\hockey-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map