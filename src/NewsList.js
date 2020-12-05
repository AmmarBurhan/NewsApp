import React, {Component} from 'react';

class NewsList extends Component //inherits from Component
{
      
    render ()
    {

        return (
            <div className="container">
                <p className="h1 text-center text-primary">My News List</p>
                <div className="row">
                {
                this.props.articles.map((item, index, array)=>(
                    <div className="col-sm-6 col-md-4 col-lg-3 mb-3" key={index}>
                        <div className="card" >
                            <img src={item.urlToImage} 
                                className="card-img-top" 
                                alt={item.title}
                                style={{height: 175 + 'px'}}/>
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.description}</p>
                                <a href={item.url} 
                                    className="btn btn-primary" 
                                    target="_blank" rel="noopener noreferrer">Read More...</a>
                            </div>
                        </div>
                    </div>))
                    }
                </div>
            </div>
        )
    }
}

export default NewsList; // export is necessary to make it visible to other components
