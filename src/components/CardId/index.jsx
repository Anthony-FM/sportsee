import { Link } from "react-router-dom"
// Photos
import Male from '../../assets/male-user.png'
import Female from '../../assets/user-female.png'
// CSS
import './index.css'

function CardId({ id, gender }){
    let imgSource = gender === 'Male' ? Male : Female
    
    return <div className="card">
        <Link to={`/user/${id}`} className="card-link">
            <img src={imgSource} alt={`${gender} icon`} className="card-img"/>
            
        </Link>
    </div>
}

export default CardId