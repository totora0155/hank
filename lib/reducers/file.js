import fs from 'fs';
import path from 'path';
import marked from 'marked';
import cheerio from 'cheerio';
import {READ_FILE, RESET_FILE} from '../actions/file';

const renderer = new marked.Renderer();
renderer.hr = (a, b, c) => {
  return '---'
};

const initialState = {
  name: null,
  contents: null,
  contentLength: 0
};

export default function file(state = initialState, action) {
  switch (action.type) {
    case READ_FILE:
      const name = action.name;
      const dirname = path.dirname(action.filePath);
      const markdown = fs.readFileSync(action.filePath, 'utf-8');
      const contents = (() => {
        const htmls = marked(markdown, {renderer}).split(/---+/);
        return htmls.map(html => {
          const $ = cheerio.load(html);
          resolveImg($, dirname);
          return $.html();
        });
      })();
      const contentLength = contents.length;
      return Object.assign({}, state, {name, contents, contentLength});
    case RESET_FILE:
      return Object.assign({}, state, initialState);
    default:
      return state;
  }
}

function resolveImg($, dirname) {
  $('img').each(function () {
    const filePath = $(this).attr('src');
    $(this).attr('src', path.resolve(dirname, filePath));
  });
}
