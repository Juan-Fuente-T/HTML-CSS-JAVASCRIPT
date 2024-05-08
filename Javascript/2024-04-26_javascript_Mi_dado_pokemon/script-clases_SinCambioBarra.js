// console.log("Numero aleatorio entre 1 y 6:", (Math.random())*5 + 1);
// console.log("Numero aleatorio entre 1 y 50:", (Math.random())*50);


class Pokemon{
    id = 0;
    nombre ='?';
    saludBase =  0;
    salud =  0;
    ataque = 0;
    defensa = 0;
    velocidad = 0;
    damage = 0;
    habilidades  = [];
    
    /**
     * @param {number} id
     * @param {string} nombre
     * @param {number} salud
     * @param {number} ataque
     * @param {number} defensa
     * @param {number} velocidad
     * @param {Array<TipoHabilidad>} habilidades
     */
    constructor(id, nombre, salud, ataque, defensa, velocidad, habilidades){
        if(id != undefined){
            this.id = id;
        }
        if(nombre != undefined){
            this.nombre = nombre;
        }
        if(salud != undefined){
            this.salud = salud;
            this.saludBase = salud;
        }
        if(ataque != undefined){
            this.ataque = ataque;  
        }
        if(defensa != undefined){
            this.defensa = defensa;
        }
        if(velocidad != undefined){
            this.velocidad = velocidad;
        }
        if(habilidades != undefined){
            this.habilidades = habilidades;        
        }
    }
    recibirAtaque(damage){
        // let saludRestada = document.getElementById("saludRestada");
        
        if(this.salud <= 0){
            // console.log("Este pokemon ya no puede pelear!");
            // alert("Este pokemon ya no puede pelear!");
            return;
        }
        if( damage!= undefined){
            let realDamage = damage - this.defensa;
            if(realDamage <= 0){
                realDamage = 1;
            }
            this.salud -= realDamage;
            this.damage = realDamage;    
            
            console.log("Daño", damage);
        // document.getElementsByClassName('saludRestada')[0]
        // .value = `${damage} HP`;
        // document.getElementsByClassName('saludRestada')[0]
        // .value = `${damage} HP`;
            // saludRestada.value = realDamage;
            // if(this.salud<=0){
            //     // console.log(`${this.nombre} se ha debilitado`);
            //     alert(`${this.nombre} se ha debilitado`);
            // }else{
            //     console.log(`${this.nombre} ha recibido daño, ahora su salud es de ${this.salud}`)
            // }
        }
        // let imagen = document.getElementsByClassName('imagen')[0];
        // if(this.salud <= 0){
        //     imagen.setAttribute("src", "./assets/pokemon-llorando.png");
        //    }
        // salud.value = this.salud;
    }
    /**
     * @param {number} numHabilidad
     * @param {Pokemon} pokemon 
     */
    atacarPokemon(numHabilidad, pokemon){
        
        // let saludRestada = document.getElementById("saludRestada");
        let habilidadAUsar = this.habilidades[numHabilidad];
        if(habilidadAUsar == undefined){
            alert(`La habilidad numero ${numHabilidad} no existe en ${this.nombre}`);
            return;
        }
        let poderAtacar = Math.floor(Math.random()*101) <= habilidadAUsar.precision;
        if (poderAtacar){
            pokemon.recibirAtaque(this.ataque + habilidadAUsar.damage)
        }else{
            document.getElementById("aviso-derrota").innerHTML = `El ataque ${habilidadAUsar.nombre} ha fallado!`;
        }
        this.ataque; //sumar al daño de la habilidad
        // saludRestada.value = damage;
        habilidadAUsar.damage;
        habilidadAUsar.precision;
        // let imagen = document.getElementsByClassName('imagen')[0];
        // if(this.salud <= 0){
        //     console.log("Esta entrando?");
        //     imagen.setAttribute("src", "./assets/pokemon-llorando.png");
        //    }else{
        //      imagen.setAttribute("src", "./assets/pokemon.jpg");    
        //    } 
    }
}


class TipoHabilidad{
    nombre = '?';
    damage = 0;
    precision = 0;
    /**
     * @param {string} nombre 
     * @param {number} damage 
     * @param {number} precision 
     */
    constructor(nombre, damage, precision){
        if(nombre != undefined){
            this.nombre = nombre;
        }
        if(damage != undefined){
            this.damage = damage;
        }
        if(precision != undefined){
            this.precision = precision;
        }        
    }
}
class Combate{
    miPokemon;
    oponentePokemon;

