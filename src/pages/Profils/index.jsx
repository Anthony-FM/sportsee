import { useParams } from "react-router-dom"

import { 
    useFetch 
} from "../../utils/hooks"

import { 
    userData, 
    userActivity, 
    userSessionAverage, 
    userPerformance,
    
} from "../../utils/dataFormatted/dataFormatted";    

import styled from "styled-components";
import Loader from "../../components/Loader";

//************************************************** */
//
//************************************************** */

const SectionApp = styled.section`
    padding: 68px 90px 86px 226px

`
const FirstNameH1 = styled.h1`
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
`
const FirstNameSpan = styled.span`
    color: #FF0101;
`

const FirstParagraphe = styled.p`
    margin-top: 41px;
    font-weight: 400;
    font-size: 18px;
`

function Profils(){

    let { userId } = useParams()

    let fetchDataOfTheUser 
    let fetchDataOfUserActivity 
    let fetchDataOfUserAverageSession 
    let fetchDataOfUserPerformance 

    let dataOfUser
    let dataOfUserActivity
    let dataOfUserAverageSession
    let dataOfUserPerformance


    fetchDataOfTheUser = useFetch(`http://localhost:3000/user/${userId}`)
    fetchDataOfUserActivity = useFetch(`http://localhost:3000/user/${userId}/activity`)
    fetchDataOfUserAverageSession = useFetch(`http://localhost:3000/user/${userId}/average-sessions`)
    fetchDataOfUserPerformance = useFetch(`http://localhost:3000/user/${userId}/performance`)
    
    
    
    !fetchDataOfTheUser.isLoading ? (dataOfUser = new userData(fetchDataOfTheUser.dataUser.data)) : (dataOfUser = undefined)
    !fetchDataOfUserActivity.isLoading ? (dataOfUserActivity = new userActivity(fetchDataOfUserActivity.dataUser.data)) : (dataOfUserActivity = undefined)
    !fetchDataOfUserAverageSession.isLoading ? (dataOfUserAverageSession = new userSessionAverage(fetchDataOfUserAverageSession.dataUser.data)) : (dataOfUserAverageSession = undefined)
    !fetchDataOfUserPerformance.isLoading ? (dataOfUserPerformance = new userPerformance(fetchDataOfUserPerformance.dataUser.data)) : (dataOfUserPerformance = undefined)


    console.log(dataOfUser)
    console.log(dataOfUserActivity)
    console.log(dataOfUserAverageSession)
    console.log(dataOfUserPerformance)


    // if(error ||
    //     error ||
    //     error ||
    //     error
    // ){
    //     return <div>
    //         Oops! Une errrur est survenu lors du chargement des données
    //     </div>
    // } 
    
    
    return fetchDataOfTheUser.isLoading ? 
    
    <Loader/> : 
    
    <SectionApp>
       
        <FirstNameH1>Bonjour <FirstNameSpan>{dataOfUser.firstName}</FirstNameSpan></FirstNameH1>
        <FirstParagraphe>Félicitation ! Vous avez explosé vos objectifs hier 👏</FirstParagraphe>

    </SectionApp>
}
export default Profils