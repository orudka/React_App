import { types } from '../reducers';

function singin(role, username) {
    return {
        type: types.USER_LOGIN,
        payload: {
            role,
            username,
        },
    };
}

export { singin };