import { useState, useEffect } from "react";
import {
    Container,
    Nav,
    NavLinks,
    NavLink,
    MobileMenuButton,
    Logo,
} from "./styles";

import { FaBars, FaTimes } from "react-icons/fa";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Container isScrolled={isScrolled}>
            <Nav>
                <Logo href="#">Kleber Gonçalves</Logo>

                <MobileMenuButton onClick={toggleMenu} aria-label="Toggle menu">
                    {isOpen ? <FaTimes /> : <FaBars />}
                </MobileMenuButton>

                <NavLinks isOpen={isOpen}>
                    <NavLink href="#projects">Projetos</NavLink>
                    <NavLink href="#technologies">Tecnologias</NavLink>
                    <NavLink href="#about">Sobre mim</NavLink>
                </NavLinks>
            </Nav>
        </Container>
    );
};
