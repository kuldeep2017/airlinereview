webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_public_profile_public_profile_component__ = __webpack_require__("../../../../../src/app/components/public-profile/public-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_blog_blog_component__ = __webpack_require__("../../../../../src/app/components/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_blog_edit_blog_edit_blog_component__ = __webpack_require__("../../../../../src/app/components/blog/edit-blog/edit-blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_blog_delete_blog_delete_blog_component__ = __webpack_require__("../../../../../src/app/components/blog/delete-blog/delete-blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_admin_admin_component__ = __webpack_require__("../../../../../src/app/components/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_new_airline_new_airline_component__ = __webpack_require__("../../../../../src/app/components/new-airline/new-airline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_edit_airline_edit_airline_component__ = __webpack_require__("../../../../../src/app/components/edit-airline/edit-airline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_view_airline_view_airline_component__ = __webpack_require__("../../../../../src/app/components/view-airline/view-airline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__guards_admin_guard__ = __webpack_require__("../../../../../src/app/guards/admin.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__guards_notAuth_guard__ = __webpack_require__("../../../../../src/app/guards/notAuth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















// Our Array of Angular 2 Routes
var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */] // Default Route
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_3__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] // User must be logged in to view this route
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_4__components_register_register_component__["a" /* RegisterComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_17__guards_notAuth_guard__["a" /* NotAuthGuard */]] // User must NOT be logged in to view this route
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__["a" /* LoginComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_17__guards_notAuth_guard__["a" /* NotAuthGuard */]] // User must NOT be logged in to view this route
    },
    {
        path: 'profile',
        component: __WEBPACK_IMPORTED_MODULE_6__components_profile_profile_component__["a" /* ProfileComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] // User must be logged in to view this route
    },
    {
        path: 'admin',
        component: __WEBPACK_IMPORTED_MODULE_11__components_admin_admin_component__["a" /* AdminComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_admin_guard__["a" /* AdminGuard */]] // User must be logged in and must be admin to view this route
    },
    {
        path: 'new-airline',
        component: __WEBPACK_IMPORTED_MODULE_12__components_new_airline_new_airline_component__["a" /* NewAirlineComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_admin_guard__["a" /* AdminGuard */]] // User must be logged in and must be admin to view this route
    },
    {
        path: 'edit-airline/:id',
        component: __WEBPACK_IMPORTED_MODULE_13__components_edit_airline_edit_airline_component__["a" /* EditAirlineComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_admin_guard__["a" /* AdminGuard */]] // User must be logged in and must be admin to view this route
    },
    {
        path: 'view-airline/:id',
        component: __WEBPACK_IMPORTED_MODULE_14__components_view_airline_view_airline_component__["a" /* ViewAirlineComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_admin_guard__["a" /* AdminGuard */]] // User must be logged in and must be admin to view this route
    },
    {
        path: 'blog',
        component: __WEBPACK_IMPORTED_MODULE_8__components_blog_blog_component__["a" /* BlogComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] // User must be logged in to view this route
    },
    {
        path: 'edit-blog/:id',
        component: __WEBPACK_IMPORTED_MODULE_9__components_blog_edit_blog_edit_blog_component__["a" /* EditBlogComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] // User must be logged in to view this route
    },
    {
        path: 'delete-blog/:id',
        component: __WEBPACK_IMPORTED_MODULE_10__components_blog_delete_blog_delete_blog_component__["a" /* DeleteBlogComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] // User must be logged in to view this route
    },
    {
        path: 'user/:username',
        component: __WEBPACK_IMPORTED_MODULE_7__components_public_profile_public_profile_component__["a" /* PublicProfileComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] // User must be logged in to view this route
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */] } // "Catch-All" Route
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes)],
            providers: [],
            bootstrap: [],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=C:/Users/Kuldeep/projects/BlogPost/client/src/app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Hello World from Angular 2!';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/Kuldeep/projects/BlogPost/client/src/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_blog_service__ = __webpack_require__("../../../../../src/app/services/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_airline_service__ = __webpack_require__("../../../../../src/app/services/airline.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__guards_admin_guard__ = __webpack_require__("../../../../../src/app/guards/admin.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__guards_notAuth_guard__ = __webpack_require__("../../../../../src/app/guards/notAuth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_blog_blog_component__ = __webpack_require__("../../../../../src/app/components/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_blog_edit_blog_edit_blog_component__ = __webpack_require__("../../../../../src/app/components/blog/edit-blog/edit-blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_blog_delete_blog_delete_blog_component__ = __webpack_require__("../../../../../src/app/components/blog/delete-blog/delete-blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_public_profile_public_profile_component__ = __webpack_require__("../../../../../src/app/components/public-profile/public-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_new_airline_new_airline_component__ = __webpack_require__("../../../../../src/app/components/new-airline/new-airline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_admin_admin_component__ = __webpack_require__("../../../../../src/app/components/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ng2_rating__ = __webpack_require__("../../../../ng2-rating/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ng2_rating___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_ng2_rating__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_rating_rating_component__ = __webpack_require__("../../../../../src/app/components/rating/rating.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_edit_airline_edit_airline_component__ = __webpack_require__("../../../../../src/app/components/edit-airline/edit-airline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_view_airline_view_airline_component__ = __webpack_require__("../../../../../src/app/components/view-airline/view-airline.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_blog_blog_component__["a" /* BlogComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_blog_edit_blog_edit_blog_component__["a" /* EditBlogComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_blog_delete_blog_delete_blog_component__["a" /* DeleteBlogComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_public_profile_public_profile_component__["a" /* PublicProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_new_airline_new_airline_component__["a" /* NewAirlineComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_admin_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_rating_rating_component__["a" /* RatingComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_edit_airline_edit_airline_component__["a" /* EditAirlineComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_view_airline_view_airline_component__["a" /* ViewAirlineComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_25_ng2_rating__["RatingModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_17__guards_admin_guard__["a" /* AdminGuard */], __WEBPACK_IMPORTED_MODULE_18__guards_notAuth_guard__["a" /* NotAuthGuard */], __WEBPACK_IMPORTED_MODULE_11__services_blog_service__["a" /* BlogService */], __WEBPACK_IMPORTED_MODULE_12__services_airline_service__["a" /* AirlineService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/Kuldeep/projects/BlogPost/client/src/app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/new-airline']\" class=\"btn btn-primary\"><span class='glyphicon glyphicon-plane'></span>&nbsp;&nbsp;New Airline</a>\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <h3>Airline List</h3>\n        <br />\n       \n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"table-responsive\">\n        <table class=\"table\">\n            <thead>\n                <tr>\n                    <th>\n                        \n                        S.No.\n                    </th>\n                    <th>\n                        Airline Name\n                    </th>\n                    <th>\n                        Airline Description\n                    </th>\n                    <th>\n                        Hubs\n                    </th>\n                    <th>\n                        Action\n                    </th>\n                </tr>\n            </thead>\n            <tbody>\n                \n                <tr *ngFor=\"let airlineData of AirlineList  ; let i = index; \">\n                    <td>\n                        {{i+1}}\n                    </td>\n                    <td>\n                        {{airlineData.AirlineName}}\n                    </td>\n                    <td>\n                       {{airlineData.AirlineDesc}}\n                    </td>\n                    <td>\n                       {{airlineData.Hubs}}\n                    </td>\n                    <td>\n\n                        <a [routerLink]=\"['/view-airline/',airlineData._id]\"\n\n                           class=\"btn btn-primary\">\n                            Detail\n                        </a>\n                        <a [routerLink]=\"['/edit-airline/',airlineData._id]\"\n\n                           class=\"btn btn-success\">\n                            Edit\n                        </a>\n                        <a \n\n                           class=\"btn btn-danger\" (click)=\"deleteAirline(airlineData._id)\">\n                            Delete\n                        </a>\n                        </td>\n                </tr>\n                \n        </table>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_airline_service__ = __webpack_require__("../../../../../src/app/services/airline.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminComponent = (function () {
    function AdminComponent(route, router, airlineService) {
        this.route = route;
        this.router = router;
        this.airlineService = airlineService;
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.getAirlineList();
    };
    AdminComponent.prototype.getAirlineList = function () {
        var _this = this;
        this.airlineService.getAllAirlines().then(function (res) {
            _this.AirlineList = res;
            console.log(_this.AirlineList);
        }, function (err) {
            console.log(err);
        });
    };
    AdminComponent.prototype.deleteAirline = function (id) {
        var _this = this;
        this.airlineService.deleteAirline(id).then(function (result) {
            _this.router.navigate(['/home']);
        }, function (err) {
            console.log(err);
        });
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__("../../../../../src/app/components/admin/admin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin/admin.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_airline_service__["a" /* AirlineService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_airline_service__["a" /* AirlineService */]) === 'function' && _c) || Object])
    ], AdminComponent);
    return AdminComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Kuldeep/projects/BlogPost/client/src/admin.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/blog/blog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Dropdown Button */\n.dropbtn {\n    background-color: #4CAF50;\n    color: white;\n    padding: 16px;\n    font-size: 16px;\n    border: none;\n    cursor: pointer;\n}\n\n/* The container <div> - needed to position the dropdown content */\n.dropdown {\n    position: relative;\n    display: inline-block;\n}\n\n/* Dropdown Content (Hidden by Default) */\n.dropdown-content {\n    display: none;\n    position: absolute;\n    background-color: #f9f9f9;\n    min-width: 160px;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    z-index: 1;\n}\n\n/* Links inside the dropdown */\n.dropdown-content a {\n    color: black;\n    padding: 12px 16px;\n    text-decoration: none;\n    display: block;\n}\n\n/* Change color of dropdown links on hover */\n.dropdown-content a:hover {background-color: #f1f1f1}\n\n/* Show the dropdown menu on hover */\n.dropdown:hover .dropdown-content {\n    display: block;\n}\n\n/* Change the background color of the dropdown button when the dropdown content is shown */\n.dropdown:hover .dropbtn {\n    background-color: #3e8e41;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/blog/blog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Blog Feed</h1>\n\n<!-- Custom Success/Error Message -->\n<div class=\"row show-hide-message\" *ngIf=\"message && newPost\">\n  <div [ngClass]=\"messageClass\">\n    {{ message }}\n  </div>\n</div>\n\n<!-- New Post Button -->\n<button type=\"button\" name=\"button\" class=\"btn btn-warning\" *ngIf=\"!newPost\" (click)=\"newBlogForm()\">New Post</button>\n\n<!-- Reload Button -->\n<button [disabled]=\"loadingBlogs\" type=\"button\" name=\"button\" class=\"btn btn-default\" *ngIf=\"!newPost\" (click)=\"reloadBlogs()\"><span class=\"glyphicon glyphicon-repeat\"></span>&nbsp;&nbsp;Reload</button>\n\n<br />\n<br />\n\n<!-- New Blog Form -->\n<form [formGroup]=\"form\" name=\"blogForm\" (submit)=\"onBlogSubmit()\" *ngIf=\"newPost\">\n  <!-- Title Input -->\n  <div class=\"form-group\">\n    <label for=\"title\">Title</label>\n    <div [ngClass]=\"{'has-success': form.controls.title.valid, 'has-error': form.controls.title.dirty && form.controls.title.errors}\">\n      <!-- Title Input -->\n      <input type=\"text\" name=\"title\" class=\"form-control\" placeholder=\"*Blog Title\" autocomplete=\"off\" formControlName=\"title\" />\n      <!-- Validation -->\n      <ul class=\"help-block\">\n        <li *ngIf=\"form.controls.title.dirty && form.controls.title.errors?.required\">This field is required.</li>\n        <li *ngIf=\"(form.controls.title.dirty && form.controls.title.errors?.minlength) || (form.controls.title.dirty && form.controls.title.errors?.maxlength)\">Max length: 50, Min length: 5</li>\n        <li *ngIf=\"form.controls.title.dirty && form.controls.title.errors?.alphaNumericValidation\">Must be a letter or number</li>\n      </ul>\n    </div>\n  </div>\n\n  <!-- Body Input -->\n  <div class=\"form-group\">\n    <label for=\"body\">Body</label>\n    <div [ngClass]=\"{'has-success': form.controls.body.valid, 'has-error': form.controls.body.dirty && form.controls.body.errors}\">\n      <!-- Body Input -->\n      <textarea name=\"body\" rows=\"8\" cols=\"80\" placeholder=\"*Body\" class=\"form-control\" formControlName=\"body\"></textarea>\n      <!-- Validation -->\n      <ul class=\"help-block\">\n        <li *ngIf=\"form.controls.body.dirty && form.controls.body.errors?.required\">This field is required.</li>\n        <li *ngIf=\"(form.controls.body.dirty && form.controls.body.errors?.minlength) || (form.controls.body.dirty && form.controls.body.errors?.maxlength)\">Max length: 500, Min length: 5</li>\n      </ul>\n    </div>\n  </div>\n\n  <!-- Go Back Button -->\n  <button [disabled]=\"processing\" type=\"button\" name=\"button\" (click)=\"goBack()\" class=\"btn btn-warning\">Go Back</button>\n  <!-- Submit Button -->\n  <button [disabled]=\"processing || !form.valid\" type=\"submit\" name=\"button\" class=\"btn btn-success\">Submit</button>\n\n</form>\n<!-- New Blog Form -->\n\n<!-- Panel Start -->\n<div *ngIf=\"!newPost\">\n  <!-- Panel Outer Layer -->\n  <div class=\"panel panel-primary\" *ngFor=\"let blog of blogPosts\">\n\n    <!-- Panel Title -->\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">{{ blog.title }}</h3>\n    </div>\n\n    <!-- Panel Body -->\n    <div class=\"panel-body\">\n      {{ blog.body }}\n    </div>\n\n    <!-- Panel Footer Start -->\n    <div class=\"panel-footer\">\n      <strong>Posted by: </strong>{{ blog.createdBy }}\n      <br />\n      <strong>Date: </strong>{{ blog.createdAt | date:'MMM dd, yyyy' }}\n      <br />\n      <div *ngIf=\"username === blog.createdBy\">\n        <strong>Likes: </strong>{{ blog.likes }}\n        <br />\n        <strong>Dislikes: </strong>{{ blog.dislikes }}\n      </div>\n\n      <!-- Edit Button -->\n      <a [routerLink]=\"['/edit-blog/', blog._id]\" *ngIf=\"username === blog.createdBy\"><button type=\"button\" name=\"button\" class=\"btn btn-sm btn-info\">Edit</button></a>\n      <!-- Delete Button -->\n      <a [routerLink]=\"['/delete-blog/', blog._id]\" *ngIf=\"username === blog.createdBy\"><button type=\"button\" name=\"button\" class=\"btn btn-sm btn-danger\">Delete</button></a>\n\n      <!-- Likes Dropdown  -->\n      <div class=\"dropdown\">\n        <!-- Like Button -->\n        <button [disabled]=\"blog.likedBy.indexOf(username) > -1\" type=\"button\" name=\"button\" class=\"btn btn-sm btn-success\" *ngIf=\"username !== blog.createdBy\" (click)=\"likeBlog(blog._id)\"><span class=\"glyphicon glyphicon-thumbs-up\">&nbsp;</span>Likes: {{ blog.likes }}</button>\n        <!-- Dropdown Menu Items -->\n        <div class=\"dropdown-content\">\n          <a [routerLink]=\"['/user/', liker]\" *ngFor=\"let liker of blog.likedBy\">{{ liker }}</a>\n        </div>\n      </div>\n\n      <!-- Dislikes Dropdown  -->\n      <div class=\"dropdown\">\n        <!-- Dislike Button -->\n        <button [disabled]=\"blog.dislikedBy.indexOf(username) > -1\" type=\"button\" name=\"button\" class=\"btn btn-sm btn-warning\" *ngIf=\"username !== blog.createdBy\" (click)=\"dislikeBlog(blog._id)\"><span class=\"glyphicon glyphicon-thumbs-down\">&nbsp;</span>Dislikes: {{ blog.dislikes }}</button>\n        <!-- Dropdown Menu Items -->\n        <div class=\"dropdown-content\">\n          <a [routerLink]=\"['/user/', disliker]\" *ngFor=\"let disliker of blog.dislikedBy\">{{ disliker }}</a>\n        </div>\n      </div>\n\n    </div>\n    <!-- Panel Footer End -->\n\n    <!-- Post Comment Box: Start -->\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\">\n        <!-- Post Comment Button -->\n        <button type=\"button\" name=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"draftComment(blog._id)\" [disabled]=\"newComment.indexOf(blog._id) > -1\">Post Comment</button>\n        <br />\n        <br />\n        <div *ngIf=\"newComment.indexOf(blog._id) > -1\">\n\n          <!-- Form: Comment Form Start -->\n          <form [formGroup]=\"commentForm\">\n            <!-- Textarea Input -->\n            <textarea name=\"comment\" rows=\"10\" cols=\"30\" class=\"form-control\" formControlName=\"comment\"></textarea>\n            <!-- Validation -->\n            <div [ngClass]=\"{'has-success': !commentForm.controls.comment.errors && commentForm.controls.comment.dirty, 'has-error': commentForm.controls.comment.dirty && commentForm.controls.comment.errors}\">\n              <ul class=\"help-block\">\n                <li *ngIf=\"commentForm.controls.comment.errors?.required && commentForm.controls.comment.dirty\">This field is required.</li>\n                <li *ngIf=\"(commentForm.controls.comment.errors?.maxlength && commentForm.controls.comment.dirty) ||(commentForm.controls.comment.errors?.minlength && commentForm.controls.comment.dirty)\">Comment must be at least 1 character but no more than 200.</li>\n              </ul>\n            </div>\n            <!-- Post Button -->\n            <button [disabled]=\"!commentForm.valid || processing\" type=\"submit\" name=\"button\" class=\"btn btn-sm btn-info\" (click)=\"postComment(blog._id)\">Post</button>\n            <!-- Cancel Button -->\n            <button [disabled]=\"processing\" type=\"button\" name=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"cancelSubmission(blog._id)\">Cancel</button>\n          </form>\n          <!-- Form: Comment Form End -->\n\n        </div>\n\n        <!-- Show Comments -->\n        <li *ngIf=\"enabledComments.indexOf(blog._id) === -1 && blog.comments.length > 0\" class=\"list-group-item\">\n          <span (click)=\"expand(blog._id)\">\n            Show comments&nbsp;&nbsp;\n            <div class=\"glyphicon glyphicon-comment\"></div>\n          </span>\n        </li>\n\n        <!-- Hide Comments -->\n        <li *ngIf=\"enabledComments.indexOf(blog._id) > -1\" class=\"list-group-item\">\n          <span (click)=\"collapse(blog._id)\">\n            Hide Comments&nbsp;&nbsp;\n            <div class=\"glyphicon glyphicon-comment\"></div>\n          </span>\n        </li>\n\n        <!-- Comment -->\n        <div *ngIf=\"enabledComments.indexOf(blog._id) > -1\">\n          <li *ngFor=\"let comment of blog.comments\" class=\"list-group-item\">\n            <strong>{{ comment.commentator }}:</strong> {{ comment.comment }}\n          </li>\n        </div>\n    </ul>\n    <!-- Post Comment Box: End -->\n\n  </div>\n  <!-- Panel Outer Layer -->\n</div>\n<!-- Panel End -->\n"

/***/ }),

/***/ "../../../../../src/app/components/blog/blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_blog_service__ = __webpack_require__("../../../../../src/app/services/blog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BlogComponent = (function () {
    function BlogComponent(formBuilder, authService, blogService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.blogService = blogService;
        this.newPost = false;
        this.loadingBlogs = false;
        this.processing = false;
        this.newComment = [];
        this.enabledComments = [];
        this.createNewBlogForm(); // Create new blog form on start up
        this.createCommentForm(); // Create form for posting comments on a user's blog post
    }
    // Function to create new blog form
    BlogComponent.prototype.createNewBlogForm = function () {
        this.form = this.formBuilder.group({
            // Title field
            title: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(50),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(5),
                    this.alphaNumericValidation
                ])],
            // Body field
            body: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(500),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(5)
                ])]
        });
    };
    // Create form for posting comments
    BlogComponent.prototype.createCommentForm = function () {
        this.commentForm = this.formBuilder.group({
            comment: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(1),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(200)
                ])]
        });
    };
    // Enable the comment form
    BlogComponent.prototype.enableCommentForm = function () {
        this.commentForm.get('comment').enable(); // Enable comment field
    };
    // Disable the comment form
    BlogComponent.prototype.disableCommentForm = function () {
        this.commentForm.get('comment').disable(); // Disable comment field
    };
    // Enable new blog form
    BlogComponent.prototype.enableFormNewBlogForm = function () {
        this.form.get('title').enable(); // Enable title field
        this.form.get('body').enable(); // Enable body field
    };
    // Disable new blog form
    BlogComponent.prototype.disableFormNewBlogForm = function () {
        this.form.get('title').disable(); // Disable title field
        this.form.get('body').disable(); // Disable body field
    };
    // Validation for title
    BlogComponent.prototype.alphaNumericValidation = function (controls) {
        var regExp = new RegExp(/^[a-zA-Z0-9 ]+$/); // Regular expression to perform test
        // Check if test returns false or true
        if (regExp.test(controls.value)) {
            return null; // Return valid
        }
        else {
            return { 'alphaNumericValidation': true }; // Return error in validation
        }
    };
    // Function to display new blog form
    BlogComponent.prototype.newBlogForm = function () {
        this.newPost = true; // Show new blog form
    };
    // Reload blogs on current page
    BlogComponent.prototype.reloadBlogs = function () {
        var _this = this;
        this.loadingBlogs = true; // Used to lock button
        this.getAllBlogs(); // Add any new blogs to the page
        setTimeout(function () {
            _this.loadingBlogs = false; // Release button lock after four seconds
        }, 4000);
    };
    // Function to post a new comment on blog post
    BlogComponent.prototype.draftComment = function (id) {
        this.commentForm.reset(); // Reset the comment form each time users starts a new comment
        this.newComment = []; // Clear array so only one post can be commented on at a time
        this.newComment.push(id); // Add the post that is being commented on to the array
    };
    // Function to cancel new post transaction
    BlogComponent.prototype.cancelSubmission = function (id) {
        var index = this.newComment.indexOf(id); // Check the index of the blog post in the array
        this.newComment.splice(index, 1); // Remove the id from the array to cancel post submission
        this.commentForm.reset(); // Reset  the form after cancellation
        this.enableCommentForm(); // Enable the form after cancellation
        this.processing = false; // Enable any buttons that were locked
    };
    // Function to submit a new blog post
    BlogComponent.prototype.onBlogSubmit = function () {
        var _this = this;
        this.processing = true; // Disable submit button
        this.disableFormNewBlogForm(); // Lock form
        // Create blog object from form fields
        var blog = {
            title: this.form.get('title').value,
            body: this.form.get('body').value,
            createdBy: this.username // CreatedBy field
        };
        // Function to save blog into database
        this.blogService.newBlog(blog).subscribe(function (data) {
            // Check if blog was saved to database or not
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Return error class
                _this.message = data.message; // Return error message
                _this.processing = false; // Enable submit button
                _this.enableFormNewBlogForm(); // Enable form
            }
            else {
                _this.messageClass = 'alert alert-success'; // Return success class
                _this.message = data.message; // Return success message
                _this.getAllBlogs();
                // Clear form data after two seconds
                setTimeout(function () {
                    _this.newPost = false; // Hide form
                    _this.processing = false; // Enable submit button
                    _this.message = false; // Erase error/success message
                    _this.form.reset(); // Reset all form fields
                    _this.enableFormNewBlogForm(); // Enable the form fields
                }, 2000);
            }
        });
    };
    // Function to go back to previous page
    BlogComponent.prototype.goBack = function () {
        window.location.reload(); // Clear all variable states
    };
    // Function to get all blogs from the database
    BlogComponent.prototype.getAllBlogs = function () {
        var _this = this;
        // Function to GET all blogs from database
        this.blogService.getAllBlogs().subscribe(function (data) {
            _this.blogPosts = data.blogs; // Assign array to use in HTML
        });
    };
    // Function to like a blog post
    BlogComponent.prototype.likeBlog = function (id) {
        var _this = this;
        // Service to like a blog post
        this.blogService.likeBlog(id).subscribe(function (data) {
            _this.getAllBlogs(); // Refresh blogs after like
        });
    };
    // Function to disliked a blog post
    BlogComponent.prototype.dislikeBlog = function (id) {
        var _this = this;
        // Service to dislike a blog post
        this.blogService.dislikeBlog(id).subscribe(function (data) {
            _this.getAllBlogs(); // Refresh blogs after dislike
        });
    };
    // Function to post a new comment
    BlogComponent.prototype.postComment = function (id) {
        var _this = this;
        this.disableCommentForm(); // Disable form while saving comment to database
        this.processing = true; // Lock buttons while saving comment to database
        var comment = this.commentForm.get('comment').value; // Get the comment value to pass to service function
        // Function to save the comment to the database
        this.blogService.postComment(id, comment).subscribe(function (data) {
            _this.getAllBlogs(); // Refresh all blogs to reflect the new comment
            var index = _this.newComment.indexOf(id); // Get the index of the blog id to remove from array
            _this.newComment.splice(index, 1); // Remove id from the array
            _this.enableCommentForm(); // Re-enable the form
            _this.commentForm.reset(); // Reset the comment form
            _this.processing = false; // Unlock buttons on comment form
            if (_this.enabledComments.indexOf(id) < 0)
                _this.expand(id); // Expand comments for user on comment submission
        });
    };
    // Expand the list of comments
    BlogComponent.prototype.expand = function (id) {
        this.enabledComments.push(id); // Add the current blog post id to array
    };
    // Collapse the list of comments
    BlogComponent.prototype.collapse = function (id) {
        var index = this.enabledComments.indexOf(id); // Get position of id in array
        this.enabledComments.splice(index, 1); // Remove id from array
    };
    BlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get profile username on page load
        this.authService.getProfile().subscribe(function (profile) {
            _this.username = profile.user.username; // Used when creating new blog posts and comments
        });
        this.getAllBlogs(); // Get all blogs on component load
    };
    BlogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__("../../../../../src/app/components/blog/blog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/blog/blog.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_blog_service__["a" /* BlogService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_blog_service__["a" /* BlogService */]) === 'function' && _c) || Object])
    ], BlogComponent);
    return BlogComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Kuldeep/projects/BlogPost/client/src/blog.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/blog/delete-blog/delete-blog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/blog/delete-blog/delete-blog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Delete Blog</h1>\n\n<!-- Custom Success/Error Message -->\n<div class=\"row show-hide-message\" *ngIf=\"message\">\n  <div [ngClass]=\"messageClass\">\n    {{ message }}\n  </div>\n</div>\n\n<!-- Modal Confirmation Window -->\n<div class=\"col-md-6\" *ngIf=\"foundBlog\">\n  <!-- Model Outer Layer -->\n  <div class=\"modal-content\">\n    <!-- Modal Header -->\n    <div class=\"modal-header\">\n      <!-- Close Button -->\n      <button type=\"button\" name=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      <!-- Modal Title -->\n      <h4 class=\"modal-title\">Confirm</h4>\n    </div>\n\n    <!-- Modal Body -->\n    <div class=\"modal-body\">\n      <p>Are you sure you would like to delete this blog?</p>\n    </div>\n\n    <!-- Modal Footer -->\n    <div class=\"modal-footer\">\n      <!-- Yes Button -->\n      <button [disabled]=\"processing\" type=\"button\" name=\"button\" class=\"btn btn-success\" (click)=\"deleteBlog()\">Yes</button>\n      <!-- No Button -->\n      <a routerLink=\"/blog\"><button [disabled]=\"processing\" type=\"button\" name=\"button\" class=\"btn btn-danger\">No</button></a>\n    </div>\n  </div>\n\n  <br />\n\n  <!-- Panel -->\n  <div class=\"panel panel-primary\">\n    <!-- Panel Heading -->\n    <div class=\"panel-heading\">\n      <!-- Panel Title -->\n      <h3 class=\"panel-title\">{{ blog.title }}</h3>\n    </div>\n\n    <!-- Panel Body -->\n    <div class=\"panel-body\">\n      {{ blog.body }}\n    </div>\n\n    <!-- Panel Footer -->\n    <div class=\"panel-footer\">\n      <strong>Posted by: </strong> {{ blog.createdBy }}\n      <br />\n      <strong>Date: </strong> {{ blog.createdAt | date:'MMM dd, yyyy' }}\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/blog/delete-blog/delete-blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteBlogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_blog_service__ = __webpack_require__("../../../../../src/app/services/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeleteBlogComponent = (function () {
    function DeleteBlogComponent(blogService, activatedRoute, router) {
        this.blogService = blogService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.foundBlog = false;
        this.processing = false;
    }
    // Function to delete blogs
    DeleteBlogComponent.prototype.deleteBlog = function () {
        var _this = this;
        this.processing = true; // Disable buttons
        // Function for DELETE request
        this.blogService.deleteBlog(this.currentUrl.id).subscribe(function (data) {
            // Check if delete request worked
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Return error bootstrap class
                _this.message = data.message; // Return error message
            }
            else {
                _this.messageClass = 'alert alert-success'; // Return bootstrap success class
                _this.message = data.message; // Return success message
                // After two second timeout, route to blog page
                setTimeout(function () {
                    _this.router.navigate(['/blog']); // Route users to blog page
                }, 2000);
            }
        });
    };
    DeleteBlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUrl = this.activatedRoute.snapshot.params; // Get URL paramaters on page load
        // Function for GET request to retrieve blog
        this.blogService.getSingleBlog(this.currentUrl.id).subscribe(function (data) {
            // Check if request was successfull
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Return bootstrap error class
                _this.message = data.message; // Return error message
            }
            else {
                // Create the blog object to use in HTML
                _this.blog = {
                    title: data.blog.title,
                    body: data.blog.body,
                    createdBy: data.blog.createdBy,
                    createdAt: data.blog.createdAt // Set created_at field
                };
                _this.foundBlog = true; // Displaly blog window
            }
        });
    };
    DeleteBlogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-delete-blog',
            template: __webpack_require__("../../../../../src/app/components/blog/delete-blog/delete-blog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/blog/delete-blog/delete-blog.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_blog_service__["a" /* BlogService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_blog_service__["a" /* BlogService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], DeleteBlogComponent);
    return DeleteBlogComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Kuldeep/projects/BlogPost/client/src/delete-blog.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/blog/edit-blog/edit-blog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/blog/edit-blog/edit-blog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Edit Blog</h1>\n\n<!-- Custom Success/Erro Message -->\n<div class=\"row show-hide-message\" *ngIf=\"message\">\n  <div [ngClass]=\"messageClass\">\n    {{ message }}\n  </div>\n</div>\n\n<!-- Edit Blog Form -->\n<form (submit)=\"updateBlogSubmit()\" *ngIf=\"!loading\">\n  <!-- Title Field -->\n  <div class=\"form-group\">\n    <label for=\"title\">Title</label>\n    <!-- Title Input -->\n    <input [disabled]=\"processing\" type=\"text\" name=\"title\" placeholder=\"*Blog Title\" class=\"form-control\" [(ngModel)]=\"blog.title\" #title=\"ngModel\" />\n  </div>\n\n  <!-- Body Field -->\n  <div class=\"form-group\">\n    <label for=\"body\">Body</label>\n    <!-- Body Input -->\n    <textarea [disabled]=\"processing\" name=\"body\" rows=\"8\" cols=\"80\" [(ngModel)]=\"blog.body\" #body=\"ngModel\" class=\"form-control\" placeholder=\"*Blog Body\"></textarea>\n  </div>\n\n  <!-- Delete Button -->\n  <a [routerLink]=\"['/delete-blog/', blog._id]\"><button  [disabled]=\"processing\"  type=\"button\" name=\"button\" class=\"btn btn-danger\">Delete</button></a>\n  <!-- Go Back Button -->\n  <button [disabled]=\"processing\" type=\"button\" name=\"button\" class=\"btn btn-success\" (click)=\"goBack()\">Go Back</button>\n  <!-- Save Changes Button -->\n  <button [disabled]=\"processing || (!title.dirty && !body.dirty)\" type=\"submit\" name=\"save\" class=\"btn btn-info\">Save Changes</button>\n\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/blog/edit-blog/edit-blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditBlogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_blog_service__ = __webpack_require__("../../../../../src/app/services/blog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditBlogComponent = (function () {
    function EditBlogComponent(location, activatedRoute, blogService, router) {
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.blogService = blogService;
        this.router = router;
        this.processing = false;
        this.loading = true;
    }
    // Function to Submit Update
    EditBlogComponent.prototype.updateBlogSubmit = function () {
        var _this = this;
        this.processing = true; // Lock form fields
        // Function to send blog object to backend
        this.blogService.editBlog(this.blog).subscribe(function (data) {
            // Check if PUT request was a success or not
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Set error bootstrap class
                _this.message = data.message; // Set error message
                _this.processing = false; // Unlock form fields
            }
            else {
                _this.messageClass = 'alert alert-success'; // Set success bootstrap class
                _this.message = data.message; // Set success message
                // After two seconds, navigate back to blog page
                setTimeout(function () {
                    _this.router.navigate(['/blog']); // Navigate back to route page
                }, 2000);
            }
        });
    };
    // Function to go back to previous page
    EditBlogComponent.prototype.goBack = function () {
        this.location.back();
    };
    EditBlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUrl = this.activatedRoute.snapshot.params; // When component loads, grab the id
        // Function to GET current blog with id in params
        this.blogService.getSingleBlog(this.currentUrl.id).subscribe(function (data) {
            // Check if GET request was success or not
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Set bootstrap error class
                _this.message = data.message; // Set error message
            }
            else {
                _this.blog = data.blog; // Save blog object for use in HTML
                _this.loading = false; // Allow loading of blog form
            }
        });
    };
    EditBlogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-blog',
            template: __webpack_require__("../../../../../src/app/components/blog/edit-blog/edit-blog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/blog/edit-blog/edit-blog.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_blog_service__["a" /* BlogService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_blog_service__["a" /* BlogService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], EditBlogComponent);
    return EditBlogComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/Kuldeep/projects/BlogPost/client/src/edit-blog.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Dashboard Route</h1>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardComponent);
    return DashboardComponent;
}());
//# sourceMappingURL=C:/Users/Kuldeep/projects/BlogPost/client/src/dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/edit-airline/edit-airline.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/edit-airline/edit-airline.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3>Edit Airline</h3>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <form (ngSubmit)=\"updateAirline(airline._id)\" #airlineForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"name\">Name</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"airline.AirlineName\" name=\"AirlineName\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Description</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"airline.AirlineDesc\" name=\"AirlineDesc\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Founded</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"airline.Founded\" name=\"Founded\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Hubs</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"airline.Hubs\" name=\"Hubs\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Total Destinations</label>\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"airline.TotalDestinations\" name=\"TotalDestinations\" required>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!airlineForm.form.valid\">Update</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/edit-airline/edit-airline.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditAirlineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_airline_service__ = __webpack_require__("../../../../../src/app/services/airline.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditAirlineComponent = (function () {
    function EditAirlineComponent(airlineService, router, route) {
        this.airlineService = airlineService;
        this.router = router;
        this.route = route;
        this.airline = {};
    }
    EditAirlineComponent.prototype.ngOnInit = function () {
        this.getAirline(this.route.snapshot.params['id']);
    };
    EditAirlineComponent.prototype.getAirline = function (id) {
        var _this = this;
        this.airlineService.showAirline(id).then(function (res) {
            _this.airline = res;
            console.log(_this.airline);
        }, function (err) {
            console.log(err);
        });
    };
    EditAirlineComponent.prototype.updateAirline = function (id) {
        var _this = this;
        this.airlineService.updateAirline(id, this.airline).then(function (result) {
            var id = result['_id'];
            _this.router.navigate(['/details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    EditAirlineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-airline',
            template: __webpack_require__("../../../../../src/app/components/edit-airline/edit-airline.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/edit-airline/edit-airline.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_airline_service__["a" /* AirlineService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_airline_service__["a" /* AirlineService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], EditAirlineComponent);
    return EditAirlineComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Kuldeep/projects/BlogPost/client/src/edit-airline.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<!-- Custom Success/Error Message -->\n<div class=\"row show-hide-message\" *ngIf=\"message && newPost\">\n  <div [ngClass]=\"messageClass\">\n    {{ message }}\n  </div>\n</div>\n\n<!-- Reload Button -->\n<button [disabled]=\"loadingBlogs\" type=\"button\" name=\"button\" class=\"btn btn-default\" (click)=\"reloadBlogs()\"><span class=\"glyphicon glyphicon-repeat\"></span>&nbsp;&nbsp;Reload</button>\n\n<br />\n<br />\n\n\n\n<!-- Panel Start -->\n<div >\n  <!-- Panel Outer Layer -->\n  <div class=\"panel panel-info\" *ngFor=\"let airline of AirlineList\">\n\n    <!-- Panel Title -->\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">{{ airline.AirlineName }}</h3>\n    </div>\n\n    <!-- Panel Body -->\n    <div class=\"panel-body\">\n      {{ airline.AirlineDesc }}\n    </div>\n\n    <!-- Panel Footer Start -->\n    <div class=\"panel-footer\">\n      <strong>Founded: </strong>{{ airline.Founded }}\n      <br />\n      <strong>Hubs: </strong>{{ airline.Hubs }}\n      <br />\n      <strong>No. of Destinations: </strong>{{ airline.TotalDestinations }}\n      <br />\n      <strong>Date: </strong>{{ airline.updated_at | date:'MMM dd, yyyy' }}\n      <br />\n      <strong>Rating: </strong> <br />    \n      <app-rating [rating]='airline.Rating' [itemId]='airline._id' > </app-rating>\n      <br />\n      \n\n    </div>\n    <!-- Panel Footer End -->\n\n    <!-- Post Comment Box: Start -->\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\">\n        <!-- Post Comment Button -->\n        <button type=\"button\" name=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"draftComment(airline._id)\" [disabled]=\"((newComment.indexOf(airline._id) > -1) || !authService.loggedIn())\">Write a Review</button>\n        <br />\n        <br />\n        <div *ngIf=\"newComment.indexOf(airline._id) > -1\">\n          <!-- Form: Comment Form Start -->\n          <form [formGroup]=\"commentForm\">\n            <input type = \"hidden\" name =\"rating\" class=\"form-control\" formControlName = \"rating\">\n            <app-rating [rating]='star_rating' [itemId]='airline._id' (ratingClick)='ratingComponetClick($event)' > </app-rating>\n            <!-- Textarea Input -->\n            <textarea name=\"comment\" rows=\"10\" cols=\"30\" class=\"form-control\" formControlName=\"comment\"></textarea>\n            <!-- Validation -->\n            <div [ngClass]=\"{'has-success': !commentForm.controls.comment.errors && commentForm.controls.comment.dirty, 'has-error': commentForm.controls.comment.dirty && commentForm.controls.comment.errors}\">\n              <ul class=\"help-block\">\n                <li *ngIf=\"commentForm.controls.comment.errors?.required && commentForm.controls.comment.dirty\">This field is required.</li>\n                <li *ngIf=\"(commentForm.controls.comment.errors?.maxlength && commentForm.controls.comment.dirty) ||(commentForm.controls.comment.errors?.minlength && commentForm.controls.comment.dirty)\">Comment must be at least 1 character but no more than 200.</li>\n              </ul>\n            </div>\n            <!-- Post Button -->\n            <button [disabled]=\"!commentForm.valid || processing\" type=\"submit\" name=\"button\" class=\"btn btn-sm btn-info\" (click)=\"postReview(airline._id)\">Save</button>\n            <!-- Cancel Button -->\n            <button [disabled]=\"processing\" type=\"button\" name=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"cancelSubmission(airline._id)\">Cancel</button>\n          </form>\n          <!-- Form: Comment Form End -->\n        </div>\n                <!-- Show Comments -->\n        <li *ngIf=\"enabledComments.indexOf(airline._id) === -1 && airline.reviews.length > 0\" class=\"list-group-item\">\n          <button class=\"btn btn-warning\" type=\"button\" (click)=\"expand(airline._id)\">\n            Show Reviews&nbsp;<span class=\"badge\">{{airline.reviews.length}}</span>            \n          </button>\n        </li>\n\n        <!-- Hide Comments -->\n        <li *ngIf=\"enabledComments.indexOf(airline._id) > -1\" class=\"list-group-item\">\n          <button class=\"btn btn-warning\" type=\"button\" (click)=\"collapse(airline._id)\">\n            Hide Reviews            \n          </button>\n        </li>\n\n        <!-- Comment -->\n        <div *ngIf=\"enabledComments.indexOf(airline._id) > -1\">\n          <li *ngFor=\"let review of airline.reviews\" class=\"list-group-item\">\n            <div class=\"well well-sm\"><strong>{{ review.reviewer }}:&nbsp;<span class=\"label label-info\">{{ review.rating }}&nbsp;<span class=\"glyphicon glyphicon-star\" aria-hidden=\"true\"></span></span></strong>\n              <br> {{ review.comment }}\n              <br><h6><small>on {{ review.reviewed_at | date:'MMM dd, yyyy' }}</small></h6>\n              </div>\n          </li>\n        </div>\n    </ul> \n    <!-- Post Comment Box: End -->\n\n  </div>\n  <!-- Panel Outer Layer -->\n</div>\n<!-- Panel End -->\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_airline_service__ = __webpack_require__("../../../../../src/app/services/airline.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = (function () {
    function HomeComponent(route, router, airlineService, formBuilder, authService) {
        this.route = route;
        this.router = router;
        this.airlineService = airlineService;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.loadingBlogs = false;
        this.processing = false;
        this.newComment = [];
        this.enabledComments = [];
        this.createCommentForm(); // Create form for posting comments on a user's blog post
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get profile username on page load
        this.authService.getProfile().subscribe(function (profile) {
            _this.username = profile.user.username; // Used when creating new blog posts and comments
        });
        this.getAirlineList();
    };
    // Create form for posting comments
    HomeComponent.prototype.createCommentForm = function () {
        this.commentForm = this.formBuilder.group({
            comment: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(1),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(200)
                ])],
            rating: ['']
        });
    };
    HomeComponent.prototype.ratingComponetClick = function (clickObj) {
        this.commentForm.get('rating').setValue(clickObj.rating);
    };
    // Enable the comment form
    HomeComponent.prototype.enableCommentForm = function () {
        this.commentForm.get('comment').enable(); // Enable comment field
        this.commentForm.get('rating').enable();
    };
    // Disable the comment form
    HomeComponent.prototype.disableCommentForm = function () {
        this.commentForm.get('comment').disable(); // Disable comment field
        this.commentForm.get('rating').disable();
    };
    HomeComponent.prototype.getAirlineList = function () {
        var _this = this;
        this.airlineService.getAllAirlines().then(function (res) {
            _this.AirlineList = res;
            console.log(_this.AirlineList);
        }, function (err) {
            console.log(err);
        });
    };
    // Reload blogs on current page
    HomeComponent.prototype.reloadBlogs = function () {
        var _this = this;
        this.loadingBlogs = true; // Used to lock button
        this.getAirlineList(); // Add any new blogs to the page
        setTimeout(function () {
            _this.loadingBlogs = false; // Release button lock after four seconds
        }, 4000);
    };
    // Function to post a new comment on blog post
    HomeComponent.prototype.draftComment = function (id) {
        this.commentForm.reset(); // Reset the comment form each time users starts a new comment
        this.newComment = []; // Clear array so only one post can be commented on at a time
        this.newComment.push(id); // Add the post that is being commented on to the array
    };
    // Function to go back to previous page
    HomeComponent.prototype.goBack = function () {
        window.location.reload(); // Clear all variable states
    };
    // Function to post a new comment
    HomeComponent.prototype.postReview = function (id) {
        var _this = this;
        this.disableCommentForm(); // Disable form while saving comment to database
        this.processing = true; // Lock buttons while saving comment to database
        var comment = this.commentForm.get('comment').value; // Get the comment value to pass to service function
        var rating = this.commentForm.get('rating').value;
        // Function to save the comment to the database
        this.airlineService.postReview(id, comment, rating, this.username).subscribe(function (data) {
            _this.getAirlineList(); // Refresh all blogs to reflect the new comment
            var index = _this.newComment.indexOf(id); // Get the index of the blog id to remove from array
            _this.newComment.splice(index, 1); // Remove id from the array
            _this.enableCommentForm(); // Re-enable the form
            _this.commentForm.reset(); // Reset the comment form
            _this.processing = false; // Unlock buttons on comment form
            if (_this.enabledComments.indexOf(id) < 0)
                _this.expand(id); // Expand comments for user on comment submission
        });
    };
    // Expand the list of comments
    HomeComponent.prototype.expand = function (id) {
        this.enabledComments.push(id); // Add the current blog post id to array
    };
    // Collapse the list of comments
    HomeComponent.prototype.collapse = function (id) {
        var index = this.enabledComments.indexOf(id); // Get position of id in array
        this.enabledComments.splice(index, 1); // Remove id from array
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewEncapsulation"].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_airline_service__["a" /* AirlineService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_airline_service__["a" /* AirlineService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */]) === 'function' && _e) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=C:/Users/Kuldeep/projects/BlogPost/client/src/home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\n\n<!-- Custom Success/Error Message -->\n<div class=\"row show-hide-message\">\n  <div [ngClass]=\"messageClass\">\n    {{ message }}\n  </div>\n</div>\n\n<!-- Login Form -->\n<form [formGroup]=\"form\" (submit)=\"onLoginSubmit()\">\n\n  <!-- Username Field -->\n  <div class=\"form-group\">\n    <label for=\"username\">Username</label>\n    <div [ngClass]=\"{'has-error': form.controls.username.errors && form.controls.username.dirty, 'has-success': form.controls.username.valid && form.controls.username.dirty }\">\n      <input class=\"form-control\" type=\"text\" name=\"username\" formControlName=\"username\" />\n      <!-- Validation -->\n      <ul class=\"help-block\">\n        <li *ngIf=\"form.controls.username.errors?.required && form.controls.username.dirty\">This field is required.</li>\n      </ul>\n    </div>\n  </div>\n\n  <!-- Password Field  -->\n  <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n    <div [ngClass]=\"{'has-error': form.controls.password.errors && form.controls.password.dirty, 'has-success': form.controls.password.valid && form.controls.password.dirty }\">\n      <input class=\"form-control\" type=\"password\" name=\"password\" formControlName=\"password\" />\n      <!-- Validation -->\n      <ul class=\"help-block\">\n        <li *ngIf=\"form.controls.password.errors?.required && form.controls.password.dirty\">This field is required.</li>\n      </ul>\n    </div>\n  </div>\n  <!-- Submit Button -->\n  <input [disabled]=\"!form.valid || processing\" class=\"btn btn-primary\" type=\"submit\" value=\"Login\" />\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(formBuilder, authService, router, authGuard) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.authGuard = authGuard;
        this.processing = false;
        this.createForm(); // Create Login Form when component is constructed
    }
    // Function to create login form
    LoginComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required] // Password field
        });
    };
    // Function to disable form
    LoginComponent.prototype.disableForm = function () {
        this.form.controls['username'].disable(); // Disable username field
        this.form.controls['password'].disable(); // Disable password field
    };
    // Function to enable form
    LoginComponent.prototype.enableForm = function () {
        this.form.controls['username'].enable(); // Enable username field
        this.form.controls['password'].enable(); // Enable password field
    };
    // Functiont to submit form and login user
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        this.processing = true; // Used to submit button while is being processed
        this.disableForm(); // Disable form while being process
        // Create user object from user's input
        var user = {
            username: this.form.get('username').value,
            password: this.form.get('password').value // Password input field
        };
        // Function to send login data to API
        this.authService.login(user).subscribe(function (data) {
            // Check if response was a success or error
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Set bootstrap error class
                _this.message = data.message; // Set error message
                _this.processing = false; // Enable submit button
                _this.enableForm(); // Enable form for editting
            }
            else {
                _this.messageClass = 'alert alert-success'; // Set bootstrap success class
                _this.message = data.message; // Set success message
                // Function to store user's token in client local storage
                _this.authService.storeUserData(data.token, data.user);
                // After 2 seconds, redirect to dashboard page
                setTimeout(function () {
                    // Check if user was redirected or logging in for first time
                    if (_this.previousUrl) {
                        _this.router.navigate([_this.previousUrl]); // Redirect to page they were trying to view before
                    }
                    else {
                        _this.router.navigate(['/']); // Navigate to home 
                    }
                }, 2000);
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        // On page load, check if user was redirected to login
        if (this.authGuard.redirectUrl) {
            this.messageClass = 'alert alert-danger'; // Set error message: need to login
            this.message = 'You must be logged in to view that page.'; // Set message
            this.previousUrl = this.authGuard.redirectUrl; // Set the previous URL user was redirected from
            this.authGuard.redirectUrl = undefined; // Erase previous URL
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__guards_auth_guard__["a" /* AuthGuard */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__guards_auth_guard__["a" /* AuthGuard */]) === 'function' && _d) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/Kuldeep/projects/BlogPost/client/src/login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Fixed navbar -->\n<nav class=\"navbar navbar-inverse\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n         <span class=\"sr-only\">Toggle navigation</span>\n         <span class=\"icon-bar\"></span>\n         <span class=\"icon-bar\"></span>\n         <span class=\"icon-bar\"></span>\n       </button>\n      <a class=\"navbar-brand\" routerLink=\"/\">Airline Review System</a>\n    </div>\n    <div id=\"navbar\" class=\"navbar-collapse collapse\">\n      <ul class=\"nav navbar-nav navbar-left\">\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/\">Home</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n         <li *ngIf=\"authService.loggedIn() && authService.isAdmin()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/admin\">Admin</a></li>\n        <li><a *ngIf=\"authService.loggedIn()\" routerLink=\"/profile\">Profile</a></li>        \n        <li><a *ngIf=\"!authService.loggedIn()\" routerLink=\"/login\">Login</a></li>\n        <li><a *ngIf=\"authService.loggedIn()\" href=\"#\" (click)=\"onLogoutClick()\">Logout</a></li>\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/register\">Register</a></li>\n      </ul>\n    </div>\n    <!--/.nav-collapse -->\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessagesService) {
        this.authService = authService;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
    }
    // Function to logout user
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout(); // Logout user
        this.flashMessagesService.show('You are logged out', { cssClass: 'alert-info' }); // Set custom flash message
        this.router.navigate(['/']); // Navigate back to home page
    };
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Kuldeep/projects/BlogPost/client/src/navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/new-airline/new-airline.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/new-airline/new-airline.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3>Add New Airline</h3>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <form (ngSubmit)=\"saveAirline()\" #airlineForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"name\">Name</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"airline.AirlineName\" name=\"AirlineName\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Description</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"airline.AirlineDesc\" name=\"AirlineDesc\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Founded</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"airline.Founded\" name=\"Founded\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Hubs</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"airline.Hubs\" name=\"Hubs\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Total Destinations</label>\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"airline.TotalDestinations\" name=\"TotalDestinations\" required>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!airlineForm.form.valid\">Save</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/new-airline/new-airline.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewAirlineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_airline_service__ = __webpack_require__("../../../../../src/app/services/airline.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewAirlineComponent = (function () {
    function NewAirlineComponent(airlineService, router) {
        this.airlineService = airlineService;
        this.router = router;
        this.airline = {};
    }
    NewAirlineComponent.prototype.ngOnInit = function () {
    };
    NewAirlineComponent.prototype.saveAirline = function () {
        var _this = this;
        this.airlineService.saveAirline(this.airline).then(function (result) {
            var id = result['_id'];
            _this.router.navigate(['/details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    NewAirlineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new-airline',
            template: __webpack_require__("../../../../../src/app/components/new-airline/new-airline.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/new-airline/new-airline.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_airline_service__["a" /* AirlineService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_airline_service__["a" /* AirlineService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], NewAirlineComponent);
    return NewAirlineComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Kuldeep/projects/BlogPost/client/src/new-airline.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Profile Page</h2>\n<ul class=\"list-group\">\n  <li class=\"list-group-item\">Username: {{ username }}</li>\n  <li class=\"list-group-item\">Email: {{ email }}</li>  \n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = (function () {
    function ProfileComponent(authService) {
        this.authService = authService;
        this.username = '';
        this.email = '';
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Once component loads, get user's data to display on profile
        this.authService.getProfile().subscribe(function (profile) {
            _this.username = profile.user.username; // Set username
            _this.email = profile.user.email; // Set e-mail      
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Kuldeep/projects/BlogPost/client/src/profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/public-profile/public-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/public-profile/public-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Public Profile</h1>\n\n<!-- Custom Success/Error Message -->\n<div class=\"row show-hide-message\" *ngIf=\"message\">\n  <div [ngClass]=\"messageClass\">\n    {{ message }}\n  </div>\n</div>\n\n<!-- Table to Display User Info -->\n<ul *ngIf=\"foundProfile\" class=\"list-group\">\n  <!-- Username -->\n  <li class=\"list-group-item\"><strong>Username: </strong>{{ username }}</li>\n  <!-- E-Mail -->\n  <li class=\"list-group-item\"><strong>E-Mail: </strong>{{ email }}</li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/components/public-profile/public-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PublicProfileComponent = (function () {
    function PublicProfileComponent(authService, activatedRoute) {
        this.authService = authService;
        this.activatedRoute = activatedRoute;
        this.foundProfile = false;
    }
    PublicProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUrl = this.activatedRoute.snapshot.params; // Get URL parameters on page load
        // Service to get the public profile data
        this.authService.getPublicProfile(this.currentUrl.username).subscribe(function (data) {
            // Check if user was found in database
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Return bootstrap error class
                _this.message = data.message; // Return error message
            }
            else {
                _this.username = data.user.username; // Save the username for use in HTML
                _this.email = data.user.email; // Save the email for use in HTML
                _this.foundProfile = true; // Enable profile table
            }
        });
    };
    PublicProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-public-profile',
            template: __webpack_require__("../../../../../src/app/components/public-profile/public-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/public-profile/public-profile.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], PublicProfileComponent);
    return PublicProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Kuldeep/projects/BlogPost/client/src/public-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/rating/rating.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n/***************************\r\nPulls the stars container to the left\r\n***************************/\r\n.rating {\r\n    float:left;\r\n}\r\n/***************************\r\nHides the radio buttons\r\n***************************/\r\n.rating:not(:checked) > input {\r\n    position:absolute;\r\n    top:-9999px;\r\n    clip:rect(0,0,0,0);\r\n}\r\n/***************************\r\nDefault stars styles\r\n***************************/\r\n.rating:not(:checked) > label {\r\n    float:right;\r\n    width:1em;\r\n    padding:0 .1em;\r\n    overflow:hidden;\r\n    white-space:nowrap;\r\n    cursor:pointer;\r\n    font-size:200%;\r\n    line-height:1.2;\r\n    color:#ddd;\r\n}\r\n/***************************\r\nAdds the star symbol to the labels\r\n***************************/\r\n.rating:not(:checked) > label:before {\r\n    content: '\\2605   ';\r\n}\r\n/***************************\r\nColour for the applied rating stars\r\n***************************/\r\n.rating > input:checked ~ label {\r\n    color: #f70;\r\n}\r\n/***************************\r\nColour for hovered stars when increasing the rating\r\n***************************/\r\n.rating:not(:checked) > label:hover,\r\n.rating:not(:checked) > label:hover ~ label {\r\n    color: gold;\r\n}\r\n/***************************\r\nColour for hovered stars when decreasing the rating\r\n***************************/\r\n.rating > input:checked ~ label:hover,\r\n.rating > input:checked ~ label:hover ~ label,\r\n.rating > label:hover ~ input:checked ~ label {\r\n    color: #ea0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/rating/rating.component.html":
/***/ (function(module, exports) {

module.exports = "<fieldset class=\"rating\">\n    <input type=\"radio\" \n        value=\"5\" \n        [name]=\"inpustName\"\n        [checked]=\"rating===5\" />\n    <label title=\"Rocks!\" (click)='onClick(5)'>5 stars</label>\n \n    <input type=\"radio\" \n        value=\"4\" \n        [name]=\"inpustName\"\n        [checked]=\"rating===4\" />\n    <label title=\"Pretty good\" (click)='onClick(4)'>4 stars</label>\n \n    <input type=\"radio\" \n        value=\"3\" \n        [name]=\"inpustName\"\n        [checked]=\"rating===3\" />\n    <label title=\"Meh\" (click)='onClick(3)'>3 stars</label>\n \n    <input type=\"radio\" \n        value=\"2\" \n        [name]=\"inpustName\"\n        [checked]=\"rating===2\" />\n    <label title=\"Kinda bad\" (click)='onClick(2)'>2 stars</label>\n \n    <input type=\"radio\" \n        value=\"1\" \n        [name]=\"inpustName\"\n        [checked]=\"rating===1\" />\n    <label title=\"Sucks big time\" (click)='onClick(1)'>1 star</label>\n</fieldset>"

/***/ }),

/***/ "../../../../../src/app/components/rating/rating.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RatingComponent = (function () {
    function RatingComponent() {
        this.ratingClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    RatingComponent.prototype.ngOnInit = function () {
        this.inpustName = this.itemId + '_rating';
    };
    RatingComponent.prototype.onClick = function (rating) {
        this.rating = rating;
        this.ratingClick.emit({
            itemId: this.itemId,
            rating: rating
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], RatingComponent.prototype, "rating", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], RatingComponent.prototype, "itemId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], RatingComponent.prototype, "ratingClick", void 0);
    RatingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-rating',
            template: __webpack_require__("../../../../../src/app/components/rating/rating.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/rating/rating.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], RatingComponent);
    return RatingComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Kuldeep/projects/BlogPost/client/src/rating.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Register Page</h1>\n\n<!-- Custom Success/Error Message -->\n<div class=\"row show-hide-message\">\n  <div [ngClass]=\"messageClass\">\n    {{ message }}\n  </div>\n</div>\n\n<!-- Registration Form -->\n<form [formGroup]=\"form\" (submit)=\"onRegisterSubmit()\">\n\n  <!-- Username Input -->\n  <div class=\"form-group\">\n    <label for=\"username\">Username</label>\n    <div [ngClass]=\"{'has-error': (form.controls.username.errors && form.controls.username.dirty) || (!usernameValid && form.controls.username.dirty), 'has-success': !form.controls.username.errors && usernameValid}\">\n      <input type=\"text\" name=\"username\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Username\" formControlName=\"username\" (blur)=\"checkUsername()\"  />\n      <!-- Validation -->\n      <ul class=\"help-block\">\n        <li *ngIf=\"form.controls.username.errors?.required && form.controls.username.dirty\">This field is required</li>\n        <li *ngIf=\"form.controls.username.errors?.minlength && form.controls.username.dirty || form.controls.username.errors?.maxlength && form.controls.username.dirty \">Minimum characters: 3, Maximum characters: 15</li>\n        <li *ngIf=\"form.controls.username.errors?.validateUsername && form.controls.username.dirty\">Username must not have any special characters</li>\n        <li *ngIf=\"usernameMessage\">{{ usernameMessage }}</li>\n      </ul>\n    </div>\n  </div>\n\n  <!-- Email Input -->\n  <div class=\"form-group\">\n    <label for=\"email\">Email</label>\n    <div [ngClass]=\"{'has-error': (form.controls.email.errors && form.controls.email.dirty) || (!emailValid && form.controls.email.dirty), 'has-success': !form.controls.email.errors && emailValid}\">\n      <input type=\"text\" name=\"email\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Email\" formControlName=\"email\" (blur)=\"checkEmail()\" />\n      <!-- Validation -->\n      <ul class=\"help-block\">\n        <li *ngIf=\"form.controls.email.errors?.required && form.controls.email.dirty\">This field is required</li>\n        <li *ngIf=\"(form.controls.email.errors?.minlength && form.controls.email.dirty || form.controls.email.errors?.maxlength && form.controls.email.dirty ) && form.controls.email.dirty\">Minimum characters: 5, Maximum characters: 30</li>\n        <li *ngIf=\"form.controls.email.errors?.validateEmail && form.controls.email.dirty\">This must be a valid e-mail</li>\n        <li *ngIf=\"emailMessage\">{{ emailMessage}}</li>\n      </ul>\n    </div>\n  </div>\n\n  <!-- Password Input -->\n  <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n    <div [ngClass]=\"{'has-error': (form.controls.password.errors && form.controls.password.dirty), 'has-success': !form.controls.password.errors}\">\n      <input type=\"password\" name=\"password\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Password\" formControlName=\"password\" />\n      <!-- Validation -->\n      <ul class=\"help-block\">\n        <li *ngIf=\"form.controls.password.errors?.required && form.controls.password.dirty\">This field is required</li>\n        <li *ngIf=\"form.controls.password.errors?.minlength && form.controls.password.dirty || form.controls.password.errors?.maxlength && form.controls.password.dirty \">Minimum characters: 8, Maximum characters: 35</li>\n        <li *ngIf=\"form.controls.password.errors?.validatePassword && form.controls.password.dirty\">Password must be at least 8 characters but no more than 35</li>\n      </ul>\n    </div>\n  </div>\n\n  <!-- Confirm Password Input -->\n  <div class=\"form-group\">\n    <label for=\"confirm\">Confirm Password</label>\n    <div [ngClass]=\"{'has-error': (form.controls.confirm.errors && form.controls.confirm.dirty) || (form.errors?.matchingPasswords && form.controls.confirm.dirty), 'has-success': !form.controls.confirm.errors && !form.errors?.matchingPasswords}\">\n      <input type=\"password\" name=\"confirm\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Confirm Password\" formControlName=\"confirm\" />\n      <!-- Validation -->\n      <ul class=\"help-block\">\n        <li *ngIf=\"form.controls.confirm.errors?.required && form.controls.confirm.dirty\">This field is required</li>\n        <li *ngIf=\"form.errors?.matchingPasswords && form.controls.confirm.dirty\">Password do not match</li>\n      </ul>\n    </div>\n  </div>\n\n  <!-- Submit Input -->\n  <input [disabled]=\"!form.valid || processing || !emailValid || !usernameValid\" type=\"submit\" class=\"btn btn-primary\" value=\"Submit\" />\n\n</form>\n<!-- Registration Form /-->\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.processing = false;
        this.createForm(); // Create Angular 2 Form when component loads
    }
    // Function to create registration form
    RegisterComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            // Email Input
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(30),
                    this.validateEmail // Custom validation
                ])],
            // Username Input
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(3),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(15),
                    this.validateUsername // Custom validation
                ])],
            // Password Input
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(8),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(35),
                    this.validatePassword // Custom validation
                ])],
            // Confirm Password Input
            confirm: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required] // Field is required
        }, { validator: this.matchingPasswords('password', 'confirm') }); // Add custom validator to form for matching passwords
    };
    // Function to disable the registration form
    RegisterComponent.prototype.disableForm = function () {
        this.form.controls['email'].disable();
        this.form.controls['username'].disable();
        this.form.controls['password'].disable();
        this.form.controls['confirm'].disable();
    };
    // Function to enable the registration form
    RegisterComponent.prototype.enableForm = function () {
        this.form.controls['email'].enable();
        this.form.controls['username'].enable();
        this.form.controls['password'].enable();
        this.form.controls['confirm'].enable();
    };
    // Function to validate e-mail is proper format
    RegisterComponent.prototype.validateEmail = function (controls) {
        // Create a regular expression
        var regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        // Test email against regular expression
        if (regExp.test(controls.value)) {
            return null; // Return as valid email
        }
        else {
            return { 'validateEmail': true }; // Return as invalid email
        }
    };
    // Function to validate username is proper format
    RegisterComponent.prototype.validateUsername = function (controls) {
        // Create a regular expression
        var regExp = new RegExp(/^[a-zA-Z0-9]+$/);
        // Test username against regular expression
        if (regExp.test(controls.value)) {
            return null; // Return as valid username
        }
        else {
            return { 'validateUsername': true }; // Return as invalid username
        }
    };
    // Function to validate password
    RegisterComponent.prototype.validatePassword = function (controls) {
        // Create a regular expression
        var regExp = new RegExp(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/);
        // Test password against regular expression
        if (regExp.test(controls.value)) {
            return null; // Return as valid password
        }
        else {
            return { 'validatePassword': true }; // Return as invalid password
        }
    };
    // Funciton to ensure passwords match
    RegisterComponent.prototype.matchingPasswords = function (password, confirm) {
        return function (group) {
            // Check if both fields are the same
            if (group.controls[password].value === group.controls[confirm].value) {
                return null; // Return as a match
            }
            else {
                return { 'matchingPasswords': true }; // Return as error: do not match
            }
        };
    };
    // Function to submit form
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        this.processing = true; // Used to notify HTML that form is in processing, so that it can be disabled
        this.disableForm(); // Disable the form
        // Create user object form user's inputs
        var user = {
            email: this.form.get('email').value,
            username: this.form.get('username').value,
            password: this.form.get('password').value // Password input field
        };
        // Function from authentication service to register user
        this.authService.registerUser(user).subscribe(function (data) {
            // Resposne from registration attempt
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Set an error class
                _this.message = data.message; // Set an error message
                _this.processing = false; // Re-enable submit button
                _this.enableForm(); // Re-enable form
            }
            else {
                _this.messageClass = 'alert alert-success'; // Set a success class
                _this.message = data.message; // Set a success message
                // After 2 second timeout, navigate to the login page
                setTimeout(function () {
                    _this.router.navigate(['/login']); // Redirect to login view
                }, 2000);
            }
        });
    };
    // Function to check if e-mail is taken
    RegisterComponent.prototype.checkEmail = function () {
        var _this = this;
        // Function from authentication file to check if e-mail is taken
        this.authService.checkEmail(this.form.get('email').value).subscribe(function (data) {
            // Check if success true or false was returned from API
            if (!data.success) {
                _this.emailValid = false; // Return email as invalid
                _this.emailMessage = data.message; // Return error message
            }
            else {
                _this.emailValid = true; // Return email as valid
                _this.emailMessage = data.message; // Return success message
            }
        });
    };
    // Function to check if username is available
    RegisterComponent.prototype.checkUsername = function () {
        var _this = this;
        // Function from authentication file to check if username is taken
        this.authService.checkUsername(this.form.get('username').value).subscribe(function (data) {
            // Check if success true or success false was returned from API
            if (!data.success) {
                _this.usernameValid = false; // Return username as invalid
                _this.usernameMessage = data.message; // Return error message
            }
            else {
                _this.usernameValid = true; // Return username as valid
                _this.usernameMessage = data.message; // Return success message
            }
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Kuldeep/projects/BlogPost/client/src/register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/view-airline/view-airline.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/view-airline/view-airline.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n        <h3>Airline Detail</h3>\n        <br />\n       \n    </div>\n</div>\n  <dl class=\"list\">\n    <dt>Name</dt>\n    <dd>{{ airline.AirlineName }}</dd>\n    <dt>Description</dt>\n    <dd>{{ airline.AirlineDesc }}</dd>\n    <dt>Hubs</dt>\n    <dd>{{ airline.Hubs }}</dd>\n    <dt>Founded</dt>\n    <dd>{{ airline.Founded }}</dd>\n    <dt>Total Destination</dt>\n    <dd>{{ airline.TotalDestinations }}</dd>\n    <dt>Update Date</dt>\n    <dd>{{ airline.updated_at }}</dd>\n  </dl>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <a [routerLink]=\"['/edit', airline._id]\" class=\"btn btn-success\">EDIT</a>\n      <button class=\"btn btn-danger\" type=\"button\" (click)=\"deleteAirline(airline._id)\">DELETE</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/view-airline/view-airline.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewAirlineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_airline_service__ = __webpack_require__("../../../../../src/app/services/airline.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewAirlineComponent = (function () {
    function ViewAirlineComponent(route, router, airlineService) {
        this.route = route;
        this.router = router;
        this.airlineService = airlineService;
        this.airline = {};
    }
    ViewAirlineComponent.prototype.ngOnInit = function () {
        this.getAirlineDetail(this.route.snapshot.params['id']);
    };
    ViewAirlineComponent.prototype.getAirlineDetail = function (id) {
        var _this = this;
        this.airlineService.showAirline(id).then(function (res) {
            _this.airline = res;
            console.log(_this.airline);
        }, function (err) {
            console.log(err);
        });
    };
    ViewAirlineComponent.prototype.deleteAirline = function (id) {
        var _this = this;
        this.airlineService.deleteAirline(id).then(function (result) {
            _this.ngOnInit();
        }, function (err) {
            console.log(err);
        });
    };
    ViewAirlineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-view-airline',
            template: __webpack_require__("../../../../../src/app/components/view-airline/view-airline.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/view-airline/view-airline.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_airline_service__["a" /* AirlineService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_airline_service__["a" /* AirlineService */]) === 'function' && _c) || Object])
    ], ViewAirlineComponent);
    return ViewAirlineComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Kuldeep/projects/BlogPost/client/src/view-airline.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/admin.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminGuard = (function () {
    function AdminGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    // Function to check if user is authorized to view route
    AdminGuard.prototype.canActivate = function (router, state) {
        // Check if user is logged in and admin
        if (this.authService.loggedIn() && this.authService.isAdmin()) {
            return true;
        }
        else {
            this.redirectUrl = state.url; // Grab previous urul
            this.router.navigate(['/login']); // Return error and route to login page
            return false; // Return false: user not authorized to view page
        }
    };
    AdminGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AdminGuard);
    return AdminGuard;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Kuldeep/projects/BlogPost/client/src/admin.guard.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    // Function to check if user is authorized to view route
    AuthGuard.prototype.canActivate = function (router, state) {
        // Check if user is logge din
        if (this.authService.loggedIn()) {
            return true; // Return true: User is allowed to view route
        }
        else {
            this.redirectUrl = state.url; // Grab previous urul
            this.router.navigate(['/login']); // Return error and route to login page
            return false; // Return false: user not authorized to view page
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Kuldeep/projects/BlogPost/client/src/auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/guards/notAuth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotAuthGuard = (function () {
    function NotAuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    // Function to determine whether user is authorized to view route
    NotAuthGuard.prototype.canActivate = function () {
        // Check if user is logged in
        if (this.authService.loggedIn()) {
            this.router.navigate(['/']); // Return error, route to home
            return false; // Return false: user not allowed to view route
        }
        else {
            return true; // Return true: user is allowed to view route
        }
    };
    NotAuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], NotAuthGuard);
    return NotAuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Kuldeep/projects/BlogPost/client/src/notAuth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/airline.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AirlineService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AirlineService = (function () {
    function AirlineService(authService, http) {
        this.authService = authService;
        this.http = http;
        this.domain = this.authService.domain;
    }
    // Function to create headers, add token, to be used in HTTP requests
    AirlineService.prototype.createAuthenticationHeaders = function () {
        this.authService.loadToken(); // Get token so it can be attached to headers
        // Headers configuration options
        this.options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({
                'Content-Type': 'application/json',
                'authorization': this.authService.authToken // Attach token
            })
        });
    };
    AirlineService.prototype.getAirlineList = function () {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.get(this.domain + 'api', this.options);
    };
    AirlineService.prototype.getAllAirlines = function () {
        var _this = this;
        this.createAuthenticationHeaders(); // Create headers
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.domain + 'airline', _this.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    AirlineService.prototype.showAirline = function (id) {
        var _this = this;
        this.createAuthenticationHeaders(); // Create headers
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.domain + 'airline/' + id, _this.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    AirlineService.prototype.saveAirline = function (data) {
        var _this = this;
        this.createAuthenticationHeaders(); // Create headers
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.domain + 'airline', data, _this.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    AirlineService.prototype.updateAirline = function (id, data) {
        var _this = this;
        this.createAuthenticationHeaders(); // Create headers
        return new Promise(function (resolve, reject) {
            _this.http.put(_this.domain + 'airline/' + id, data, _this.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    AirlineService.prototype.deleteAirline = function (id) {
        var _this = this;
        this.createAuthenticationHeaders(); // Create headers
        return new Promise(function (resolve, reject) {
            _this.http.delete(_this.domain + 'airline/' + id, _this.options)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    AirlineService.prototype.postReview = function (id, comment, rating, reviewer) {
        this.createAuthenticationHeaders(); // Create headers
        // Create reviewData to pass to backend
        var reviewData = {
            id: id,
            comment: comment,
            rating: rating,
            reviewer: reviewer
        };
        return this.http.post(this.domain + 'airline/review', reviewData, this.options).map(function (res) { return res.json(); });
    };
    AirlineService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === 'function' && _b) || Object])
    ], AirlineService);
    return AirlineService;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Kuldeep/projects/BlogPost/client/src/airline.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        // domain = ""; // Production
        this.domain = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].domain;
    }
    // Function to create headers, add token, to be used in HTTP requests
    AuthService.prototype.createAuthenticationHeaders = function () {
        this.loadToken(); // Get token so it can be attached to headers
        // Headers configuration options
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({
                'Content-Type': 'application/json',
                'authorization': this.authToken // Attach token
            })
        });
    };
    // Function to get token from client local storage
    AuthService.prototype.loadToken = function () {
        this.authToken = localStorage.getItem('token');
        ; // Get token and asssign to variable to be used elsewhere
    };
    // Function to register user accounts
    AuthService.prototype.registerUser = function (user) {
        return this.http.post(this.domain + 'authentication/register', user).map(function (res) { return res.json(); });
    };
    // Function to check if username is taken
    AuthService.prototype.checkUsername = function (username) {
        return this.http.get(this.domain + 'authentication/checkUsername/' + username).map(function (res) { return res.json(); });
    };
    // Function to check if e-mail is taken
    AuthService.prototype.checkEmail = function (email) {
        return this.http.get(this.domain + 'authentication/checkEmail/' + email).map(function (res) { return res.json(); });
    };
    // Function to login user
    AuthService.prototype.login = function (user) {
        return this.http.post(this.domain + 'authentication/login', user).map(function (res) { return res.json(); });
    };
    // Function to logout
    AuthService.prototype.logout = function () {
        this.authToken = null; // Set token to null
        this.user = null; // Set user to null
        localStorage.clear(); // Clear local storage
    };
    // Function to store user's data in client local storage
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('token', token); // Set token in local storage
        localStorage.setItem('user', JSON.stringify(user)); // Set user in local storage as string
        this.authToken = token; // Assign token to be used elsewhere
        this.user = user; // Set user to be used elsewhere
    };
    // Function to get user's profile data
    AuthService.prototype.getProfile = function () {
        this.createAuthenticationHeaders(); // Create headers before sending to API
        return this.http.get(this.domain + 'authentication/profile', this.options).map(function (res) { return res.json(); });
    };
    // Function to get public profile data
    AuthService.prototype.getPublicProfile = function (username) {
        this.createAuthenticationHeaders(); // Create headers before sending to API
        return this.http.get(this.domain + 'authentication/publicProfile/' + username, this.options).map(function (res) { return res.json(); });
    };
    // Function to check if user is logged in
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
    };
    //is admin
    AuthService.prototype.isAdmin = function () {
        var userObj = JSON.parse(localStorage.getItem('user'));
        if (userObj) {
            if (userObj['isAdmin'])
                return true;
            else
                return false;
        }
        else {
            return false;
        }
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=C:/Users/Kuldeep/projects/BlogPost/client/src/auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/blog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogService = (function () {
    function BlogService(authService, http) {
        this.authService = authService;
        this.http = http;
        this.domain = this.authService.domain;
    }
    // Function to create headers, add token, to be used in HTTP requests
    BlogService.prototype.createAuthenticationHeaders = function () {
        this.authService.loadToken(); // Get token so it can be attached to headers
        // Headers configuration options
        this.options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({
                'Content-Type': 'application/json',
                'authorization': this.authService.authToken // Attach token
            })
        });
    };
    // Function to create a new blog post
    BlogService.prototype.newBlog = function (blog) {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.post(this.domain + 'blogs/newBlog', blog, this.options).map(function (res) { return res.json(); });
    };
    // Function to get all blogs from the database
    BlogService.prototype.getAllBlogs = function () {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.get(this.domain + 'blogs/allBlogs', this.options).map(function (res) { return res.json(); });
    };
    // Function to get the blog using the id
    BlogService.prototype.getSingleBlog = function (id) {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.get(this.domain + 'blogs/singleBlog/' + id, this.options).map(function (res) { return res.json(); });
    };
    // Function to edit/update blog post
    BlogService.prototype.editBlog = function (blog) {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.put(this.domain + 'blogs/updateBlog/', blog, this.options).map(function (res) { return res.json(); });
    };
    // Function to delete a blog
    BlogService.prototype.deleteBlog = function (id) {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.delete(this.domain + 'blogs/deleteBlog/' + id, this.options).map(function (res) { return res.json(); });
    };
    // Function to like a blog post
    BlogService.prototype.likeBlog = function (id) {
        var blogData = { id: id };
        return this.http.put(this.domain + 'blogs/likeBlog/', blogData, this.options).map(function (res) { return res.json(); });
    };
    // Function to dislike a blog post
    BlogService.prototype.dislikeBlog = function (id) {
        var blogData = { id: id };
        return this.http.put(this.domain + 'blogs/dislikeBlog/', blogData, this.options).map(function (res) { return res.json(); });
    };
    // Function to post a comment on a blog post
    BlogService.prototype.postComment = function (id, comment) {
        this.createAuthenticationHeaders(); // Create headers
        // Create blogData to pass to backend
        var blogData = {
            id: id,
            comment: comment
        };
        return this.http.post(this.domain + 'blogs/comment', blogData, this.options).map(function (res) { return res.json(); });
    };
    BlogService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === 'function' && _b) || Object])
    ], BlogService);
    return BlogService;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Kuldeep/projects/BlogPost/client/src/blog.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false,
    domain: "http://localhost:8080/"
};
//# sourceMappingURL=C:/Users/Kuldeep/projects/BlogPost/client/src/environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Kuldeep/projects/BlogPost/client/src/main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map