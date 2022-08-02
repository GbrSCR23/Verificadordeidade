function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.querySelector('div#res')
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Você digitou um ano que ainda não existe, SORRY :)!')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
      gênero = 'Homem'
      if (idade >= 0 && idade < 10) {
        //Criança
      img.setAttribute('src', "fotos/bebehome.png")
      } else if (idade < 21) {
        //Jovem
        img.setAttribute('src', 'fotos/jovemhomem.png')
      } else if (idade < 50) {
        //Adulto
        img.setAttribute('src', 'fotos/homemadulto.png')
      } else {
        // Idoso
        img.setAttribute('src', 'fotos/velhohomem.png')
      }
    } else if (fsex[1].checked) {
      gênero = 'Mulher'
      if (idade >= 0 && idade < 10) {
        //Criança
        img.setAttribute('src', 'fotos/bebemulher.png')
      } else if (idade < 21) {
        //Jovem
        img.setAttribute('src', 'fotos/mulherjovem.png')
      } else if (idade < 50) {
        //Adulto
        img.setAttribute('src', 'fotos/mulheradulta.png')
      } else if (idade < 110) {
        // Idoso
        img.setAttribute('src', 'fotos/idosamulher.png')
      } else {
        img.setAttribute('src', 'fotos/homemaisvelhodomundo.png')
      }
    }

    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
  }
}
