import { useState, useEffect } from "react";
import { Container, Title, IconsContainer, TechIcon } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
    SiTypescript,
    SiJavascript,
    SiPostman,
} from "react-icons/si";

import { TbBrandFigma } from "react-icons/tb";

const technologies = [
    { icon: FaReact, name: "React" },
    { icon: SiTypescript, name: "TypeScript" },
    { icon: SiJavascript, name: "JavaScript" },
    { icon: FaNodeJs, name: "Node.js" },
    { icon: FaGitAlt, name: "Git" },
    { icon: TbBrandFigma, name: "Figma" },
    { icon: SiPostman, name: "Postman" },
];

const Technologies = () => {
    const [slidesPerView, setSlidesPerView] = useState(6);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setSlidesPerView(3);
            } else if (window.innerWidth < 1024) {
                setSlidesPerView(4);
            } else {
                setSlidesPerView(6);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <Container id="technologies">
            <Title>Tecnologias</Title>
            <IconsContainer>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={slidesPerView}
                    loop={true}
                    speed={1000}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                >
                    {technologies.map((tech, index) => (
                        <SwiperSlide key={index}>
                            <TechIcon>
                                <tech.icon />
                                <span>{tech.name}</span>
                            </TechIcon>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </IconsContainer>
        </Container>
    );
};

export default Technologies;
