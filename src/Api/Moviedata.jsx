import axios from "axios"

const api = axios. create({

    baseURL:"https://api.themoviedb.org/3",
    params:{
        api_key:"9b7ae787eb48a28887d4ff5981fd6cad"
    }

})

export const getdata=()=>{
    return api.get("/discover/movie")
}