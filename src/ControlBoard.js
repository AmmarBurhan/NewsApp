import React, {Component} from 'react';

class ControlBoard extends Component
{
    constructor(props)
    {
        super (props);
        this.state={
            country: 'us',
            category: 'general',
            query: ''
        }
    }

    handleChange = (e) => this.setState({[e.target.name]: e.target.value})
    handleClick = (e) => {
        e.preventDefault();
        this.props.search(this.state.country, this.state.category, this.state.query);
    }

    render ()
    {
        return (
            <nav className="navbar navbar-light bg-light">
                <form className="form-inline">
                    <select name = "country" 
                        className="form-control mr-sm-2"
                        value={this.state.country}
                        onChange={this.handleChange}>
                            <option value="us">USA</option>
                            <option value="ca">Canada</option>
                            <option value="gb">UK</option>
                        
                    </select>

                    <select name = "category" 
                        className="form-control mr-sm-2"
                        value={this.state.category}
                        onChange={this.handleChange}>
                            <option value="general">All</option>
                            <option value="business">Business</option>
                            <option value="entertainment">Entertainment</option>
                            <option value="health">Health</option>
                    </select>

                    <input className="form-control mr-sm-2"
                    type="search" placeholder="Search"
                    aria-label="Search" name="query"
                    value={this.state.query}
                    onChange={this.handleChange} />
                     
                    <button className="btn btn-outline-success my-2 my-sm-0"
                    type="button" onClick={this.handleClick}>Search</button>
                </form>
            </nav>
        )
    }
}

export default ControlBoard;