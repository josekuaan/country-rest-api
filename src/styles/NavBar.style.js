import styled from 'styled-components'
import { useTypedSelector } from '../redux/hooks/useTypedSelector';


export const NavBarContainer= styled.nav`

/* width: 100%; */
height: 80px;
display: flex;
flex-direction: column;
`;


export const LeftContainer=styled.h3`

display: flex;
align-items: center;

`;
export const RightContainer=styled.div`

display: flex;
align-items: center;
cursor: pointer;
margin-right: 3.5rem;
@media only screen and (max-width: 768px) {
    
    
           margin-right: 0%; 
   
  }
`;

export const CoverContainer=styled.div`
    justify-content: space-between;
height: 80px;
display: flex;
padding: 0 3rem;
@media only screen and (max-width: 480px) {
    
    padding: 0 3rem
}
`
