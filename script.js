let language = 1
    
function languagechange() {

    language = language + 1;

    if(language % 2 == 0){
        document.getElementById("title").innerHTML = "PERIÓDICO BUNBUNMARU";
        document.getElementById("description").innerHTML = "Bienvenidos al periódico Bunbunmaru OFICIAL 100% real no feik!";
        document.getElementById("descriptionpart2").innerHTML = "Esto es una recopilación de todos los artículos de Bunbunmaru pasados";
        document.getElementById("articletitle").innerHTML = "Forma de escritura nuevamente inventada revoluciona Gensokyo"
        document.getElementById("link").innerHTML = "Leer el artículo"
    }else{
        document.getElementById("title").innerHTML = "BUNBUNMARU NEWSPAPER";
        document.getElementById("description").innerHTML = "Welcome to the OFFICIAL 100% REAL bunbunmaru newsletter!";
        document.getElementById("descriptionpart2").innerHTML = "This is a compilation of past bunbunmaru articles";
        document.getElementById("articletitle").innerHTML = "Newly invented writing form takes Gensokyo by storm"
        document.getElementById("link").innerHTML = "Read the article"
        return
    }
}