webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var list_product_component_1 = __webpack_require__("./src/app/list-product/list-product.component.ts");
var detail_product_component_1 = __webpack_require__("./src/app/detail-product/detail-product.component.ts");
var new_product_component_1 = __webpack_require__("./src/app/new-product/new-product.component.ts");
var update_product_component_1 = __webpack_require__("./src/app/update-product/update-product.component.ts");
var routes = [
    { path: 'products', component: list_product_component_1.ListProductComponent },
    { path: 'products/edit/:id', component: update_product_component_1.UpdateProductComponent },
    { path: 'products/new', component: new_product_component_1.NewProductComponent },
    { path: 'products/:id', component: detail_product_component_1.DetailProductComponent },
    { path: '', pathMatch: 'full', redirectTo: 'products' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Commerce Manager</h1>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var list_product_component_1 = __webpack_require__("./src/app/list-product/list-product.component.ts");
var new_product_component_1 = __webpack_require__("./src/app/new-product/new-product.component.ts");
var update_product_component_1 = __webpack_require__("./src/app/update-product/update-product.component.ts");
var detail_product_component_1 = __webpack_require__("./src/app/detail-product/detail-product.component.ts");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                list_product_component_1.ListProductComponent,
                new_product_component_1.NewProductComponent,
                update_product_component_1.UpdateProductComponent,
                detail_product_component_1.DetailProductComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
            ],
            providers: [http_service_1.HttpService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/detail-product/detail-product.component.css":
/***/ (function(module, exports) {

module.exports = "label{\n    width:70px;\n    display:inline-block;\n}\n#buttons{\n    display:inline-block;\n    margin-left:70px;\n}\n"

/***/ }),

/***/ "./src/app/detail-product/detail-product.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Product Details</h1> \n<p>To delete a product, the qty must be 0.</p>\n<p><label >Name</label>{{product.name}}</p>\n<p><label >Qty</label>{{product.qty}}</p>\n<p><label >Price</label>${{product.price}}</p>\n{{disableDelete}}\n<p id=\"buttons\"> \n  <button [routerLink]=\"['/products']\">BACK</button> \n  <button *ngIf=\"!disableDelete\" (click)=\"deleteProduct()\">DELETE</button>\n  <button *ngIf=\"disableDelete\" disabled=\"disabled\">DELETE</button>\n</p>"

/***/ }),

/***/ "./src/app/detail-product/detail-product.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var DetailProductComponent = /** @class */ (function () {
    function DetailProductComponent(_route, _router, _httpService) {
        var _this = this;
        this._route = _route;
        this._router = _router;
        this._httpService = _httpService;
        this.disableDelete = true;
        this.product = { name: '', qty: null, price: null };
        this._route.paramMap.subscribe(function (params) {
            // console.log(params.get('id'));
            _this._httpService.getProduct(params.get('id')).subscribe(function (data) {
                // console.log(data);
                _this.product = data;
                if (_this.product.qty > 0) {
                    _this.disableDelete = true;
                }
                else {
                    _this.disableDelete = false;
                }
            });
        });
    }
    DetailProductComponent.prototype.deleteProduct = function () {
        var _this = this;
        this._httpService.deleteProduct(this.product._id).subscribe(function (data) {
            _this._router.navigate(['/products']);
        });
    };
    DetailProductComponent.prototype.ngOnInit = function () {
    };
    DetailProductComponent = __decorate([
        core_1.Component({
            selector: 'app-detail-product',
            template: __webpack_require__("./src/app/detail-product/detail-product.component.html"),
            styles: [__webpack_require__("./src/app/detail-product/detail-product.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, http_service_1.HttpService])
    ], DetailProductComponent);
    return DetailProductComponent;
}());
exports.DetailProductComponent = DetailProductComponent;


/***/ }),

/***/ "./src/app/http.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.getProducts = function () {
        return this._http.get('/api/products');
    };
    HttpService.prototype.createProduct = function (product) {
        return this._http.post('/api/products', product);
    };
    HttpService.prototype.getProduct = function (id) {
        return this._http.get('api/products/' + id);
    };
    HttpService.prototype.deleteProduct = function (id) {
        return this._http.delete('/api/products/' + id);
    };
    HttpService.prototype.updateProduct = function (product) {
        return this._http.put('/api/products/' + product._id, product);
    };
    HttpService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;


