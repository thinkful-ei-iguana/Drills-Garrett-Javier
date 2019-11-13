import React, { Component } from 'react'

export class RouletteGun extends Component {
    constructor(props){
        super(props)
            this.state = {
                bulletInchamber: 4,
                bang: 'Draw'
            }
    }

   

    renderOutcome = () => {
        const chamber = [1,2,3,4]
        let rand = chamber[Math.floor(Math.random() * chamber.length)]
        ;
        let pewPew = 'pew pew your dead';
        let closeCall = 'close call';
        

        if(rand === this.state.bulletInchamber){
            console.log('your dead')
            this.setState({
                bang: pewPew
            })
        } else {
            console.log('close call')
            this.setState({
                bang: closeCall
            })
        }
        
    }



    render() {
        return (
            <div>
                <p>you feeling lucky punk</p>
                <p>{this.state.bang}</p>
                <button type="button" onClick={this.renderOutcome}>RouletteGun</button>
            </div>
        )
    }
}

export default RouletteGun
