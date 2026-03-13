let productos = JSON.parse(localStorage.getItem("productos")) || [

{
nombre:"Bms 4.2v 1A",
precio:"200 c/u 170 x cant",
categoria:"Bms",
imagen:"https://i.imgur.com/Wk4F6QH.jpg"
},

{
nombre:"Estaño 0.8mm",
precio:"200 c/u 180 x cant",
categoria:"inversor",
imagen:"https://i.imgur.com/8Km9tLL.jpg"
}

]

function guardarProductos(){
localStorage.setItem("productos",JSON.stringify(productos))
}