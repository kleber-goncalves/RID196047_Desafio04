import {
    Container,
    Content,
    ContentText,
    TimelineContainer,
    TimelineItem,
    Title,
    Year,
} from "./styles";

const timelineItems = [
    {
        id: 1,
        year: "2018",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 2,
        year: "2019",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 3,
        year: "2022",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 4,
        year: "2024",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 5,
        year: "2025",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 6,
        year: "2025",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
];

export const About = () => {
    return (
        <Container id="about">
            <Title>Sobre mim</Title>

            <TimelineContainer>
                {timelineItems.map((item) => (
                    <TimelineItem key={item.id}>
                        <Year>{item.year}</Year>
                        <Content>
                            <ContentText>{item.content}</ContentText>
                        </Content>
                    </TimelineItem>
                ))}
            </TimelineContainer>
        </Container>
    );
};
