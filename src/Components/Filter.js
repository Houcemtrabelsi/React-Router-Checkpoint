import React from "react";

// export default class Filter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       fiterText:""
//      };

//   }

//   handleChange =(e)=>{
//     this.setState({
// fiterText: e.target.value,

//     })
//   }

//   filtredText=(newText)=>{
//     this.setState({
//       newText:this.state.fiterText
//     })
//   }

//   render() {
//     return (
//       <div>

//         <input value={this.state.fiterText} onChange={this.handleChange}/>

//       </div>
//     )
//   }
// }
import StarRatingComponent from "react-star-rating-component";

function Filter({ filtredText, filtredRating }) {
 


  return (
    <div>
      <input onChange={(e) => filtredText(e.target.value)} />
      <StarRatingComponent
      
        onStarClick={(nextValue)=>filtredRating(nextValue)}
    
      />
    </div>
  );
}

export default Filter;
