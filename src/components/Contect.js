import React from 'react';
import ContectInfo from './ContectInfo'
import ContectDetails from './ContectDetails';

export default class Contect extends React.Component{
    constructor(props){
        super(props); 
        this.state={
            selectedKey:-1,
            keyword:'',
            contentDate :
            [
            {name:'aejoeng',
            age:'28'},
            {name:'jisu',
            age:'27'}]
        };
        // this.handleChange=this.handleChange.bind(this);
    }

    handleChange=(e)=>{
        this.setState({
            keyword: e.target.value
        });
    }
    handleClick=(value)=>{
        this.setState({
            selectedKey : value
        });
    }

    render(){
        console.log('keyword now is : '+this.state.keyword);
        const map = (data) => { 
            data.sort((a,b)=> {return a.name > b.name;});
            data = data.filter((contact)=>{ return contact.name.toUpperCase().indexOf(this.state.keyword) > -1;});
            return data.map((contact,key)=>{
            return (<ContectInfo contact={contact} key={key} onClick={()=> this.handleClick(key)}/>); 
        
        });
    };

        return(<div>
            <h1>Contacts</h1>
            <input name="keyword" placeholder="you cant put any name" value ={this.state.keyword} onChange={this.handleChange}/>
           
            <div>
            {map(this.state.contentDate)}
            </div>
            <ContectDetails isSelected={this.state.selectedKey !== -1} contect={this.state.contentDate[this.state.selectedKey]}/> 

            </div>
            );
    }

    }
