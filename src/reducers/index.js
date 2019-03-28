import { combineReducers } from 'redux';
import uniq from 'lodash.uniq';

export const types = {
    POSTS_RETRIEVING_START: 'POST_RETRIEVING_START',
    POSTS_RETRIEVING_SUCCESS: 'POST_RETRIEVING_SUCCESS',
    POSTS_RETRIEVING_FAILED: 'POST_RETRIEVING_FAILED',
    USER_LOGIN: 'USER_LOGIN',
    POSTS_LIST_ITEM: 'POSTS_LIST_ITEM',
};

const initialLoadingState = {
    loading: false,
    error: false,
};

const loadingState = (state = initialLoadingState, action) => {
    switch (action.type) {
        case types.POSTS_RETRIEVING_START: {
            return {
                ...state,
                loading: true,
            };
        }

        case types.POSTS_RETRIEVING_SUCCESS: {
            return {
                ...state,
                loading: false,
            };
        }

        case types.POSTS_RETRIEVING_FAILED: {
            return {
                error: true,
                loading: false,
            };
        }

        default:
            return state;
    }
};

const list = (state = [], action) => {
    switch (action.type) {
        case types.POSTS_RETRIEVING_SUCCESS: {
            return uniq([...state, ...action.payload.ids]);
        }
        default:
            return state;
    }
};

const posts = (state = {}, action) => {
    switch (action.type) {
        case types.POSTS_RETRIEVING_SUCCESS: {
            return {
                ...state,
                ...action.payload.list,
            };
        }
        default:
            return state;
    }
};

const auth = (state = { logIn: false, role: '', username: '' }, action) => {
    switch (action.type) {
        case types.USER_LOGIN: {
            return {
                logIn: true,
                role: action.payload.role,
                username: action.payload.username,
            };
        }
        default:
            return state;
    }
};

const postsReducer = combineReducers({
    loadingState,
    list,
    posts,
});

export default combineReducers({
    posts: postsReducer,
    auth,
});