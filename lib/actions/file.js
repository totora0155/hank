export const READ_FILE = 'READ_FILE';

export function readFile(name, filePath) {
  return {type: READ_FILE, name, filePath};
}