    viewerHtmlMiPokemon;
    viewerHtmlOponentePokemon;
    /**
     *
     * @param {Pokemon} miPokemon 
     * @param {Pokemon} oponentePokemon 
     * @param {HTMLElement} viewerHtmlMiPokemon 
     * @param {HTMLElement} viewerHtmlOponentePokemon 
     * @returns 
    */
   
   constructor(miPokemon, oponentePokemon, viewerHtmlMiPokemon, viewerHtmlOponentePokemon){
        if(
            miPokemon == undefined ||
            oponentePokemon == undefined ||
            viewerHtmlMiPokemon == undefined ||
            viewerHtmlOponentePokemon == undefined 
        ){
            alert("Falta algun parametro de nuestro combate!");
            return;
        }
        this.miPokemon = miPokemon;
        this.oponentePokemon = oponentePokemon;
        this.viewerHtmlMiPokemon = viewerHtmlMiPokemon;
        this.viewerHtmlOponentePokemon = viewerHtmlOponentePokemon;
    }

    inicializarCombate(){
        this.establecerSalud();
        this.establecerMisAtaques();

    }
    establecerSalud(){
        // this.viewerHtmlMiPokemon.getElementsByClassName('barra-vida')[0]
        // .innerHTML = `${this.miPokemon.salud} HP`;
        // this.viewerHtmlOponentePokemon.getElementsByClassName('barra-vida')[0]
        // .innerHTML = `${this.oponentePokemon.salud} HP`;

        let miBarraVida = this.viewerHtmlMiPokemon.getElementsByClassName("barra-vida")[0];
        miBarraVida.innerHTML = `${this.miPokemon.salud}/${this.miPokemon.saludBase} HP`;
        miBarraVida.style.width = `${(this.miPokemon.salud / this.miPokemon.saludBase) * 100}%`;
        let oponenteBarraVida = this.viewerHtmlOponentePokemon.getElementsByClassName("barra-vida")[0];
        oponenteBarraVida.innerHTML = `${this.oponentePokemon.salud}/${this.oponentePokemon.saludBase} HP`;
        oponenteBarraVida.style.width = `${(this.oponentePokemon.salud / this.oponentePokemon.saludBase) * 100}%`;
    

        // this.viewerHtmlMiPokemon.get.getElementsByClassName ('saludRestada')[0]
        // .innerHTML = `${this.miPokemon.damage} HP`;
        // this.viewerHtmlOponentePokemon.getElementsByClassName('saludRestada')[0]
        // .inneL = `${this.oponentePokemon.damage} HP`;
    }
    establecerMisAtaques(){
        let miListaDeataques = this.viewerHtmlMiPokemon.getElementsByClassName("lista-ataques")[0];
        miListaDeataques.innerHTML = "";
        let imagen = this.viewerHtmlOponentePokemon.getElementsByClassName("imagen")[0];

        // imagen.src = "./assets/pokemon.jpg";
        for (let i = 0; i < this.miPokemon.habilidades.length; ++i) {
            let buttonElement = document.createElement('button');
            buttonElement.innerHTML = this.miPokemon.habilidades[i].nombre;
            const self = this;
            buttonElement.onclick = function () {
                self.ejecutarTurno(i);
            }
            let liElement = document.createElement('li');
            liElement.appendChild(buttonElement);
            miListaDeataques.appendChild(liElement);
            if(this.miPokemon.salud <= 0 || this.oponentePokemon.salud <= 0){
                imagen.setAttribute("src", "./assets/pokemon-llorando.png");
               }else{
                 imagen.setAttribute("src", "./assets/pokemon.png");    
               } 
        }
    }
    /**
     * @param {number} indiceHabilidadSeleccionada 
     */
    ejecutarTurno(indiceHabilidadSeleccionada) {
         document.getElementById("aviso-derrota").innerHTML = '';
         let saludRestada = document.getElementsByClassName ('saludRestadaOpo')[0];
         let saludRestadaOpo = document.getElementsByClassName('saludRestada')[0];
       
        let habilidadEnemiga = calcRandomNumber(0, this.oponentePokemon.habilidades.length - 1);
        if (this.oponentePokemon.velocidad > this.miPokemon.velocidad) {
            this.pkmnAAtacaPkmnB(this.oponentePokemon, habilidadEnemiga, this.miPokemon, indiceHabilidadSeleccionada);
        } else if(this.oponentePokemon.velocidad < this.miPokemon.velocidad) {
            this.pkmnAAtacaPkmnB(this.miPokemon, indiceHabilidadSeleccionada, this.oponentePokemon, habilidadEnemiga);
        } else {
            if (calcRandomNumber(0, 1) == 0) {
                this.pkmnAAtacaPkmnB(this.miPokemon, indiceHabilidadSeleccionada, this.oponentePokemon, habilidadEnemiga);
            } else {
                this.pkmnAAtacaPkmnB(this.oponentePokemon, habilidadEnemiga, this.miPokemon, indiceHabilidadSeleccionada);
            }
        }
        
        saludRestada.innerHTML = `Causa ${this.miPokemon.damage} HP de daño`;
        saludRestadaOpo.innerHTML = `Causa ${this.oponentePokemon.damage} HP de daño`;
        // let avisoDerrota = document.getElementsByClassName("aviso-derrota");
       
        // if(this.miPokemon.salud  <= 0) {
        //     avisoDerrota.innerHTML = "¡Has perdido!";
        // }else if(this.oponentePokemon.salud <= 0) {
        //     avisoDerrota.innerHTML = "¡Has ganado!";
        // }
        this.establecerSalud();
        this.avisarDerrota();
       
        // this.viewerHtmlMiPokemon.getElementsByClassName('saludRestada')[0]
        // .innerHTML = `${saludInicialOpo - this.oponentePokemon.salud} HP`;
        // this.viewerHtmlOponentePokemon.getElementsByClassName('saludRestada')[0]
        // .innerHTML = `${saludInicial - this.miPokemon.salud} HP`;
    }

