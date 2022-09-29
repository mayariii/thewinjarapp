// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Win } = initSchema(schema);

export {
  Win
};