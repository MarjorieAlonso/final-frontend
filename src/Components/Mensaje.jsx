const Mensaje = ({ usuario }) => {
    return (
      <>
        <h4>Muchas gracias, {usuario.nombre}!</h4>
        <h4>
          Te contactaremos cuanto antes via email
        </h4>
      </>
    );
  };
  
  export default Mensaje;