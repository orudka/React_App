import { schema } from 'normalizr';

export const post = new schema.Entity ('posts');
export const posts = [post];