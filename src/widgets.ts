import Time from '../plugins/date-and-time';
import Settingsbtn from '../plugins/settingsbtn';

export default {
  'date-and-time': {
    component: Time,
    defaultPosition: 'center-center'
  },
  settingsbtn: {
    component: Settingsbtn,
    defaultPosition: 'top-right'
  }
};
