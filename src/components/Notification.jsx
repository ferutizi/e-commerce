import { useSelector } from "react-redux/es/exports";

const Notification = () => {

    const state = useSelector(state => state);
    const {cantidadItems} = state.shopping;

        if (cantidadItems) {
            if(cantidadItems > 9) {
                return <div className='cantidadItems'>+9</div>
            } else {
                return <div className='cantidadItems'>{cantidadItems}</div>
            }
        }
        return null
}

export default Notification