import { useDispatch, useSelector } from "react-redux/es/exports"
import { reset, restar, sumar } from "../actions/contadorActions";

const Contador = () => {

    const state = useSelector(state => state);
    const dispatch = useDispatch();

    return(
        <div>
            <h2 style={{color: '#fff'}}>contador</h2>
            <h3 style={{color: '#fff'}}>{state.contador}</h3>
            <button onClick={() => dispatch(sumar())}>+</button>
            <button onClick={() => dispatch(restar())}>-</button>
            <button onClick={() => dispatch(reset())}>reset</button>
        </div>
    )
}

export default Contador