import React from "react";

class Detail extends React.Component{
    componentDidMount(){
        const {location,history} = this.props
        if(location.state ===undefined){
            history.push("/")
        }
    }
    render(){
        const {location} = this.props;
       
            if(location.state){
            return <div>
            <span>{location.state.title}</span><br/>
            <span>{location.state.year}</span>
            <ul className = "movie_genre">
            {location.state.genres.map((genre,index) => (
            <li key = {index} className="genre_genre">
                {genre}
                </li>
                ))} 
            </ul>
            <span>{location.state.summary}</span>
                    </div>
            }
            else{
                return null;
            }

        
    }
}

export default Detail;