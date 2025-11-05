import React from 'react';
import InputText from '../components/InputText';
import { StyleSheet, View } from 'react-native';
import AppLogo from '../assets/AppLogo';

const LoginScreen: React.FC = () => {
    return(
        <View style={styles.container}>
            <AppLogo />
            <InputText placeholder_text='Username' />
            <InputText placeholder_text='Password' />
        </View>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        paddingTop: 40,
        alignItems: "center",
        backgroundColor: "#f8f8f8",
        paddingHorizontal: 24
    }
});