/***/ }),

/***/ "./src/app/list-product/list-product.component.css":
/***/ (function(module, exports) {

module.exports = "button{\n    height:25px;\n    width:80px;\n    border-radius: 4px;\n    margin:4px;\n}\nh1{\n    display: inline-block;\n    margin-right: 160px;\n}\ntable td,th{\n    border:solid black 1px;\n}\ntable{\n    border-collapse: collapse;\n}\ntable th{\n    background-color: lightgray;\n}\n#add{\n    width:130px;\n}"

/***/ }),

/***/ "./src/app/list-product/list-product.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Product List</h1>\n<button id=\"add\" [routerLink]=\"['/products/new']\">Add New Product</button>\n<table>\n  <thead>\n    <th>Id</th>\n    <th>Name</th>\n    <th>Qty</th>\n    <th>Price</th>\n    <th>Actions</th>      \n  </thead>\n  <tr *ngFor=\"let product of products\">\n    <td>{{product._id}}</td>\n    <td>{{product.name}}</td>\n    <td>{{product.qty}}</td>\n    <td>${{product.price}}</td>\n    <td>\n      <button [routerLink]=\"['/products/edit',product._id]\">Edit</button>\n      <button [routerLink]=\"['/products',product._id]\">Details</button>\n    </td>\n  </tr>\n</table>\n"

/***/ }),

/***/ "./src/app/list-product/list-product.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var ListProductComponent = /** @class */ (function () {
    function ListProductComponent(_httpService) {
        var _this = this;
        this._httpService = _httpService;
        this.products = [];
        this._httpService.getProducts().subscribe(function (data) {
            _this.products = data;
        });
    }
    ListProductComponent.prototype.ngOnInit = function () {
    };
    ListProductComponent = __decorate([
        core_1.Component({
            selector: 'app-list-product',
            template: __webpack_require__("./src/app/list-product/list-product.component.html"),
            styles: [__webpack_require__("./src/app/list-product/list-product.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], ListProductComponent);
    return ListProductComponent;
}());
exports.ListProductComponent = ListProductComponent;


/***/ }),

/***/ "./src/app/new-product/new-product.component.css":
/***/ (function(module, exports) {

module.exports = "label{\n    width:70px;\n    display:inline-block;\n}\n#buttons{\n    display:inline-block;\n    margin-left:70px;\n}\nul li{\n    list-style: none;\n    color:red;\n}"

/***/ }),

/***/ "./src/app/new-product/new-product.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>New Product</h1>\n<ul *ngFor=\"let error of errors\">\n  <li>{{error.message}}</li>\n</ul>\n<ul>\n  <li *ngIf=\"name.invalid\">Name can not be blank</li>\n  <!-- <li *ngIf=\"name.errors.required\">Name too short</li> -->\n  <li *ngIf=\"qty.invalid\">qty can not be blank</li>\n  <li *ngIf=\"price.invalid\">price can not be blank</li>  \n  <!-- <li *ngIf=\"qty.errors.min\">qty must greater than 0</li> -->\n  <!-- <li *ngIf=\"price.errors.min\">price must greater than 0</li>    -->\n</ul>\n<form name=\"new\">\n  <p><label>Name:</label><input type=\"text\" name=\"product.name\" [(ngModel)]=\"product.name\" required minlength=\"3\" #name=\"ngModel\"> </p>\n  <p><label>Qty:</label><input type=\"text\" name=\"product.qty\" [(ngModel)]=\"product.qty\" required min=\"0\" #qty=\"ngModel\"> </p>\n  <p><label>Price:</label><input type=\"text\" name=\"product.price\" [(ngModel)]=\"product.price\" required min=\"0\" #price=\"ngModel\"> </p>\n</form>\n<p id=\"buttons\"> \n  <button (click)=\"resetCreate()\">RESET</button>\n  <button *ngIf=\"name.valid&&qty.valid&&price.valid\" (click)=\"createProduct()\">CREATE</button>\n  <button *ngIf=\"name.invalid||qty.invalid||price.invalid\" disabled=\"disabled\">CREATE</button>\n</p>\n"

/***/ }),

