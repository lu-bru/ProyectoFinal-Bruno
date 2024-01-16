export const productos = [
  {
    id: 1,
    nombre: "Banana",
    descripcion:
      "Fruto del bananero, comestible, de forma alargada y algo curvada, pulpa de color blanquecina y piel lisa de color amarillo que se desprende con facilidad.",
    categoria: "dulces",
    img: "/src/assets/fruit-1.jpg",
    precio: 300,
    stock: 5,
  },
  {
    id: 2,
    nombre: "Manzana",
    descripcion:
      "Fruto del manzano, comestible, de forma redondeada y algo hundida por los extremos, piel fina, de color verde, amarillo o rojo, carne blanca y jugosa, de sabor dulce o ácido, y semillas en forma de pepitas encerradas en una cápsula de cinco divisiones.",
    categoria: "acidas",
    img: "/src/assets/fruit-2.jpg",
    precio: 420,
    stock: 6,
  },
  {
    id: 3,
    nombre: "Uvas",
    descripcion:
      "Fruto de la vid, comestible, pequeño y de forma redonda u ovalada, piel muy fina y carne muy jugosa; nace junto a otros formando racimos.",
    categoria: "acidas",
    img: "/src/assets/fruit-3.jpg",
    precio: 600,
    stock: 12,
  },
  {
    id: 4,
    nombre: "Lima",
    descripcion:
      "Fruto del árbol limero, de forma esférica, más pequeño que el limón, corteza lisa y amarilla y pulpa jugosa, de color verdoso.",
    categoria: "acidas",
    img: "/src/assets/fruit-4.jpg",
    precio: 300,
    stock: 10,
  },
  {
    id: 5,
    nombre: "Limón",
    descripcion:
      "Fruto del limonero, comestible, de forma ovalada, piel de color amarillo o verde y pulpa dividida en gajos, de sabor ácido y muy aromático.",
    categoria: "acidas",
    img: "/src/assets/fruit-5.jpg",
    precio: 420,
    stock: 6,
  },
  {
    id: 6,
    nombre: "Cereza",
    descripcion:
      "Fruto del cerezo, pequeño y redondeado, de color rojo oscuro, pulpa dulce y jugosa y un hueso en su interior.",
    categoria: "dulces",
    img: "/src/assets/fruit-6.jpg",
    precio: 520,
    stock: 5,
  },
  {
    id: 7,
    nombre: "Sandía",
    descripcion:
      "Fruto de la planta del mismo nombre, comestible, esférico y de gran tamaño, con corteza verde muy dura y pulpa roja, muy dulce y jugosa, y llena de pepitas negras.",
    categoria: "dulces",
    img: "/src/assets/fruit-7.jpg",
    precio: 350,
    stock: 3,
  },
  {
    id: 8,
    nombre: "Almendras",
    descripcion:
      "Fruto del almendro, de forma ovalada y con una cáscara leñosa acabada en punta por un extremo.",
    categoria: "neutras",
    img: "/src/assets/fruit-8.jpg",
    precio: 500,
    stock: 8,
  },
  {
    id: 9,
    nombre: "Maní",
    descripcion:
      "Fruto con cáscara coriácea y, según la variedad, dos a cuatro semillas blancas y oleaginosas, comestibles después de tostadas",
    categoria: "neutras",
    img: "/src/assets/fruit-9.jpg",
    precio: 400,
    stock: 15,
  },
  {
    id: 10,
    nombre: "Mandarina",
    descripcion:
      "Fruto del mandarino, parecido a la naranja, de forma achatada por la parte superior e inferior, cáscara de color anaranjado brillante, muy fácil de separar, y pulpa muy dulce.",
    categoria: "acidas",
    img: "/src/assets/fruit-10.jpg",
    precio: 520,
    stock: 3,
  },
  {
    id: 11,
    nombre: "Kiwi",
    descripcion:
      "Fruto del arbusto kiwi, comestible, de forma ovalada, piel delgada y vellosa, de color verde pardusco y pulpa jugosa, de color verde brillante y con diminutas semillas dispuestas en torno a un corazón blanco.",
    categoria: "acidas",
    img: "/src/assets/fruit-11.jpg",
    precio: 600,
    stock: 10,
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredProduct = productos.find(
        (prod) => prod.id === parseInt(id)
      );
      resolve(filteredProduct);
    }, 2000);
  });
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredProducts = productos.filter(
        (prod) => prod.categoria === category
      );
      resolve(filteredProducts);
    }, 2000);
  });
};
