import styled from 'styled-components'

export const ContainerProj = styled.section`
    border: solid;
    display: flex;
    justify-content: space-between;
    flex-direction:column;
    
    @media (max-width:750px){
        align-items:center;
        flex-direction:column;
    }
`
export const SubTitle = styled.div`
    border: solid orange;
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
    border: solid green;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

`

export const BoxProj = styled.div`
    border: solid purple;
    width: 30vw;
    margin:5%
`