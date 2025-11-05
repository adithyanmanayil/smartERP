import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface InputTextProps {
    placeholder_text: string;
}

const InputText: React.FC<InputTextProps> = ({ placeholder_text }) => {
    return(
        <TextInput
            style={styles.inputText}
            placeholder = { placeholder_text }
        />
    );
}

export default InputText;

const styles = StyleSheet.create({
    inputText: {
        width: "100%",
        maxWidth: 340,
        height: 60,
        backgroundColor: "#eee",
        paddingHorizontal: 20,
        marginTop: 20,
        borderRadius: 16
    }
});