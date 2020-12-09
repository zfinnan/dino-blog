import React, { Component } from 'react';

class Dino extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: this.props.title, 
            author: this.props.author, 
            body: this.props.body, 
            comments: this.props.comments,
            edit: ''
        }
    }
    
    changeInput = (evt) => {
      console.log(evt)
      const newValue = (evt.target.value)
      this.setState({edit: newValue})
    }

    submit = () => {
      const newValue = this.state.edit
      this.setState({body: newValue})
    }

    render() {
        return (
            <div>
                <h1>Title: {this.state.title}</h1>
                <p>Author: {this.state.author}</p>
                <p>Body: {this.state.body} </p>
                <input value={this.state.submit} onChange={this.changeInput}/> 
                <button onClick={this.submit}>submit</button>
                <h2>Comments</h2>
            </div>
        )
    }
}
export default Dino;