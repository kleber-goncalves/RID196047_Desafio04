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

export const TimelineContainer = styled.div`
    position: relative;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding-top: ${({ theme }) => theme.spacing[6]};

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 40px;
        right: 40px;
        height: 2px;
        background: white;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing[8]};
        padding: 0;

        &::before {
            top: 0;
            bottom: 0;
            left: 20px;
            width: 2px;
            height: 100%;
            transform: none;
            right: auto;
        }
    }
`;

export const TimelineItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 100%;
    max-width: 220px;
    text-align: center;

    &::before {
        content: "";
        position: absolute;
        top: -29px;
        left: 50%;
        transform: translateX(-50%);
        width: 12px;
        height: 12px;
        background: white;
        border-radius: 50%;
        z-index: 2;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        flex-direction: column;
        align-items: flex-start;
        max-width: 100%;
        padding-left: ${({ theme }) => theme.spacing[8]};
        text-align: left;
        min-height: 80px;
        margin-bottom: ${({ theme }) => theme.spacing[6]};

        &::before {
            left: 15px;
            top: 6px;
            transform: none;
        }
    }
`;

export const Year = styled.div`
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: 1.25rem;
    margin-bottom: ${({ theme }) => theme.spacing[4]};
    margin-top: ${({ theme }) => theme.spacing[4]};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 1rem;
        margin: 0;
        margin-left: ${({ theme }) => theme.spacing[8]};
        margin-bottom: ${({ theme }) => theme.spacing[2]};
    }
`;

export const Content = styled.div`
    background: transparent;
    padding: ${({ theme }) => theme.spacing[2]};
    max-width: 220px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 0;
        max-width: 100%;
        margin-left: ${({ theme }) => theme.spacing[8]};
    }
`;

export const ContentText = styled.p`
    color: white;
    font-size: 0.9rem;
    line-height: 1.6;
`;
