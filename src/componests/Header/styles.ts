import styled from "styled-components";

export const Container = styled.header<{ isScrolled: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    padding: ${({ theme }) => theme.spacing[4]} 0;
    background-color: ${({ isScrolled, theme }) =>
        isScrolled ? theme.colors.background : "transparent"};
    transition: background-color ${({ theme }) => theme.transitions.default};
    box-shadow: ${({ isScrolled }) =>
        isScrolled ? "0 2px 10px rgba(0, 0, 0, 0.3)" : "none"};
`;
export const Nav = styled.nav`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.spacing[4]};
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const Logo = styled.a`
    font-size: 1.5rem;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.accent});
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: opacity ${({ theme }) => theme.transitions.fast};

    &:hover {
        opacity: 0.9;
    }
`;
export const NavLinks = styled.div<{ isOpen: boolean }>`
    display: flex;
    gap: ${({ theme }) => theme.spacing[6]};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        position: fixed;
        flex-direction: column;
        top: 0;
        right: 0;
        height: 100vh;
        width: 70%;
        background-color: ${({ theme }) => theme.colors.secondary};
        padding: ${({ theme }) => theme.spacing[16]};
        transform: ${({ isOpen }) =>
            isOpen ? "translateX(0)" : "translateX(100%)"};
        transition: transform ${({ theme }) => theme.transitions.default};
        z-index: 1050;
        align-items: center;
        justify-content: flex-start;
        gap: ${({ theme }) => theme.spacing[8]};
    }
`;

export const NavLink = styled.a`
    position: relative;
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    transition: color ${({ theme }) => theme.transitions.fast};

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }

    &::after {
        content: "";
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 0;
        height: 2px;
        background-color: ${({ theme }) => theme.colors.primary};
        transition: width ${({ theme }) => theme.transitions.default};
    }

    &:hover::after {
        width: 100%;
    }
`;

export const MobileMenuButton = styled.button`
    display: none;
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 1100;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        display: block;
    }
`;
