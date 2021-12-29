import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    formContext: {
        width: '100%',
        height: '100%',
        backgroundColor: '#ffff',
        alignItems: 'center',
        paddingTop: 20,
        borderTopLeftRadius: 60, //arredonda a borda
        borderTopRightRadius: 60, //arredonda a borda
    },
    form: {
        width: '100%',
        height: 'auto',
        padding: 10,
        marginTop: 30,
    },
    formLabel: {
        color: '#000',
        fontSize: 20,
        paddingLeft: 20,
    },
    input: {
        width: '90%',
        borderRadius: 50,
        backgroundColor: '#f6f6f6',
        width: 40,
        margin: 12,
        paddingLeft: 10,
    },
    textButtonCalculator: {
        fontSize: 20,
        color: "#fff",
    },
    buttonCalculator: {
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        backgroundColor: '#ff0043',
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        margin: 30,
    },
    errorMessage: {
        fontSize: 12,
        color: 'red',
        fontWeight: 'bold',
        paddingLeft: 20,
    }
});

export default styles