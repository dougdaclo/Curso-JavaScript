function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = String(data.getMinutes()).padStart(2, '0');
    
    msg.innerHTML = `Agora são <b>${hora}:${minutos}</b>`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = "fotomanha.png"
        document.body.style.background = 'rgb(247, 228, 168)'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = "fototarde.png"
        document.body.style.background = 'rgb(233, 146, 65)'
    } else {
        //BOA NOITE!
        img.src = "fotonoite.png"
        document.body.style.background = 'rgb(32, 151, 180)'
    }
    }