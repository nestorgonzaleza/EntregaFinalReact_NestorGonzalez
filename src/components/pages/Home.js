
import { Link } from "react-router-dom"



function Home() {
    return (
      <>
        <div>Bienvenido a nuestro e-commerce</div>
        <Link to="/productos">Revisa el catálogo que Novosita bisutería tiene para ti!!</Link>
      </>
    )
  }
  export default Home