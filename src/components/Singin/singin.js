import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import axios from 'axios';
import { singin } from '../../actions/auth';
import jwt from 'jsonwebtoken';

const api = axios.create({
    baseURL: 'https://ui-course-server.now.sh/orudka',
});

class SignInForm extends React.Component {
    state = {
        username: 'orudka',
        password: 'admin'
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const { username, password } = this.state;

        api
            .post('/login', {
                username,
                password,
            })
            .then(({ data }) => {
                const decodedToken = jwt.decode(data.token);

                localStorage.setItem('auth', data.token);

                this.props.singin(decodedToken.role, decodedToken.username)
            })
            .catch((error) => {
                console.log (error);
             })
    };

    render() {
        return (
            <Grid>
                <Row className="show-grid text-centr">
                    <Col xs={12} sm={8} className="article-wrapper">
                        <h1>Sign In</h1>
                        <p>
                            Need an account? <Link to="/signup">Sign up</Link> free. Your opinions and comments would be greatly appreciated.
                        </p>
                        < hr />
                        <div className="well">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group has-feedback">
                                    <input type="text" placeholder="username" className="form-control" />
                                </div>

                                <div className="form-group has-feedback">
                                    <input type="password" placeholder="password" className="form-control" />
                                </div>
                                <button type="submit" className="btn btn-primary" onClick={this.handleSingIn}>Sing In</button>
                            </form>
                        </div>
                        < hr />
                        <p>
                            This is a private system. Unauthorized access to or use of this system is strictly prohibited and tracked.
                            By continuing, you acknowledge your awareness of and concurrence with the acceptable use policy.
                            </p>
                        <p>
                            As you finish, you should sign out to protect yourself.
                            </p>
                        <hr />
                    </Col>
                </Row>
            </Grid>
        );
    };
}

const mapDispatchToProps = {
    singin,
};

export default withRouter(connect(
        null,
        mapDispatchToProps,
    )(SignInForm));