// assets
import Swim from '../../assets/swim-icon.svg'
import Yoga from '../../assets/yoga-icon.svg'
import Bike from '../../assets/bike-icon.svg'
import Dumbbell from '../../assets/dumbbell-icon.svg'
// Style
import styled from 'styled-components'

const AsideNav = styled.aside`

    width: 117px;
    height: calc(100% - 91px);
    background: #020203;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    z-index: 1;
`

const LiContainer = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: inherit;
`

const LiItems = styled.li`

    margin-top: 20px
`


const CopiryghtParagraphe = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    color: #FFFFFF;
    transform: rotate(-90deg);
    width: max-content;
    margin-bottom: 84px;
`

function SideNavBar(){
    return <AsideNav>
        <LiContainer >
            <LiItems>
                <img src={Yoga} alt='Yoga'/>
            </LiItems>
            <LiItems>
                <img src={Swim} alt='Swim'/>
            </LiItems>
            <LiItems>
                <img src={Bike} alt='Bike'/>
            </LiItems>
            <LiItems>
                <img src={Dumbbell} alt='Dumbbell'/>
            </LiItems>
        </LiContainer >
        <CopiryghtParagraphe>Copiryght, SportSee 2020</CopiryghtParagraphe>
    </AsideNav>
}

export default SideNavBar