import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import CommentComponent from '../../components/Comment';
import { getPost } from '../../actions/posts';
import CommentForm from '../CommentForm';

export class PostComponent extends React.Component {
    state = {
        title: '',
        connect: '',
    };

    componentDidMount() {
        const {
            match: {
                params: { id },
            },
            posts,
        } = this.props;

        if (!posts[Number(id)]) {
            this.props.getPost(id);
        }
    }

    render() {
        const {
            match: {
                params: { id },
            },
            posts,
            auth: { logIn, role },
        } = this.props;

        const post = posts[Number(id)];

        return post ? (
            <Grid>
                <Row className="show-grid text-centr">
                    <Col xs={12} sm={8} className="article-wrapper">
                        <>
                            <h1>{post.title}</h1>
                            <div>{post.content}</div>
                            < hr />
                            <div className="well">
                                <h4>Leave a Comment:</h4>
                                <Link to="/singin"> Sing in</Link>, please. New comments are held for moderation.
                            </div>

                            {logIn && <CommentForm />}
                            {role === 'admin' && (<button className="btn btn-primary">Delete</button>)}

                            {['Be strongest!', 'You can do it'].map((comment) => (
                                <CommentComponent content={comment} />
                            ))}
                        </>
                    </Col>
                </Row>
            </Grid >
        ) : null;
    }
}

export const mapStateToProps = (state) => ({
    posts: state.posts.posts,
    auth: state.auth,
});

const mapDispatchToProps = {
    getPost,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PostComponent);