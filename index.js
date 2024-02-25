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