import React from 'react';


export default class ContectInfo extends React.Component{
    render(){
        return(<div>{this.props.contact.name} , {this.props.contact.age}</div>)
    }
}