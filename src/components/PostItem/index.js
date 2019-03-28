import React from 'react';
import { Link } from 'react-router-dom';

export default function PostItemComponent({ id, title, author, content }) {
    return (
        <div>
            <h2>
                <Link to={`/posts/${id}`} className="title">
                    {title}
                </Link>
            </h2>
            <div className="lead">
                <span> by {author} </span>
            </div>
            <p>
                <span className="glyphicon glyphicon-time" /> Posted on September 07, 2015 at 01:51 PM
                        </p>

            <div className="content">
                {content}
            </div>
            <Link to={`/posts/${id}`} className="btn btn-primary">
                Ream More
                <span className="glyphicon glyphicon-chevron-right" />
            </Link>
            <hr />
        </div>
    );
}