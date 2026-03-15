let language = 1
    
function languagechange() {

    language = language + 1;

    if(language % 2 == 0){
        document.getElementById("title").innerHTML = "PERIÓDICO BUNBUNMARU";
        document.getElementById("description").innerHTML = "Bienvenidos al periódico Bunbunmaru OFICIAL 100% real no feik!";
        document.getElementById("descriptionpart2").innerHTML = "Este es el lugar donde se encuentran artículos exclusivos al sitio web";
        document.getElementById("articletitle").innerHTML = "Forma de escritura nuevamente inventada revoluciona Gensokyo"
        document.getElementById("link").innerHTML = "Leer el artículo"
                document.getElementById("copyright").innerHTML = "Todos los personajes fueron tomados de Touhou Project por Team Shanghai Alice. ZUN, por favor no me demandes al vacío"
        return
    }else{
        document.getElementById("title").innerHTML = "BUNBUNMARU NEWSPAPER";
        document.getElementById("description").innerHTML = "Welcome to the OFFICIAL 100% REAL bunbunmaru newsletter!";
        document.getElementById("descriptionpart2").innerHTML = "This is the place where you will find website-exclusive articles";
        document.getElementById("articletitle").innerHTML = "Newly invented writing form takes Gensokyo by storm"
        document.getElementById("link").innerHTML = "Read the article"
        document.getElementById("copyright").innerHTML = "All characters are taken from touhou project by Team Shanghai Alice. Please don't sue my ass into oblivion ZUN"
        return
    }
}
