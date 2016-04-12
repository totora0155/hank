import {READ_DATA, SAVE_DATA} from '../actions/config';

let storage;
if (process.env.NODE_ENV !== 'test') {
  storage = require('electron-json-storage');
};

const initialState = {
  theme: 'simple',
  fontFamily: ''
};

export default function (state = initialState, action) {
  switch (action.type) {
    case READ_DATA:
      if (process.env.NODE_ENV !== 'test') {
        const result = {};
        storage.get('data', (err, data) => {
          if (err) throw err;
          if (!Object.keys(data).length) {
            storage.set('data', initialState, () => {
              Object.assign(result, state, data);
            });
          } else {
              Object.assign(result, state, data);
          }
          return result;
        });
      }
      return state;
    case SAVE_DATA:
      const result = Object.assign({}, state, action.newValue);
      // TODO: thunk
      storage.set('data', result, () => {});
      return result;
    default:
      return state;
  };
}
