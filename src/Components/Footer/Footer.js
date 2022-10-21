import React from 'react'
import * as S from './Styled.js'
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";

function Footer() {
    return (
        <S.ContainerFooter>
            <S.BoxFooter>
                <S.A href='https://github.com/rhu-machado' target='_blanck'><AiFillGithub/></S.A>
                <S.A href='https://www.linkedin.com/in/rhuan-machado/' target='_blanck'><BsLinkedin/></S.A>
                <S.A href='https://www.instagram.com/rhu_machado/' target='_blanck'><GrInstagram/></S.A>
            </S.BoxFooter>
        </S.ContainerFooter>
    )
}
export default Footer;