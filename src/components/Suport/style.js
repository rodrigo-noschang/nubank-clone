import { Animated } from "react-native";
import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const SupportContainer = styled(Animated.View)`
    margin-top: 15px;
`;

export const QRCodeContainer = styled.View`
    align-items: center;
`;

export const SupportListContainer = styled.View`
    border-top-width: ${StyleSheet.hairlineWidth}px;
    border-top-color: #fff;
    margin: 30px 0;
`;

export const SupportItemContainer = styled.View`
    border-bottom-width: ${StyleSheet.hairlineWidth}px;
    border-bottom-color: #fff;
    flex-direction: row;
    align-items: center;
    padding: 12px 0;
`;

export const SupportItemText = styled.Text`
    margin-left: 15px;
    color: #fff;
`;

export const CloseAppButton = styled.TouchableOpacity`
    border-width: 1px;
    border-color: #fff;
    padding: 15px 0;
`;

export const CloseAppButtonText = styled.Text`
    text-align: center;
    color: #fff;
`;