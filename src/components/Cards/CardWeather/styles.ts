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
    fontSize: Fonts.size.xbig,
    textShadowColor: Colors.shadow,
    textShadowOffset: {width: -0.5, height: 1},
    textShadowRadius: 2,
    fontFamily: Fonts.type.lora.bold,
  },
  weather: {
    fontSize: Fonts.size.h2,
    textShadowColor: Colors.shadow,
    textShadowOffset: {width: -0.5, height: 1},
    textShadowRadius: 2,
    fontFamily: Fonts.type.lora.bold,
  },
  city: {
    fontSize: Fonts.size.p,
    textShadowColor: Colors.shadow,
    textShadowOffset: {width: -0.5, height: 1},
    textShadowRadius: 2,
    fontFamily: Fonts.type.lora.bold,
  },
  day: {
    fontSize: Fonts.size.h1,
    textShadowColor: Colors.shadow,
    textShadowOffset: {width: -0.5, height: 1},
    textShadowRadius: 2,
    fontFamily: Fonts.type.lora.bold,
  },
});

export default styles;
