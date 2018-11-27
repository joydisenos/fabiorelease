webpackJsonp([18],{

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminDetallesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminDetallesPage = /** @class */ (function () {
    function AdminDetallesPage(navCtrl, navParams, afDatabase, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afDatabase = afDatabase;
        this.alertCtrl = alertCtrl;
        this.inversion = {};
        this.params = navParams.data;
        this.inversionRef = this.afDatabase.object('usuarios/'
            + this.params.userkey
            + '/inversiones/'
            + this.params.inversionkey);
        this.inversion = this.inversionRef.snapshotChanges()
            .subscribe(function (inversion) {
            _this.inversion = inversion.payload.val();
        });
    }
    AdminDetallesPage.prototype.actualizarInversion = function () {
        this.afDatabase.object('usuarios/'
            + this.params.userkey
            + '/inversiones/'
            + this.params.inversionkey).update(this.inversion);
        var alert = this.alertCtrl.create({
            title: 'Actualizada',
            subTitle: 'Inversión Modificada con Éxito',
            buttons: ['Aceptar']
        });
        alert.present();
        this.navCtrl.pop();
    };
    AdminDetallesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin-detalles',template:/*ion-inline-start:"C:\xampp\htdocs\fabio\src\pages\admin-detalles\admin-detalles.html"*/'<ion-header>\n    <ion-navbar class="principal">\n      \n  \n      <div class="logo">\n        <img src="assets/imgs/logof.png" alt="">\n      </div>\n  \n      <ion-buttons start>\n        <button ion-button icon-only>\n          <ion-icon name="contact" color="oro"></ion-icon>\n        </button>\n      </ion-buttons>\n  \n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n\n  <div class="center">\n    <h3 style="color: #D4AF37">Modificar {{inversion.nombre}}</h3>\n  </div>\n\n    <ion-list no-lines>\n        <ion-item>\n            <ion-label floating>Nombre</ion-label>\n            <ion-input\n              [(ngModel)]="inversion.nombre"\n              type="text"\n              required\n            >\n            </ion-input>\n          </ion-item>\n\n          <ion-item>\n              <ion-label floating>Descripción</ion-label>\n              <ion-input\n                [(ngModel)]="inversion.descripcion"\n                type="text"\n                required\n              >\n              </ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label floating>Cantidad de Inversión</ion-label>\n                <ion-input\n                  [(ngModel)]="inversion.inversion"\n                  type="number"\n                  required\n                >\n                </ion-input>\n              </ion-item>\n\n              <ion-item>\n                  <ion-label floating>Fecha de Inversión</ion-label>\n                  <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="inversion.fecha"></ion-datetime>\n                </ion-item>\n\n                <ion-item>\n                  <button ion-button (click)="actualizarInversion()">\n                      Actualizar\n                  </button>\n                </ion-item>\n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\fabio\src\pages\admin-detalles\admin-detalles.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AdminDetallesPage);
    return AdminDetallesPage;
}());

//# sourceMappingURL=admin-detalles.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminUsuarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_detalles_admin_detalles__ = __webpack_require__(163);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminUsuarioPage = /** @class */ (function () {
    function AdminUsuarioPage(navCtrl, navParams, afDatabase, afAuth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afDatabase = afDatabase;
        this.afAuth = afAuth;
        this.perfil = {};
        this.seccion = 'inversion';
        this.inversion = {
            nombre: '',
            descripcion: '',
            inversion: '',
            fecha: ''
        };
        this.params = {
            userkey: '',
            inversionkey: ''
        };
        this.movimiento = {
            cantidad: '',
            tipo: '',
            estatus: '',
            concepto: ''
        };
        this.mensaje = {
            mensaje: '',
            user: 'admin'
        };
        this.key = this.navParams.get('key');
        this.params.userkey = this.navParams.get('key');
        this.perfilRef = this.afDatabase.object('usuarios/' + this.key + '/perfil');
        this.perfil = this.perfilRef.snapshotChanges().subscribe(function (perfil) {
            _this.perfil = perfil.payload.val();
        });
        this.inversionesRef = this.afDatabase.list('usuarios/' + this.key + '/inversiones');
        this.inversiones = this.inversionesRef
            .snapshotChanges()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (inversiones) {
            return inversiones.map(function (inversion) { return (__assign({ key: inversion.key }, inversion.payload.val())); });
        }));
        this.movimientosRef = this.afDatabase.list('usuarios/' + this.key + '/movimientos');
        this.movimientos = this.movimientosRef
            .snapshotChanges()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (movimientos) {
            return movimientos.map(function (movimiento) { return (__assign({ key: movimiento.key }, movimiento.payload.val())); });
        }));
        this.mensajesRef = this.afDatabase.list('usuarios/' + this.key + '/mensajes');
        this.mensajes = this.mensajesRef
            .snapshotChanges()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (mensajes) {
            return mensajes.map(function (mensaje) { return (__assign({ key: mensaje.key }, mensaje.payload.val())); });
        }));
    }
    AdminUsuarioPage.prototype.agregarInversion = function () {
        this.afDatabase.list('usuarios/' + this.key + '/inversiones')
            .push(this.inversion);
    };
    AdminUsuarioPage.prototype.abrirDetalles = function (key) {
        this.params.inversionkey = key;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__admin_detalles_admin_detalles__["a" /* AdminDetallesPage */], this.params);
    };
    AdminUsuarioPage.prototype.agregarAbono = function () {
        this.movimiento.estatus = 'aprobado';
        this.movimiento.tipo = 'abono';
        this.afDatabase.list('usuarios/'
            + this.key
            + '/movimientos')
            .push(this.movimiento);
        this.movimiento = {
            cantidad: '',
            tipo: '',
            estatus: '',
            concepto: ''
        };
    };
    AdminUsuarioPage.prototype.enviarMensaje = function () {
        this.afDatabase.list('usuarios/' + this.key + '/mensajes')
            .push(this.mensaje);
        this.mensaje.mensaje = '';
    };
    AdminUsuarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin-usuario',template:/*ion-inline-start:"C:\xampp\htdocs\fabio\src\pages\admin-usuario\admin-usuario.html"*/'<ion-header>\n    <ion-navbar class="principal">\n     \n  \n      <div class="logo">\n        <img src="assets/imgs/logof.png" alt="">\n      </div>\n  \n      <ion-buttons start>\n        <button ion-button icon-only>\n          <ion-icon name="contact" color="oro"></ion-icon>\n        </button>\n      </ion-buttons>\n\n      \n      \n    </ion-navbar>\n   \n        <ion-segment [(ngModel)]="seccion">\n          <ion-segment-button value="inversion">\n            Inversiones\n          </ion-segment-button>\n          <ion-segment-button value="recarga">\n            Recargas\n          </ion-segment-button>\n          <!--<ion-segment-button value="solicitud">\n              Solicitudes\n          </ion-segment-button>-->\n          <ion-segment-button value="chat">\n              Chat\n            </ion-segment-button>\n        </ion-segment>\n      \n    \n  </ion-header>\n\n\n<ion-content padding>\n\n  <div *ngIf="seccion == \'inversion\'">\n      <div class="center">\n          <h3 style="color: #D4AF37">Agregar Inversión</h3>\n      </div>\n\n      <ion-list no-lines>\n          <ion-item>\n              <ion-label floating>Nombre</ion-label>\n              <ion-input\n                [(ngModel)]="inversion.nombre"\n                type="text"\n                required\n              >\n              </ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label floating>Descripción</ion-label>\n                <ion-input\n                  [(ngModel)]="inversion.descripcion"\n                  type="text"\n                  required\n                >\n                </ion-input>\n              </ion-item>\n\n              <ion-item>\n                  <ion-label floating>Cantidad de Inversión</ion-label>\n                  <ion-input\n                    [(ngModel)]="inversion.inversion"\n                    type="number"\n                    required\n                  >\n                  </ion-input>\n                </ion-item>\n\n                <ion-item>\n                    <ion-label floating>Fecha de Inversión</ion-label>\n                    <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="inversion.fecha"></ion-datetime>\n                  </ion-item>\n\n                  <ion-item>\n                    <button ion-button (click)="agregarInversion()">\n                        Agregar\n                    </button>\n                  </ion-item>\n      </ion-list>\n\n      <ion-list class="lista-dark" no-lines>\n        \n            <button ion-item *ngFor="let inversion of inversiones | async"  (click)="abrirDetalles(inversion.key)">\n              <ion-icon name="logo-euro" color="oro" start></ion-icon>\n              {{inversion.nombre}}\n              <span class="mini" item-end>{{inversion.inversion}}€</span>\n            </button>\n            \n      </ion-list>\n  </div>\n\n  <div *ngIf="seccion == \'recarga\'">\n      <div class="center">\n          <h3 style="color: #D4AF37">Agregar Recarga</h3>\n      </div>\n\n      <ion-list no-lines>\n          <ion-item>\n              <ion-label floating>Cantidad</ion-label>\n              <ion-input type="number" step="0.1" min="0" [(ngModel)]="movimiento.cantidad"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label floating>Concepto</ion-label>\n                <ion-input type="text" [(ngModel)]="movimiento.concepto"></ion-input>\n              </ion-item>\n    \n            <ion-item>\n               <button ion-button color="primary" (click)="agregarAbono()">Agregar</button>\n            </ion-item>\n    \n      </ion-list>\n\n      <ion-list no-lines>\n          <button ion-item *ngFor="let movimiento of movimientos | async">\n              <span style="color:rgb(0, 255, 0)" *ngIf=" movimiento.tipo == \'abono\' ">   <ion-icon name="add-circle"></ion-icon> {{movimiento.cantidad}}€</span>\n    \n              <span style="color:rgb(255, 0, 0)"  *ngIf=" movimiento.tipo == \'retiro\' ">   <ion-icon name="remove-circle"></ion-icon> {{movimiento.cantidad}}€</span>\n    \n               Local 200mts2 <span style="font-size:small;float: right" end>{{movimiento.estatus}}\n        </span>    </button>\n        \n      \n      </ion-list>\n\n  </div>\n\n  <div *ngIf="seccion == \'chat\'">\n      <ion-card *ngFor="let mensaje of mensajes | async">\n          <ion-card-content>\n              {{mensaje.mensaje}}\n            </ion-card-content>\n      </ion-card>\n  </div>\n\n</ion-content>\n\n<ion-footer *ngIf = "seccion == \'chat\'">\n    <ion-toolbar color="primary">\n        <ion-input type="text" [(ngModel)]="mensaje.mensaje" color="secondary"></ion-input>\n\n      <ion-buttons end>\n        <button ion-button icon-end color="royal" (click)="enviarMensaje()">\n          <ion-icon name="send"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-footer>\n\n\n'/*ion-inline-end:"C:\xampp\htdocs\fabio\src\pages\admin-usuario\admin-usuario.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabase */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["a" /* AngularFireAuth */]) === "function" && _d || Object])
    ], AdminUsuarioPage);
    return AdminUsuarioPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=admin-usuario.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_usuario_admin_usuario__ = __webpack_require__(164);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminPage = /** @class */ (function () {
    function AdminPage(navCtrl, navParams, afDatabase, afAuth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afDatabase = afDatabase;
        this.afAuth = afAuth;
        this.usuariosRef = this.afDatabase.list('usuarios');
        this.usuarios = this.usuariosRef
            .snapshotChanges()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (usuarios) {
            return usuarios.map(function (usuario) { return (__assign({ key: usuario.key }, usuario.payload.val())); });
        }));
    }
    AdminPage.prototype.abrirUsuario = function (key) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__admin_usuario_admin_usuario__["a" /* AdminUsuarioPage */], { key: key });
    };
    AdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin',template:/*ion-inline-start:"C:\xampp\htdocs\fabio\src\pages\admin\admin.html"*/'<ion-header>\n    <ion-navbar class="principal">\n      \n  \n      <div class="logo">\n        <img src="assets/imgs/logof.png" alt="">\n      </div>\n  \n      <ion-buttons start>\n        <button ion-button icon-only>\n          <ion-icon name="logout" color="oro"></ion-icon>\n        </button>\n      </ion-buttons>\n  \n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <button ion-item *ngFor="let usuario of usuarios | async" (click)="abrirUsuario(usuario.key)">\n        <ion-icon name="contact" item-start color="oro" item-star></ion-icon>\n        {{usuario.perfil.nombre}} {{usuario.perfil.apellido}}\n    </button>\n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\fabio\src\pages\admin\admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__["a" /* AngularFireAuth */]])
    ], AdminPage);
    return AdminPage;
}());

