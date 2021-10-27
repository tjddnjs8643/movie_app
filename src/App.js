import React from "react";
import PropTypes from "prop-types";

function Food({name,picture,rating}){
  return <div>
    <h2> I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src = {picture}></img>
  </div>
}

Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

const foodILike = [
  {
    id:1 ,
    name:"kimchi" ,
    image : "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.bgw.kr%2Fwp-content%2Fuploads%2F2019%2F12%2F%25ED%258F%25AC%25EA%25B8%25B0%25EA%25B9%2580%25EC%25B9%2598-1200x1200.png&imgrefurl=https%3A%2F%2Fwww.bgw.kr%2Fproduct%2Fpk5%2F&tbnid=KYthM8io9xd2BM&vet=12ahUKEwi2ze72lOrzAhUSw4sBHcJuAKgQMygAegUIARDOAQ..i&docid=ZjMQxtyXjkglKM&w=1200&h=1200&q=%EA%B9%80%EC%B9%98&ved=2ahUKEwi2ze72lOrzAhUSw4sBHcJuAKgQMygAegUIARDOAQ"
    , rating : 5
  },
  { id:2,
    name : "bibimbob" ,
    image : "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F4%2F44%2FDolsot-bibimbap.jpg%2F220px-Dolsot-bibimbap.jpg&imgrefurl=https%3A%2F%2Fko.wikipedia.org%2Fwiki%2F%25EB%25B9%2584%25EB%25B9%2594%25EB%25B0%25A5&tbnid=Fz_8GHM6ze9U8M&vet=12ahUKEwiuqb-MlerzAhX7y4sBHRUvBksQMygAegUIARDQAQ..i&docid=LLx6Fq5KFqTvRM&w=220&h=147&q=%EB%B9%84%EB%B9%94%EB%B0%A5&ved=2ahUKEwiuqb-MlerzAhX7y4sBHRUvBksQMygAegUIARDQAQ"
  , rating : 4.9
  }
]
function App() {
  return (
    <div >
      {foodILike.map(dish => (
          <Food 
          key = {dish.id} 
          name =  {dish.name}
          picture = {dish.image} 
          rating ={dish.rating} />
          ))}
    </div>
  );
}

export default App;
