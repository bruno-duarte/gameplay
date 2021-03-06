import {StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 360,
    },
    content: {
        marginTop: -80,
        paddingHorizontal: 50,
    },
    title: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 30,
        marginBottom: 8,
        fontFamily: theme.fonts.title700,
        lineHeight: 35,
    },
    subtitle: {
        color: theme.colors.heading,
        textAlign: 'center',
        marginBottom: 12,
        fontFamily: theme.fonts.title500,
        lineHeight: 20,
    },
});