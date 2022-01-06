import styled from "styled-components";

export const StyledHeader = styled.header `
    /* background-color : ${({bg}) => bg}; */
    background-color: ${({theme}) => theme.colors.header};
    padding : 40px 0;

`

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;

    @media (max-width: ${({theme}) => theme.mobo}){
        flex-direction: column;
    } 

`

export const Logo = styled.img`
    @media (max-width: ${({theme}) => theme.mobo}){
        margin-bottom: 40px;
    }
`

export const Image = styled.img `
    width : 475px;
    margin-left: 40px;
    @media (max-width: ${({theme}) => theme.mobo}){
        margin : 40px 0 30px;
    }

`