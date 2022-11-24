import Icon from 'react-native-vector-icons/FontAwesome5';

import { TabsContainer, 
    TabsScroll, 
    TabItemContainer, 
    TabIcon, 
    TabText } from "./style"

export const Tabs = ({ translateY }) => {

    return (
        <TabsContainer style = {{
            opacity: translateY.interpolate({
                inputRange: [0, 350],
                outputRange: [1, 0.3],
                extrapolate: 'clamp'
            }),
            transform: [{
                translateY: translateY.interpolate({
                    inputRange: [0, 350],
                    outputRange: [0, 20],
                    extrapolate: 'clamp'
                })
            }]
        }}>
            <TabsScroll>
                <TabItemContainer>
                    <TabIcon>
                        <Icon name = 'user-plus' color = '#fff' size = {20}/>
                    </TabIcon>
                    <TabText> Indicar Amigos </TabText>
                </TabItemContainer>

                <TabItemContainer>
                    <TabIcon>
                        <Icon name = 'comment' color = '#fff' size = {20}/>
                    </TabIcon>
                    <TabText> Cobrar </TabText>
                </TabItemContainer>

                <TabItemContainer>
                    <TabIcon>
                        <Icon name = 'arrow-up' color = '#fff' size = {20}/>
                    </TabIcon>
                    <TabText> Transferir </TabText>
                </TabItemContainer>

                <TabItemContainer>
                    <TabIcon>
                        <Icon name = 'arrow-down' color = '#fff' size = {20}/>
                    </TabIcon>
                    <TabText> Depositar </TabText>
                </TabItemContainer>

                <TabItemContainer>
                    <TabIcon>
                        <Icon name = 'lock' color = '#fff' size = {20}/>
                    </TabIcon>
                    <TabText> Bloquear cartão </TabText>
                </TabItemContainer>
            </TabsScroll>
        </TabsContainer>

    )
}