//# sourceMappingURL=admin.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegistroPage = /** @class */ (function () {
    function RegistroPage(navCtrl, navParams, afAuth, afDatabase, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.afDatabase = afDatabase;
        this.alertCtrl = alertCtrl;
        this.user = { email: '',
            password: '',
            nombre: '',
            apellido: '',
            fecha: '',
            domicilio: '',
            tipo: '',
            disponible: ''
        };
    }
    RegistroPage.prototype.registro = function () {
        var _this = this;
        if (this.user.nombre != '' && this.user.apellido != '' && this.user.domicilio != '') {
            this.afAuth.auth.createUserWithEmailAndPassword(this.user.email, this.user.password)
                .then(function (user) {
                _this.afAuth.authState.subscribe(function (data) {
                    if (data && data.email && data.uid) {
                        _this.afDatabase.object('usuarios/' + data.uid + '/perfil').set({
                            nombre: _this.user.nombre,
                            apellido: _this.user.apellido,
                            fecha: _this.user.fecha,
                            domicilio: _this.user.domicilio,
                            tipo: 'user',
                            disponible: 0
                        });
                        _this.afDatabase.object('usuarios/' + data.uid + '/cuenta').set({
                            nombre: _this.user.nombre + ' ' + _this.user.apellido,
                            numero: '',
                            tarjeta: '',
                            direccion: ''
                        });
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                    }
                    else {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
                    }
                });
            })
                .catch(function (err) {
                var alert = _this.alertCtrl.create({
                    title: 'Error',
                    subTitle: err.message,
                    buttons: ['Aceptar']
                });
                alert.present();
            });
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Complete Todos los Campos',
                subTitle: 'Todos los campos son requeridos',
                buttons: ['Aceptar']
            });
            alert_1.present();
        }
    };
    RegistroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registro',template:/*ion-inline-start:"C:\xampp\htdocs\fabio\src\pages\registro\registro.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar class="principal">\n     \n  \n      <div class="logo">\n        <img src="assets/imgs/logof.png" alt="">\n      </div>\n  \n  \n    </ion-navbar>\n  </ion-header>\n\n<ion-content padding>\n\n    <ion-list>\n\n        <ion-item>\n            <ion-label floating>Nombre</ion-label>\n            <ion-input type="text" [(ngModel)]="user.nombre" required></ion-input>\n          </ion-item>\n\n          <ion-item>\n              <ion-label floating>Apellido</ion-label>\n              <ion-input type="text" [(ngModel)]="user.apellido" required></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label floating>Fecha de Nacimiento</ion-label>\n                <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="user.fecha" required></ion-datetime>\n              </ion-item>\n\n              <ion-item>\n                  <ion-label floating>Domicilio</ion-label>\n                  <ion-input type="text" [(ngModel)]="user.domicilio" required></ion-input>\n                </ion-item>\n\n        <ion-item>\n          <ion-label floating>Email</ion-label>\n          <ion-input type="email" [(ngModel)]="user.email" required></ion-input>\n        </ion-item>\n      \n        <ion-item>\n          <ion-label floating>Password</ion-label>\n          <ion-input type="password" [(ngModel)]="user.password" required></ion-input>\n        </ion-item>\n\n        \n      \n      </ion-list>\n\n        <button color="secondary" ion-button (click)="registro()">Registrar</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\fabio\src\pages\registro\registro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_4__angular_fire_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], RegistroPage);
    return RegistroPage;
}());

