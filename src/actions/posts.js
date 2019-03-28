import axios from 'axios';
import { types } from '../reducers';
import { normalize } from 'normalizr';
import * as schema from '../schemas';

export const api = axios.create({
    baseURL: 'https://ui-course-server.now.sh/orudka',
});

function getPosts() {
    return (dispatch) => {
        dispatch({
            type: types.POSTS_RETRIEVING_START,
        });

        api.get('/posts').then(
            ({ data }) => {
                const normalized = normalize(data, schema.posts);

                dispatch({
                    type: types.POSTS_RETRIEVING_SUCCESS,
                    payload: {
                        ids: normalized.result,
                        list: normalized.entities.posts,
                    },
                });
            },

            () => {
                dispatch({
                    type: types.POSTS_RETRIEVING_FAILED,
                });
            },
        );
    };
}

function getPost(id) {
    return (dispatch) => {
        dispatch({
            type: types.POSTS_RETRIEVING_START,
        });

        api.get(`/posts/${id}`).then(
            ({ data }) => {
                const normalized = normalize(data, schema.post);

                dispatch({
                    type: types.POSTS_RETRIEVING_SUCCESS,
                    payload: {
                        ids: [normalized.result],
                        list: normalized.entities.posts,
                    },
                });
            },

            () => {
                dispatch({
                    type: types.POSTS_RETRIEVING_FAILED,
                });
            },
        );
    };
}

export { getPosts, getPost };
