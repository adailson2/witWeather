import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/Colors';
import Fonts from '../../theme/Fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  textHeader: {
    fontFamily: Fonts.type.geomanist.regular,
    fontSize: Fonts.size.h4,
    color: Colors.gray10,
  },
  header: {
    padding: 20,
    borderBottomColor: Colors.gray10,
    borderBottomWidth: 1,
  },
  row: {
    height: 60,
    elevation: 8,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  textRow: {
    fontFamily: Fonts.type.geomanist.book,
    fontSize: Fonts.size.h5,
    color: Colors.gray10,
  },
});

export default styles;
