import { SecondaryButton } from "../common/Button";
import {
    Container,
    ProjectButton,
    ProjectCard,
    ProjectDescription,
    ProjectGrid,
    ProjectImage,
    ProjectTitle,
    Title,
} from "./styles";

const projects = [
    {
        id: 1,
        title: "MVP de um portfólio para uma empresa de arquitetura",
        description:
            "Um projeto simples simulando um portfólio para uma empresa de arquitetura",
        imageUrl: "/14.png",
    },
    {
        id: 2,
        title: "MVP de blog",
        description:
            "Um blog em uma experiência completamente responsiva, garantindo que ele se adapte perfeitamente a qualquer dispositivo, seja um smartphone, tablet ou monitor ultrawide. Você será responsável por criar um layout que mantenha sua integridade visual e funcionalidade em todas as plataformas, proporcionando uma experiência consistente e satisfatória para todos os usuários, independentemente do dispositivo que utilizem..",
        imageUrl: "/22.png",
    },
    {
        id: 3,
        title: "Projeto SalveVet",
        description:
            "MVP de plataforma para clínicas veterinárias desenvolvido com Next.js, NestJS e PostgreSQL, aplicando Scrum, Design Thinking e atuando tanto na gestão quanto no desenvolvimento técnico.",
        imageUrl: "/salvevet.png",
    },
    {
        id: 4,
        title: "MVP de um portfólio profissional para uma empresa de arquitetura",
        description:
            "é um site de arquitetura, criado para demonstrar várias técnicas e funcionalidades interativas como curtidas e troca de idiomas no desenvolvimento front-end com React. Este site servirá como um excelente exemplo para portfólio e pode ser adaptado para diversos tipos de negócios.",
        imageUrl: "/12.png",
    },
];

export const Projects = () => {
    return (
        <Container id="projects">
            <Title>Projetos</Title>

            <ProjectGrid>
                {projects.map((project) => (
                    <ProjectCard key={project.id}>
                        <ProjectImage>
                            <img src={project.imageUrl} alt={project.title} />
                        </ProjectImage>
                        <ProjectTitle>{project.title}</ProjectTitle>
                        <ProjectDescription>
                            {project.description}
                        </ProjectDescription>
                        <ProjectButton>
                            <a
                                href="https://github.com/kleber-goncalves"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <SecondaryButton>Saiba mais</SecondaryButton>
                            </a>
                        </ProjectButton>
                    </ProjectCard>
                ))}
            </ProjectGrid>
        </Container>
    );
};
