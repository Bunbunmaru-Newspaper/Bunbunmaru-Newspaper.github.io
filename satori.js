let language = 1
    
function languagechange() {

    language = language + 1;

    if(language % 2 == 0){
        document.getElementById("title").innerHTML = "Forma de escritura nuevamente inventada revoluciona Gensokyo";
        document.getElementById("SHOCKING").innerHTML = "<b>INESPERADO</b> 🚨🚨🚨";
        document.getElementById("article").innerHTML = "This morning it was discovered that Satori Komeiji impregnated Patchouli Knowledge. <br> After hearing about this, Flandre Scarlet demanded child support from Satori, later, Satori refused to pay child support saying it was not her responsibility as she claimed that Patchouli had forced her to impregnate Patchouli. <br><br> Flandre has since lifted all charges and is considering paying Satori for damages. <br> We are awaiting a verdict from Judge Reimu. <br><br> Anyways, this is all for today, we will update you on Judge Reimu’s verdict. <br> Tune in next time, Ayaya!";
        document.getElementById("niggers").innerHTML = "Regresar a la página principal";
        return
    }else{
        document.getElementById("title").innerHTML = "Newly invented writing form takes Gensokyo by storm";
        document.getElementById("SHOCKING").innerHTML = "<b>SHOCKING</b> 🚨🚨🚨";
        document.getElementById("article").innerHTML = "Esta mañana salió a la luz que Satori Komeiji, preñó a Patchouli Knowledge. Después de escuchar de esto, Flandre Scarlet demandó la pensión de Satori, después, Satori se negó a pagar la pensión diciendo que no era su responsabilidad porque reclamó que Patchouli la había forzado. <br><br>Flandre ha levantado cargos por ahora y está considerando pagarle a Satori por daños.<br>Se espera el veredicto de la juez Reimu.<br><br>Esto es todo por hoy, los vamos a actualizar en cuanto a la decisión de Juez Reimu.<br> Hasta la próxima, Ayaya!";
        document.getElementById("niggers").innerHTML = "Back to home";
        return
    }

}


