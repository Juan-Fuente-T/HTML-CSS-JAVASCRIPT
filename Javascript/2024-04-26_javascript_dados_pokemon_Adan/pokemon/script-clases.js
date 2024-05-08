class Pokemon {
    id = 0;
    nombre = '?';
    salud = 0;
    ataque = 0;
    defensa = 0;
    velocidad = 0;
    habilidades = [];

    /**
     * @param {number} id 
     * @param {string} nombre 
     * @param {number} salud 
     * @param {number} ataque 
     * @param {number} defensa 
     * @param {number} velocidad 
     * @param {Array<TipoHabilidad>} habilidades 
     */
    constructor(id, nombre, salud, ataque, defensa, velocidad, habilidades) {
        if (id != undefined) {
            this.id = id;
        }
        if (nombre != undefined) {
            this.nombre = nombre;
        }
        if (salud != undefined) {
            this.salud = salud;
        }
        if (ataque != undefined) {
            this.ataque = ataque;
        }
        if (defensa != undefined) {
            this.defensa = defensa;
        }
        if (velocidad != undefined) {
            this.velocidad = velocidad;
        }
        if (habilidades != undefined) {
            this.habilidades = habilidades;
        }
    }

    /**
     * @param {number} damage 
     */
    recibirAtaque(damage) {
        if (this.salud <= 0) {
            alert('Este pokemon ya no puede pelear!');
            return;
        }
        if (damage != undefined) {
            let realDamage = damage - this.defensa;
            if (realDamage <= 0) {
                realDamage = 1;
            }
            this.salud = this.salud - realDamage;
            if (this.salud <= 0) {
                alert(`${this.nombre} se ha debilitado`);
            } else {
                console.log(`${this.nombre} ha recibido daño, ahora su salud es de ${this.salud}`);
            }
        }
    }

    /**
     * @param {number} numHabilidad 
     * @param {Pokemon} pokemon 
     */
    atacarPokemon(numHabilidad, pokemon) {
        let habilidadAUsar = this.habilidades[numHabilidad];
        if (habilidadAUsar == undefined) {
            alert(`La habilidad número ${numHabilidad} no existe en ${this.nombre}`);
            return;
        }
        let poderAtacar = Math.floor(Math.random()*101) <= habilidadAUsar.precision;
        if (poderAtacar) {
            pokemon.recibirAtaque(this.ataque + habilidadAUsar.damage)
        } else {
            alert(`El ataque ${habilidadAUsar.nombre} ha fallado!`)
        }
    }

}

class TipoHabilidad {
    nombre = '?';
    damage = 0;
    precision = 0;

    /**
     * @param {string} nombre 
     * @param {number} damage 
     * @param {number} precision 
     */
    constructor(nombre, damage, precision) {
        if (nombre != undefined) {
            this.nombre = nombre;
        }
        if (damage != undefined) {
            this.damage = damage;
        }
        if (precision) {
            this.precision = precision;
        }
    }

}

class Combate {

    miPokemon;
    oponentePokemon;

    viewerHtmlMiPokemon;
    viewerHtmlOponentePokemon;

    /**
     * @param {Pokemon} miPokemon 
     * @param {Pokemon} oponentePokemon 
     * @param {HTMLElement} viewerHtmlMiPokemon 
     * @param {HTMLElement} viewerHtmlOponentePokemon 
     * @returns 
     */
    constructor(miPokemon, oponentePokemon, viewerHtmlMiPokemon, viewerHtmlOponentePokemon) {
        if (
            miPokemon == undefined ||
            oponentePokemon == undefined ||
            viewerHtmlMiPokemon == undefined ||
            viewerHtmlOponentePokemon == undefined
        ) {
            alert("Falta algún parámetro de nuestro combate!");
            return;
        }
        this.miPokemon = miPokemon;
        this.oponentePokemon = oponentePokemon;
        this.viewerHtmlMiPokemon = viewerHtmlMiPokemon;
        this.viewerHtmlOponentePokemon = viewerHtmlOponentePokemon;
    }

}

/**
 * @param {HTMLElement} miPkmnHtml 
 * @param {HTMLElement} oponentePkmnHtml 
 */
function empezarCombate(miPkmnHtml, oponentePkmnHtml) {

    let pikachu = new Pokemon(25, 'Pikachu', 400, 50, 50, 5, []);
    pikachu.habilidades.push(new TipoHabilidad('Impactrueno', 50, 100));
    pikachu.habilidades.push(new TipoHabilidad('Placaje', 20, 75));
    pikachu.habilidades.push(new TipoHabilidad('Destello', 0, 100));
    pikachu.habilidades.push(new TipoHabilidad('El poder de la amistad', 100, 90));
    console.log('Este es nuestro pikachu', pikachu);

    let spearow = new Pokemon(21, 'Spearow', 300, 75, 25, 6, []);
    spearow.habilidades.push(new TipoHabilidad('Picotazo', 20, 100));
    spearow.habilidades.push(new TipoHabilidad('Placaje', 20, 75));
    spearow.habilidades.push(new TipoHabilidad('Vuelo', 50, 100));
    spearow.habilidades.push(new TipoHabilidad('El poder de las yemas', 90, 80));
    console.log('Este es nuestro spearow', spearow);

    let combate = new Combate(pikachu, spearow, miPkmnHtml, oponentePkmnHtml);
    console.log('Este es el combate!', combate);
    
}
