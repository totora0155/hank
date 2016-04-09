export const READ_FILE = 'READ_FILE';

export function readFile(filePath) {
  return {type: READ_FILE, filePath};
}
