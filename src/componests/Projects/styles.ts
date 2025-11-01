import styled from "styled-components";

export const Container = styled.section`
    min-height: 100vh;
    max-width: 1200px;
    margin: 0 auto;
    padding: ${({ theme }) => theme.spacing[16]} ${({ theme }) => theme.spacing[4]};
`;

export const Title = styled.h2`
    font-size: 2.5rem;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    margin-top: ${({ theme }) => theme.spacing[20]};
    margin-bottom: ${({ theme }) => theme.spacing[20]};
    text-align: center;

    &::after {
        content: "";
        display: block;
        width: 60px;
        height: 4px;
        background: linear-gradient(
            90deg,
            ${({ theme }) => theme.colors.primary},
            ${({ theme }) => theme.colors.accent}
        );
        margin: ${({ theme }) => theme.spacing[4]} auto 0;
        border-radius: ${({ theme }) => theme.borderRadius.full};
    }
`;

export const ProjectGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.spacing[8]};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        grid-template-columns: 1fr;
    }
`;

export const ProjectCard = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: 20px 0;
    overflow: hidden;
    transition: transform ${({ theme }) => theme.transitions.default},
        box-shadow ${({ theme }) => theme.transitions.default};
    border: 1px solid ${({ theme }) => theme.colors.border};
    position: relative;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);

        &::after {
            opacity: 1;
        }
    }

    &::after {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: 20px 0;
        padding: 2px;
        background: linear-gradient(
            45deg,
            ${({ theme }) => theme.colors.primary},
            ${({ theme }) => theme.colors.accent}
        );
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        mask-composite: exclude;
        opacity: 0;
        transition: opacity ${({ theme }) => theme.transitions.default};
    }
`;

export const ProjectImage = styled.div`
    width: 100%;
    height: 240px;
    overflow: hidden;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(0, 0, 0, 0.5) 100%
        );
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform ${({ theme }) => theme.transitions.default};
    }

    ${ProjectCard}:hover & img {
        transform: scale(1.05);
    }
`;

export const ProjectTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    margin: ${({ theme }) => theme.spacing[6]}
        ${({ theme }) => theme.spacing[6]} ${({ theme }) => theme.spacing[4]};
    text-align: left;
    background: linear-gradient(
        90deg,
        ${({ theme }) => theme.colors.text},
        ${({ theme }) => theme.colors.accent}
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const ProjectDescription = styled.div`
    color: ${({ theme }) => theme.colors.textSecondary};
    margin: 0 ${({ theme }) => theme.spacing[6]} ${({ theme }) => theme.spacing[6]};
    font-size: 1rem;
    text-align: left;
    line-height: 1.6;
`;

export const ProjectButton = styled.div`
    display: flex;
    justify-content: flex-start;
    margin: 0 ${({ theme }) => theme.spacing[6]} ${({ theme }) => theme.spacing[6]};
`;
