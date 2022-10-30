import Link from "next/link"
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

import {GiPumpkinMask} from "react-icons/gi"


const Header: React.FC = () => {
    return (
        <Container>
            <Div1>
                <Link legacyBehavior href="/">
                    <a style={{ display: 'flex', alignItems: 'center', color: "white" }}>
                        <GiPumpkinMask size="3rem" /> <Span> Anurag </Span>
                    </a>
                </Link>
            </Div1>

            <Div2>
                <li>
                    <Link legacyBehavior href="#projects">
                        <NavLink>Projects</NavLink>
                    </Link>
                </li>
                <li>
                    <Link legacyBehavior href="#tech">
                        <NavLink>Technologies</NavLink>
                    </Link>
                </li>
                <li>
                    <Link legacyBehavior href="#about">
                        <NavLink>About</NavLink>
                    </Link>
                </li>
            </Div2>

            <Div3>
                <SocialIcons href="https://github.com/Anurag-Kochar-1">
                    <AiFillGithub size="3rem" />
                </SocialIcons>
                <SocialIcons onClick={() => alert("not added yet, kindly check email from footer")}>
                    <AiFillLinkedin size="3rem" />
                </SocialIcons>
            </Div3>

        </Container>
    )
}

export default Header