import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import {
    ContactInfo,
    Container,
    Content,
    Copyright,
    Email,
    SocialLink,
    SocialLinks,
    Title,
} from "./styles";

export const Footer = () => {
    return (
        <Container>
            <Content>
                <ContactInfo>
                    <Title> Meu Contato:</Title>
                    <Email>
                        <FaEnvelope />
                        <span>kleberlucasgoncalvesdossantos@gmail.com</span>
                    </Email>
                </ContactInfo>

                <SocialLinks>
                    <SocialLink
                        href="https://github.com/kleber-goncalves"
                        target="_blank"
                        rel="Github"
                        aria-label="Github"
                    >
                        <FaGithub />
                    </SocialLink>
                    <SocialLink
                        href="https://www.linkedin.com/in/kleber-goncalve-s/?isSelfProfile=true"
                        target="_blank"
                        rel="LinkedIn"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </SocialLink>
                    <SocialLink
                        href="https://eder-souza-dev.vercel.app/"
                        target="_blank"
                        rel="Site Oficial"
                        aria-label="Site Oficial"
                    >
                        <FiInstagram />
                    </SocialLink>
                </SocialLinks>
            </Content>

            <Copyright>
                © {new Date().getFullYear()} Kleber Gonçalves. Todos os direitos
                reservados.
            </Copyright>
        </Container>
    );
};

