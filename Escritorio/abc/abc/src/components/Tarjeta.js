import './Tarjeta.css'

function Tarjeta ({imgSrc, user}){
    return (
        <div className='tarjeta-container'> 
            <img src={imgSrc} alt="Imagen de la cuenta"/>       
            <p>{user}</p>
         </div>
    )
};

export default Tarjeta;

