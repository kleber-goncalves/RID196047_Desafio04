import styled from "styled-components";

export const Button = styled.button`
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    border: none;
    padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[6]};
    border-radius: ${({ theme }) => theme.borderRadius.full};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    cursor: pointer;
    transition: background-color ${({ theme }) => theme.transitions.fast},
        transform ${({ theme }) => theme.transitions.fast};
    position: relative;
    overflow: hidden;
    z-index: 1;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            45deg,
            ${({ theme }) => theme.colors.primary},
            ${({ theme }) => theme.colors.accent}
        );
        z-index: -1;
        transition: opacity ${({ theme }) => theme.transitions.default};
        opacity: 0;
    }

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 15px rgba(122, 62, 245, 0.3);

        &::before {
            opacity: 1;
        }
    }

    &:active {
        transform: translateY(0);
    }
`;

export const SecondaryButton = styled(Button)`
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[5]};
    font-size: 0.9rem;

    &::before {
        background: ${({ theme }) => theme.colors.primary};
    }

    &:hover {
        color: white;
        box-shadow: 0 6px 15px rgba(122, 62, 245, 0.2);
    }
`;
