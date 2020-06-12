import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchImg: 0,
        }
    }
    submitForm = (e) => {
        e.preventDefault();
    }

    handleChange = (event) => {
        const newVal = parseInt(event.target.value);
        this.setState( {searchImg: newVal} );
    }

    onSubmit = () => {
        console.log('Mounted');
        fetch('https://xkcd.now.sh/?comic=' + this.state.searchImg.toString())
            .then(res => res.json())
            .then(data => {
                this.setState({ searchImg: data.img})
                console.log(data);
            })
    }
    render(){
        return(
            <div>
                <form onSubmit={ this.submitForm } >
                    <input type="number" value= { this.state.searchImg } onChange={ this.handleChange }></input>
                    <img src={this.state.searchImg}></img>
                    <button type="submit" onClick= { this.onSubmit }>Search</button>
                </form>
            </div>
        )
    }
}