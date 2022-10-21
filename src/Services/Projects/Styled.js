import styled from 'styled-components'

export const ContainerProj = styled.section`
    display: flex;
    justify-content: space-between;
    flex-direction:column;
    
    @media (max-width:750px){
        align-items:center;
        flex-direction:column;
    }
`
export const SubTitle = styled.div`
    color:orange;
    width:100vw;
    height: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ProjectImg = styled.img`
    width:25vw;
`

export const BoxProjects = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

`
export const Img = styled.img`
    width:100%;
`

export const BoxProj = styled.div`
    background-color: #011627;
    width: 30vw;
    margin:5%
`

export const BoxText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: 2s all;
    display: ${(props) => (props.view === false ? 'none' : 'flex')};
`

