import Icon from 'react-native-vector-icons/FontAwesome5';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { Animated } from 'react-native';

import { AccountContainer, 
    AccountHeader, 
    AccountInfo,
    AccountInfoLabel,
    AccountInfoValue, 
    AccountHistory,
    AccountHistoryText
    } from "./style";


export const Account = ({ translateY}) => {
    let offset = 0;
    // const translateY = new Animated.Value(0);

    const animatedEvent = Animated.event([
        {
            nativeEvent: {
                translationY: translateY
            }
        }
    ], { useNativeDriver: true });

    const onHandlerStateChanged = (e) => {
        if (e.nativeEvent.oldState === State.ACTIVE) {
            let opened = false;
            
            const { translationY } = e.nativeEvent
            offset += translationY;

            if (translationY >= 100){ 
                opened = true;
            } else {
                translateY.setValue(offset);
                translateY.setOffset(0);
                offset = 0;
            }

            Animated.timing(translateY, {
                toValue: opened ? 420 : 0,
                duration: opened ? 300: 100,
                useNativeDriver: true
            }).start(() => {
                offset = opened ? 420 : 0;

                translateY.setOffset(offset);
                translateY.setValue(0);
            });
        }
    }


    return (
        <PanGestureHandler onGestureEvent={animatedEvent} onHandlerStateChange = {onHandlerStateChanged}>
            <AccountContainer style = {{
                transform: [{
                    translateY: translateY.interpolate({
                        inputRange: [-250, 0, 420],
                        outputRange: [-20, 0, 420],
                        extrapolate: 'clamp'
                    })
                }]
            }}>
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
        </PanGestureHandler>
    )

}