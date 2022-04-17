let date= new Date()
let cantidad
let dias=document.querySelector("#cantidad")
let imagen=document.querySelector("img")

hoy()


function hoy() {
   
switch(date.getDay()){
    case 0:
        cantidad=5
    break
    case 1:
        cantidad=4
    break
    case 2:
        cantidad=3
    break
    case 3:
        cantidad=2
    break
    case 4:
        cantidad=1
    break
    case 5:
        cantidad=0
    break
    case 6:
        cantidad=6
    default:
        cantidad=0
}}



dias.textContent=cantidad+" "


  if(cantidad==0){
    imagen.setAttribute("src", "https://i.imgur.com/fYvY8uw.jpeg")
  }else{
      imagen.setAttribute("src", "https://memegenerator.net/img/instances/64465981/puede-parecer-que-no-estoy-haciendo-nada-pero-estoy-activamente-esperando-el-fin-de-semana.jpg")
  }


