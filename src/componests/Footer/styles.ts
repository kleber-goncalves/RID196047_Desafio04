import styled from "styled-components";

export const Container = styled.footer`
    background-color: ${({ theme }) => theme.colors.secondary};
    padding: ${({ theme }) => theme.spacing[8]} 0
        ${({ theme }) => theme.spacing[4]};
    margin-top: ${({ theme }) => theme.spacing[8]};
`;

export const Content = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.spacing[4]};
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing[6]};
    }
`;

export const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing[3]};
`;

export const Title = styled.h3`
    font-size: 1.25rem;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

export const Email = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing[2]};
    color: ${({ theme }) => theme.colors.textSecondary};
    transition: color ${({ theme }) => theme.transitions.fast};

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

export const SocialLinks = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.spacing[4]};
`;

export const SocialLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: ${({ theme }) => theme.borderRadius.full};
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
    font-size: 1.25rem;
    transition: background-color ${({ theme }) => theme.transitions.fast},
        transform ${({ theme }) => theme.transitions.fast},
        color ${({ theme }) => theme.transitions.fast};

    &:hover {
        background-color: ${({ theme }) => theme.colors.primary};
        color: white;
        transform: translateY(-3px);
    }
`;

export const Copyright = styled.div`
    text-align: center;
    margin-top: ${({ theme }) => theme.spacing[8]};
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 0.9rem;
`;
