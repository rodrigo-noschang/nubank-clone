import styled from "styled-components/native";

export const AccountContainer = styled.View`
    background-color: #fff;
    border-radius: 5px;
    flex: 1;
    z-index: 5;
    position: absolute;
    height: 100%;
    margin: 0 20px;
    width: 100%;
    top: 0;
`;

export const AccountHeader = styled.View`
    padding: 30px 20px 0;
    flex-direction: row;
    justify-content: space-between;
`;

export const AccountInfo = styled.View`
    flex: 1;
    justify-content: center;
    padding-left: 20px;
`;

export const AccountInfoLabel = styled.Text`
    color: #666;
    font-size: 14px;
`;
export const AccountInfoValue = styled.Text`
    font-size: 30px;
`;

export const AccountHistory = styled.View`
    padding: 30px;
    background-color: #CCC;
    border-radius: 5px;
`;
export const AccountHistoryText = styled.Text``;