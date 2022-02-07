function Carta ({props, children}) {
    return(
        <div>
            <p>
                Hola {props.nombre}, espero que andes bien</p> 
                {children}
        </div>
    );
}

export default Carta;