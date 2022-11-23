import styled from 'styled-components/native';

export const TabsContainer = styled.View`
    margin-top: 15px;
`;

export const TabsScroll = styled.ScrollView.attrs({
    horizontal: true,
    contentContainerStyle: {
        paddingLeft: 10,
        paddingRight: 20,
        paddingVertical: 10
    },
    showsHorizontalScrollIndicator: false
})``;

export const TabItemContainer = styled.View`
    width: 100px;
    height: 100px;
    background-color: rgba(255, 255, 255, .2);
    padding: 5px;
    border-radius: 4px;
    justify-content: space-between;
    margin-left: 10px;
`;

export const TabIcon = styled.View`
    font-weight: 100;
`;

export const TabText = styled.Text`
    color: #fff;
`;