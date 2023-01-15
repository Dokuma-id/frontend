import React from "react";

const Movies = (props) => {
    return(
        <div>
            <ul>
                {props.data.map((value, index)=>
                    <li key = {index}>
                        Judul film : {value.title} ({value.releaseYear}) 
                    </li>
                )}
            </ul>
            
        </div>
    )
}

export default Movies;