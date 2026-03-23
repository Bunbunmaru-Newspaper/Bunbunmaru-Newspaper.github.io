let language = 1
    
function languagechange() {

    language = language + 1;

    if(language % 2 == 0){
        document.getElementById("title").innerHTML = "Misil balístico destruye Starbucks en Tel Aviv";
        document.getElementById("SHOCKING").innerHTML = "<b>INESPERADO</b> 🚨🚨🚨";
        document.getElementById("article").innerHTML = "El domingo pasado, 16 de marzo, nuestra reportera Aya Shameimaru se encontraba ahí cuando un misil balístico iraní impactó un Starbucks cercano en Tel Aviv. Según investigaciones, hubo solamente una víctima: Fujiwara no Mokou. <br><br> De alguna manera, el efecto del Elixir Hourai desvaneció por un instante, provocando la muerte de Mokou. <br><br>La creadora del Elixir, Eirin Yagokoro, y la amante de Mokou, Kaguya Houraisan, alegan que la víctima no era la verdadera Mokou, como asegura Eirin: 'Es matemáticamente y científicamente imposible que el elixir haya perdido su efecto. Lo creé específicamente para que otorgara la inmortalidad a quien lo bebiera'. <br><br>Kaguya dijo: '¿Qué haré sin mi preciada Mokou? ¡Sé que no murió!'.<br>Momiji Inubashiri dice: 'Esa NO era Mokou, era el gran Yahu. Descubrieron su disfraz y lo mataron'.<br><br>Este ha sido el informe más impactante hasta ahora, pero no se preocupen, pronto habrá más.<br>Eso es todo por hoy, hasta la próxima. ¡Ayaya!";
        document.getElementById("niggers").innerHTML = "Regresar a la página principal";
        return
    }else{
        document.getElementById("title").innerHTML = "Ballistic missile strikes Starbucks in Tel Aviv";
        document.getElementById("SHOCKING").innerHTML = "<b>SHOCKING</b> 🚨🚨🚨";
        document.getElementById("article").innerHTML = "Last sunday, March 16th, our reporter Aya Shameimaru, was on site when an Iranian ballistic missile hit a nearby Starbucks in Tel Aviv. Reports say that there was one one casualty, Fujiwara no Mokou. <br><br> Somehow, some way, the Hourai Elixir wore off for a split second, causing Mokou's death. <br><br>The Elixir's creator Eirin Yagokoro and Mokou's lover Kaguya Houraisan say that the casualty was not in fact the real Mokou as Eirin claims: 'It is mathematically and scientifically impossible that the elixir wore off, I made it specifically so that it would bring immortality to the drinker' <br><br>Kaguya said: 'Whatever shall I do without my precious Mokou? I know that she didn't die!'<br>Momiji Inubashiri says 'That was NOT Mokou, that was the big Yahu, they saw through his disguise and killed him'<br><br>This was the most shocking report yet, but do not fret, as more is coming this way <br>    That's it for today, tune in next time. Ayaya!";
        document.getElementById("niggers").innerHTML = "Back to home";
        return
    }

}


