import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Grid, Row } from 'react-bootstrap';
import jwt from 'jsonwebtoken';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Home from '../Home/Home';
import Post from '../Post/index';
import HeaderComponent from '../Header';
import FooterComponent from '../Footer';

import './App.css';
import SingInForm from '../Singin/singin';
import { singin } from '../../actions/auth';


class App extends Component {
  componentDidMount() {
    if (localStorage.getItem('auth')) {
      const decodedToken = jwt.decode(localStorage.getItem('auth'));
      this.props.singin(decodedToken.role, decodedToken.username)
    }
  }

  render() {
    return (
      <>
        <HeaderComponent />
        <Grid>
          <Row className="show-grid text-centr">
            <div className="left">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/singin" component={SingInForm} />
                <Route path="/posts/:id" component={Post} />
              </Switch>
            </div>

            <div className="right">
              <div className="well">
                <h4> Blog Search </h4>
                <div className="blogSearch">
                  <form autoComplete="off">
                    <span className="input-group">
                      <input className="form-control"></input>
                      <span className="input-group-btn">
                        <button type="submit" className="btn btn-default">
                          <span className="glyphicon glyphicon-search"></span>
                        </button>
                      </span>
                    </span>
                  </form>
                </div>
              </div>

              <div className="well">
                <h4>Need an account?</h4>
                <p><Link to="/">Sign up</Link> free.</p>
              </div>

              <div className="well">
                <h4>Quote of the Day</h4>
                <p>
                  <q>Simplicity and elegance are unpopular because they require hard work and discipline to achieve and education to be appreciated.</q>
                  <i> — Edsger W. Dijkstra</i>
                </p>
              </div>
            </div>
          </Row>
        </Grid>
        <FooterComponent />
      </>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = {
  singin,
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));
