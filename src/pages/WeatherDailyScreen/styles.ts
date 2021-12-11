import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/Colors';
import Fonts from '../../theme/Fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  textHeader: {
    fontFamily: Fonts.type.geomanist.regular,
    fontSize: Fonts.size.h4,
    color: Colors.gray10,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomColor: Colors.gray10,
    borderBottomWidth: 1,
  },
  loading: {
    marginTop: 40,
  },
});

export default styles;
