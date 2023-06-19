import { useParams } from "react-router-dom"
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { MockedContext } from "../../utils/hooks";
//Hooks
import { 
    useFetch 
} from "../../utils/hooks"
//Classes
import { 
    userData, 
    userActivity, 
    userSessionAverage, 
    userPerformance,
    
} from "../../utils/dataFormatted/dataFormatted";    
//CSS
import './index.css'
//Composants
import Loader from "../../components/Loader";
import NutritionItem from "../../components/NutritionItem";
import DailyActivity from "../../components/DailyActivity";
import RadarChartTypeActivity from "../../components/RadarChartTypeActivity";
import LineChartAverageSession from "../../components/LineChartAverageSession";
import RadialBarChartScore from "../../components/RadialBarChartScore";

//************************************************** */
//
//************************************************** */

function Profils(){

    let { userId } = useParams()
    let { isMocked } = useContext(MockedContext)

    let urlDataOfTheUser = isMocked === false ? `http://localhost:3000/user/${userId}` : `../dataMocked/userMainData${userId}.json`
    let urlDataOfUserActivity = isMocked === false ? `http://localhost:3000/user/${userId}/activity` : `../dataMocked/userActivityData${userId}.json` 
    let urlDataOfUserAverageSession = isMocked === false ? `http://localhost:3000/user/${userId}/average-sessions` : `../dataMocked/userAverageSession${userId}.json` 
    let urlDataOfUserPerformance = isMocked === false ? `http://localhost:3000/user/${userId}/performance` : `../dataMocked/userPerformanceData${userId}.json` 

    console.log(urlDataOfTheUser, '=== is data mocked? ===>', isMocked)
    
    let fetchDataOfTheUser = useFetch(urlDataOfTheUser)
    let fetchDataOfUserActivity = useFetch(urlDataOfUserActivity)
    let fetchDataOfUserAverageSession = useFetch(urlDataOfUserAverageSession)
    let fetchDataOfUserPerformance = useFetch(urlDataOfUserPerformance)

    if(fetchDataOfTheUser.dataUser === "can not get user" || 
        fetchDataOfTheUser.error || 
        fetchDataOfUserActivity.error ||
        fetchDataOfUserAverageSession.error ||
        fetchDataOfUserPerformance.error
    ){
        return <div>
            <Navigate to="*" replace={true} />            
        </div>
    } 
    console.log(fetchDataOfTheUser)

    let dataOfUser = fetchDataOfTheUser.isLoading === false ? new userData(fetchDataOfTheUser.dataUser.data) :  null;
    let dataOfUserActivity = fetchDataOfUserActivity.isLoading === false ?  new userActivity(fetchDataOfUserActivity.dataUser.data) : null;
    let dataOfUserAverageSession =  fetchDataOfUserAverageSession.isLoading === false ?  new userSessionAverage(fetchDataOfUserAverageSession.dataUser.data) : null
    let dataOfUserPerformance =  fetchDataOfUserPerformance.isLoading === false ? new userPerformance(fetchDataOfUserPerformance.dataUser.data) : null
    
    

    
    return (
        fetchDataOfTheUser.error ||
        fetchDataOfUserActivity.error ||
        fetchDataOfUserAverageSession.error ||
        fetchDataOfUserPerformance.error
        ) ?

        (<Navigate to="*" replace={true} />) :
        
        (
            dataOfUser === null || 
            dataOfUserActivity === null ||
            dataOfUserAverageSession === null ||
            dataOfUserPerformance === null 
        ) ? 
        <Loader/> : 
        
        <section className="profil-section">
            <div className="profil-title">
                <h1 className="firstName-title">Bonjour <span className="firstName-name">{dataOfUser.firstName}</span></h1>
                <p className="firstName-text">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
            <div className="profil-container">
                <div className="dailyActivity-container ">
                    <div className="titleDailyActivity">
                        <h2>Activité quotidienne</h2>
                        <div className="lengends">
                            <div className="legends-container">
                                <div className="dot black"></div>
                                <p className="legends-text">Poids (kg)</p>
                            </div>
                            <div className="legends-container">
                                <div className="dot red"></div>
                                <p className="legends-text">Calories brûlées (kCal)</p>
                            </div>
                        </div>
                    </div>
                    
                        <DailyActivity sessions={dataOfUserActivity.sessions} />
                    
                
                </div>
                <div className="trainingSession-container">
                    <div className="lineChart-container">

                        <p className="legendText">Durée moyenn des sessions</p>                    
                        
                        <LineChartAverageSession data={dataOfUserAverageSession}/>
                        
                    </div>
                    <div className="radarChart-container">
                        
                        <RadarChartTypeActivity data={dataOfUserPerformance}/>
                        
                    </div>
                    <div className="radialBarChart-container">
                        <h3>Score</h3>
                        {/* <div className="radialBarChart-circle">
                            <span className="leradialBarChart-title">{dataOfUser.score}% <br /></span>
                            de votre<br /> objectif
                        </div> */}
                        <RadialBarChartScore data={dataOfUser.score}/>
                    </div>
                </div>
                
                <div className='nutrition-container'>
                    <NutritionItem 
                        value={dataOfUser.calories}
                        name='Calories'
                    />
                    <NutritionItem 
                        value={dataOfUser.proteines}
                        name='Proteines'
                    />
                    <NutritionItem 
                        value={dataOfUser.glucides}
                        name='Glucides'
                    />
                    <NutritionItem 
                        value={dataOfUser.lipides}
                        name='Lipides'
                    />

                </div>
                
            </div>
            
            

        </section>
}
export default Profils