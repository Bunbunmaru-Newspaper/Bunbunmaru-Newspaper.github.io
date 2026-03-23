let language = 1
    
function languagechange() {

    language = language + 1;

    if(language % 2 == 0){
        document.getElementById("title").innerHTML = "Caso de desaparición de 1 año de antigüedad FINALMENTE ha sido resuelto";
        document.getElementById("SHOCKING").innerHTML = "<b>INESPERADO</b> 🚨🚨🚨";
        document.getElementById("article").innerHTML = "Los detalles de la desaparición de Koishi Komeiji que pasó el 19 de abril del 2025 han sido desconocidos, hasta ayer, donde descubrieron unos detalles aterrorizadores.<br><br>Nuestra reportera La Gran Aya Shameimaru dice que la asesinaron en Makai. Supuestamente 5 personas estuvieron involucradas junto con la víctima. <br><br>Se descubrió que el asesinato fue parte de un ritual de un culto Shinkiano cuyo nombre sigue siendo desconocido, se dice que los miembros del culto apuñalaron a la víctima 14.5 veces antes de quemarla a un cacho de carbón no identificable.<br><br>El cuerpo fue encontrado enterrado en una cueva en Makai y fue trasladado a una morgue cercana. Hoy en la mañana se reportó que el cuerpo desapareció de la morgue, una investigación se ha lanzado pero nada relacionado con la ubicación del cuerpo se ha encontrado";
        document.getElementById("niggers").innerHTML = "Regresar a la página principal";
        return
    }else{
        document.getElementById("title").innerHTML = "1 year-long disappearance case has FINALLY been solved";
        document.getElementById("SHOCKING").innerHTML = "<b>SHOCKING</b> 🚨🚨🚨";
        document.getElementById("article").innerHTML = "The details of the disappearance of Koishi Komeiji that happened on April 19th 2025 have been unknown, up until yesterday, where they uncovered some chilling details.<br><br>Our reporter The Great Aya Shameimaru says that she was murdered, the crime was committed in Makai. Allegedly 5 people were involved in this incident along with Koishi Komeiji. <br><br>It was discovered that the murder was part of a Shinkianic cult’s ritual whose name is still unknown, witnesses testify that the members of the cult stabbed the victim 14.5 times before burning her into an unrecognizable pile of coal. <br><br> The body was found buried in the cave and was later moved to a morgue nearby. Earlier today it was reported that the corpse has disappeared from the morgue and a lookout for the corpse has been initiated and nothing relating to the location of the corpse has surfaced";
        document.getElementById("niggers").innerHTML = "Back to home";
        return
    }

}


