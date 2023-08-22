import { NavLink } from "react-router-dom"



function Item(props) {
    return (
      <>
        <div className = "card">
          <img className='imagen_muestra' src={props.image} alt="Descripción de la imagen" />
          <h2>{props.nombre}</h2>
          <h4>${props.precio}</h4>
          <NavLink to={props.link} className = "link">Ver más</NavLink>
        </div>
      </>
    )
  }
  export default Item