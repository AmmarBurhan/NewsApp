import React , {Component} from 'react';
import NewsList from './NewsList'
import ControBoard from './ControlBoard';

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state={url:'https://newsapi.org/v2/top-headlines?country=us&category=general&q=&apiKey=c801d58828424f19af23a86ebd0a35de',
                newsList:[]}
  }

  updateUrl = (country, category, q) => {
    let newUrl = 'https://newsapi.org/v2/top-headlines?country='+country+'&category='+category+'&q='+q+'&apiKey=c801d58828424f19af23a86ebd0a35de';
    fetch (newUrl)
        .then(response=>response.json())
        .then(data=> this.setState({newsList: data.articles, url: newUrl}))
        .catch(error=>console.log(error));
    
  }

  componentDidMount()
  {
    fetch (this.state.url)
        .then(response=>response.json())
        .then(data=> this.setState({newsList: data.articles }))
        .catch(error=>console.log(error));
  }

  render (){
    return(
    <div>
      <ControBoard search={this.updateUrl} />
      <NewsList articles={this.state.newsList} />

    </div>
    );
  }
}

export default App;
