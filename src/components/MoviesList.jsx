import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Row, Col } from 'antd';

class MoviesList extends React.Component {

  handleOnClick = (id) => {

  }

  render() {
    return (
      // <div>
      //   {
      //     this.props.movies.map(movie => {
      //       return (
      //         <ul>
      //           <li>
      //             <Link to="/users/1">User 1 </Link>
      //           </li>          
      //         </ul>
      //         <Route path="/users/:id" component={User} />
      //       )
      //     })
      //   }
      // </div>

      <Row gutter={24} justify={'start'}>
      {
        this.props.movies.map(movie => {
          return (
            <Col span={5} offset={1} key={movie.imdbID}>
              <p>{movie.Title}</p>
                {/* <a onClick={this.handleOnClick('tt0118688')} >{movie}</a> */}
            </Col>
          )
        })
      }
      </Row>
    );



    // );
  }
}

export default MoviesList;