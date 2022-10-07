import styled,{createGlobalStyle} from 'styled-components';

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
    background-color: #011627;
    border-bottom: solid #e71d36 8px;
    border-radius: 5px;

    @media (max-width:750px){
        border:solid;
    }
`

export const Logo = styled.img`
    width: 5vw;
`

export const BoxHeader = styled.div`
    width:30%;
    margin:0 5%;
    display:flex;
    justify-content: space-between;
    align-items: center;
`

export const Menu = styled.h3`
    color:#ff9f1c;
    padding: 8px;
    display:none;

    :hover{
        cursor:pointer;
    }

    @media (max-width:750px){
        border:solid;
        display: flex;
    }
`
export const Ti = styled.h2`
    color:#ff9f1c;
    font-size:1rem;
    padding: 10px;
`

export const List = styled.ul`
    display:flex;
    justify-content: space-evenly;
    align-items:center;
    color:#2ec4b6;
    width: 90%;
`