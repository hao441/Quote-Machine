import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
import fontAwesome from 'https://cdn.skypack.dev/font-awesome';

/* {quote : author} */
const quoteList = {
  "Life isn’t about getting and having, it’s about giving and being." : "Kevin Kruse",
  "Whatever the mind of man can conceive and believe, it can achieve." : "Napoleon Hill",
  "Strive not to be a success, but rather to be of value." : "Albert Einstein",
  "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference." : "Robert Frost",
  "I attribute my success to this: I never gave or took any excuse." : "Florence Nightingale",
  "You miss 100% of the shots you don’t take." : "Wayne Gretzky",
  "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed." : "Michael Jordan",
  "The most difficult thing is the decision to act, the rest is merely tenacity." : "Amelia Earhart",
  "Every strike brings me closer to the next home run." : "Babe Ruth",
  "Definiteness of purpose is the starting point of all achievement." : "W. Clement Stone",
  "We must balance conspicuous consumption with conscious capitalism." : "Kevin Kruse",
  "Life is what happens to you while you’re busy making other plans.": "John Lennon",
  "We become what we think about." : "Earl Nightingale"
}

const list = Object.keys(quoteList)

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: '',
      author: ''
    }
    this.newQuote = this.newQuote.bind(this);
  }
  
  componentDidMount() {
    const ranNum = Math.floor(Math.random()*10)+1
    this.setState({
      quote : list[ranNum],
      author : quoteList[list[ranNum]]
    })
  }
  
  newQuote () {
    const ranNum = Math.floor(Math.random()*10)+1
    this.setState({
      quote : list[ranNum],
      author : quoteList[list[ranNum]]
  })
  }

  render () {
    return (
      <>
        <div>
          <h1 id="welcome">Welcome to the Quote Generator</h1>
          <hr />
          <h3 id="text">
            {this.state.quote}
          </h3>
          <h5 id="author">
            {this.state.author}
          </h5>
        </div>
        <hr />
         <button id="new-quote" onClick={this.newQuote}>
           New Quote
        </button>
        <br />
          <a id="tweet-quote" href={`'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=/'${this.state.quote}${this.state.author}'`}><i class="socialIcon tw fa fa-twitter-square fa-3x"></i></a>
       </>
    )
  }
}

ReactDOM.render(<QuoteMachine />, document.getElementById('quote-box'))