    /**
     * Funciona para que el pokemon A ataque primero al B
     * y en caso de que B tenga salud, atacará B a A
     * @param {Pokemon} pkmnA 
     * @param {number} habilidadA 
     * @param {Pokemon} pkmnB 
     * @param {number} habilidadB 
     */
    pkmnAAtacaPkmnB(pkmnA, habilidadA, pkmnB, habilidadB){
        pkmnA.atacarPokemon(habilidadA, pkmnB);
            if(pkmnB.salud > 0){
            pkmnB.atacarPokemon(habilidadB, pkmnA);
        }
}
avisarDerrota(){
    let imagen = document.getElementsByClassName('imagen')[0];
    let avisoDerrota = document.getElementById("aviso-derrota");
    if(this.miPokemon.salud  <= 0) {
            avisoDerrota.innerHTML = "¡Has perdido!";
            imagen.setAttribute("src", "./assets/pokemon_enfadado.png");
        }else if(this.oponentePokemon.salud <= 0) {
            avisoDerrota.innerHTML = "¡Has vencido!";
            imagen.setAttribute("src", "./assets/pokemonV.png");      
        } 
}
}
/**
 * @param {number} min 
 * @param {number} max 
 */
function calcRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * @param {HTMLElement} miPkmnHtml 
 * @param {HTMLElement} oponentePkmnHtml 
 */
function empezarCombate(miPkmnHtml, oponentePkmnHtml){
document.getElementsByClassName('saludRestadaOpo')[0].innerHTML = null;
document.getElementsByClassName('saludRestada')[0].innerHTML = null;
document.getElementById("aviso-derrota").innerHTML = '';

let pikachu = new Pokemon(25,  "Pikachu", 400, 50, 50, 5, []);
pikachu.habilidades.push(new TipoHabilidad("Impactrueno", 50, 100));
pikachu.habilidades.push(new TipoHabilidad("Placaje", 20, 75));
pikachu.habilidades.push(new TipoHabilidad("Destello", 0, 100));
pikachu.habilidades.push(new TipoHabilidad("El poder de la amistad", 100, 90));
console.log("Este es nuestro pikachu", pikachu);

let spearow = new Pokemon(21, 'Spearow', 300, 75, 25, 6, []);
spearow.habilidades.push(new TipoHabilidad("Picotazo", 20, 100));
spearow.habilidades.push(new TipoHabilidad("Placaje", 20, 75));
spearow.habilidades.push(new TipoHabilidad("Vuelo", 50, 100));
spearow.habilidades.push(new TipoHabilidad("El poder de las yemas", 90, 80));
console.log("Este es nuestro spearow", spearow);

let combate = new Combate(pikachu, spearow, miPkmnHtml, oponentePkmnHtml);
console.log("Este es el combate!", combate);
combate.inicializarCombate();


// let ulDeHabilidades = miPkmnHtml.barra-vi
// ulDeHabilidades.innerHTML = "";
// for (let habilidad of pikachu.habilidades){
//     let elemento = document.createElement('li');
//     elemento.innerHTML = habilidad;
//     ulDeHabilidades.appendChild(elemento);
//  };
}