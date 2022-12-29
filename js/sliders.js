let sliderImg = ['banner-01.jpg', 'cta-bg.jpg', 'logo.png']
let tamanhoSlider = sliderImg.length
let sliderActual = 1
let tempoSlider

function trocaAutomatica() {
    for (let i = 0; i < tamanhoSlider; i++) {
       console.log(sliderImg[i])
    sliderActual++
    if (sliderActual >  tamanhoSlider) {
        sliderActual = 0
    }
    if (sliderImg[i]=="logo.png") {
    console.log('no')
    document.querySelector('.slider').style.backgroundImage = "url('"+sliderImg[sliderActual]+"')"
    }
    document.querySelector('.slider').style.backgroundImage = "url('"+sliderImg[sliderActual]+"')"
}
   
}
function iniciarSlider(){
    document.querySelector('.slider').style.backgroundImage = "url('"+sliderImg[sliderActual]+"')"
    tempoSlider = setInterval(trocaAutomatica, 1000)
}