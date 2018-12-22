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
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <router-outlet></router-outlet>\n</div>\n\n\n"

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
        this.title = 'frontend';
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/global.service */ "./src/app/services/global.service.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_18__["RegisterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_13__["FileUploadModule"],
            ],
            providers: [_services_global_service__WEBPACK_IMPORTED_MODULE_19__["GlobalService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n  max-width: 200px;\n}\n\n.example-header-image {\n\n  background-size: cover;\n}\n\n.example-card {\n\n  max-width: 400px;\n  margin-left: auto;\n  margin-right: auto;\n\n}\n\n.detail_image {\n  margin-left: auto;\n  margin-right: auto;\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7O0VBRUUsdUJBQXVCO0NBQ3hCOztBQUNEOztFQUVFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1COztDQUVwQjs7QUFDRDtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7O0NBRXBCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jYXJkIHtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbn1cblxuLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcblxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLmV4YW1wbGUtY2FyZCB7XG5cbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcblxufVxuLmRldGFpbF9pbWFnZSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG5cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Welcome {{ account.username }}\n</p>\n\n<button mat-ripple mat-raised-button (click)=\"logoutClicked()\"  id=\"logoutBtn\"\n    color=\"primary\">Logout</button><br>\n\n<div class=\"container\">\n  <h2>Your Cards:</h2>\n  <div *ngFor=\"let card of cards;\" (click)=\"cardClicked(card)\" class=\"cardClickable\">\n    <mat-card class=\"example-card\">\n        <mat-card-header>\n          <div mat-card-avatar class=\"example-header-image\"></div>\n            <mat-card-title>{{card.card_name}}</mat-card-title>\n              <mat-card-subtitle>{{card.categories}}</mat-card-subtitle>\n        </mat-card-header>\n        <img mat-card-image src=\"{{card.image_front}}\" alt=\"{{card.card_name}}\">\n      </mat-card>\n    <br>\n  </div>\n\n  <br>\n  <button mat-ripple mat-raised-button (click)=\"addCardClicked()\"\n    color=\"primary\">Add New</button>\n</div>\n<div class=\"container\">\n    <div *ngIf=\"selectedCard && !isAddEditMode\">\n        <h2>Details:</h2>\n        <h4>{{selectedCard.card_name}}</h4>\n        <h4>{{selectedCard.description}}</h4>\n        <h4>{{selectedCard.categories}}</h4>\n\n\n        <img  class=\"detail_image\" src=\"{{selectedCard.image_front}}\" alt=\"...\" />\n        <br>\n\n      <button mat-ripple mat-raised-button (click)=\"editCardClicked()\"\n    color=\"primary\">Edit Card</button>\n    <button style=\"margin-left:auto;\"mat-ripple mat-raised-button (click)=\"deleteCardClicked()\"\n    color=\"primary\">Remove Card</button>\n\n\n    </div>\n    <div *ngIf=\"isAddEditMode\">\n        <h2>\n            <span *ngIf=\"isEdit\">Edit</span>\n            <span *ngIf=\"!isEdit\">New</span>\n             Card:\n        </h2>\n        <form (ngSubmit)=\"submitCard()\" [formGroup]=\"cardInput\">\n            <div class=\"form-group\">\n              <mat-form-field class=\"example-full-width\">\n                  <input matInput placeholder=\"Title\" formControlName=\"card_name\">\n                  <mat-error *ngIf=\"cardInput.get('card_name').hasError('required')\">\n                    Title is <strong>required</strong>\n                  </mat-error>\n                </mat-form-field>\n\n            <br>\n              <mat-form-field class=\"example-full-width\">\n                <mat-select formControlName=\"categoryControl\">\n                  <mat-option [value]=\"category\" *ngFor=\"let category of categories\">\n                    {{category}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n\n            <br>\n              <mat-form-field class=\"example-full-width\">\n                <mat-select formControlName=\"companyControl\">\n                  <mat-option [value]=\"company\" *ngFor=\"let company of companies\">\n                    {{ company.company_name }}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n\n\n            <br>\n            <mat-form-field class=\"example-full-width\">\n                <textarea matInput placeholder=\"Description\" formControlName=\"description\">\n                  </textarea>\n                <mat-error *ngIf=\"cardInput.get('description').hasError('required')\">\n                  Description is <strong>required</strong>\n                </mat-error>\n              </mat-form-field>\n\n            <br>\n\n            <mat-form-field class=\"example-full-width\">\n                <textarea matInput placeholder=\"Tags\" formControlName=\"tags\">\n                  </textarea>\n                <mat-error *ngIf=\"cardInput.get('tags').hasError('required')\">\n                  Tags are <strong>required</strong>\n                </mat-error>\n              </mat-form-field>\n\n              </div>\n\n            <div class=\"form-group\">\n              <label for=\"image_front\">Upload card image</label>\n              <input type=\"file\" id=\"image_front\" (change)=\"onFileChange($event)\" #fileInput>\n              <button type=\"button\" class=\"btn btn-sm btn-default\" (click)=\"clearFile()\">clear file</button>\n            </div>\n\n          <button mat-ripple mat-raised-button type=\"submit\" [disabled]=\"cardInput.invalid || loading\"\n            color=\"primary\">Save</button><br>\n            <mat-spinner class=\"spinner\" *ngIf=\"loading\"></mat-spinner>\n\n        </form>\n    </div>\n</div>\n"

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
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_card_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/card.service */ "./src/app/services/card.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
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
    function HomeComponent(global, router, cardService, fb, snackBar) {
        this.global = global;
        this.router = router;
        this.cardService = cardService;
        this.fb = fb;
        this.snackBar = snackBar;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl;
        this.account = new _models_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.categories = ['Business', 'Discount', 'Flyer'];
        this.fileToUpload = null;
        this.imageUrl = "/static/images/default-image.png";
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__["FileUploader"]({ url: this.baseUrl + 'cards/newcard/', removeAfterUpload: false, autoUpload: true });
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userSub = this.global.user.subscribe(function (me) { return _this.account = me; });
        if (localStorage.getItem('token') && localStorage.getItem('account')) {
            this.global.me = JSON.parse(localStorage.getItem('account'));
            this.getCards();
            this.getCompany();
        }
        else {
            this.router.navigate(['/login']);
        }
        this.isAddEditMode = false;
        this.isEdit = false;
        this.cardInput = this.fb.group({
            card_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            categoryControl: ['Discount'],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            companyControl: [this.companies, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            image_front: null,
            tags: [this.tags, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
    };
    HomeComponent.prototype.getCompany = function () {
        var _this = this;
        this.cardService.getCompany().subscribe(function (response) {
            _this.companies = response;
        }, function (error) {
            _this.snackBar.open('Error getting Companies', '', { duration: 3000 });
        });
    };
    HomeComponent.prototype.getCards = function () {
        var _this = this;
        this.cardService.getCards().subscribe(function (response) {
            _this.cards = response;
        }, function (error) {
            _this.snackBar.open('Error getting Cards', '', { duration: 3000 });
        });
    };
    HomeComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            var file = event.target.files[0];
            reader.readAsDataURL(file);
            reader.onload = function () {
                _this.cardInput.get('image_front').setValue(reader.result.toString().split(',')[1]);
            };
        }
    };
    HomeComponent.prototype.submitCard = function () {
        var _this = this;
        if (this.isEdit) {
            this.cardService.editCard(this.cardInput.value, this.selectedCard.card_id).subscribe(function (response) {
                var cardIndx = _this.cards.map(function (e) { return e.id; }).indexOf(_this.selectedCard.card_id);
                if (cardIndx >= 0) {
                    _this.cards[cardIndx] = response;
                    _this.selectedCard = response;
                }
                _this.cardInput.reset();
                _this.isAddEditMode = false;
            }, function (error) {
                _this.snackBar.open('Error edit card', '', { duration: 3000 });
                console.log(error);
            });
        }
        else {
            this.cardService.addCard(this.cardInput.value).subscribe(function (response) {
                console.log(_this.cards);
                _this.cards.push(response);
                console.log(response);
                _this.cardInput.reset();
                _this.isAddEditMode = false;
            }, function (error) {
                _this.snackBar.open('Error adding card', '', { duration: 3000 });
                console.log(error);
            });
        }
    };
    HomeComponent.prototype.editCardClicked = function () {
        this.isEdit = true;
        this.isAddEditMode = true;
        this.cardInput = this.fb.group({
            card_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            categoryControl: ['Discount'],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            companyControl: [this.companies, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            image_front: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            tags: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
    };
    HomeComponent.prototype.addCardClicked = function () {
        this.isEdit = false;
        this.isAddEditMode = true;
        this.selectedCard = null;
        this.cardInput.reset();
    };
    HomeComponent.prototype.cardClicked = function (card) {
        this.selectedCard = card;
        this.isAddEditMode = false;
    };
    HomeComponent.prototype.logoutClicked = function () {
        this.global.me = new _models_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
        localStorage.removeItem('token');
        localStorage.removeItem('account');
        this.router.navigate(['/login']);
    };
    HomeComponent.prototype.deleteCardClicked = function () {
        var _this = this;
        this.cardService.deleteCard(this.selectedCard.card_id).subscribe(function (response) {
            var cardIndx = _this.cards.map(function (e) { return e.card_id; }).indexOf(_this.selectedCard.card_id);
            if (cardIndx >= 0) {
                _this.cards.splice(cardIndx, 1);
                _this.selectedCard;
            }
            _this.isAddEditMode = false;
        }, function (error) {
            _this.snackBar.open('Error deleting Card', '', { duration: 3000 });
        });
    };
    HomeComponent.prototype.clearFile = function () {
        this.cardInput.get('image_front').setValue(null);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")],
            providers: [_services_card_service__WEBPACK_IMPORTED_MODULE_4__["CardService"]]
        }),
        __metadata("design:paramtypes", [_services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_card_service__WEBPACK_IMPORTED_MODULE_4__["CardService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1> Login </h1>\n<form (ngSubmit)=\"onLogin()\" [formGroup]=\"userLogin\">\n  <div class=\"form-group\">\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Username\" formControlName=\"username\" id=\"username\">\n        <mat-error *ngIf=\"userLogin.get('username').hasError('required')\">\n          Username is <strong>required</strong>\n        </mat-error>\n      </mat-form-field>\n  <br>\n  <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\" id=\"password\">\n      <mat-error *ngIf=\"userLogin.get('password').hasError('required')\">\n        Password is <strong>required</strong>\n      </mat-error>\n    </mat-form-field>\n    </div>\n<button mat-ripple mat-raised-button type=\"submit\" id=\"submit\" [disabled]=\"userLogin.invalid || loading\"\n color=\"primary\">Login</button><br>\n</form>\n<br>\n<mat-spinner *ngIf=\"loading\"></mat-spinner>\n\n<a [routerLink]=\"['/register']\">Don't have an accoount? Register here</a>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/global.service */ "./src/app/services/global.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, router, global, userService) {
        this.fb = fb;
        this.router = router;
        this.global = global;
        this.userService = userService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loading = false;
        this.userLogin = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        this.loading = true;
        this.userService.loginUser(this.userLogin.value).subscribe(function (response) {
            _this.loading = false;
            localStorage.setItem('token', response['token']);
            _this.global.me = response['user'];
            console.log('token', response['token']);
            _this.router.navigate(['/home']);
        }, function (error) {
            _this.loading = false;
            console.log('error', error);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")],
            providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1> Register </h1>\n<form (ngSubmit)=\"onRegister()\" [formGroup]=\"userRegister\">\n  <div class=\"form-group\">\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Username\" formControlName=\"username\">\n        <mat-error *ngIf=\"userRegister.get('username').hasError('required')\">\n          Username is <strong>required</strong>\n        </mat-error>\n      </mat-form-field>\n  <br>\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Email\" formControlName=\"email\">\n        <mat-error *ngIf=\"userRegister.get('email').hasError('required')\">\n          Email is <strong>required</strong>\n        </mat-error>\n        <mat-error *ngIf=\"userRegister.get('email').hasError('email')\">\n          Wrong email format\n        </mat-error>\n      </mat-form-field>\n  <br>\n  <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\">\n      <mat-error *ngIf=\"userRegister.get('password').hasError('required')\">\n        Password is <strong>required</strong>\n      </mat-error>\n      <mat-error *ngIf=\"userRegister.get('password').hasError('minlength')\">\n        Password has to be at least 6 chars\n      </mat-error>\n    </mat-form-field>\n<br>\n    <button mat-ripple mat-raised-button type=\"submit\"\n     [disabled]=\"userRegister.invalid || loading\" color=\"primary\">Register</button><br>\n  </div>\n</form>\n<mat-spinner *ngIf=\"loading\"></mat-spinner>\n\n\n<a [routerLink]=\"['/login']\"> Already have an account? Login here</a>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fb, router, userService) {
        this.fb = fb;
        this.router = router;
        this.userService = userService;
        this.userRegister = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]]
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.loading = false;
    };
    RegisterComponent.prototype.onRegister = function () {
        var _this = this;
        this.loading = true;
        this.userService.registerUser(this.userRegister.value).subscribe(function (response) {
            _this.loading = false;
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.loading = false;
            console.log('error', error);
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")],
            providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/card.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/card.service.ts ***!
  \******************************************/
/*! exports provided: CardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardService", function() { return CardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CardService = /** @class */ (function () {
    function CardService(http) {
        this.http = http;
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=utf-8' });
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    CardService.prototype.getCards = function () {
        return this.http.get(this.baseUrl + 'cards/mycards/', this.getAuthHeaders());
    };
    CardService.prototype.addCard = function (card) {
        return this.http.post(this.baseUrl + 'cards/newcard/', card, this.getAuthHeaders());
    };
    CardService.prototype.editCard = function (card, card_id) {
        return this.http.put(this.baseUrl + 'cards/mycards/' + card_id + '/', card, this.getAuthHeaders());
    };
    CardService.prototype.deleteCard = function (card_id) {
        return this.http.delete(this.baseUrl + 'cards/mycards/' + card_id + '/', this.getAuthHeaders());
    };
    CardService.prototype.postFile = function (fileToUpload) {
        var formData = new FormData();
        formData.append('Image', fileToUpload, fileToUpload.name);
        return this.http.post(this.baseUrl, formData);
    };
    CardService.prototype.getCompany = function () {
        return this.http.get(this.baseUrl + 'cards/companies/', this.getAuthHeaders());
    };
    CardService.prototype.getAuthHeaders = function () {
        var token = localStorage.getItem('token');
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=utf-8',
            'Authorization': 'Token ' + token });
        return { headers: httpHeaders };
    };
    CardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CardService);
    return CardService;
}());



/***/ }),

/***/ "./src/app/services/global.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/global.service.ts ***!
  \********************************************/
/*! exports provided: GlobalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalService", function() { return GlobalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GlobalService = /** @class */ (function () {
    function GlobalService() {
        this.userSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](new _models_user__WEBPACK_IMPORTED_MODULE_2__["User"]());
        this.user = this.userSource.asObservable();
    }
    Object.defineProperty(GlobalService.prototype, "me", {
        set: function (user) {
            localStorage.setItem('account', JSON.stringify(user));
            this.userSource.next(user);
        },
        enumerable: true,
        configurable: true
    });
    GlobalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], GlobalService);
    return GlobalService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=utf-8' });
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    UserService.prototype.loginUser = function (userData) {
        return this.http.post(this.baseUrl + 'auth/authenticate/', userData, { headers: this.httpHeaders }); //change url
    };
    UserService.prototype.registerUser = function (userData) {
        return this.http.post(this.baseUrl + 'auth/users/', userData);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
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
    production: false,
    apiUrl: 'http://127.0.0.1:8000/api/'
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

module.exports = __webpack_require__(/*! /Users/Levashovn/PycharmProjects/mfp_hillel/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map