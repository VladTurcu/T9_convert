import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import { getWordList, addData, removeData } from "./../actions/actions";
import { t9Keypad } from './../utils/t9Keypad';

import { MainWrapper, Keypad, WordList, Word, DigitContainer } from './../components/Generics';
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

  handleValueDelete(e) {
    e.preventDefault();
    this.props.removeData()
  }

  render() {
    return (
      <MainWrapper>
        <FormWrapper>
          <Form onSubmit={(e) => this.handleSubmit(e)}> 
            <Input type="text" name="text" readOnly={true} placeholder="digit.." value={this.props.value}/>
            <Button className="form_submit" type="submit">Convert</Button>
            <Button className="negative" onClick={(e) => this.handleValueDelete(e)}>Delete</Button>
          </Form>

          <Keypad>
            {t9Keypad.map((digit, index) => {
              return (
                <Button key={index} className="digit" onClick={(e) => this.handleDigitClick(e, digit.value)}>
                  {digit.key}
                  <DigitContainer>
                    {digit.letters.map(letter => letter)}
                  </DigitContainer>
                </Button>
              )
            })}
          </Keypad>

          <WordList hasWords={this.props.data.length > 0}>
            {this.props.data.map((word, index) => {
              return (<Word key={index}>{word}</Word>)
            })}
          </WordList>
          
          </FormWrapper>
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