/***/ "./src/app/new-product/new-product.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var NewProductComponent = /** @class */ (function () {
    function NewProductComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
        this.product = { name: '', qty: null, price: null };
        this.errors = [];
    }
    NewProductComponent.prototype.ngOnInit = function () {
    };
    NewProductComponent.prototype.createProduct = function () {
        var _this = this;
        this.errors = [];
        this._httpService.createProduct(this.product).subscribe(function (data) {
            _this.product = { name: '', qty: null, price: null };
            if (data.errors) {
                for (var key in data.errors) {
                    _this.errors.push(data.errors[key]);
                }
            }
            else {
                _this._router.navigate(['/products']);
            }
        });
    };
    NewProductComponent.prototype.resetCreate = function () {
        this.product = { name: '', qty: null, price: null };
        this.errors = [];
    };
    NewProductComponent = __decorate([
        core_1.Component({
            selector: 'app-new-product',
            template: __webpack_require__("./src/app/new-product/new-product.component.html"),
            styles: [__webpack_require__("./src/app/new-product/new-product.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService, router_1.Router])
    ], NewProductComponent);
    return NewProductComponent;
}());
exports.NewProductComponent = NewProductComponent;


/***/ }),

/***/ "./src/app/update-product/update-product.component.css":
/***/ (function(module, exports) {

module.exports = "label{\n    width:70px;\n    display:inline-block;\n}\n#buttons{\n    display:inline-block;\n    margin-left:70px;\n}\nul li{\n    list-style: none;\n    color:red;\n}"

/***/ }),

/***/ "./src/app/update-product/update-product.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Update Product</h1>\n<ul *ngFor=\"let error of errors\">\n  <li>{{error.message}}</li>\n</ul>\n<form>\n  <p><label>Name:</label><input type=\"text\" name=\"product.name\" [(ngModel)]=\"product.name\" required minlength=\"3\" #name=\"ngModel\"> </p>\n  <p><label>Qty:</label><input type=\"number\" name=\"product.qty\" [(ngModel)]=\"product.qty\" required min=\"0\" #qty=\"ngModel\"> </p>\n  <p><label>Price($):</label><input type=\"number\" name=\"product.price\" [(ngModel)]=\"product.price\" required min=\"0\" #price=\"ngModel\"> </p>\n</form>\n<p id=\"buttons\"> \n  <button (click)=\"resetUpdate()\">RESET</button> \n  <button *ngIf=\"name.valid&&qty.valid&&price.valid\" (click)=\"updateProduct()\">UPDATE</button> \n  <button *ngIf=\"name.invalid||qty.invalid||price.invalid\" disabled=\"disabled\">UPDATE</button>\n</p>\n\n"

/***/ }),

/***/ "./src/app/update-product/update-product.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var UpdateProductComponent = /** @class */ (function () {
    function UpdateProductComponent(_route, _router, _httpService) {
        this._route = _route;
        this._router = _router;
        this._httpService = _httpService;
        this.errors = [];
        this.product = { name: '', qty: null, price: null };
        this.getProduct();
    }
    UpdateProductComponent.prototype.getProduct = function () {
        var _this = this;
        this._route.paramMap.subscribe(function (params) {
            // console.log(params.get('id'));
            _this._httpService.getProduct(params.get('id')).subscribe(function (data) {
                // console.log(data);
                _this.product = data;
            });
        });
    };
    UpdateProductComponent.prototype.updateProduct = function () {
        var _this = this;
        this.errors = [];
        this._httpService.updateProduct(this.product).subscribe(function (data) {
            if (data.errors) {
                for (var key in data.errors) {
                    _this.errors.push(data.errors[key]);
                }
            }
            else {
                _this._router.navigate(['/products']);
            }
        });
    };
    UpdateProductComponent.prototype.resetUpdate = function () {
        this.getProduct();
    };
    UpdateProductComponent.prototype.ngOnInit = function () {
    };
    UpdateProductComponent = __decorate([
        core_1.Component({
            selector: 'app-update-product',
            template: __webpack_require__("./src/app/update-product/update-product.component.html"),
            styles: [__webpack_require__("./src/app/update-product/update-product.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, http_service_1.HttpService])
    ], UpdateProductComponent);
    return UpdateProductComponent;
}());
exports.UpdateProductComponent = UpdateProductComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map