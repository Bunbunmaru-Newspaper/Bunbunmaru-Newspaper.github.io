let language = 1
    
function languagechange() {

    language = language + 1;

    if(language % 2 == 0){
        document.getElementById("title").innerHTML = "Anciana expuesta como pervertida";
        document.getElementById("SHOCKING").innerHTML = "<b>ASQUEROSO</b> 🚨🚨🚨";
        document.getElementById("article").innerHTML = "Recientemente se ha descubierto que Yukari Yakumo ha estado viendo a la gente mientras se baña. Cuando se le entrevistó sobre este crimen horrendo, ella comentó que nunca ha visto nuestra Gran Aya Shameimaru o cualquier otra tengu bañándose ni una vez. Veamos lo que Aya comenta sobre esta situación <br><br>’Esto es totalmente falso, yo soy muy cuidadosa sobre mi higiene, tuvo que andar distraída por Yuyuko Saigyouji para no verme a mi o a otra tengu bañarse.’<br><br>Cuando se le confrontó, Yukari negó cualquier alegación sobre Yuyuko, pero lo hemos invalidado ya que hemos confirmado que la alegación sobre Yuyuko es cierta. Yukari ahora ha sido condenada a dos Fantasy Seals como sentencia.<br><br>Esto es todo por hoy, hasta la próxima. Ayaya!";
        document.getElementById("niggers").innerHTML = "Regresar a la página principal";
        return
    }else{
        document.getElementById("title").innerHTML = "Old hag exposed as pervert";
        document.getElementById("SHOCKING").innerHTML = "<b>DISGUSTING</b> 🚨🚨🚨";
        document.getElementById("article").innerHTML = "It has been recently uncovered that Yukari Yakumo has been spying on people while they are showering. When being interviewed for this horrendous crime, she commented that although she spies on people showering, she has never once seen our Great Aya Shameimaru or any tengu for that matter bathe even once. Let’s see what Aya has to say about this. <br><br> ‘That is absolutely not true, I’m very cautious about my hygiene, she must have always been distracted by Yuyuko Saigyouji to not see me or any tengu bathing.’<br><br>When confronted about this, Yukari refused any allegations about Yuyuko, but we have overruled that and confirmed the statement as true. Yukari will now be facing 2 Fantasy Seals as punishment.<br><br>Anyways, that's all for today. Tune in next time, Ayaya!";
        document.getElementById("niggers").innerHTML = "Back to home";
        return
    }

}


