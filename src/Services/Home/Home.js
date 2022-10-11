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
                    <S.Rhuan src={RhuTwo} />
                </S.BoxImg>
                <S.BoxName>
                    <S.Title>Rhuan Machado</S.Title>
                    <S.Text>Front-end Developer</S.Text>
                </S.BoxName>
            </S.ContainerMainTop>
            <S.Section>
                <h2>About</h2>
                <S.BoxImg>
                    <S.Rhuan src={RhuOne} alt=''/>
                </S.BoxImg>
                <S.Div>
                    <h4>Um Pouco De Mim</h4>
                    <p>Olá me chamo Rhuan Felippe dos Santos Machado tenho 23 anos e sou do Rio de Janeiro capital.</p>
                </S.Div>
                <S.BoxImg>
                    <S.Rhuan src={RhuZero} alt=''/>
                </S.BoxImg>
                <S.Div>
                    <h4>Area Acadêmica</h4>
                    <p>Me formei no ensino médio em 2018 pela Fundação de Apoio a Escola Técnica mais conhecida como FAETEC localizada em Santa Cruz na zonaOeste do Rio.</p>
                </S.Div>
                <S.BoxImg>
                    <S.Rhuan src={RhuThree} alt=''/>
                </S.BoxImg>
                <S.Div>
                    <h4>Inicio Como Dev</h4>
                    <p>Tudo começou em 2019 quando decidi iniciar uma faculdade, na area de TI, de Ciências da Computação. Desde então a paixão por tecnologia foi só aumentando até que eu conheci o Vai Na Web que me ajudou a me encontrar dentro da deste mundo de tecnologia.</p>
                </S.Div>
            </S.Section>
        </section>
    )
}
export default Home;