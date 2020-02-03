
import {Injectable}from'@angular/core';

@Injectable()
export class HeroesService{
    private heroes:Heroe[]=[
        {
          nombre: "Doom",
          bio: "Toma el papel de un marine espacial en busca del origen del ataque demoniaco",
          img: "assets/img/4.jpg",
          aparicion: "1941-11-01",
          casa:"DC"
        },
        {
          nombre: "Doom2",
          bio: "Regresa a la tierra y te daras cuenta que esta infestada de demonios encuentralos y matalos a todos",
          img: "assets/img/5.jpg",
          aparicion: "1939-05-01",
          casa:"DC"
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
          casa:"Marvel"
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
    
    
    constructor(){
        console.log("Servicio listo para usarse!!!!");
    }

    getHeroes():Heroe[]{
        return this.heroes;
    }
    getHeroe(idx:string){
      return this.heroes[idx];
    }


    buscarHeroes(termino:string){
      let heroesArr:Heroe[]=[];
      termino=termino.toLowerCase();

      for(let heroe of this.heroes){
        let nombre = heroe.nombre.toLowerCase();
        if(nombre.indexOf(termino)>=0 ){
          heroesArr.push(heroe)
        }
      }
      return heroesArr;
    }
}

export interface Heroe{
    nombre:string;
    bio:string;
    img:string;
    aparicion:string;
    casa:string;
};