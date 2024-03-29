import React, { Component } from 'react';


class Bomb extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            datetime: new Date(),
        }
        //console.log('constructor')
    }

    componentDidMount(){
        //console.log('componentDidMount')
        this.interval = setInterval(() => {
            //console.log('setInterval')
            this.setState({
                datetime: new Date().getSeconds(),
            });
        }, 1000);
    }
    
    handleChange = () => {
        if(this.state.datetime % 3 === 0){
            console.log('boom')
            return 'BOOM!!!'
        } else if(this.state.datetime % 2 === 1){
            console.log('tick')
            return 'tick'
        } else if(this.state.datetime % 2 === 0){
                console.log('tock')
                return 'tock'
            }
        }
    
    


    componentWillUnmount(){
        //need to place this somwhere in my handle
        //handlechange function to stop at a certain number
        clearInterval(this.interval) 
    }


render(){
    console.log(this.state.datetime)
    return(
        <div onChange={this.handleChange}>{this.handleChange()}</div>
    );
}


}

export default Bomb;