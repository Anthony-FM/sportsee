import logo from '../../assets/logo.svg'
import './index.css'
import { Link } from 'react-router-dom'



function TopNavBar(){
    return <header className='header'>
        <img src={logo} alt="logo" className='logo'/>
        <nav className='nav-header'>

            <ul className='licontainer'>
                <li >
                    <Link to='/' className='link'> Accueil</Link>
                   
                </li>
                <li>
                    Profil
                </li>
                <li>
                    Réglage
                </li>
                <li>
                    Communauté
                </li>
                
            </ul>
        </nav>
    </header>
}

export default TopNavBar