import { AccountContainer, 
    AccountHeader, 
    AccountInfo,
    AccountInfoLabel,
    AccountInfoValue, 
    AccountHistory,
    AccountHistoryText
    } from "./style";

import Icon from 'react-native-vector-icons/FontAwesome5';

export const Account = () => {
    return (
        <AccountContainer>
            <AccountHeader>
                <Icon name = 'dollar-sign' color = '#000' size = {24}/>
                <Icon name = 'eye-slash' color = '#000' size = {24}/>
            </AccountHeader>

            <AccountInfo>
                <AccountInfoLabel>
                    Saldo disponível
                </AccountInfoLabel>
                <AccountInfoValue>
                    R$ 7611,65
                </AccountInfoValue>
            </AccountInfo>

            <AccountHistory>
                <AccountHistoryText>
                    Transferência de R$20,00 recebida de Diego Schell 
                    Fernandes hoje 06:00h.
                </AccountHistoryText>
            </AccountHistory>
        </AccountContainer>
    )

}