function Boton (){
    function Accion (){
        console.log('Hola');
    }
    return <Boton class="boton" type="button" onClick ={Accion}
    >Clickear</Boton>
}

function form(props){
    console.log(props);
    return <>
    <h1>{props.title}</h1>
    {props.children}
    </>;
}
