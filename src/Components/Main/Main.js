import React from '../Main/Main.js'
import Foto from '../../Images/praiagrumari.jpg'
import * as S from './Styled.js'

function Main() {
    return (
        <section>
            <S.ContainerMainTop>
                <S.BoxImg>
                    <S.Rhuan src={Foto} />
                </S.BoxImg>
                <S.BoxName>
                    <S.Title>Rhuan Machado</S.Title>
                    <S.Text>Front-end Developer</S.Text>
                </S.BoxName>
            </S.ContainerMainTop>
            <S.Section>
                <h2>Resumo</h2>
                <S.Div>
                    <h4>Sobre mim</h4>
                    <p>Olá me chamo Rhuan Felippe dos Santos Machado tenho 23 anos e sou do Rio de Janeiro capital.</p>
                </S.Div>
                <S.Div>
                    <h4>Trajetoria Dev</h4>
                    <p>Tudo começou em 2019 quando decidi iniciar uma faculdade, na area de TI, de Ciências da Computação. Desde então a paixão por tecnologia foi só aumentando até que eu conheci o Vai Na Web que me ajudou a me encontrar dentro da deste mundo de tecnologia.</p>
                </S.Div>
            </S.Section>
        </section>
    )
}
export default Main;