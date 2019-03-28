import React from 'react';

import PostItemComponent from '../PostItem';

export default function PostListComponent({ posts }) {
    return (
        <>
            {posts.map((item, i) => (
                <PostItemComponent
                key={item.id}
                id={item.id}
                title={item.title}
                author={item.author}
                content={item.content}                
                />
            ))}
        </>
    );
}