//# sourceMappingURL=registro.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chat_chat__ = __webpack_require__(46);
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
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PerfilPage = /** @class */ (function () {
    function PerfilPage(navCtrl, navParams, afAuth, afDatabase) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.afDatabase = afDatabase;
        this.perfil = {};
        this.afAuth.authState.subscribe(function (data) {
            if (data && data.email && data.uid) {
                _this.perfilRef = _this.afDatabase.object('usuarios/' + data.uid + '/perfil');
                _this.perfil = _this.perfilRef.snapshotChanges().subscribe(function (perfil) {
                    _this.perfil = perfil.payload.val();
                });
            }
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
            }
        });
    }
    PerfilPage.prototype.actualizarPerfil = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (auth) {
            _this.afDatabase.object('usuarios/' + auth.uid + '/perfil')
                .set(_this.perfil)
                .then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]); });
        });
    };
    PerfilPage.prototype.abrirChat = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__chat_chat__["a" /* ChatPage */]);
    };
    PerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-perfil',template:/*ion-inline-start:"C:\xampp\htdocs\fabio\src\pages\perfil\perfil.html"*/'<ion-header>\n    <ion-navbar class="principal">\n      <button ion-button menuToggle>\n        <ion-icon name="menu" color="oro"></ion-icon>\n      </button>\n  \n      <div class="logo">\n        <img src="assets/imgs/logof.png" alt="">\n      </div>\n  \n      <ion-buttons start>\n        <button ion-button icon-only(click)="abrirChat()">\n          <ion-icon name="contact" color="oro"></ion-icon>\n        </button>\n      </ion-buttons>\n  \n    </ion-navbar>\n  </ion-header>\n\n<ion-content padding>\n\n    <ion-list>\n\n        <ion-item>\n            <ion-label floating>Nombre</ion-label>\n            <ion-input type="text" [(ngModel)]="perfil.nombre" disabled></ion-input>\n          </ion-item>\n\n          <ion-item>\n              <ion-label floating>Apellido</ion-label>\n              <ion-input type="text" [(ngModel)]="perfil.apellido" disabled></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label floating>Fecha de Nacimiento</ion-label>\n                <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="perfil.fecha"></ion-datetime>\n              </ion-item>\n\n              <ion-item>\n                  <ion-label floating>Domicilio</ion-label>\n                  <ion-input type="text" [(ngModel)]="perfil.domicilio"></ion-input>\n                </ion-item>\n      \n      </ion-list>\n\n        <button color="primary" ion-button (click)="actualizarPerfil()">Actualizar</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\fabio\src\pages\perfil\perfil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], PerfilPage);
    return PerfilPage;
}());

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TarjetaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chat_chat__ = __webpack_require__(46);
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
 * Generated class for the TarjetaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TarjetaPage = /** @class */ (function () {
    function TarjetaPage(navCtrl, navParams, afAuth, afDatabase, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.afDatabase = afDatabase;
        this.alertCtrl = alertCtrl;
        this.cuenta = {};
        this.afAuth.authState.subscribe(function (data) {
            if (data && data.email && data.uid) {
                _this.cuentaRef = _this.afDatabase.object('usuarios/' + data.uid + '/cuenta');
                _this.cuenta = _this.cuentaRef.snapshotChanges().subscribe(function (perfil) {
                    _this.cuenta = perfil.payload.val();
                });
            }
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
            }
        });
    }
    TarjetaPage.prototype.registrarTarjeta = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (data) {
            if (data && data.email && data.uid) {
                _this.afDatabase.object('usuarios/' + data.uid + '/cuenta')
                    .set(_this.cuenta);
                var alert_1 = _this.alertCtrl.create({
                    title: 'Cuenta Registrada',
                    subTitle: 'Su cuenta fué registrada con éxito',
                    buttons: ['Aceptar']
                });
                alert_1.present();
            }
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
            }
        });
    };
    TarjetaPage.prototype.abrirChat = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__chat_chat__["a" /* ChatPage */]);
    };
    TarjetaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tarjeta',template:/*ion-inline-start:"C:\xampp\htdocs\fabio\src\pages\tarjeta\tarjeta.html"*/'<ion-header>\n\n    <ion-navbar class="principal">\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu" color="oro"></ion-icon>\n\n      </button>\n\n  \n\n      <div class="logo">\n\n        <img src="assets/imgs/logof.png" alt="">\n\n      </div>\n\n  \n\n      <ion-buttons start>\n\n        <button ion-button icon-only (click)="abrirChat()">\n\n          <ion-icon name="contact" color="oro"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n  \n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n\n\n<ion-content>\n\n    <ion-card class="principal" padding>\n\n      \n\n        <h1>\n\n         Registrar Tarjeta\n\n        </h1>\n\n        \n\n   </ion-card>\n\n    <ion-list padding>\n\n\n\n        <ion-item>\n\n          <ion-label floating>Nombre y Apellido</ion-label>\n\n          <ion-input type="text" [(ngModel)]="cuenta.nombre"></ion-input>\n\n        </ion-item>\n\n      \n\n        <ion-item>\n\n          <ion-label floating>Número de Cuenta Principal</ion-label>\n\n          <ion-input type="number" [(ngModel)]="cuenta.numero"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label floating>Número de Tarjeta</ion-label>\n\n          <ion-input type="number" [(ngModel)]="cuenta.tarjeta"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label floating>Dirección</ion-label>\n\n            <ion-input type="text" [(ngModel)]="cuenta.direccion"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <button ion-button block (click)="registrarTarjeta()">Guardar</button>\n\n        </ion-item>\n\n      \n\n      </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\fabio\src\pages\tarjeta\tarjeta.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], TarjetaPage);
    return TarjetaPage;
}());

