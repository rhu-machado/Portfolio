import React, { useState } from 'react';
import * as S from './Styled.js';
import RM from '../../Images/RMicon.png'

function Header() {
    const [open, setOpen] = useState(true)
    const [menu, setMenu] = useState('X')

    const But = () => {
        setOpen(!open);
        setMenu(menu === 'X' ? '☰' : 'X')
    }

    return (
        <S.ContainerHeader>
            <S.GlobalStyle />
            <S.BoxHeader>
                <S.Logo src={RM} />
            </S.BoxHeader>
            <S.BoxHeader>
                <S.Menu onClick={() => { But() }}>{menu}</S.Menu>
                {open && <S.List>
                    <li>Home</li>
                    <li>Project</li>
                    <li>ONU</li>
                </S.List>}
            </S.BoxHeader>
        </S.ContainerHeader>
    )
}
export default Header;