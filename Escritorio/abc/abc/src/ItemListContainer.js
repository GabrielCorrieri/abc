
  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
  }
  
  ReactDOM.render(
    <Greeting isLoggedIn={false} />,
    document.getElementById('root')
  );