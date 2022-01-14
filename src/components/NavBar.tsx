import React, { ReactElement } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas,} from '@fortawesome/free-solid-svg-icons'
import '../App.css'

import {NavBarContainer,CoverContainer,LeftContainer,RightContainer} from '../styles/NavBar.style'
import { useDispatch } from 'react-redux'
import { ActionTypes } from "../redux/constant/action-types"
import { useTypedSelector } from '../redux/hooks/useTypedSelector';

library.add(far, fas)



export default function NavBar(): ReactElement {
    const darkThemeEnabled = useTypedSelector((state) => state.themeReducer.darkThemeEnabled);
    const dispatch = useDispatch();
    return <NavBarContainer className={darkThemeEnabled ? 'darkborder' : 'lightborder' }>
        <CoverContainer >
            <LeftContainer>Where in the world?</LeftContainer>
            <RightContainer onClick={()=>dispatch({ type: ActionTypes.TOGGLE_DARK_MODE })} className='right-bar'>{darkThemeEnabled ? <FontAwesomeIcon  icon={["fas", "moon"]} /> :<FontAwesomeIcon  icon={["far", "moon"]} />} {darkThemeEnabled ? <span style={{paddingLeft:'5px'}}> Dark Mode</span>: <span style={{paddingLeft:'5px'}}> Light Mode</span>}</RightContainer>
        </CoverContainer>
    </NavBarContainer>
}
