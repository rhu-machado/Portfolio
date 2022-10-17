import React from 'react'
import * as S from './Styled'

function Projects() {
    return (
        <S.ContainerProj>
            <S.SubTitle>
                <h2>Projects</h2>
            </S.SubTitle>
            <S.BoxProj>
                <figure>
                    <S.ProjectImg src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' alt='' />
                </figure>
            </S.BoxProj>
            <S.BoxProj>
                <figure>
                    <S.ProjectImg src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' alt='' />
                </figure>
            </S.BoxProj>
        </S.ContainerProj>
    )
}
export default Projects;