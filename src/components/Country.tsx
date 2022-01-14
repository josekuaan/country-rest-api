import React, { FC, ReactElement } from 'react'
import {shallowEqual} from 'react-redux'
import {Content,Card,Span} from '../styles/Main.style'
import '../App.css';
import { Link, Outlet } from 'react-router-dom';
import { useTypedSelector } from '../redux/hooks/useTypedSelector';
import Spinner from './Loader';



const Country : FC=(): ReactElement =>{

    const {countries} = useTypedSelector(
        (state) => state.countryReducer,
        shallowEqual)
      
       if(countries.length ===0){
           
           return (<div className='pos-center'><Spinner/></div>)
       }else{
        return (
        
            <Content >
              {countries.map((country :any,index :number) =>(
                    
                    <Card key={index} className='card'>
                       <Link to={`/country/${country.name}`}>
                          <img src={country.flag} alt="Avatar" style={{width:"100%"}} />
                          
                           <div className="container">
                              <h3>{country.name}</h3>
                              <p>Population:<Span> {country.population}</Span></p> 
                              <p>Region:<Span> {country.region}</Span></p> 
                              <p>Capital:<Span> {country.capital}</Span></p> 
                           </div>
                       </Link>
                       <Outlet />
                   </Card>
             
              ))}
  
              
          </Content>
      
      )
       }
       
}

export default Country;