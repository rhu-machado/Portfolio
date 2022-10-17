import styled,{createGlobalStyle} from 'styled-components';
import {Link} from 'react-router-dom'

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        list-style:none;
    }

    body{
        background-color: #252525;
        color:#fdfffc;
    }
`


export const ContainerHeader = styled.section`
    display:flex;
    justify-content:space-between;
    align-items: center;
    background-color: #011627;
    border-bottom: solid #e71d36 8px;
    border-radius: 5px;
`

export const BoxLogo = styled.figure`
    width:15%;
    display:flex;
    justify-content: center;
    align-items: center;
`

export const Logo = styled.img`
    width: 6vw;
    padding-top: 5px;

    @media (max-width:750px){
        width: 10vw;
    }
`

export const BoxList = styled.nav`
    width:50%;
    display:flex;
    justify-content: flex-end;
    align-items: center;

    @media (max-width:750px){
        width: 70%;
    }
`

export const Menu = styled.h3`
    display:none;

    :hover{
        cursor:pointer;
    }

    @media (max-width:750px){
        width: 15%;
        display: flex;
        justify-content: center;
        color:#ff9f1c;
        padding: 10px;
        font-size:1.5rem;
    }
`

export const List = styled.ul`
    display:flex;
    justify-content: space-evenly;
    align-items:center;
    color:#2ec4b6;
    width: 80%;
    height: 8vh;
    margin-right: 10%;

    @media (max-width:750px){
        margin-right: 0;
        width: 90%;
        display:${(props)=>props.mostrar === false ? 'flex' : 'none'};
    }
`
export const Links = styled(Link)`
    font-weight: 500;
    text-decoration: none;
    color:#2ec4b6;
    transition: 1s all;

    :hover{
        cursor:pointer;
        transform: scale(120%);
        border-bottom: double 1px #e71d36;
    }
`
