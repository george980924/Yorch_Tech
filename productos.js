let productos = JSON.parse(localStorage.getItem("productos")) || [
  {
    nombre: "Bms 4.2v 1A",
    precio: 200,
    categoria: "BMS",
    imagen: "https://i.imgur.com/Wk4F6QH.jpg",
    info: "c/u 170 x cant"
  },
  {
    nombre: "Estaño 0.8mm",
    precio: 180,
    categoria: "OTROS",
    imagen: "https://i.imgur.com/8Km9tLL.jpg",
    info: "c/u 180 x cant"
  }
];

function guardarProductos(){
  localStorage.setItem("productos", JSON.stringify(productos));
}