let language = 1
    
function languagechange() {

    language = language + 1;

    if(language % 2 == 0){
        document.getElementById("title").innerHTML = "PERIÓDICO BUNBUNMARU";
        document.getElementById("description").innerHTML = "Bienvenidos al periódico Bunbunmaru OFICIAL 100% real no feik!";
        document.getElementById("descriptionpart2").innerHTML = "Este es el lugar donde se encuentran artículos exclusivos al sitio web";
        document.getElementById("articletitle1").innerHTML = "Forma de escritura nuevamente inventada revoluciona Gensokyo";
        document.getElementById("articletitle2").innerHTML = "Misil balístico destruye Starbucks en Tel Aviv";
        document.getElementById("articletitle3").innerHTML = "Caso de desaparición de 1 año de antigüedad FINALMENTE ha sido resuelto";
        document.getElementById("articletitle4").innerHTML = "Proprietaria del bunbunmaru ha FINALMENTE sido expuesta";
        document.getElementById("link1").innerHTML = "Leer el artículo";
        document.getElementById("link2").innerHTML = "Leer el artículo";
        document.getElementById("copyright").innerHTML = "Todos los personajes fueron tomados de Touhou Project por Team Shanghai Alice. ZUN, por favor no me demandes al vacío"
        return
    }else{
        document.getElementById("title").innerHTML = "BUNBUNMARU NEWSPAPER";
        document.getElementById("description").innerHTML = "Welcome to the OFFICIAL 100% REAL bunbunmaru newsletter!";
        document.getElementById("descriptionpart2").innerHTML = "This is the place where you will find website-exclusive articles";
        document.getElementById("articletitle1").innerHTML = "Newly invented writing form takes Gensokyo by storm";
        document.getElementById("articletitle2").innerHTML = "Ballistic missile strikes Starbucks in Tel Aviv";
        document.getElementById("articletitle3").innerHTML = "1 year-long disappearance case has FINALLY been solved";
        document.getElementById("articletitle4").innerHTML = "Bunbunmaru owner FINALLY exposed";
        document.getElementById("link1").innerHTML = "Read the article";
        document.getElementById("link2").innerHTML = "Read the article";
        document.getElementById("copyright").innerHTML = "All characters are taken from touhou project by Team Shanghai Alice. Please don't sue my ass into oblivion ZUN"
        return
    }
}
