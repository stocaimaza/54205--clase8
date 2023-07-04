//import CustomHooks from "./componentes/CustomHooks/CustomHooks"
//import Articulos from "./componentes/Articulos/Articulos"
import Ejemplos from "./componentes/Patrones/Ejemplos"


//importamos la función y el componente Mensaje: 
import Mensaje from "./componentes/Patrones/Mensaje";
import Producto from "./componentes/Patrones/Producto";
import { mensajeConTitulo, conAumento } from "./componentes/Patrones/Ejemplos";

const App = () => {

    const NuevoComponente = mensajeConTitulo(Mensaje);
    const NuevoProducto = conAumento(Producto);


  return (
    <div>
      <Ejemplos/>
      <NuevoComponente/>
      <NuevoProducto nombre="palta" precio={1000}/>
    </div>
  )
}

export default App


/*

<h1> Bienvenidos a la clase 8 </h1>
<CustomHooks/>
<hr />
<Articulos img="https://placekitten.com/200/287"  titulo="La edad de los gatos"/>
<hr />
<Articulos img="https://placekitten.com/200/286" titulo="Los gatos y el veterinario">
//Todo lo que escribo acá se considera children 
<strong>tiempo de lectura: 3 minutos </strong>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minima inventore ullam quasi doloremque aut, voluptatibus temporibus labore neque illo, ut rem fugiat eveniet saepe reiciendis quaerat, aliquam eligendi aliquid.</p>
</Articulos>


*/