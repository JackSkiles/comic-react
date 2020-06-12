import React, { Component } from 'react'

export default class Comic extends Component {
    constructor(props){
        super(props);
        this.state = {
            mainComic: '',
        }
    }
    
    getComic = () => {
        console.log('Mounted');
        fetch('https://xkcd.now.sh/?comic=latest')
            .then(res => res.json())
            .then(data => {
                this.setState({ mainComic: data.img})
                console.log(data);
            })
    }
    componentDidMount(){
        this.getComic();
    }
    render() {
        return (
            <div>
                <img src={this.state.mainComic}></img>
            </div>
        )
    }
} 