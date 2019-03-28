import React from 'react'
import { connect } from 'react-redux';
import Pager from '../Home/Pager';
import './Home.css';

import { getPosts } from '../../actions/posts';
import PostListComponent from '../PostList';

class Home extends React.Component {
    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        const { posts } = this.props;

        return (
            <div>
                <h1>Keep It Simple <small>Welcome</small></h1>
                <PostListComponent posts={posts} />
                {/*<Pager position="previous" name="← Newer" />*/}
                <Pager position="next" name="Older →" />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    posts: state.posts.list.map((id) => state.posts.posts[id]),
});

const mapDispatchToProps = {
    getPosts,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);