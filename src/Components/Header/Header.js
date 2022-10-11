import React, { useState } from 'react';
import * as S from './Styled.js';
import RM from '../../Images/RMicon.png';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '../../Services/Home/Home.js';
import Projects from '../../Services/Projects/Projects.js';
import Ods from '../../Services/ODS/ODS.js';

function Header() {
    const [open, setOpen] = useState(true)
    const [menu, setMenu] = useState('X')

    const But = () => {
        setOpen(!open);
        setMenu(menu === 'X' ? '☰' : 'X')
    }

    return (

        <BrowserRouter>
            <S.ContainerHeader>
                <S.GlobalStyle />
                <S.BoxHeader>
                    <S.Logo src={RM} />
                </S.BoxHeader>



                <S.BoxHeader>
                    <S.Menu onClick={() => { But() }}>{menu}</S.Menu>
                    <S.List mostrar={open}>
                        <Link to='/'>Home</Link>
                        <Link to='/Projects'>Projects</Link>
                        <Link to='/Ods'>ODS</Link>
                    </S.List>
                </S.BoxHeader>

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