import React from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import PonyCard from "./components/PonyCard";
import ponies from "./ponies.json";


class App extends React.Component {
  // Setting this.state.friends to the friends json array
  state = {
    ponies
  };



  // var randomPony = Math.floor(Math.random() * this.rponies.length)


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Header/>
        {this.state.ponies.map(pony => (
          <PonyCard
            id={pony.id}
            image={pony.image}
          />
        ))}
      </Wrapper>
    );
  }
}
export default App;
