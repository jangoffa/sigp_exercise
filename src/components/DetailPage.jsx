import React from 'react';
import '../App.css';
import Api from '../services/movieService.ts';
import { Descriptions } from 'antd';
import { Icon } from 'antd';

class DetailPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movie: {},
            isFavourite: false
        }

        console.log("DetailPage constructor");
        console.log(props);

        var selectedId = 'tt0096895';
        if (this.props.location.state !== undefined && this.props.location.state != null) {
            selectedId = this.props.location.state.id;
        }

        Api.getMovieById(selectedId)
            .then(result => {
                if (result)
                {
                    this.setState({movie: result});
                }
            });
    };

    /**
     * Handles star change
     */
    handleClickFavourite = () => {
        this.setState({
            isFavourite: !this.state.isFavourite
        })
    };

    render() {
        return (
            <div>
                <Icon
                    type="star"
                    theme={this.state.isFavourite ? 'filled' : 'outlined'}
                    style={{ color: 'red' }}
                    onClick={this.handleClickFavourite}
                />

                <Descriptions title="Movie Info" bordered>
                    <Descriptions.Item label="Title">{this.state.movie.Title}</Descriptions.Item>
                    <Descriptions.Item label="Genre">{this.state.movie.Genre}</Descriptions.Item>
                    <Descriptions.Item label="Year">{this.state.movie.Year}</Descriptions.Item>
                    <Descriptions.Item label="Director">{this.state.movie.Director}</Descriptions.Item>
                    <Descriptions.Item label="Writer">{this.state.movie.Writer}</Descriptions.Item>
                    <Descriptions.Item label="IMDB Rating">{this.state.movie.imdbRating}</Descriptions.Item>
                    <Descriptions.Item label="IMDB Votes">{this.state.movie.imdbVotes}</Descriptions.Item>
                </Descriptions>
            </div>
        );

    }
}

export default DetailPage;
