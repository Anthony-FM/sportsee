// Composants
import CardId from '../../components/CardId'
// CSS
import './index.css'
// Context
import { useContext } from 'react'
import { MockedContext } from '../../utils/hooks'


function Home(){


    let { isMocked, toggleContext } = useContext(MockedContext)
    
    
    let buttonText = isMocked === true  ? "Utiliser les données de l'API" : "Utiliser les données Mocké"
    console.log(isMocked, buttonText)

    return <section className='home-section'>
        <div className='card-container'>
            <CardId id="12" gender='Male'/>
            <CardId id="18" gender='Female'/>
            <button onClick={() => toggleContext()} className='card-button'>{buttonText}</button>
        </div>     
    </section>
}

export default Home