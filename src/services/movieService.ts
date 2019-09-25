import axios from 'axios'

const apiKey: string = 'e2d53cd0'

export default {
  searchMovies: (fullText: string, pageNumber: number) => {
    const url =`http://omdbapi.com/?apikey=${apiKey}&s=${fullText}&page=${pageNumber}`
    return axios.get(url).then(info => info.data)
  },
  getMovieById: (movieId: string) => {
     const url = `http://omdbapi.com/?apikey=${apiKey}&i=${movieId}`
    return axios.get(url).then(info => info.data)
  }
}