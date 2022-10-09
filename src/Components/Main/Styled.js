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
    animation: rhu 4s ease 2s 10 forwards;
    animation: name duration timing-function delay iteration-count direction fill-mode;

    @keyframes rhu{
        0%{
            padding-bottom: 20px;
        }
        25%{
            padding-bottom: 0px;
        }
        50%{
            padding-bottom: 20px;
        }
        75%{
            padding-bottom: 0px;
        }
        100%{
            padding-bottom: 20px;
        }
    }
    @media (max-width:750px){
        border-radius:50%;
        width: 30vw;
        height: 30vw;
    }
`

export const BoxImg = styled.figure`
    width: 30%;
    display: flex;
    justify-content: center;
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
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`
export const Div = styled.div`
    width: 50%;
    
`
