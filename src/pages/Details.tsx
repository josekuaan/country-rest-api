import React, { ReactElement, useEffect, } from 'react'
import { shallowEqual, useDispatch, } from 'react-redux';
import {  useParams,useNavigate, Link } from 'react-router-dom'
import { Container,DetailsContainer } from '../styles/Main.style';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTypedSelector } from '../redux/hooks/useTypedSelector';
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import '../App.css'
import Spinner from '../components/Loader';

interface Props {
    
}

export default function Details({}: Props): ReactElement {
    let {name} = useParams();
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const darkThemeEnabled = useTypedSelector((state) => state.themeReducer.darkThemeEnabled);

       useEffect(() => {
        fetch(`https://restcountries.com/v2/name/${name}`)
        .then((res) => res.json())
        .then(
          (data) => {
            dispatch({ type: "SEARCH_COUNTRY", payload: data });
          
          },
          (error) => {
             
             dispatch({ type: "ERROR", error: "Not Found! Try Again" });
          }
        );
      
       },[dispatch,name])
       
       const {countries} = useTypedSelector(
        (state) => state.countryReducer,
        shallowEqual)
        if(countries.length ===0){
           
          return (<div className='pos-center'><Spinner/></div>)
      }else{
        return (
          <Container className={darkThemeEnabled ? '' : 'normal' }>
            <Link to='/' className={darkThemeEnabled ? 'btn-back dark':' btn-back light'}> <FontAwesomeIcon icon={faLongArrowAltLeft} /> Back</Link>
              {countries.map((country :any,index :number) =>(
                     
                     <DetailsContainer key={index}>
                       
                         <div className='img-container'>
                             <img src={country.flag} alt="Avatar" style={{width:"100%"}} />
                         </div>
                           
                            <div className="content-container" >
                               <h3 style={{margin:"5% 0%"}}>{country.name}</h3>
                               <div className="content-wrapper">
   
                                       <p><b>Population</b>: {country.population}</p> 
                                       <p><b>Capital</b>: {country.capital}</p>
                                       <p><b>Currency</b>: {
                                       
                                       }</p> 
                                       <p><b>Region</b>: {country.region}</p> 
                                        
                                       <p><b>Language</b>: {country.languages.map((lan : any,index :number) => {
                                           return <span key={index}> {lan.name},</span>;
                                           })}</p> 
                                       <p><b>TimeZone</b>: {country.timezones[0]}</p> 
                                   
                                   
                                   
                               </div>
                            </div>
                        </DetailsContainer>
              
               ))}
              
          </Container>
       )
      }
   
}



