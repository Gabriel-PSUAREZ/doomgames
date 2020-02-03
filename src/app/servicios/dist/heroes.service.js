"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var HeroesService = /** @class */ (function () {
    function HeroesService() {
        this.heroes = [
            {
                nombre: "Doom",
                bio: "Toma el papel de un marine espacial en busca del origen del ataque demoniaco",
                img: "assets/img/4.jpg",
                aparicion: "1941-11-01",
                casa: "DC"
            },
            {
                nombre: "Doom2",
                bio: "Regresa a la tierra y te daras cuenta que esta infestada de demonios encuentralos y matalos a todos",
                img: "assets/img/5.jpg",
                aparicion: "1939-05-01",
                casa: "DC"
            },
            {
                nombre: "Doom3",
                bio: "Investiga el ataque y responde al pedido de auxilio de marte ",
                img: "assets/img/2.jpg",
                aparicion: "1964-01-01",
                casa: "Marvel"
            },
            {
                nombre: "Doom 64",
                bio: "Juega una version unica de doom que se lanzo en 1997 para nintendo 64 pero ahora en tu pc",
                img: "assets/img/6.jpg",
                aparicion: "1962-05-01",
                casa: "Marvel"
            },
            {
                nombre: "Doom Resurrection",
                bio: "Adentrate a las instalaciones de excavacion de marte a descubrir artefactos de una antigua civilizacion ",
                img: "assets/img/7.jpg",
                aparicion: "1940-06-01",
                casa: "DC"
            },
            {
                nombre: "Doom eternal",
                bio: "Secuela del galardonado como el mejor juego del año 2016 DOOM",
                img: "assets/img/3.jpg",
                aparicion: "1962-08-01",
                casa: "Marvel"
            },
            {
                nombre: "Brutal Doom",
                bio: "pRUEBA UNA VERSION MAS SANGRIENTA Y BRUTAL DE DOOM",
                img: "assets/img/1.jpg",
                aparicion: "1974-11-01",
                casa: "Marvel"
            }
        ];
        console.log("Servicio listo para usarse!!!!");
    }
    HeroesService.prototype.getHeroes = function () {
        return this.heroes;
    };
    HeroesService.prototype.getHeroe = function (idx) {
        return this.heroes[idx];
    };
    HeroesService.prototype.buscarHeroes = function (termino) {
        var heroesArr = [];
        termino = termino.toLowerCase();
        for (var _i = 0, _a = this.heroes; _i < _a.length; _i++) {
            var heroe = _a[_i];
            var nombre = heroe.nombre.toLowerCase();
            if (nombre.indexOf(termino) >= 0) {
                heroesArr.push(heroe);
            }
        }
        return heroesArr;
    };
    HeroesService = __decorate([
        core_1.Injectable()
    ], HeroesService);
    return HeroesService;
}());
exports.HeroesService = HeroesService;
;