//# sourceMappingURL=tarjeta.js.map

/***/ }),

/***/ 207:
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
webpackEmptyAsyncContext.id = 207;

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/admin-detalles/admin-detalles.module": [
		515,
		17
	],
	"../pages/admin-usuario/admin-usuario.module": [
		516,
		16
	],
	"../pages/admin/admin.module": [
		517,
		15
	],
	"../pages/balance/balance.module": [
		518,
		14
	],
	"../pages/chat-admin/chat-admin.module": [
		519,
		13
	],
	"../pages/chat/chat.module": [
		520,
		12
	],
	"../pages/coches/coches.module": [
		521,
		11
	],
	"../pages/contacto/contacto.module": [
		522,
		10
	],
	"../pages/deposito/deposito.module": [
		523,
		9
	],
	"../pages/detalles/detalles.module": [
		524,
		8
	],
	"../pages/inmobiliarias/inmobiliarias.module": [
		525,
		7
	],
	"../pages/inversiones/inversiones.module": [
		526,
		6
	],
	"../pages/login/login.module": [
		527,
		5
	],
	"../pages/movimientos/movimientos.module": [
		528,
		4
	],
	"../pages/off-store/off-store.module": [
		529,
		3
	],
	"../pages/perfil/perfil.module": [
		530,
		2
	],
	"../pages/registro/registro.module": [
		531,
		1
	],
	"../pages/tarjeta/tarjeta.module": [
		532,
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
webpackAsyncContext.id = 248;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registro_registro__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(54);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, afAuth, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.alertCtrl = alertCtrl;
        this.user = { email: '', password: '' };
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.registroPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__registro_registro__["a" /* RegistroPage */]);
    };
    // Login de usuario
    LoginPage.prototype.loginUser = function () {
        var _this = this;
        this.afAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password).then(function (user) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        })
            .catch(function (err) {
            var alert = _this.alertCtrl.create({
                title: 'Error',
                subTitle: err.message,
                buttons: ['Aceptar']
            });
            alert.present();
        });
    };
    LoginPage.prototype.signin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__registro_registro__["a" /* RegistroPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\xampp\htdocs\fabio\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar class="principal">\n     \n  \n      <div class="logo">\n        <img src="assets/imgs/logof.png" alt="">\n      </div>\n  \n  \n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n\n    <ion-list>\n        <form>\n          <ion-item>\n            <ion-label floating>Email</ion-label>\n            <ion-input\n              [(ngModel)]="user.email"\n              name="email"\n              type="text"\n              autocapitalize="off"\n              required\n            >\n            </ion-input>\n          </ion-item>\n    \n          <ion-item>\n            <ion-label floating>Contraseña</ion-label>\n            <ion-input\n              [(ngModel)]="user.password"\n              name="password"\n              type="password"\n              required\n            >\n            </ion-input>\n          </ion-item>\n          <div padding>\n            <button\n                ion-button \n                (click)="loginUser()"\n                type="submit"\n                color="primary"\n            >\n              Iniciar Sesión\n            </button>\n    \n            <button\n              ion-button \n              (click)="signin()"\n              type="submit"\n              color="secondary"\n            >\n              Registrar\n            </button>\n          </div>\n        </form>\n      </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\fabio\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BalancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the BalancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BalancePage = /** @class */ (function () {
    function BalancePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BalancePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BalancePage');
    };
    BalancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-balance',template:/*ion-inline-start:"C:\xampp\htdocs\fabio\src\pages\balance\balance.html"*/'<!--\n  Generated template for the BalancePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>balance</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\fabio\src\pages\balance\balance.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], BalancePage);
    return BalancePage;
}());

//# sourceMappingURL=balance.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatAdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the ChatAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatAdminPage = /** @class */ (function () {
    function ChatAdminPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChatAdminPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatAdminPage');
    };
    ChatAdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat-admin',template:/*ion-inline-start:"C:\xampp\htdocs\fabio\src\pages\chat-admin\chat-admin.html"*/'<!--\n  Generated template for the ChatAdminPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ChatAdmin</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\fabio\src\pages\chat-admin\chat-admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ChatAdminPage);
    return ChatAdminPage;
}());

//# sourceMappingURL=chat-admin.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CochesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the CochesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CochesPage = /** @class */ (function () {
    function CochesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CochesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CochesPage');
    };
    CochesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-coches',template:/*ion-inline-start:"C:\xampp\htdocs\fabio\src\pages\coches\coches.html"*/'<!--\n  Generated template for the CochesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>coches</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\fabio\src\pages\coches\coches.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CochesPage);
    return CochesPage;
}());

