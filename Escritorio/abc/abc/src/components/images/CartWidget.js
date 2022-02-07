import Carrito from './components/images/carritoicono.png';

function Cart ({props, children}) {
    return(
        <div>
           <img src={Carrito}></img>
            <p>
                Detalle {props.nombre}</p> 
                {children}
        </div>
    );
}

export default Cart;