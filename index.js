let Barra = document.getElementById('Barra')
let Obj = {
    'key': '123456',
    'Saludar': () =>  {
        console.log('hello')
    }
}
console.log(Obj.Saludar())
console.log(Barra.innerText)

Barra.addEventListener('mouseover', ()=>{
    console.log('El mauser esta aki')
})
Barra.addEventListener('mouseout', ()=>{
    console.log('El mauser se fue')
})
let image = document.getElementsByClassName('thumbnail');
new simpleParallax(image, {
    scale:  1.5, // Ajusta el tamaño de la imagen para el efecto de paralaje
    orientation: 'up', // Dirección del efecto de paralaje
    // delay:  0.5, // Tiempo de retardo antes de que el efecto de paralaje comience
    transition: 'ease-in-out' // Transición del efecto de paralaje
  });