//CSS
import './index.css'
// Assets
import Energy from '../../assets/energy.svg'
import Chicken from '../../assets/chicken.svg'
import Apple from '../../assets/apple.svg'
import Cheeseburger from '../../assets/cheeseburger.svg'


function NutritionItem({value, name}){
    let unity = name === 'Calories' ? 'kCal' : 'g'
    let imgSource = {
        'Calories': Energy,
        'Proteines': Chicken,
        'Glucides': Apple,
        'Lipides': Cheeseburger
    }

    return <div className='nutrition-item'>
        <img src={imgSource[name]} alt={name} className='nutrition-img'/>
        <div className='nutrition-text'>
            <h2>{value}{unity}</h2>
            <p>{name}</p>
        </div>
    </div>
}

export default NutritionItem