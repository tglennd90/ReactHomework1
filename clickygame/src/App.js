import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import './App.css';
import Avengers from './components/Avengers';

class App extends Component {
  state = {
    avengers: Avengers,
    clickedAvengers: [],
    score: 0,
    topScore: 0,
  }

  click = (id) => {
    // console.log(id)
    let { clickedAvengers, score, avengers, topScore } = this.state;

    if (clickedAvengers.includes(id)) {
      console.log("Thanos has arrived, death is upon you.")
      clickedAvengers = []
      score = 0
      topScore = this.state.score
    } else {
      clickedAvengers.push(id)
      score++
      topScore++
      console.log(score)
      console.log(topScore)
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
    // console.log(this.state.clickedAvengers)
  }

  render() {
    return (

      <Container>
        <Row>
          <h1>Clicky Game</h1>
          <p>Click an image to gain points, but don't click the
            same image twice, or game over!
          </p>
        </Row>
        <Row>
          {this.state.avengers.map(avenger => <img onClick={() => this.click(avenger.id)} alt="alt" key={avenger.id} src={avenger.src} />)}
        </Row>
      </Container>

    );
  }
}

export default App;
