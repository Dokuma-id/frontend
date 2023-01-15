import Axios from 'axios'

export const loadMovies = async() =>{
    let url = "https://reactnative.dev/movies.json"
    let data = await Axios.get(url)
    return Promise.resolve(data)
}


    