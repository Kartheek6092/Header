import styled from 'styled-components'

export const MainContainer = styled.div `
    width: 100vw;
    height: 100vh;
    display: flex;
    padding: 0;
    margin: 0;
    background-color: #fff;
    color: #000;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`

export const HeaderBar = styled.nav `
    width: 100%;
    height: fit-content;
    margin: 10vh 10vw;
    background-color: #1e96fc;
    color: #fff;
    padding: 10px 5%;
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
`

export const Title = styled.h1 `
    font-size: 30px;

`

export const NavOptionsContainer = styled.div `
    width: fit-content;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-left: 5%;
`

export const NavOption =  styled.button `
    background-color: ${({active}) => active ? '#fff' : 'transparent'};
    color: ${({active}) => !active ? '#fff' : '#1e96fc'};
    outline: none;
    font-size: larger;
    font-weight: 700;
    border-radius: 8px;
    border: none;
`