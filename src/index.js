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

class Tree extends React.Component {
  renderApple() {
    return <Apple />;
  }

  render() {
    return (
      <div>
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
      </div>
    );
  }
}

ReactDOM.render(
  <Tree />,
  document.getElementById('root')
);
