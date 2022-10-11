import styled from 'styled-components'

export const ContainerMainTop = styled.section`
    display:flex;
    justify-content:center;
    align-items: center;
    height: 100vh;
    @media (max-width:750px){
        flex-direction: column;
    }
`

export const Rhuan = styled.img`
    width:15vw;
    border-radius:0px;
    animation: rhu 4s ease-out 1s 10 forwards;
    border-radius: 10%;


    @keyframes rhu{
        0%{
            margin-top: -20px;
        }
        25%{
            margin-top: 0px;
        }
        50%{
            margin-top: -20px;
        }
        75%{
            margin-top: 0px;
        }
        100%{
            margin-top: -20px;
        }
    }
    @media (max-width:750px){
        border-radius:50%;
        width: 30vw;
        height: 30vw;
    }
`

export const BoxImg = styled.figure`
    display: flex;
    justify-content: center;
    box-shadow: blue 0px 0px 0px 2px inset, rgb(231,29,54) 10px -10px 0px -3px, rgb(/*Cor de Dentro e cor de fora são itercaladas*/) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px, rgb(255, 217, 19) 20px -20px, rgb(255, 255, 255) 30px -30px 0px -3px, rgb(255, 156, 85) 30px -30px, rgb(255, 255, 255) 40px -40px 0px -3px, rgb(255, 85, 85) 40px -40px;
`

export const BoxName = styled.div`
    width:40%;
    height: 40%;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    @media (max-width:750px){
        width: 70%;
    }
`

export const Title = styled.h1`
    font-size: 3.5rem;
    border: solid #0f3fd0;
    color:#ff9f1c;
    animation: underline 2s ease-in 1s 1 forwards;
    @keyframes underline{
        0%{
            border-bottom: solid #e71d36 5px;
            border-width: 1px;
            
        }
        50%{
            border-width: 2px;
        }
        100%{
            border-bottom: solid #e71d36 5px;
            border-width: 5px;
        }
    }
    @media (max-width:750px){
        border:none;
    }
`

export const Text = styled.p`
    font-size: 2rem;
    color:#2ec4b6;
    
`
export const Section = styled.section`
    background-color:#011627;
    height: 200vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`
export const Div = styled.div`
    width: 50%;
    
`