import React from 'react';
import { shallow } from 'enzyme';
import CommentComponent from '../../components/Comment';
import {
    PostComponent,
    mapStateToProps
} from './index'

describe('PostComponent', () => {
    it('shoud be crashed without passed props', () => {
        expect(() => shallow(<PostComponent />)).toThrowError(TypeError)
    })

        describe('redux connect', () => {
            describe('mapStateToProps()', () => {
                it('should return posts from state', () => {
                    const state = { posts: {}, auth: {} }
    
                    expect(mapStateToProps(state)).toEqual({ posts: {}, auth: {} })
                })
            })
        })
    
    describe('Testing CommentComponent', () => {
        let wrapper;
        beforeEach(() => { wrapper = shallow(<CommentComponent />); });

        it('includes 1 div', () => {
            expect(wrapper.find('div')).toBeDefined();
        });
    })
})