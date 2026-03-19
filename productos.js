let productos = JSON.parse(localStorage.getItem("productos")) || [
  {
    nombre: "Bms 4.2v 1A",
    precio: 200,
    categoria: "BMS",
    imagen: "https://i.postimg.cc/cCQc9xwN/Add_Text_03_14_06_08_17.png",
    info: "c/u 170 x cant"
  },
  {
    nombre: "Estaño 0.8mm",
    precio: 180,
    categoria: "OTROS",
    imagen: "https://i.postimg.cc/2SdN0wqT/estano08mm.png",
    info: "c/u 180 x cant"
  },
  {
    nombre: "Batería 12V 7Ah",
    precio: 650,
    categoria: "BMS",
    imagen: "https://i.postimg.cc/4yJqL2G7/bateria12v7ah.png",
    info: "c/u 650 x cant"
  },
  {
    nombre: "Cargador 5A",
    precio: 400,
    categoria: "OTROS",
    imagen: "https://i.postimg.cc/9M1Gg7bT/cargador5A.png",
    info: "c/u 400 x cant"
  }
];

function guardarProductos(){
  localStorage.setItem("productos", JSON.stringify(productos));
}