import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { types } from '../reducers';
import { getPosts } from '../actions/posts';
import { api } from "../actions/posts"

let mockStore = null;

describe('Posts modules', () => {
    describe('Action Creators', () => {
        beforeEach(() => {
            mockStore = configureMockStore([thunk])(types.POSTS_RETRIEVING_START)
        })

        it('should perform successfuly acrion on getPosts call', async () => {
            const data = {
                data: [
                    {
                        "id": 1,
                        "title": "Inventore Hic Voluptatem",
                        "author": "John Smith",
                        "content": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
                    }
                ]
            };

            jest.spyOn(api, "get").mockImplementationOnce(() => Promise.resolve(data))

            await mockStore.dispatch(getPosts())

            expect(mockStore.getActions()[0].type).toEqual(types.POSTS_RETRIEVING_START)
            expect(mockStore.getActions()[1].type).toEqual(types.POSTS_RETRIEVING_SUCCESS)
        })

        it('should perform error actions on getPosts call', async () => {
            const error = new Error('API Error')
            const expectedActions = [
                { type: types.POSTS_RETRIEVING_START },
                { type: types.POSTS_RETRIEVING_FAILED },
            ]

            jest.spyOn(api, "get").mockImplementationOnce(() => Promise.reject(error))

            await mockStore.dispatch(getPosts())

            expect(mockStore.getActions()).toEqual(expectedActions)
        })
    })
})