import img from '../Img/react-quiz-high-resolution-logo-transparent.png'
import styles from './Navbar.module.css'
const Navbar = ()=>{
    return(<>
        <nav className="navbar bg-body-tertiary">
  <div className={styles.container}>
    <a className="navbar-brand" href="#">
      <img className={styles.image} src={img} alt="Bootstrap" width="200" height="100"/>
    </a>
  </div>
</nav>
    </>)
}
export default Navbar;