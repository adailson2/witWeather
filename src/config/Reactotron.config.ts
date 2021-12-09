import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import AsyncStorage from '@react-native-community/async-storage';

const reactotron = Reactotron.configure({
  name: 'Mobb',
  host: '192.168.1.7',
  port: 9090,
})
  .setAsyncStorageHandler(AsyncStorage)
  .useReactNative({
    asyncStorage: true,
    editor: true,
    errors: false,
    overlay: false,
  })
  .use(reactotronRedux())
  .connect();

export default reactotron;
