import QRCode from "react-native-qrcode-svg";
import Icon from 'react-native-vector-icons/FontAwesome5';

import { SupportContainer, QRCodeContainer, SupportListContainer, SupportItemContainer, SupportItemText, CloseAppButton, CloseAppButtonText } from "./style";

export const Support = () => {
    return(
        <SupportContainer>
            <QRCodeContainer>
                <QRCode 
                    value='https://youtube.com'
                    color="#fff"
                    backgroundColor="#8a10ae"
                    />
            </QRCodeContainer>

            <SupportListContainer>
                <SupportItemContainer>
                    <Icon name = 'question-circle' size = {16} color = '#fff'/>
                    <SupportItemText> Me ajuda </SupportItemText>
                </SupportItemContainer>

                <SupportItemContainer>
                    <Icon name = 'user' size = {16} color = '#fff'/>
                    <SupportItemText> Perfil </SupportItemText>
                </SupportItemContainer>

                <SupportItemContainer>
                    <Icon name = 'credit-card' size = {12} color = '#fff'/>
                    <SupportItemText> Configurar Cartão </SupportItemText>
                </SupportItemContainer>

                <SupportItemContainer>
                    <Icon name = 'mobile' size = {16} color = '#fff'/>
                    <SupportItemText> Configurações do app </SupportItemText>
                </SupportItemContainer>
            </SupportListContainer>

            <CloseAppButton>
                <CloseAppButtonText>
                    SAIR DO APP
                </CloseAppButtonText>
            </CloseAppButton>
        </SupportContainer>
    )
}