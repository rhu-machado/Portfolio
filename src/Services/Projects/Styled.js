import styled from 'styled-components'

export const ContainerProj = styled.section`
    border: solid;
    display: flex;
    justify-content: space-between;
    
    @media (max-width:750px){
        align-items:center;
        flex-direction:column;
    }
`
export const SubTitle = styled.div`
    border: solid orange;
    width:100vw;
`

export const ProjectImg = styled.img`
    width:25vw;
`

export const BoxProj = styled.div`
    border: solid;
    width: 50vw;
`