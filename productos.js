let productos = JSON.parse(localStorage.getItem("productos")) || [

{
nombre:"Aire acondicionado 12V",
precio:"350",
categoria:"aire",
imagen:"https://i.imgur.com/Wk4F6QH.jpg"
},

{
nombre:"Inversor 48V",
precio:"120",
categoria:"inversor",
imagen:"https://i.imgur.com/8Km9tLL.jpg"
}

]

function guardarProductos(){
localStorage.setItem("productos",JSON.stringify(productos))
}