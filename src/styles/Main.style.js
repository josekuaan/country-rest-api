import styled from 'styled-components'
import theme from "styled-theming";


export const backgroundColor = theme("theme", {
  light: "#fff",
  dark: "#2d2d2d",
});

export const textColor = theme("theme", {
  light: "#000",
  dark: "#fff",
});

export const Wrapper= styled.div`
background-color: ${backgroundColor};
  color: ${textColor};
`
export const MainContainer= styled.div`

width: 100%;

`;

export const Container=styled.div`
padding: 3rem 3.5rem;
@media only screen and (max-width: 480px) {
       padding: 3rem
  }
`


export const Content=styled.div`

flex-wrap: wrap;
display: flex;
/* justify-content: space-between; */

`


export const Card=styled.div`
background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 21%;
  margin-top: 3rem;
  margin-right: 3rem;
  @media only screen and (max-width: 480px) {
    width: 100%;
    margin-right : 0rem;
  }
  @media only screen and (min-width: 768px) {
  width: 100%;
}
@media only screen and (min-width: 600px) {width: 100%;margin-right : 0rem;}
@media only screen and (min-width: 992px) {width: 26%;}
@media only screen and (min-width: 1200px) {width:21%;margin-right : 3rem;}
`

export const Span=styled.span`
color:#adadad
`


export const SearchContainer=styled.div`
display: flex;
flex-wrap: wrap;
    justify-content: space-between;
    margin-right: 3rem;
    @media only screen and (min-width: 600px) {width: 100%;margin-right : 0rem;}
`

export const DetailsContainer=styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
padding-top: 3rem;
justify-content: space-around;
width: 100%;

`