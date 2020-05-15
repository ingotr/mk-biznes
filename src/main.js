import getApiPath from './api/index.js';
import mockUser from './mock/mock-user.js';
import mockTemplate from './mock/mock-templates.js';
import user from './data/user.js';
import apiTemplatesSet1 from './data/apiTemplatesSet1.js';


// eslint-disable-next-line no-console
console.log(`Mock template is ${mockTemplate}`);
// eslint-disable-next-line no-console
console.log(`\n`);

const testApiPathes = mockTemplate.map((apiPathTemplate) => {
  return getApiPath(mockUser, apiPathTemplate);
});

// eslint-disable-next-line no-console
console.log(`Test apiPathes resulst is ${JSON.stringify(testApiPathes)}`);


// eslint-disable-next-line no-console
console.log(`Data template is ${apiTemplatesSet1}`);
// eslint-disable-next-line no-console
console.log(`\n`);

const apiPathes = apiTemplatesSet1.map((apiPathTemplate) => {
  return getApiPath(user, apiPathTemplate);
});

// eslint-disable-next-line no-console
console.log(JSON.stringify(apiPathes));
