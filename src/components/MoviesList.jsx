import React from 'react';
import { Row, Col } from 'antd';
import { Redirect } from "react-router";
import { withRouter } from "react-router-dom";

class MoviesList extends React.Component {
  constuctor() {
    // this.routeChange = this.routeChange.bind(this);

    this.setState({
      selectedId: 0,
      redirect: false
    });
  }

  /**
   * Allow redirect
   */
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  /**
   * Renders redirect if clicked
   */
  renderRedirect = (id) => {
    if (this.state !== null && this.state.redirect) {
      return <Redirect to={{
        pathname: '/DetailPage',
        state: {id: id}
      }}/>
    }
  }

  // routeChange = () => {
  //   let pathname = '/DetailPage';
  //   let redirectState = {id: 'tt1569923'};

  //   console.log("routeChange method")
  //   console.log(this.props);
  //   this.props.history.push(pathname, redirectState);
  // }

  render() {
    return (
      <Row gutter={24} justify={'start'}>
      {
        this.props.movies.map(movie => {
          return (
            <Col span={5} offset={1} key={movie.imdbID}>
              {this.renderRedirect(movie.imdbID)}
              <a href="#" onClick={this.setRedirect}>{movie.Title}</a>
              {/* <Route>
                <Redirect to={{
                  pathname: '/DetailPage',
                  state: {id: movie.imdbID}
                }}/>
              </Route> */}
              {/* <p>{movie.Title}</p> */}
            </Col>
          )
        })
      }
      </Row>
    );
  }
}

export default withRouter(MoviesList);