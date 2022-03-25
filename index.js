const fetchPokemon = () => {
    // Input Pokémon
    const pokeInput = document.getElementById("pokeInput");
    let pokeInputName = pokeInput.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInputName}`;
    fetch(url).then((res) => {
        //Si hay error
        if(res.status !="200") {
            pokeName("Sorry");
            pokeNumber("We couldn't find.");
            pokeTypes("Try another...");
            pokeHP("");
            pokeAttack("");
            pokeDefense("");
            pokeSpecialAttack("");
            pokeSpecialDefense("");
            pokeSpeed("");
            pokeMoves("");
            pokeImage("https://i.gifer.com/1qqc.gif");
        }
        //Si no hay error...
        else {
            return res.json();
        }
    }).then((data) => {
        if(data){
            console.log(data);
            //Obtener datos de la API
            //Nombre
            let pokeNme = data.name;
            pokeName(pokeNme);

            //Imagen
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);

            //Número
            let pokeNum = `N.° ${data.id}`;
            pokeNumber(pokeNum);

            //Tipo
            let pokeType = `Type: ${data.types.map((typ) => typ.type.name)}`;
            pokeTypes(pokeType);

            //Estadísticas
                //HP
            let hp = `HP: ${data.stats[0].base_stat}`;
            pokeHP(hp);
                //Attack
            let attack = `Attack: ${data.stats[1].base_stat}`;
            pokeAttack(attack);
                //Defense
            let defense = `Defense: ${data.stats[2].base_stat}`;
            pokeDefense(defense);
                //Special Attack
            let specialAttack = `Special attack: ${data.stats[3].base_stat}`;
            pokeSpecialAttack(specialAttack);
                //Special Defense
            let specialDefense = `Special defense: ${data.stats[4].base_stat}`;
            pokeSpecialDefense(specialDefense);
                //Speed
            let speed = `Speed: ${data.stats[5].base_stat}`;
            pokeSpeed(speed);

            //Movimientos
            let pokeMove = `Moves: ${data.moves.map((typ) => typ.move.name)}`;
            pokeMoves(pokeMove);
        } 
    })
};

//Poner datos en Pokédex
//Nombre
const pokeName =(url) => {
    const pokeNme = document.getElementById("pokeName");
    pokeNme.textContent = url;
}
//Número
const pokeNumber = (url) => {
    const pokeNum= document.getElementById("pokeNumber");
    pokeNum.textContent = url;
}
//Imagen
const pokeImage =(url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}
//Tipos
let pokeTypes = (url) => {
    const pokeType = document.getElementById("pokeType");
    pokeType.textContent = url;
}

//Estadísticas
const pokeHP = (url) => {
    const hp = document.getElementById("pokeHP");
    hp.textContent = url;
    //hp.textContent = "hp: " + url;
}
const pokeAttack = (url) => {
    const attack = document.getElementById("pokeAttack");
    attack.textContent = url;
}
const pokeDefense = (url) => {
    const defense = document.getElementById("pokeDefense");
    defense.textContent = url;
}
const pokeSpecialAttack = (url) => {
    const attack = document.getElementById("pokeSpecialAttack");
    attack.textContent = url;
}
const pokeSpecialDefense= (url) => {
    const specialDefense = document.getElementById("pokeSpecialDefense");
    specialDefense.textContent = url;
}
const pokeSpeed = (url) => {
    const speed = document.getElementById("pokeSpeed");
    speed.textContent = url;
}

//Movimientos
let pokeMoves = (url) => {
    const pokeMove = document.getElementById("pokeMove");
    pokeMove.textContent = url;
}



