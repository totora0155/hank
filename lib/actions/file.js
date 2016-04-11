export const READ_FILE = 'READ_FILE';
export const RESET_FILE = 'RESET';

export function readFile(name, filePath) {
  return {type: READ_FILE, name, filePath};
}

export function resetFile() {
  return {type: RESET_FILE};
}
