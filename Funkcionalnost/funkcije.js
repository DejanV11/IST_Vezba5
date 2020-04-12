let knjige = sveKnjige();

function sveKnjige(){
    let modulKnjige = require("../ListaKnjiga/knjige.js");

    return modulKnjige;
}

function addKnjiga(id, naziv, autor){            
    let knjiga = {
        id: id,
        naziv: naziv,
        autor: autor
    };

    knjige.push(knjiga);
}

function getKnjiga(id){        
    for (let i=0; i<knjige.length; i++){
        if (knjige[i].id == id){
            return knjige[i];
        }
    }
}

function postaviAutora(naziv, autor){    
    for (let i=0; i<knjige.length; i++){
        if (knjige[i].naziv.toLocaleLowerCase() == naziv.toLocaleLowerCase()){
            knjige[i].autor = autor;
        }
    }
}

function deleteKnjiga(id){    
    for (let i=0; i<knjige.length; i++){
        if (knjige[i].id == id){
            knjige.splice(i, 1);
        }
    }
}

function getKnjigaByAuthor(autor){
    let nizKnjige = [];
    
    for (let i=0; i<knjige.length; i++){
        if (knjige[i].autor.toLocaleLowerCase() == autor.toLocaleLowerCase()){
            nizKnjige.push(knjige[i]);
        }
    }

    return nizKnjige;
}

let tmp;
console.log(knjige);
tmp = addKnjiga(6, "Provera", "Admin");

console.log(knjige);
tmp = getKnjiga(6);

console.log(tmp);
tmp = postaviAutora("Provera", "Administ");

console.log(knjige);
tmp = deleteKnjiga(6);

console.log(knjige);
tmp = getKnjigaByAuthor("Karl Maj");

console.log(tmp);