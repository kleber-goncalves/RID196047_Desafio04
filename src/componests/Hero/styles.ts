import styled, { keyframes } from "styled-components";

const float = keyframes`
    0% {
        transform: translate(0px);
    }
    50% {
        transform: translate(-10px);
    }
    100% {
        transform: translateY(0px);
    }
`;

export const Container = styled.section`
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding-top: ${({ theme }) => theme.spacing[16]};
`;

export const Content = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.spacing[4]};
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${({ theme }) => theme.spacing[8]};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        flex-direction: column-reverse;
        text-align: center;
        gap: ${({ theme }) => theme.spacing[12]};
    }
`;

export const Title = styled.h1`
    font-size: 3.5rem;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    margin-bottom: ${({ theme }) => theme.spacing[4]};
    background: linear-gradient(
        90deg,
        ${({ theme }) => theme.colors.text},
        ${({ theme }) => theme.colors.text}
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 2.5rem;
    }
`;

export const Subtitle = styled.p`
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: ${({ theme }) => theme.spacing[6]};
    max-width: 600px;
    line-height: 1.6;
`;

export const CTA = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.spacing[4]};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        justify-content: center;
    }
`;

export const ProfileImage = styled.div`
    .profile-circle {
        width: 250px;
        height: 250px;
        border-radius: ${({ theme }) => theme.borderRadius.full};
        overflow: hidden;
        border: 3px solid ${({ theme }) => theme.colors.primary};
        box-shadow: 0 0 30px rgba(122, 62, 245, 0.3);
        animation: ${float} 6s ease-in-out infinite;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        .profile-circle {
            width: 200px;
            height: 200px;
        }
    }
`;
