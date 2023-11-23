 
const carritoCompras = document.getElementById ("verCarrito");
const modal = document.getElementById ("modalContainer");
const cantidadCarrito = document.getElementById ("cantidadCarrito");



 const pintarCarrito = () =>{
    modal.innerHTML = ""
    modal.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `

    <h1 class="modal-header-title">Carrito</h1>
    `;

    modal.append(modalHeader);

    const modalButton = document.createElement("h1");
    modalButton.innerText = "x";
    modalButton.className = "modal-header-button";

    modalButton.addEventListener("click", () =>{
        modal.style.display = "none";
    });

    modalHeader.append(modalButton);

    carrito.forEach((product)=>{
        
    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-carrito";
    carritoContent.innerHTML=`
    <img src ="${product.img}">
    <h3>${product.nombre}</h3>
    <p> $ ${product.precio} </p>
    <span class= "restar"> - </span>
    <p> Cantidad: ${product.cantidad} </p>
    <span class= "sumar"> + </span>
    <p> Total: ${product.cantidad * product.precio}</p>
    <span class= "delete-product"> ❌ </span>
    `;


    modal.append(carritoContent);


    let restar = carritoContent.querySelector(".restar");

    restar.addEventListener("click", () =>{
        if(product.cantidad !== 1){
              product.cantidad -- ;

        }
          saveLocal();
        pintarCarrito();
    })


    let sumar = carritoContent.querySelector(".sumar");
    sumar.addEventListener("click", () =>{
        product.cantidad ++;
        saveLocal();
        pintarCarrito();
    })
   

    let eliminar = carritoContent.querySelector(".delete-product");
    eliminar.addEventListener("click", () =>{
        eliminarProducto(product.id)
    } )

    //let eliminar = document.createElement("span")
    //eliminar.innerText = "❌";
    //eliminar.className = "delete-product";
   // carritoContent.append(eliminar);
   // eliminar.addEventListener("click", eliminarProducto);
    });



    const total = carrito.reduce((acc, el)=> acc + (el.precio * el.cantidad), 0);

    const totalBuying = document.createElement("div");
    totalBuying.className = "total-content"
    totalBuying.innerHTML = `El total a pagar es $ ${total}`;

    modal.append(totalBuying);
  

}


carritoCompras.addEventListener("click", pintarCarrito);

const eliminarProducto = (id) =>{
    const foundId = carrito.find((element) => element.id === id);
    console.log (foundId);
    carrito = carrito.filter((carritoId)=>{
    return carritoId !== foundId});
    carritoCounter();
    saveLocal();
    pintarCarrito();
    

};



const carritoCounter = () =>{
    cantidadCarrito.style.display = "block";

    const carritoLength = carrito.length;

    localStorage.setItem("carritoLength", JSON.stringify(carritoLength));
    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"))
    

}



carritoCounter();
