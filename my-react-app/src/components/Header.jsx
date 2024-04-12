import { useState } from 'react';

import {
    MainContainer,
    HeaderBar,
    Title,
    NavOptionsContainer,
    NavOption
} from './StyledComponents'

import { ImUsers } from "react-icons/im";


export default function Header() {
    const [activeNavOption, setActiveNavoption] = useState('1')

    const updateactiveNav = (e) => setActiveNavoption(e.target.id)

    return (
        <MainContainer>
            <HeaderBar>
                <ImUsers size={45} />
                <Title>Customer Manager</Title>

                <NavOptionsContainer>
                    <NavOption type='button' id='1' active={activeNavOption==='1'} onClick={updateactiveNav}> Customers </NavOption>

                    <NavOption type='button' id='2' active={activeNavOption==='2'} onClick={updateactiveNav}> Orders </NavOption>

                    <NavOption type='button' id='3' active={activeNavOption==='3'} onClick={updateactiveNav}> About </NavOption>

                    <NavOption type='button' id='4' active={activeNavOption==='4'} onClick={updateactiveNav}> Login </NavOption>
                </NavOptionsContainer>
            </HeaderBar>
        </MainContainer>
    )
}