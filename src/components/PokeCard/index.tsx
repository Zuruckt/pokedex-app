import { View } from 'react-native';
import { styles } from './styles';
import { colors } from '../../global/styles/colors';

type Props = {
    type?: string
}

export function PokeCard({ type }: Props ) {
    return (
        <View style={[styles.card, {borderColor: colors.types[type || "normal"]}]}>
            
        </View>
    );
}


