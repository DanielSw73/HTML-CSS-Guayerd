let nombre= prompt ("Cual es tu nombre?");

console.log ("ACUERDATE DE LA FUNCION");

let apellido= prompt ("Cual es tu apellido?");

console.log ("ACUERDATE DE LA FUNCION");

alert ("Bienvenido: " + nombre + " " + apellido);

alert("Te actualizamos la info de nuestros productos")

var productos = [
    {
        nombre: "God Of War 2018 PS4",
        precio: 40000,
        stock: "32 Discos",
    },
    {
        nombre: "Ghost Of Tsushima PS5",
        precio: 98000,
        stock: "15 Discos",
    },
    {
        nombre: "Halo 5: Guardians Xbox One",
        precio: 50000,
        stock: "8 Discos",
    },
    {
        nombre: "Super Mario Odyssey",
        precio: 65000,
        stock: "3 Discos",
    },
    {
        nombre: "Splatoon 2",
        precio: 70000,
        stock: "11 Discos",
    },
    {
        nombre: "Zelda Breath Of The Wild",
        precio: 82500,
        stock: "8 Discos",
    }
];


for (var i = 0; i < productos.length; i++) {
    var producto = productos[i];
    var precioConDescuento = calcularPrecioConDescuento(producto.precio, producto.descuento);


    alert("Producto: " + producto.nombre +
        "\nPrecio original: $" + producto.precio +
        "\nStock: " + (producto.stock || "N/A") +
        "\nVentas: Muy positivas");
}


function calcularPrecioConDescuento(precio, descuento) {
    var descuentoDecimal = descuento / 100;
    var precioConDescuento = precio * (1 - descuentoDecimal);
    return precioConDescuento.toFixed(2);
}