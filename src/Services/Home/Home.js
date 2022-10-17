import React from 'react'
import RhuZero from '../../Images/praiagrumari.jpg'
import * as S from './Styled.js'
import RhuOne from '../../Images/RHU-01.jpg'
import RhuTwo from '../../Images/RHU-02.jpg'
import RhuThree from '../../Images/RHU-03.jpg'

function Home() {
    return (
        <section>
            <S.ContainerMainTop>
                <S.BoxImg>
                    <S.RhuanMain src={RhuTwo} />
                </S.BoxImg>
                <S.BoxName>
                    <S.Title>Rhuan Machado</S.Title>
                    <S.Text>Front-end Developer</S.Text>
                </S.BoxName>
            </S.ContainerMainTop>

            <S.Section>
                <S.SubTitle>About Me</S.SubTitle>
                <S.BoxAbout>
                    <S.BoxImg>
                        <S.Rhuan src={RhuOne} alt='' />
                    </S.BoxImg>
                    <S.Div>
                        <S.Topico>Um Pouco De Mim</S.Topico>
                        <p>Olá me chamo Rhuan Felippe dos Santos Machado tenho 23 anos e sou da Zona Oeste do Rio de Janeiro capital.</p>
                    </S.Div>
                    <S.Divs>
                        <S.Div>
                            <S.Topico>Area Acadêmica</S.Topico>
                            <p>Me formei no ensino médio em 2018 pela Fundação de Apoio a Escola Técnica mais conhecida como FAETEC localizada em Santa Cruz na zonaOeste do Rio. Depois disso me senti meio perdido sem saber que profissão iria seguir por não ter me encaixado no curso técnico que eu fiz mas um tempo depois conheci o mundo de TI no qual iniciei o curso de Ciências de Computação em 2019 pela universidade ESTACIO.</p>
                        </S.Div>
                        <S.BoxImg>
                            <S.Rhuan src={RhuZero} alt='' />
                        </S.BoxImg>
                    </S.Divs>
                    <S.BoxImg>
                        <S.Rhuan src={RhuThree} alt='' />
                    </S.BoxImg>
                    <S.Div>
                        <S.Topico>Inicio Como Dev</S.Topico>
                        <p>Tudo começou em 2019 quando decidi iniciar uma faculdade, na area de TI, de Ciências da Computação. Desde então a paixão por tecnologia foi só aumentando até que eu conheci o Vai Na Web que me ajudou a me encontrar dentro da deste mundo de tecnologia.</p>
                    </S.Div>
                </S.BoxAbout>
            </S.Section>
        </section>
    )
}
export default Home;