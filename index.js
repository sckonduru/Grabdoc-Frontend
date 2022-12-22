import 'react-native-gesture-handler';
/**
 * @format
 */
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Fifthsrc from './GrabScr/fifthsrc';
import FlashScr from './GrabScr/First';
import LoggingScreen from './GrabScr/LogInScreen';
import NavigatonsSrc from './Navigations';
import AppointmentsSrc from './GrabScr/Appointment';
import docterTime from './GrabScr/Docscr';
import vedioScrONE from './GrabScr/vfScr';
import vedioScrSEC from './GrabScr/vsScr';
import Rating from './GrabScr/ratingScr';
import summary from './GrabScr/summary';
import Review from './GrabScr/reviewScr';
import OTPScreen from './GrabScr/DocScr (2)';

AppRegistry.registerComponent(appName, () =>NavigatonsSrc);

