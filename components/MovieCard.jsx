import "./MovieCard.css";
export const MovieCard=({movie})=>{

const {title, poster_path, vote_average, overview} = movie;

console.log(movie);

    return (
        <div className="card-container">
            <div className="card-img-container">
                <img className="card-img" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="movie-card"></img>
                 </div>
                 <div className="card-details"><div>
                    <span className="title">{title} </span>
                    </div>
                   
                    <div className="ratings">
                        <span>Rating: {vote_average}</span>
                        <span> Overview: {overview} </span>
                    </div>
                    </div>
                 
            </div>

                 )

}