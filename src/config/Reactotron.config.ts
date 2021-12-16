import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import AsyncStorage from '@react-native-community/async-storage';

const reactotron = Reactotron.configure({
  name: 'Mobb',
  host: '172.20.10.4',
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
