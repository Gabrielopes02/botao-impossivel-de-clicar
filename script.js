var cond = true
var data = new Date()
var segundos = data.getSeconds()
var tempo = segundos + 1


function mudarposicao(){

let divclicar = document.getElementById('clicar')

divclicar.style.left = `${Math.random()*'90'}%`
divclicar.style.top = `${Math.random()*'90'}%`

if(cond == true){
divclicar.childNodes[0].innerHTML = '...se puder'

}else{

    divclicar.childNodes[0].innerHTML = 'clique em mim...'
}
cond = !cond

}
