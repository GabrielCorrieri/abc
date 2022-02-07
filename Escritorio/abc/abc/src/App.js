import Menu from './components/Menu';
import './App.css';
import ImagenTarjeta from './components/images/imagen1.jpg';
import ImagenTarjeta2 from './components/images/imagen2.jpg';
import Allever from './components/images/Allever.png';
import Tarjeta from './components/Tarjeta';
import Carta from './components/Carta';
import Cart from './components/images/CartWidget';

function App() {
  return (
<div>
  <header imgSrc={Allever}>
    <div className='header-container'> 
  <h1>Tienda de ropa</h1>
    <Menu>
      <Cart/>
    </Menu>
    </div>
  </header>
</div>
  );
}

function App2(){
  return(
    <div className= "seguir-container">
      <h3>Tarjeta</h3>
      <Carta nombre='Prueba'>
      <ul>
        <li>Dato hijo</li>
      </ul>
      <h3>Dato asdkj</h3>
      <Tarjeta imgSrc={ImagenTarjeta} user="random"></Tarjeta>
    </Carta>

    <Tarjeta imgSrc = {ImagenTarjeta2} user= "random2">
      <a href="https://youtube.com">Link a youtube</a>
      </Tarjeta> 
    </div>
  )
}

function UserGreeting(props) {
  return <h1>Bienvenido!</h1>;
}

export default App;
export default App2;
export default UserGreeting;