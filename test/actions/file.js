import * as file from '../../lib/actions/file';
import test from 'ava';

test('readFile', t => {
  t.deepEqual(file.readFile('foo', 'bar'), {
    type: file.READ_FILE,
    name: 'foo',
    filePath: 'bar'
  });
});

test('resetFile', t => {
  t.deepEqual(file.resetFile(), {type: file.RESET_FILE});
});
