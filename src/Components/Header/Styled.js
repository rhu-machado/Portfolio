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
`

export const Logo = styled.img`
    width: 5vw;

    @media (max-width:750px){
        width: 10vw;
    }
`

export const BoxHeader = styled.div`
    width:30%;
    margin:0 5%;
    display:flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width:750px){
        width: 40%;
    }
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

export const List = styled.ul`
    display:flex;
    justify-content: space-evenly;
    align-items:center;
    color:#2ec4b6;
    width: 90%;

    @media (max-width:750px){
        display:${(props)=>props.mostrar === false ? 'flex' : 'none'};
    }
`
export const ItemList = styled.li`
    font-weight: 500;
    :hover{
        cursor:pointer;
        border-bottom: solid 1px #e71d36;
    }
`
