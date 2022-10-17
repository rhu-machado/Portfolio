import React, { useState } from 'react';
import * as S from './Styled.js';
import RM from '../../Images/RMicon.png';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from '../../Services/Home/Home.js';
import Projects from '../../Services/Projects/Projects.js';
import Ods from '../../Services/ODS/ODS.js';

function Header() {
    const [open, setOpen] = useState(true)
    const [menu, setMenu] = useState('☰')

    const But = () => {
        setOpen(!open);
        setMenu(menu === 'X' ? '☰' : 'X')
    }

    return (

        <BrowserRouter>
            <S.ContainerHeader>
                <S.GlobalStyle />
                <S.BoxLogo>
                    <Link to='/'><S.Logo src={RM} alt='Logo do Portfolio. Descrição: Letra R e letra M entre maior e menor'/></Link>
                </S.BoxLogo>

                <S.BoxList>
                    <S.List mostrar={open}>
                        <S.Links to='/'>Home</S.Links>
                        <S.Links to='/Projects'>Projects</S.Links>
                        <S.Links to='/Ods'>ODS</S.Links>
                    </S.List>
                    <S.Menu onClick={() => { But() }}>{menu}</S.Menu>
                </S.BoxList>

            </S.ContainerHeader>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Projects' element={<Projects />} />
                <Route path='/Ods' element={<Ods />} />
            </Routes>
        </BrowserRouter>

    )
}
export default Header;