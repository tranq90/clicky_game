import React, { Component } from "react";

class Form extends Component {
  state = {
    characters: [{
      name: "rick",
      src: "https://vignette.wikia.nocookie.net/rickandmorty/images/a/a6/Rick_Sanchez.png/revision/latest?cb=2016092315072",
      clicked: false
    },
    {
      name: "morty",
      src: "https://vignette.wikia.nocookie.net/rickandmorty/images/4/41/Morty_Smith.jpg/revision/latest?cb=20170217193441",
      clicked: false
    },
    {
      name: "squanchy",
      src: "https://vignette.wikia.nocookie.net/rickandmorty/images/1/16/Squanchy_.png/revision/latest?cb=20160830140218",
      clicked: false
    },
    {
      name: "bill",
      src: "https://vignette.wikia.nocookie.net/disney/images/4/41/Profile_-_Bill_Cipher.png/revision/latest?cb=20190318132904",
      clicked: false
    },
    {
      name: "summer",
      src: "https://vignette.wikia.nocookie.net/rickandmorty/images/a/ad/Summer_is_cool.jpeg/revision/latest?cb=20160919183158",
      clicked: false
    },
    {
      name: "poopybutthole",
      src: "https://vignette.wikia.nocookie.net/rickandmorty/images/3/37/Mr_poopy_butthole.png/revision/latest?cb=20150819161234",
      clicked: false
    },
    {
      name: "krombopulos",
      src: "https://vignette.wikia.nocookie.net/rickandmorty/images/9/93/Krombopulos_Michael.png/revision/latest/scale-to-width-down/1000?cb=20160919070008",
      clicked: false
    },
    {
      name: "sleepygary",
      src: "https://vignette.wikia.nocookie.net/rickandmorty/images/9/9c/Sleepy_Gary_Better_Image.png/revision/latest?cb=20170131021113",
      clicked: false
    },
    {
      name: "jerry",
      src: "https://vignette.wikia.nocookie.net/rickandmorty/images/f/f1/Jerry_Smith.png/revision/latest?cb=20160923151111",
      clicked: false
    }]
  };

  shuffle(characters) {
    var j, x, i;
    for (i = characters.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = characters[i];
      characters[i] = characters[j];
      characters[j] = x;
    }
    return characters;
  }

  handleClick = event => {
    const name = event.target.name;

    this.setState({
      [name]: true
    });
  };

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default Form;
