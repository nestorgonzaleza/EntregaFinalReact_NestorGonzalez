import { NavLink } from "react-router-dom"



function Item(props) {
    return (
      <>
        <div className = "container">
       
          <h2>{props.nombre}</h2>
          <h4>{props.precio}</h4>
          <NavLink to={props.link} className = "link">Ver más</NavLink>
        </div>
      </>
    )
  }
  export default Item