//# sourceMappingURL=coches.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the ContactoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactoPage = /** @class */ (function () {
    function ContactoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ContactoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactoPage');
    };
    ContactoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contacto',template:/*ion-inline-start:"C:\xampp\htdocs\fabio\src\pages\contacto\contacto.html"*/'<!--\n\n  Generated template for the ContactoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar color="primary">\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>\n\n  \n\n      </ion-title>\n\n  \n\n      <ion-buttons start>\n\n        <button ion-button icon-only>\n\n          <ion-icon name="contact"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n  \n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n  \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\fabio\src\pages\contacto\contacto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ContactoPage);
    return ContactoPage;
}());

//# sourceMappingURL=contacto.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InmobiliariasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the InmobiliariasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InmobiliariasPage = /** @class */ (function () {
    function InmobiliariasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    InmobiliariasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InmobiliariasPage');
    };
    InmobiliariasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inmobiliarias',template:/*ion-inline-start:"C:\xampp\htdocs\fabio\src\pages\inmobiliarias\inmobiliarias.html"*/'<!--\n  Generated template for the InmobiliariasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>inmobiliarias</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\fabio\src\pages\inmobiliarias\inmobiliarias.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], InmobiliariasPage);
    return InmobiliariasPage;
}());

//# sourceMappingURL=inmobiliarias.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OffStorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the OffStorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OffStorePage = /** @class */ (function () {
    function OffStorePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OffStorePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OffStorePage');
    };
    OffStorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-off-store',template:/*ion-inline-start:"C:\xampp\htdocs\fabio\src\pages\off-store\off-store.html"*/'<!--\n  Generated template for the OffStorePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>offStore</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\fabio\src\pages\off-store\off-store.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], OffStorePage);
    return OffStorePage;
}());

