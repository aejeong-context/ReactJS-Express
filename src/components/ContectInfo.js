import React from 'react';


export default class ContectInfo extends React.Component{
    render(){
        return(<div onClick={this.props.onClick}>{this.props.contact.name}</div>)
    }
}