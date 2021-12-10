import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme/Colors';

const styles = StyleSheet.create({
  wrapper: {
    height: 200,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    backgroundColor: Colors.white,
  },
});

export default styles;
