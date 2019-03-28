import React from 'react';
 
export default class CommentForm extends React.Component{
    state = {
        content: '',
    };

    handleChange = (e) => {
        this.setState({
            content: e.target.value,
        });
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
        <form onSubmit={this.handleFormSubmit}>
            <textarea onChange={this.handleChange} value={this.state.content} className="form-control"></textarea>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
    }
}