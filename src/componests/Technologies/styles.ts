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

export const IconsContainer = styled.div`
    .swiper {
        padding: ${({ theme }) => theme.spacing[4]} 0;
        user-select: none;

        .swiper-wrapper {
            transition-timing-function: linear;
        }
    }
`;

export const TechIcon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing[2]};

    svg {
        width: 50px;
        height: 50px;
        filter: grayscale(100%);
        transition: all ${({ theme }) => theme.transitions.default};
    }

    span {
        font-size: 0.9rem;
        color: ${({ theme }) => theme.colors.textSecondary};
        opacity: 0;
        transform: translateY(-10px);
        transition: all ${({ theme }) => theme.transitions.default};
    }

    &:hover {
        svg {
            filter: grayscale(0%);
            transform: scale(1.2);
        }

        span {
            opacity: 1;
            transform: translateY(0);
            color: ${({ theme }) => theme.colors.primary};
        }
    }
`;
