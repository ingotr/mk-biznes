function getApiPath(obj, template) {
  let result = ``;
  let buffer = ``;

  let objKeys = Object.keys(obj);

  objKeys.map((key) => {
    const objRegExp = new RegExp(`%${key}%`);

    buffer = result;

    if (result === ``) {
      buffer = template.replace(objRegExp, obj[key]);
    } else {
      buffer = result.replace(objRegExp, obj[key]);
    }

    result = buffer;
    buffer = ``;
  });

  return result;
}

export default getApiPath;
