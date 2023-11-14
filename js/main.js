
const mercado = document.getElementById("shopContent");



let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


productos.forEach((product) => {
    let content = document.createElement ("div");
    content.className = "card";
    content.innerHTML = `

    <img src= "${product.img}">
    <h3> ${product.nombre} </h3>
    <p class="price"> $ ${product.precio} </p>
    `;

    mercado.append(content);

    let comprar = document.createElement("button");
  
    comprar.innerText = "Comprar" ;
     comprar.className = "boton";

    content.append(comprar);


    comprar.addEventListener("click", () =>{
        const repeat = carrito.some((repeatProduct)=> repeatProduct.id === product.id);
      if(repeat){
        carrito.map((prod)=> {
            if(prod.id ===product.id){
                prod.cantidad++
            }
        })
      }else{
        carrito.push({
            id:product.id,
            img:product.img,
            nombre:product.nombre,
            precio:product.precio,
            cantidad: product.cantidad,

        });
        }
        console.log(carrito);
        carritoCounter();
        saveLocal ();
    });

})

//set item
const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));

};

// get item




/*let seleccion = prompt("Desea comprar un producto?");

while (seleccion !== "si" && seleccion !== "no") {
    alert("ingrese si o no")
    seleccion = prompt("Desea comprar un producto?")
};


if (seleccion === "si") {
    alert("A continuación nuestra lista de productos")

    let todosLosProductos = productos.map((producto) => producto.nombre + " " + " $ " + producto.precio);
    alert(todosLosProductos.join(" - "))
} else if (seleccion === "no") {
    alert("Gracias por utulizar nuestros servicios")
}


while (seleccion !== "no") {
    let producto = prompt("Agregar producto al carrito")
    let precio = 0

    if (producto === "harina" || producto === "galletitas" || producto === "cerveza" || producto === "agua" || 
    producto === "gaseosa") {
        switch (producto) {
            case "harina":
                precio = 50
                break;
            case "galletitas":
                precio = 100
                break;
            case "cerveza":
                precio = 150
                break;

            case "agua":
                precio = 200
                break;

            case "gaseosa":
                precio = 250
                break;
                default:
                break;
        }

        let unidades = parseInt(prompt("Cuantas unidades desea agregar?"))

        carrito.push ({producto, unidades, precio})
        console.log(carrito)
    }else {
        alert ("Producto incorrecto")
    }

    seleccion = prompt("Desea comprar un nuevo producto? Ingrese si o no");
   

    while (seleccion === "no"){
        alert("Gracias por su compra")

        carrito.forEach((carritoFinal)=>{
            console.log(`producto: ${carritoFinal.producto}, unidades : ${carritoFinal.unidades}, 
            total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })

        break;

    }
}

const total = carrito.reduce((acc, el)=> acc + el.precio * el.unidades, 0)
console.log(`El total a pagar por la compra es : ${total}`);*/