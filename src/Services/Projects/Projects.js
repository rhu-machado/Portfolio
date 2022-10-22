import React, {useState} from 'react'
import * as S from './Styled'
import Pj from '../../Images/HPproj.png'
import Beat from '../../Images/LifeBeat.png'

function Projects() {
    const [one,setOne] = useState(false)
    const [two,setTwo] = useState(false)
    const [three,setThree] = useState(false)
    const [four,setFour] = useState(false)
    const [five,setFive] = useState(false)
    const [six,setSix] = useState(false)
    const [seven,setSeven] = useState(false)
    const [eight,setEight] = useState(false)
    const [nine,setNine] = useState(false)
    const [ten,setTen] = useState(false)
    const [eleven,setEleven] = useState(false)
    const [twelve,setTwelve] = useState(false)

    return (
        <S.ContainerProj>
            <S.SubTitle>
                <h2>Projects</h2>
            </S.SubTitle>

            <S.BoxProjects>
                <S.BoxProj onClick={()=>setOne(!one)}>
                    <figure>
                        <S.Img src={Pj} alt=""/>
                    </figure>
                    <S.BoxText view={one}>
                        <h4>Harry Potter Api Cards</h4>
                        <p>Sobre o projeto</p>
                    </S.BoxText>
                </S.BoxProj>
                <S.BoxProj onClick={()=>setTwo(!two)}>
                    <figure>
                        <S.Img src={Beat} alt=""/>
                    </figure>
                    <S.BoxText view={two}>
                        <a href='https://beat-rhu-machado.vercel.app/'><h4>Beat</h4></a>
                        <p>Sobre o projeto</p>
                    </S.BoxText>
                </S.BoxProj>
                <S.BoxProj onClick={()=>setThree(!three)}>
                    <figure>
                        <S.Img src={Pj} alt=""/>
                    </figure>
                    <S.BoxText view={three}>
                        <h4>Nome do Projeto</h4>
                        <p>Sobre o projeto</p>
                    </S.BoxText>
                </S.BoxProj>
                <S.BoxProj onClick={()=>setFour(!four)}>
                    <figure>
                        <S.Img src={Pj} alt=""/>
                    </figure>
                    <S.BoxText view={four}>
                        <h4>Nome do Projeto</h4>
                        <p>Sobre o projeto</p>
                    </S.BoxText>
                </S.BoxProj>
                <S.BoxProj onClick={()=>setFive(!five)}>
                    <figure>
                        <S.Img src={Pj} alt=""/>
                    </figure>
                    <S.BoxText view={five}>
                        <h4>Nome do Projeto</h4>
                        <p>Sobre o projeto</p>
                    </S.BoxText>
                </S.BoxProj>
                <S.BoxProj onClick={()=>setSix(!six)}>
                    <figure>
                        <S.Img src={Pj} alt=""/>
                    </figure>
                    <S.BoxText view={six}>
                        <h4>Nome do Projeto</h4>
                        <p>Sobre o projeto</p>
                    </S.BoxText>
                </S.BoxProj>
                <S.BoxProj onClick={()=>setSeven(!seven)}>
                    <figure>
                        <S.Img src={Pj} alt=""/>
                    </figure>
                    <S.BoxText view={seven}>
                        <h4>Nome do Projeto</h4>
                        <p>Sobre o projeto</p>
                    </S.BoxText>
                </S.BoxProj>
                <S.BoxProj onClick={()=>setEight(!eight)}>
                    <figure>
                        <S.Img src={Pj} alt=""/>
                    </figure>
                    <S.BoxText view={eight}>
                        <h4>Nome do Projeto</h4>
                        <p>Sobre o projeto</p>
                    </S.BoxText>
                </S.BoxProj>
                <S.BoxProj onClick={()=>setNine(!nine)}>
                    <figure>
                        <S.Img src={Pj} alt=""/>
                    </figure>
                    <S.BoxText view={nine}>
                        <h4>Nome do Projeto</h4>
                        <p>Sobre o projeto</p>
                    </S.BoxText>
                </S.BoxProj>
                <S.BoxProj onClick={()=>setTen(!ten)}>
                    <figure>
                        <S.Img src={Pj} alt=""/>
                    </figure>
                    <S.BoxText view={ten}>
                        <h4>Nome do Projeto</h4>
                        <p>Sobre o projeto</p>
                    </S.BoxText>
                </S.BoxProj>
                <S.BoxProj onClick={()=>setEleven(!eleven)}>
                    <figure>
                        <S.Img src={Pj} alt=""/>
                    </figure>
                    <S.BoxText view={eleven}>
                        <h4>Nome do Projeto</h4>
                        <p>Sobre o projeto</p>
                    </S.BoxText>
                </S.BoxProj>
                <S.BoxProj onClick={()=>setTwelve(!twelve)}>
                    <figure>
                        <S.Img src={Pj} alt=""/>
                    </figure>
                    <S.BoxText view={twelve}>
                        <h4>Nome do Projeto</h4>
                        <p>Sobre o projeto</p>
                    </S.BoxText>
                </S.BoxProj>
            </S.BoxProjects>
        </S.ContainerProj>
    )
}
export default Projects;