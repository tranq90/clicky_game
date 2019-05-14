import React, { Component } from "react";

class Form extends Component {
  state = {
    rick: false,
    morty: false,
    squanchy: false,
    bill: false,
    summer: false,
    poopybutthole: false,
    krombopulous: false,
    sleepygary: false,
    jerry: false
  };

  handleClick = event => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });

    alert(`Username: ${this.state.rick} `);
    console.log(this.state.name)
  };

  render() {
    return (
      <div>
        <img width="150px" height="150px" src="https://vignette.wikia.nocookie.net/rickandmorty/images/a/a6/Rick_Sanchez.png/revision/latest?cb=20160923150728" name="rick" value="rick" onClick={this.handleClick}></img>
        <img width="150px" height="150px" src="https://vignette.wikia.nocookie.net/rickandmorty/images/4/41/Morty_Smith.jpg/revision/latest?cb=20170217193441" name="morty"></img>
        <img width="150px" height="150px" src="https://vignette.wikia.nocookie.net/rickandmorty/images/1/16/Squanchy_.png/revision/latest?cb=20160830140218" name="squanchy"></img>
        <img width="150px" height="150px" src="https://vignette.wikia.nocookie.net/disney/images/4/41/Profile_-_Bill_Cipher.png/revision/latest?cb=20190318132904" name="bill"></img>
        <img width="150px" height="150px" src="https://vignette.wikia.nocookie.net/rickandmorty/images/a/ad/Summer_is_cool.jpeg/revision/latest?cb=20160919183158" name="summer"></img>
        <img width="150px" height="150px" src="https://vignette.wikia.nocookie.net/rickandmorty/images/3/37/Mr_poopy_butthole.png/revision/latest?cb=20150819161234" name="poopybutthole"></img>
        <img width="150px" height="150px" src="https://vignette.wikia.nocookie.net/rickandmorty/images/9/93/Krombopulos_Michael.png/revision/latest/scale-to-width-down/1000?cb=20160919070008" name="krombopulous"></img>
        <img width="150px" height="150px" src="https://vignette.wikia.nocookie.net/rickandmorty/images/9/9c/Sleepy_Gary_Better_Image.png/revision/latest?cb=20170131021113" name="sleepygary"></img>
        <img width="150px" height="150px" src="https://vignette.wikia.nocookie.net/rickandmorty/images/f/f1/Jerry_Smith.png/revision/latest?cb=20160923151111" name="jerry"></img>
      </div>
    );
  }
}

export default Form;
