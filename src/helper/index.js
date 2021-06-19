import { Alert } from 'react-native'
import moment from 'moment'

//alert
export function showAlert(msg) {
    Alert.alert(
        '',
        msg,
        [
            { text: 'OK', onPress: () => { } },
        ],
        { cancelable: false },
    );
}

export const trackDuration = (ms) => {
    return moment.utc(ms).format('mm');
  }