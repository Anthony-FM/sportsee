// Composants
import CardId from '../../components/CardId'
// CSS
import './index.css'
// Context
import { useContext } from 'react'
import { MockedContext } from '../../utils/hooks'


function Home(){


    let { isMocked, toggleContext } = useContext(MockedContext)
    
    
    let buttonText = isMocked === true  ? "Activer les données API" : "Activer les données Mockée"
    let text = isMocked ? "Vous êtes sur les données mockée:" : "Vous êtes sur les données API:"
    console.log(isMocked, text)

    return <section className='home-section'>
        <div className='card-container'>
            <CardId id="12" gender='Male'/>
            <CardId id="18" gender='Female'/>
            <div className='toggleContainer'>
                <p>{text}</p>
                <button onClick={() => toggleContext()} className='card-button'>{buttonText}</button>
            </div>
        </div>     
    </section>
}

export default Home