const OPCION_SALIR = 4;
const IVA = 1.22;
let TotalDeProducto = 1000;
const ArrayDeProductos = []
let idUniversal = 1;

class Producto {
        constructor(nombre, precio, categoria, id) {
                this.nombre = nombre;
                this.precio = precio;
                this.categoria = categoria;
                this.id = id;
        }
}

const celular1 = new Producto("Samsung Galaxy", 1000, "celulares", idUniversal++);
ArrayDeProductos.push(celular1);

const celular2 = new Producto("Iphone", 1000, "celulares", idUniversal++);
ArrayDeProductos.push(celular2);

const auricular1 = new Producto("Auriculares Hyperx", 1000, "perifericos", idUniversal++);
ArrayDeProductos.push(auricular1);

const auricular2 = new Producto("Auriculares Logitech", 1000, "perifericos", idUniversal++);
ArrayDeProductos.push(auricular2);

const consola1 = new Producto("Playstation 5", 1000, "consolas", idUniversal++);
ArrayDeProductos.push(consola1);

const consola2 = new Producto("Playstation 4", 1000, "consolas", idUniversal++);
ArrayDeProductos.push(consola2);



const mostrarProductoPorCategoria = (categoria) => {
        const filtrado = ArrayDeProductos.filter((el) => el.categoria === categoria);
        let mensajeAMostrar = '';
        filtrado.forEach((el) => {
                mensajeAMostrar += `\n-Producto: ${el.nombre} \nPrecio: ${el.precio}`
        })
        alert(mensajeAMostrar);
}



const verProductos = () => {
        let opcion;
        opcion = parseInt(prompt("elige la operacion que deseas, \n 1-Celulares \n 2-Perifericos \n 3-Consolas \n 4-Volver Atras "));
        while (opcion != OPCION_SALIR) {
                switch (opcion) {
                        case 1:
                                mostrarProductoPorCategoria("celulares");
                                break;
                        case 2: mostrarProductoPorCategoria("perifericos");
                                break;
                        case 3: mostrarProductoPorCategoria("consolas");
                                break;
                        default:
                                alert("Ingreso una opcion invalida.");
                                break;
                }
                opcion = parseInt(prompt("elige la operacion que deseas, \n 1-Celulares \n 2-Perifericos \n 3-Consolas \n 4-Volver Atras "))
        }
}

const calcularIVA = (total) => {
        const resultado = IVA * total
        alert("El total con IVA: $" + resultado + "\n El total es: $" + total);
}

let opcion = parseInt(prompt("elige la operacion que deseas, \n 1-Ver Productos \n 2-Ver Operacion \n 3-Calcular IVA \n 4 Salir "))

while (opcion != OPCION_SALIR) {

        switch (opcion) {
                case 1:
                        verProductos();
                        break;
                case 2:
                        verOperacion();
                        break;
                case 3:
                        calcularIVA(TotalDeProducto);
                        break;
                default:
                        alert("Ingreso una opcion invalida.");
                        break;
        }

        opcion = parseInt(prompt("elige la operacion que deseas, \n 1-Ver Productos \n 2-Ver Operacion \n 3-Calcular IVA \n 4 Salir "));
}

alert("Gracias vuelva pronto.")
