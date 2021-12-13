import React, { Component } from 'react';
import Text from './Text/Text'
import Button from './Button/Button'

import { connect } from 'react-redux';
import actions from '../redux/action/actions'


const URL = "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json";

const mapDispatchToProps = dispatch => ({
  next: quote => dispatch(actions.next(quote))
})

const mapStateToProps = state => ({
  quotes: state.quotes
})

class RandomApp extends Component{

    constructor(props) {
      super(props);
    }

    state = {
         quotes: [],
         quote: {},
         displayed: 1
    }
//---------------------------------------------
    random = (event) => {
        if(this.state.displayed === this.props.quotes.length-1){
          this.setState({
            displayed: this.state.displayed+1,
            quote: this.state.quotes[Math.floor(Math.random() * ( this.state.quotes.length -1)) + 1],
        })
        event.preventDefault()
        this.props.next(this.state.quote)
        }else{
          this.setState({
            quote: this.props.quotes[this.state.displayed],
            displayed: this.state.displayed +1
          })
        }
    }
//---------------------------------------------
     previous = () => {
        this.setState({
          quote: this.props.quotes[this.state.displayed],
          displayed: this.state.displayed - 1
        })
    }
//---------------------------------------------
    componentDidMount() {
      fetch(URL)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              quotes: result,
              quote: result[Math.floor(Math.random() * ( result.length -1)) + 1]
            });
            this.props.next(this.state.quote)
            this.setState({
              displayed: this.state.displayed +1
            })
          })
    }

    render(){
      return(
        <>
            <Text quote={this.state.quote} />
            <Button click={this.random} text="Next" />
            <Button click={this.previous} text="Previous" />
        </>
      )
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(RandomApp)