//# sourceMappingURL=off-store.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(440);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_fire_auth__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__firebase_config__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_list_list__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_coches_coches__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_inmobiliarias_inmobiliarias__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_off_store_off_store__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_movimientos_movimientos__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_tarjeta_tarjeta__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_contacto_contacto__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_balance_balance__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_deposito_deposito__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_inversiones_inversiones__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_detalles_detalles__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_login_login__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_registro_registro__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_perfil_perfil__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_admin_admin__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_admin_usuario_admin_usuario__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_chat_chat__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_chat_admin_chat_admin__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_admin_detalles_admin_detalles__ = __webpack_require__(163);
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
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_coches_coches__["a" /* CochesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_inmobiliarias_inmobiliarias__["a" /* InmobiliariasPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_off_store_off_store__["a" /* OffStorePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_balance_balance__["a" /* BalancePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_movimientos_movimientos__["a" /* MovimientosPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tarjeta_tarjeta__["a" /* TarjetaPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_deposito_deposito__["a" /* DepositoPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_contacto_contacto__["a" /* ContactoPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_inversiones_inversiones__["a" /* InversionesPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_detalles_detalles__["a" /* DetallesPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_registro_registro__["a" /* RegistroPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_admin_admin__["a" /* AdminPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_admin_usuario_admin_usuario__["a" /* AdminUsuarioPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_chat_admin_chat_admin__["a" /* ChatAdminPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_admin_detalles_admin_detalles__["a" /* AdminDetallesPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/admin-detalles/admin-detalles.module#AdminDetallesPageModule', name: 'AdminDetallesPage', segment: 'admin-detalles', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin-usuario/admin-usuario.module#AdminUsuarioPageModule', name: 'AdminUsuarioPage', segment: 'admin-usuario', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin/admin.module#AdminPageModule', name: 'AdminPage', segment: 'admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/balance/balance.module#BalancePageModule', name: 'BalancePage', segment: 'balance', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat-admin/chat-admin.module#ChatAdminPageModule', name: 'ChatAdminPage', segment: 'chat-admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/coches/coches.module#CochesPageModule', name: 'CochesPage', segment: 'coches', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contacto/contacto.module#ContactoPageModule', name: 'ContactoPage', segment: 'contacto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/deposito/deposito.module#DepositoPageModule', name: 'DepositoPage', segment: 'deposito', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detalles/detalles.module#DetallesPageModule', name: 'DetallesPage', segment: 'detalles', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inmobiliarias/inmobiliarias.module#InmobiliariasPageModule', name: 'InmobiliariasPage', segment: 'inmobiliarias', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inversiones/inversiones.module#InversionesPageModule', name: 'InversionesPage', segment: 'inversiones', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/movimientos/movimientos.module#MovimientosPageModule', name: 'MovimientosPage', segment: 'movimientos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/off-store/off-store.module#OffStorePageModule', name: 'OffStorePage', segment: 'off-store', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perfil/perfil.module#PerfilPageModule', name: 'PerfilPage', segment: 'perfil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registro/registro.module#RegistroPageModule', name: 'RegistroPage', segment: 'registro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tarjeta/tarjeta.module#TarjetaPageModule', name: 'TarjetaPage', segment: 'tarjeta', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_fire__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_6__firebase_config__["a" /* firebaseConfig */]),
                __WEBPACK_IMPORTED_MODULE_5__angular_fire_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_fire_database__["b" /* AngularFireDatabaseModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_coches_coches__["a" /* CochesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_inmobiliarias_inmobiliarias__["a" /* InmobiliariasPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_off_store_off_store__["a" /* OffStorePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_balance_balance__["a" /* BalancePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_movimientos_movimientos__["a" /* MovimientosPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tarjeta_tarjeta__["a" /* TarjetaPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_deposito_deposito__["a" /* DepositoPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_contacto_contacto__["a" /* ContactoPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_inversiones_inversiones__["a" /* InversionesPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_detalles_detalles__["a" /* DetallesPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_registro_registro__["a" /* RegistroPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_admin_admin__["a" /* AdminPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_admin_usuario_admin_usuario__["a" /* AdminUsuarioPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_chat_admin_chat_admin__["a" /* ChatAdminPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_admin_detalles_admin_detalles__["a" /* AdminDetallesPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(30);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatPage = /** @class */ (function () {
    function ChatPage(navCtrl, navParams, afDatabase, afAuth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afDatabase = afDatabase;
        this.afAuth = afAuth;
        this.mensaje = {
            mensaje: '',
            user: 'yo'
        };
        this.afAuth.authState.subscribe(function (data) {
            if (data && data.email && data.uid) {
                _this.mensajesRef = _this.afDatabase.list('usuarios/' + data.uid + '/mensajes');
                _this.mensajes = _this.mensajesRef
                    .snapshotChanges()
                    .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (mensajes) {
                    return mensajes.map(function (mensaje) { return (__assign({ key: mensaje.key }, mensaje.payload.val())); });
                }));
            }
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
            }
        });
    }
    ChatPage.prototype.enviarMensaje = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (data) {
            if (data && data.email && data.uid) {
                _this.afDatabase.list('usuarios/' + data.uid + '/mensajes')
                    .push(_this.mensaje);
                _this.mensaje.mensaje = '';
            }
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
            }
        });
    };
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"C:\xampp\htdocs\fabio\src\pages\chat\chat.html"*/'<ion-header>\n\n    <ion-navbar class="principal">\n        <div class="logo">\n            <img src="assets/imgs/logof.png" alt="">\n          </div>\n    </ion-navbar>\n  \n  </ion-header>\n\n\n<ion-content padding>\n\n  <ion-card *ngFor="let mensaje of mensajes | async">\n      <ion-card-content>\n          {{mensaje.mensaje}}\n        </ion-card-content>\n  </ion-card>\n\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar color="primary">\n        <ion-input type="text" [(ngModel)]="mensaje.mensaje" color="secondary"></ion-input>\n\n      <ion-buttons end>\n        <button ion-button icon-end color="royal" (click)="enviarMensaje()">\n          <ion-icon name="send"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-footer>'/*ion-inline-end:"C:\xampp\htdocs\fabio\src\pages\chat\chat.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__["a" /* AngularFireAuth */]) === "function" && _d || Object])
    ], ChatPage);
    return ChatPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    apiKey: "AIzaSyAwnhffTODVy-pVatQFJPy6jRwE42hBu1U",
    authDomain: "app-fabio.firebaseapp.com",
    databaseURL: "https://app-fabio.firebaseio.com",
    projectId: "app-fabio",
    storageBucket: "app-fabio.appspot.com",
    messagingSenderId: "532861726685"
};
//# sourceMappingURL=firebase.config.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_inversiones_inversiones__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_movimientos_movimientos__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tarjeta_tarjeta__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_fire_auth__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_perfil_perfil__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_deposito_deposito__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_fire_database__ = __webpack_require__(23);
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
    function MyApp(afAuth, platform, statusBar, splashScreen, afDatabase) {
        var _this = this;
        this.afAuth = afAuth;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.afDatabase = afDatabase;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */];
        this.perfil = {};
        this.initializeApp();
        this.afAuth.authState.subscribe(function (data) {
            if (data && data.email && data.uid) {
                _this.perfilRef = _this.afDatabase.object('usuarios/' + data.uid + '/perfil');
                _this.perfil = _this.perfilRef.snapshotChanges().subscribe(function (perfil) {
                    _this.perfil = perfil.payload.val();
                });
            }
        });
        this.pages = [
            { title: 'Inicio', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Perfil', component: __WEBPACK_IMPORTED_MODULE_10__pages_perfil_perfil__["a" /* PerfilPage */] },
            { title: 'Inversiones', component: __WEBPACK_IMPORTED_MODULE_5__pages_inversiones_inversiones__["a" /* InversionesPage */] },
            { title: 'Retiro', component: __WEBPACK_IMPORTED_MODULE_11__pages_deposito_deposito__["a" /* DepositoPage */] },
            { title: 'Movimientos', component: __WEBPACK_IMPORTED_MODULE_6__pages_movimientos_movimientos__["a" /* MovimientosPage */] },
            { title: 'Asociar Cuenta', component: __WEBPACK_IMPORTED_MODULE_7__pages_tarjeta_tarjeta__["a" /* TarjetaPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.logOut = function () {
        var _this = this;
        return this.afAuth.auth.signOut().
            then(function () {
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */]);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\fabio\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header class="principal">\n\n    <ion-toolbar no-padding class="principal">\n\n\n\n        <ion-card class="principal" padding>\n\n            <h1>\n\n             {{perfil.disponible}}€\n\n            </h1>\n\n            <div class="mini">\n\n              Balance total\n\n            </div>\n\n       </ion-card>\n\n\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content class="fondo-dark">\n\n    <ion-list class="lista-dark" no-lines>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n      \n\n      <button menuClose ion-item (click)="logOut()">\n\n         Cerrar Sesión\n\n      </button>\n\n\n\n\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\xampp\htdocs\fabio\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__angular_fire_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_12__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\xampp\htdocs\fabio\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\fabio\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalles_detalles__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_highcharts__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__movimientos_movimientos__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__deposito_deposito__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__inversiones_inversiones__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_fire_auth__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_fire_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__admin_admin__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_operators__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__chat_chat__ = __webpack_require__(46);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
    function HomePage(navCtrl, afAuth, afDatabase) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.afAuth = afAuth;
        this.afDatabase = afDatabase;
        this.tab1Root = HomePage_1;
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__movimientos_movimientos__["a" /* MovimientosPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_5__deposito_deposito__["a" /* DepositoPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_6__inversiones_inversiones__["a" /* InversionesPage */];
        this.afAuth.authState.subscribe(function (data) {
            if (data && data.email && data.uid) {
                _this.perfil = _this.afDatabase.object('usuarios/' + data.uid + '/perfil');
                _this.perfilData = _this.perfil.valueChanges();
                _this.perfilData.subscribe(function (user) {
                    _this.disponible = user.disponible;
                    if (user.tipo == 'admin') {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__admin_admin__["a" /* AdminPage */]);
                    }
                });
                _this.inversionesRef = _this.afDatabase.list('usuarios/' + data.uid + '/inversiones');
                _this.inversiones = _this.inversionesRef
                    .snapshotChanges()
                    .pipe(Object(__WEBPACK_IMPORTED_MODULE_11_rxjs_operators__["map"])(function (inversiones) {
                    return inversiones.map(function (inversion) { return (__assign({ key: inversion.key }, inversion.payload.val())); });
                }));
            }
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__login_login__["a" /* LoginPage */]);
            }
        });
    }
    HomePage_1 = HomePage;
    HomePage.prototype.ionViewDidLoad = function () {
        var myChart = __WEBPACK_IMPORTED_MODULE_3_highcharts__["chart"]('container', {
            chart: {
                type: 'spline',
                height: '200px'
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: ['Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
            },
            yAxis: {
                title: {
                    text: ''
                }
            },
            series: [{
                    name: 'Ingresos',
                    data: [23, 2344, 45, 100, 560, 1000],
                    color: "#D4AF37"
                },
                {
                    name: 'Gastos',
                    data: [23, 456, 65, 400, 450, 470],
                    color: "#000000"
                },
            ]
        });
    };
    HomePage.prototype.abrirDetalles = function (itemkey) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__detalles_detalles__["a" /* DetallesPage */], { itemkey: itemkey });
    };
    HomePage.prototype.abrirChat = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__chat_chat__["a" /* ChatPage */]);
    };
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\xampp\htdocs\fabio\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar class="principal">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu" color="oro"></ion-icon>\n\n    </button>\n\n\n\n    <div class="logo">\n\n      <img src="assets/imgs/logof.png" alt="">\n\n    </div>\n\n\n\n    <ion-buttons start>\n\n      <button ion-button icon-only (click)="abrirChat()">\n\n        <ion-icon name="contact" color="oro"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <ion-card class="principal" padding>\n\n      \n\n\n\n       <h1>\n\n        {{disponible}}€\n\n       </h1>\n\n       <div class="mini">\n\n         Balance total\n\n       </div>\n\n  </ion-card>\n\n  <div id="container" style="display: block;"	></div>\n\n\n\n  <ion-list no-lines>\n\n    <button ion-item  *ngFor="let inversion of inversiones | async" (click)="abrirDetalles(inversion.key)">\n\n\n\n      <ion-row>\n\n        <ion-col col-2>\n\n \n\n              <ion-icon name="bulb" item-start color="oro"></ion-icon>\n\n         \n\n        </ion-col>\n\n\n\n        <ion-col >\n\n            {{inversion.nombre}}\n\n            <br>\n\n\n\n      <div class="mini">\n\n        {{inversion.inversion}}€\n\n      </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      \n\n      \n\n     \n\n\n\n      <span item-end class="mini">\n\n        {{inversion.fecha}}\n\n      </span>\n\n\n\n      \n\n\n\n      \n\n    </button>\n\n\n\n\n\n  \n\n    \n\n\n\n\n\n  </ion-list>\n\n  \n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\fabio\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_7__angular_fire_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_8__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetallesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(30);
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
 * Generated class for the DetallesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetallesPage = /** @class */ (function () {
    function DetallesPage(navCtrl, navParams, afDatabase, afAuth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afDatabase = afDatabase;
        this.afAuth = afAuth;
        this.inversion = {};
        this.afAuth.authState.subscribe(function (data) {
            if (data && data.email && data.uid) {
                _this.key = _this.navParams.get('itemkey');
                console.log(_this.key);
                _this.inversionRef = _this.afDatabase.object('usuarios/' + data.uid + '/inversiones/' + _this.key);
                _this.inversion = _this.inversionRef.snapshotChanges().subscribe(function (inversion) {
                    _this.inversion = inversion.payload.val();
                });
            }
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
            }
        });
    }
    DetallesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetallesPage');
    };
    DetallesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detalles',template:/*ion-inline-start:"C:\xampp\htdocs\fabio\src\pages\detalles\detalles.html"*/'<!--\n\n  Generated template for the DetallesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar class="principal">\n\n      <div class="logo">\n\n          <img src="assets/imgs/logof.png" alt="">\n\n        </div>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="fondo-dark">\n\n\n\n\n\n  <h3 style="color: #D4AF37">{{inversion.nombre}}</h3>\n\n\n\n  <p>{{inversion.descripcion}}</p>\n\n\n\n  <p>Inversión Inicial {{inversion.inversion}}€</p>\n\n\n\n  <p>Fecha de inversión: {{inversion.fecha}}</p>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\fabio\src\pages\detalles\detalles.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__["a" /* AngularFireAuth */]])
    ], DetallesPage);
    return DetallesPage;
}());

