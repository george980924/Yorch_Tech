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
    imagen: "https://i.imgur.com/8Km9tLL.jpg",
    info: "c/u 180 x cant"
  }
];