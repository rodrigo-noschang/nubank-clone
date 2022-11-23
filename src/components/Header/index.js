import React, { Text } from 'react-native';
import { Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

import logo from '../../assets/Nubank_Logo.png';
import { HeaderContainer, 
    TopRowContainer, 
    HeaderUserName, 
    HeaderIconContainer } from './style';

export const Header = () => {
    return (
    <HeaderContainer>
        <TopRowContainer>
            <Image source = {logo}/>
            <HeaderUserName> Rodrigo </HeaderUserName>
        </TopRowContainer>

        <HeaderIconContainer>
            <Icon name = 'angle-down' color = '#fff' size = {18}/>
        </HeaderIconContainer>
    </HeaderContainer>
    )
}