import { useParams } from "react-router-dom"
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { MockedContext } from "../../utils/hooks";

import { 
    useFetch 
} from "../../utils/hooks"

import { 
    userData, 
    userActivity, 
    userSessionAverage, 
    userPerformance,
    
} from "../../utils/dataFormatted/dataFormatted";    

import './index.css'
import Loader from "../../components/Loader";

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

    console.log(urlDataOfTheUser, '===', isMocked)
    
    let fetchDataOfTheUser 
    let fetchDataOfUserActivity 
    let fetchDataOfUserAverageSession 
    let fetchDataOfUserPerformance

    let dataOfUser
    let dataOfUserActivity
    let dataOfUserAverageSession
    let dataOfUserPerformance

    
    fetchDataOfTheUser = useFetch(urlDataOfTheUser)
    fetchDataOfUserActivity = useFetch(urlDataOfUserActivity)
    fetchDataOfUserAverageSession = useFetch(urlDataOfUserAverageSession)
    fetchDataOfUserPerformance = useFetch(urlDataOfUserPerformance)
    
    // if(fetchDataOfTheUser.error ||
    //     fetchDataOfUserActivity.error ||
    //     fetchDataOfUserAverageSession.error ||
    //     fetchDataOfUserPerformance.error
    // ){
    //     return <div>
    //         Oops! Une errrur est survenu lors du chargement des données
    //         <Navigate to="*" replace={true} /> 
    //     </div>
    // } 
    
    
    !fetchDataOfTheUser.isLoading ? (dataOfUser = new userData(fetchDataOfTheUser.dataUser.data)) : (dataOfUser = null)
    !fetchDataOfUserActivity.isLoading ? (dataOfUserActivity = new userActivity(fetchDataOfUserActivity.dataUser.data)) : (dataOfUserActivity = null)
    !fetchDataOfUserAverageSession.isLoading ? (dataOfUserAverageSession = new userSessionAverage(fetchDataOfUserAverageSession.dataUser.data)) : (dataOfUserAverageSession = null)
    !fetchDataOfUserPerformance.isLoading ? (dataOfUserPerformance = new userPerformance(fetchDataOfUserPerformance.dataUser.data)) : (dataOfUserPerformance = null)
    console.log(fetchDataOfTheUser)

    console.log(dataOfUser)
    console.log(dataOfUserActivity)
    console.log(dataOfUserAverageSession)
    console.log(dataOfUserPerformance)


    
    
    return fetchDataOfTheUser.isLoading === undefined ?
    (<Navigate to="*" replace={true} />) :
    
    fetchDataOfTheUser.isLoading ? 
    <Loader/> : 
    
    <section>
       
        <h1 className="firstName-title">Bonjour <span className="firstName-name">{dataOfUser.firstName}</span></h1>
        <p className="firstName-text">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>

    </section>
}
export default Profils