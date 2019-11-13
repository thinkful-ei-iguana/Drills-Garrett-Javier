import React, { Component } from 'react';


class HelloWorld extends React.Component{
    //initial set
    state = {
        who: 'World'
    }

    handleClick = word => {
        this.setState({
            who: word,
        });
    }
    render(){
        return (
            <div> 
                { /*hello world initial set*/ }
                <p>Hello,{this.state.who}</p>
                <button type="button" onClick={word => this.handleClick('javier')}>button</button>
                <button type="button" onClick={word => this.handleClick('garrett')}>button2</button>
            </div>
        );
    }
}

export default HelloWorld;
