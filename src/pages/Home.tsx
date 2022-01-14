import React, { ReactElement,useEffect,useState } from 'react'
import {useDispatch} from 'react-redux'
import Country from '../components/Country'
import {Container, MainContainer} from '../styles/Main.style'
import LoaderContainer from '../components/Loader'
import { useTypedSelector } from '../redux/hooks/useTypedSelector';
import SearchCountries from '../components/Search'

interface Props {
    
}

export default function Home({}: Props): ReactElement {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(true);
    const [error, setError] = useState(null);
    
    
    const darkThemeEnabled = useTypedSelector((state) => state.themeReducer.darkThemeEnabled);
    useEffect(() => {
      fetch("https://restcountries.com/v2/all")
        .then((res) => res.json())
        .then(
          (data) => {
            setIsLoaded(true);
            dispatch({ type: "FETCH_COUNTRIES", payload: data });
            setIsLoaded(false);
           
          },
          (error) => {
            setIsLoaded(false);
            setError(error);
            dispatch({ type: "ERROR", error: error });
          }
        );
        
              
    },[dispatch]);
   
        return (
          <Container className={darkThemeEnabled ? '' : 'normal' }>
            <MainContainer>
               <SearchCountries />
               <Country />
            </MainContainer>
           
          </Container>
        )
    
}


