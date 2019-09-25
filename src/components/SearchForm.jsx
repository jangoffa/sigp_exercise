import React from 'react';
import { Input, Button } from 'antd';
import Api from '../services/movieService.ts';
import MoviesList from './MoviesList.jsx';
import { Pagination } from 'antd';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fulltext: '',
            movies: [],
            totalResults: 0,
            currentPage: 1
        };
    }

    /**
     * Handles fulltext search term change
     */
    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    /**
     * Triggers search
     */
    handleSubmit = () => {
        this.searchMovies();
    }

    /**
     * Triggers search on input enter
     */
    handlePressEnter = (e) => {
        e.preventDefault();
        this.searchMovies();
    }

    /**
     * Page changed
     */
    onShowSizeChange = (current, pageSize) => {
        this.setState({
            currentPage: current
        });

        this.searchMovies();
    }

    /**
     * Search for movies according to current state
     */
    searchMovies = () => {
        Api.searchMovies(this.state.value, this.state.currentPage)
            .then(result => {
                if (Array.isArray(result.Search)) {
                    this.setState({
                        movies: result.Search.map(m => m),
                        totalResults: parseInt(result.totalResults)
                    });
                } else {
                    this.setState({
                        movies: [],
                        totalResults: 0,
                        currentPage: 1
                    });
                }
            });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <Input className='input' placeholder='Search movie' onChange={this.handleChange} onPressEnter={this.handlePressEnter} />
                    <Button type="primary" icon="search" onClick={this.handleSubmit}>Search</Button>
                </form>
                <MoviesList movies={this.state.movies}></MoviesList>
                <Pagination total={this.state.totalResults} showSizeChanger onShowSizeChange={this.onShowSizeChange} />
            </div>
        )
    }
}

export default SearchForm;