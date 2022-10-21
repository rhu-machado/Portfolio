import styled from 'styled-components';

export const ContainerFooter = styled.section`
    display: flex;
    justify-content: center;
    border-top: solid #e71d36 8px;
    border-radius: 5px;
    background-color: #011627;
`

export const BoxFooter = styled.div`
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const A = styled.a`
    color: #2ec4b6;
    width: 6vw;
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin:10px 25px;
    transform: scale(130%);

    :hover{
        transform: scale(150%);
    }
`