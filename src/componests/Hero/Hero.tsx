import { Button } from "../common/Button";
import {
    Container,
    Content,
    CTA,
    ProfileImage,
    Subtitle,
    Title,
} from "./styles";

export const Hero = () => {
    return (
        <Container>
            <Content>
                <div>
                    <Title>Kleber Gonçalves</Title>
                    <Subtitle>
                        Apaixonado por tecnologia, conecto inovação e estratégia
                        para criar soluções digitais que geram impacto real.
                    </Subtitle>
                    <CTA>
                        <a
                            href="https://www.instagram.com/kleber_goncalves.s/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button>Saiba mais</Button>
                        </a>
                    </CTA>
                </div>
                <ProfileImage>
                    <div className="profile-circle">
                        <img
                            src="./eu-gimine-formal - Copia.png"
                            alt="Profile"
                        />
                    </div>
                </ProfileImage>
            </Content>
        </Container>
    );
};
