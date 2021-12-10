import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme/Colors';
import Fonts from '../../../theme/Fonts';

const styles = StyleSheet.create({
  wrapper: {
    height: 200,
    marginTop: 14,
    shadowColor: Colors.shadow,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    backgroundColor: Colors.blue10,
    borderRadius: 6,
  },
  linearGradient: {
    height: 200,
    borderRadius: 6,
    padding: 10,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  temperature: {
    fontFamily: Fonts.type.lora.bold,
    fontSize: Fonts.size.xbig,
  },
  weather: {
    fontFamily: Fonts.type.lora.bold,
    fontSize: Fonts.size.h2,
  },
  city: {
    fontFamily: Fonts.type.lora.bold,
    fontSize: Fonts.size.p,
  },
  day: {
    fontFamily: Fonts.type.lora.bold,
    fontSize: Fonts.size.h1,
  },
});

export default styles;
