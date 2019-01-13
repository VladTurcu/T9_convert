import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { getWordList, addData, removeData } from "./../actions/actions";

import { MainWrapper, Keypad } from './../components/Generics';
import Form, { Input, Button, FormWrapper } from './../components/Form';

class App extends Component {

  handleSubmit(e) {
    e.preventDefault()
    this.props.getWordList(e.target.text.value);
  }

  handleDigitClick(e, n) {
    e.preventDefault();
    this.props.addData(n)

  }
  render() {
    return (
      <MainWrapper>
        <FormWrapper>
          <Form onSubmit={(e) => this.handleSubmit(e)}> 

            <Input type="text" name="text" readOnly={true} placeholder="digit.." value={this.props.value}/>
            <Button className="form_submit" type="submit">Convert</Button>

            <Button className="negative" onClick={(e) => {
              e.preventDefault()
              this.props.removeData()
              }}>Remove</Button>
          </Form>

              
          <Keypad>
            <Button className="digit" onClick={(e) => this.handleDigitClick(e, '1')}>1</Button>
            <Button className="digit" onClick={(e) => this.handleDigitClick(e, '2')}>2</Button>
            <Button className="digit" onClick={(e) => this.handleDigitClick(e, '3')}>3</Button>
            <Button className="digit" onClick={(e) => this.handleDigitClick(e, '4')}>4</Button>
            <Button className="digit" onClick={(e) => this.handleDigitClick(e, '5')}>5</Button>
            <Button className="digit" onClick={(e) => this.handleDigitClick(e, '6')}>6</Button>
            <Button className="digit" onClick={(e) => this.handleDigitClick(e, '7')}>7</Button>
            <Button className="digit" onClick={(e) => this.handleDigitClick(e, '8')}>8</Button>
            <Button className="digit" onClick={(e) => this.handleDigitClick(e, '9')}>9</Button>
            <Button className="digit" onClick={(e) => this.handleDigitClick(e, '')}>*</Button>
            <Button className="digit" onClick={(e) => this.handleDigitClick(e, '')}>0</Button>
            <Button className="digit" onClick={(e) => this.handleDigitClick(e, '')}>#</Button>
          </Keypad>

          </FormWrapper>
        {this.props.data.map((word, index) => {
          return (<div key={index}>{word}</div>)
        })}
      </MainWrapper>
    );
  }
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => {
  return {
    removeData: bindActionCreators(removeData, dispatch),
    addData: bindActionCreators(addData, dispatch),
    getWordList: bindActionCreators(getWordList, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);


