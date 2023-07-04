/** PATRONES DE DISEÑO **/
//En React tenemos algunos patrones de diseño que nos permiten reutilizar componentes. 

//1) High Order Components
//2) Render Props

//1 : Es una función que toma como argumento un componente y devuelve un nuevo componente con una funcionalidad adicional. 

//Ejemplo función que le agrega un título a un mensaje. 

export const mensajeConTitulo = (Mensaje) => {
    return function () {
        return (
            <>
                <h2> Hola Mundo </h2>
                <Mensaje />
            </>
        )
    }
}


//Ejemplo 2: Aumentamos el precio

export const conAumento = (Producto) => {
    return function ({ nombre, precio }) {
        let nuevoPrecio = precio + 500;
        return <Producto precio={nuevoPrecio} nombre={nombre} />
    }
}




const Ejemplos = () => {
    return (
        <div>Ejemplos</div>
    )
}

export default Ejemplos