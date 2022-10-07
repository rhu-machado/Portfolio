import React from '../Main/Main.js'
import Foto from '../../Images/praiagrumari.jpg'
import * as S from './Styled.js'

function Main() {
    return (
        <S.ContainerMain>
            <S.H2>About</S.H2>
            <figure>
                <S.Rhuan src={Foto} />
            </figure>
            <div>
                <h1>Rhuan Machado</h1>
                <p>Olá eu me chamo Rhuan Felippe dos Santos Machado</p>
            </div>
        </S.ContainerMain>
    )
}
export default Main;