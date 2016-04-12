export const READ_DATA = 'READ_DATA';
export const SAVE_DATA = 'SAVE_DATA';

export function readData() {
  return {type: READ_DATA};
};

export function saveData(newValue) {
  return {type: SAVE_DATA, newValue};
}
