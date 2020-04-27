import {getOptions} from 'loader-utils';

function replaceImportPlugin(source) {
  const options = getOptions(this);
  const matcher = /\/\*\*@ddf-replace-import\*\//g
  let result = source.replace(matcher, (_match, _offset, string) => {
    let result;
    Object.entries(options).forEach(([key, value]) => {
      result = string.replace(new RegExp(`@@${key}`, 'g'), value)
    })
    return result;
  })
  result = result.replace(matcher, '');

  return result;
}

export default replaceImportPlugin;
