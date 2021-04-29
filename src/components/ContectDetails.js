  import React from 'react';

export default class  ContectDetails extends React.Component{
render(){
    const details =(
    <div>
    <p>{this.props.contect.name}</p>
    <p>{this.props.contect.age}</p>
    </div>
    );
    const blank =(
    <div>NotSelected</div>
    );
     
    return(<div>
      <h2>Details</h2>
      {this.props.isSelected? details : blank }
      </div>); 
} 
}; 

ContectDetails.defaultProps ={
  contect : {
    name:'',
    age:''
  }
}