//# sourceMappingURL=detalles.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovimientosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chat_chat__ = __webpack_require__(46);
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
 * Generated class for the MovimientosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MovimientosPage = /** @class */ (function () {
    function MovimientosPage(navCtrl, navParams, afAuth, afDatabase) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.afDatabase = afDatabase;
        this.perfil = {};
        this.afAuth.authState.subscribe(function (data) {
            if (data && data.email && data.uid) {
                _this.movimientosRef = _this.afDatabase.list('usuarios/' + data.uid + '/movimientos');
                _this.movimientos = _this.movimientosRef.valueChanges();
                _this.perfilRef = _this.afDatabase.object('usuarios/' + data.uid + '/perfil');
                _this.perfil = _this.perfilRef.snapshotChanges().subscribe(function (perfil) {
                    _this.perfil = perfil.payload.val();
                });
            }
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
            }
        });
    }
    MovimientosPage.prototype.abrirChat = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__chat_chat__["a" /* ChatPage */]);
    };
    MovimientosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-movimientos',template:/*ion-inline-start:"C:\xampp\htdocs\fabio\src\pages\movimientos\movimientos.html"*/'<!--\n\n  Generated template for the MovimientosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar class="principal">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu" color="oro"></ion-icon>\n\n    </button>\n\n    <div class="logo">\n\n        <img src="assets/imgs/logof.png" alt="">\n\n      </div>\n\n\n\n    <ion-buttons start>\n\n      <button ion-button icon-only (click)="abrirChat()">\n\n        <ion-icon name="contact" color="oro"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content no-padding>\n\n\n\n    <ion-card class="principal" padding>\n\n      \n\n\n\n        <h1>\n\n         {{perfil.disponible}}€\n\n        </h1>\n\n        <div class="mini">\n\n          Balance total\n\n        </div>\n\n   </ion-card>\n\n\n\n  <ion-list no-padding>\n\n      <button ion-item *ngFor="let movimiento of movimientos | async">\n\n          <span style="color:rgb(0, 255, 0)" *ngIf=" movimiento.tipo == \'abono\' ">   <ion-icon name="add-circle"></ion-icon> {{movimiento.cantidad}}€</span>\n\n\n\n          <span style="color:rgb(255, 0, 0)"  *ngIf=" movimiento.tipo == \'retiro\' ">   <ion-icon name="remove-circle"></ion-icon> {{movimiento.cantidad}}€</span>\n\n\n\n           Local 200mts2 <span style="font-size:small;float: right" end>{{movimiento.estatus}}\n\n    </span>    </button>\n\n    \n\n  \n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\fabio\src\pages\movimientos\movimientos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], MovimientosPage);
    return MovimientosPage;
}());

