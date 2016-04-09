import fs from 'fs';
import marked from 'marked';
import {READ_FILE} from '../actions/file';

const renderer = new marked.Renderer();
renderer.hr = (a, b, c) => {
  return '---'
};

const initialState = {
  contents: null,
  contentLength: 0
};

export default function file(state = initialState, action) {
  switch (action.type) {
    case READ_FILE:
      const markdown = fs.readFileSync(action.filePath, 'utf-8');
      const contents = marked(markdown, {renderer}).split(/---+/);
      const contentLength = contents.length;
      return Object.assign({}, state, {contents, contentLength});
    default:
      return state;
  }
}
