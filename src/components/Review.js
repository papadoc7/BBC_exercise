import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
  },
  button: {
    margin: theme.spacing.unit,
  },
  review: {
    width: '60%',
    maxWidth: 500,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

class Review extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
      
    }
  
    handleSubmit(event) {
      fetch('https://jsonplaceholder.typicode.com/reviews/', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            review: this.state.value
          })
      })
        .then((response) => {
          if (response.ok) {
            this.setState({ responseMess: 1 })
          return response.json();
          }
          else {
            this.setState({ responseMess: 0 })
          }
        })
        .catch((error) => console.log(error));
            
      alert('The review was submitted successfully: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      const { classes } = this.props;
      return (
        <div className={classes.review}>
          <form onSubmit={this.handleSubmit}>
            <TextField
              id="standard-textarea"
              label="Review:"
              placeholder="Please submit your review"
              rows="5"
              multiline
              className={classes.textField}
              margin="normal"
              required={true}
              onChange={this.handleChange} 
            />
            <br/>
            <Button variant="contained" className={classes.button} type="submit">
              Submit
            </Button>
          </form>
        </div>
      );
    }
  }
  

export default withStyles(styles)(Review);