//# sourceMappingURL=movimientos.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepositoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chat_chat__ = __webpack_require__(46);
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
 * Generated class for the DepositoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DepositoPage = /** @class */ (function () {
    function DepositoPage(navCtrl, navParams, afAuth, afDatabase, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.afDatabase = afDatabase;
        this.alertCtrl = alertCtrl;
        this.movimiento = {
            cantidad: '',
            tipo: 'retiro',
            estatus: 'pendiente',
            concepto: 'Retiro de Fondos'
        };
        this.perfil = {};
        this.deposito = {
            cantidad: '',
            tipo: 'abono',
            estatus: 'pendiente',
            concepto: ''
        };
        this.afAuth.authState.subscribe(function (data) {
            if (data && data.email && data.uid) {
                _this.perfilRef = _this.afDatabase.object('usuarios/' + data.uid + '/perfil');
                _this.perfil = _this.perfilRef.snapshotChanges().subscribe(function (perfil) {
                    _this.perfil = perfil.payload.val();
                });
            }
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
            }
        });
    }
    DepositoPage.prototype.solicitarRetiro = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (data) {
            if (data && data.email && data.uid) {
                _this.afDatabase.list('usuarios/' + data.uid + '/movimientos')
                    .push(_this.movimiento);
                var alert_1 = _this.alertCtrl.create({
                    title: 'Solicitud de retiro enviada',
                    subTitle: 'Su solicitud será procesada en breve',
                    buttons: ['Aceptar']
                });
                alert_1.present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
            }
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
            }
        });
    };
    DepositoPage.prototype.notificarAbono = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (data) {
            if (data && data.email && data.uid) {
                _this.afDatabase.list('usuarios/' + data.uid + '/movimientos')
                    .push(_this.deposito);
                var alert_2 = _this.alertCtrl.create({
                    title: 'Solicitud de abono enviada',
                    subTitle: 'Su solicitud será procesada en breve',
                    buttons: ['Aceptar']
                });
                alert_2.present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
            }
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
            }
        });
    };
    DepositoPage.prototype.abrirChat = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__chat_chat__["a" /* ChatPage */]);
    };
    DepositoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-deposito',template:/*ion-inline-start:"C:\xampp\htdocs\fabio\src\pages\deposito\deposito.html"*/'<ion-header>\n    <ion-navbar class="principal">\n      <button ion-button menuToggle>\n        <ion-icon name="menu" color="oro"></ion-icon>\n      </button>\n  \n      <div class="logo">\n        <img src="assets/imgs/logof.png" alt="">\n      </div>\n  \n      <ion-buttons start>\n        <button ion-button icon-only (click)="abrirChat()">\n          <ion-icon name="contact" color="oro"></ion-icon>\n        </button>\n      </ion-buttons>\n  \n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content no-padding>\n\n    <ion-card class="principal" padding>\n        <h1>\n         {{perfil.disponible}}€\n        </h1>\n        <div class="mini">\n          Total Disponible\n        </div>\n   </ion-card>\n\n <div class="center">\n    <h3 style="color: #D4AF37">Solicitar Retiro</h3>\n </div>\n\n  <ion-list no-lines>\n      <ion-item>\n          <ion-label floating>Cantidad</ion-label>\n          <ion-input type="number" step="0.1" min="0" [(ngModel)]="movimiento.cantidad"></ion-input>\n        </ion-item>\n\n        <ion-item>\n           <button ion-button color="primary" (click)="solicitarRetiro()">Solicitar</button>\n          </ion-item>\n\n  </ion-list>\n\n  <div class="center">\n      <h3 style="color: #D4AF37">Depósito</h3>\n   </div>\n  \n    <ion-list no-lines>\n        <ion-item>\n            <ion-label floating>Cantidad</ion-label>\n            <ion-input type="number" step="0.1" min="0" [(ngModel)]="deposito.cantidad"></ion-input>\n          </ion-item>\n\n          <ion-item>\n              <ion-label floating>Comprobante de transacción</ion-label>\n              <ion-input type="text" [(ngModel)]="deposito.concepto"></ion-input>\n            </ion-item>\n  \n          <ion-item>\n             <button ion-button color="primary" (click)="notificarAbono()">Enviar</button>\n            </ion-item>\n  \n    </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\fabio\src\pages\deposito\deposito.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], DepositoPage);
    return DepositoPage;
}());

//# sourceMappingURL=deposito.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InversionesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalles_detalles__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chat_chat__ = __webpack_require__(46);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
 * Generated class for the InversionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InversionesPage = /** @class */ (function () {
    function InversionesPage(navCtrl, navParams, afDatabase, afAuth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afDatabase = afDatabase;
        this.afAuth = afAuth;
        this.afAuth.authState.subscribe(function (data) {
            if (data && data.email && data.uid) {
                _this.inversionesRef = _this.afDatabase.list('usuarios/' + data.uid + '/inversiones');
                _this.inversiones = _this.inversionesRef
                    .snapshotChanges()
                    .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (inversiones) {
                    return inversiones.map(function (inversion) { return (__assign({ key: inversion.key }, inversion.payload.val())); });
                }));
            }
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
            }
        });
    }
    InversionesPage.prototype.abrirDetalles = function (itemkey) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__detalles_detalles__["a" /* DetallesPage */], { itemkey: itemkey });
    };
    InversionesPage.prototype.abrirChat = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__chat_chat__["a" /* ChatPage */]);
    };
    InversionesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inversiones',template:/*ion-inline-start:"C:\xampp\htdocs\fabio\src\pages\inversiones\inversiones.html"*/'<!--\n\n  Generated template for the InversionesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar class="principal">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu" color="oro"></ion-icon>\n\n    </button>\n\n    \n\n    <div class="logo">\n\n        <img src="assets/imgs/logof.png" alt="">\n\n      </div>\n\n\n\n    <ion-buttons start>\n\n      <button ion-button icon-only (click)="abrirChat()">\n\n        <ion-icon name="contact" color="oro"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="fondo-dark">\n\n<div>\n\n  <ion-list class="lista-dark" no-lines>\n\n    \n\n    <button ion-item *ngFor="let inversion of inversiones | async"  (click)="abrirDetalles(inversion.key)">\n\n        <ion-icon name="logo-euro" color="oro" start></ion-icon>\n\n        {{inversion.nombre}}\n\n        <span class="mini" item-end>{{inversion.inversion}}€</span>\n\n      </button>\n\n          \n\n      </ion-list>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\fabio\src\pages\inversiones\inversiones.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__["a" /* AngularFireAuth */]])
    ], InversionesPage);
    return InversionesPage;
}());

//# sourceMappingURL=inversiones.js.map

/***/ })

},[307]);
//# sourceMappingURL=main.js.map