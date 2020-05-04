import React, { Component } from 'react';
import { Container, Row, Jumbotron, Navbar } from 'react-bootstrap';
import './App.css';
import Avengers from './components/Avengers';

class App extends Component {
  state = {
    avengers: Avengers,
    clickedAvengers: [],
    score: 0,
    topScore: 0,
    info: ["Choose an Avenger to begin"]
  }
  // "Keep building your team!", "Thanos has arrived, death is upon you."
  click = (id) => {
    let { clickedAvengers, score, avengers, topScore } = this.state;

    if (clickedAvengers.includes(id)) {
      this.setState({info: "Thanos has arrived, death is upon you."})
      clickedAvengers = []
      score = 0
      
    } else {
      this.setState({info: "Keep building your team!"})
      clickedAvengers.push(id)
      score++
      
      if (score >= topScore) {
        topScore = score
      } 
    }

    let avengerCount = avengers.length;
    let avengerSelected;
    let temp;

    while (avengerCount > 0) {
      avengerSelected = Math.floor(Math.random() * avengerCount);
      avengerCount--;
      temp = avengers[avengerCount];
      avengers[avengerCount] = avengers[avengerSelected];
      avengers[avengerSelected] = temp;
    }

    this.setState({
      clickedAvengers,
      score,
      avengers,
      topScore
    })
  }

  render() {
    return (

      <Container>
        
        <Navbar>
          <Navbar.Text className="navT">Avengers Clicky Game!</Navbar.Text>
          <Navbar.Text className="navT">{this.state.info}</Navbar.Text>
          <Navbar.Text className="navT">Score: {this.state.score} | Top Score: {this.state.topScore}</Navbar.Text>
        </Navbar>
      
        <Jumbotron fluid>
          <p className="p1">Click an image to gain points!
          Don't click the same image twice,
          or game over!</p>
        </Jumbotron>   

        <Row className="picRow">
          {this.state.avengers.map(avenger => <img onClick={() => this.click(avenger.id)} alt="alt" key={avenger.id} src={avenger.src} />)}
        </Row>

      </Container>

    );
  }
}

export default App;
