import { useContador } from "../../hooks/useContador"
import { useFetch } from "../../hooks/useFetch";

const CustomHooks = () => {
    const {contador, incrementar, decrementar} = useContador(2, 8);

    const data = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <div>
        <h2> Contador </h2>
        <button onClick={decrementar}> restar </button>
        <strong> {contador} </strong>
        <button onClick={incrementar}> sumar </button>

        <hr />

        <h2> Fetch de Datos </h2>

        {data && data.map((usuario)=> <p key={usuario.id}> {usuario.name} </p>)}

        

    </div>
  )
}

export default CustomHooks