import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Apple extends React.Component {
  render() {
    return (
      <img src='apple.png' alt='apple' height='150px' width='125'></img>
    );
  }
}

class Title extends React.Component {
  render() {
    return (
      <div>apple tree</div>
    );
  }
}

class Word extends React.Component {
  render() {
    return (
      <div>
        <span>{this.props.value[0]}</span>
        <span>{this.props.value[1]}</span>
        <span>{this.props.value[2]}</span>
        <span>{this.props.value[3]}</span>
        <span>{this.props.value[4]}</span>
        <span>{this.props.value[5]}</span>
      </div>
    );
  }
}

class Guess extends React.Component {
  render() {
    return (
      <form>
        guess a letter: <input type="text" name="firstname"/>
      </form>
    );
  }
}

class Tree extends React.Component {

  renderGuess() {
    return <Guess />;
  }

  renderApple() {
    return <Apple />;
  }

  renderTitle() {
    return <Title />;
  }

  renderWord(letters) {
    return <Word value={letters} />;
  }

  render() {
    return (
      <div>

        {this.renderTitle()}
        {this.renderApple()}
        {this.renderApple()}
        {this.renderApple()}
        {this.renderApple()}
        {this.renderApple()}
        {this.renderApple()}
        {this.renderApple()}
        {this.renderApple()}
        {this.renderApple()}
        {this.renderApple()}
        {this.renderWord(['-','-','-','-','-','-'])}
        {this.renderGuess()}
      </div>
    );
  }
}

ReactDOM.render(
  <Tree />,
  document.getElementById('root')
);
