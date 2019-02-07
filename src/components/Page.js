import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Review from './Review';

const styles = theme => ({
  card: {
    textAlign: 'center',
    maxWidth:800,
    width: 7000,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  media: {
    height: 420,
    width: 640,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  actions: {
    display: 'flex',
  },
});

class Page extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      headings: null,
      paragraphs: [],
      images: [],
    };
  }

  /**
   * display each paragraph from the article when they exist
   */
  returnParagraphs() {
    return this.props.article && this.props.article.body && this.props.article.body.map(element => {
      return (
        element.type === 'paragraph' &&
        <React.Fragment key={element.model.text}>
          <Typography>
            {element.model.text}
          </Typography>
          <br />
        </React.Fragment>
      )
    })
  }

  /**
   * display the heading of the article
   */
  returnHeading() {
    return this.props.article && this.props.article.body && this.props.article.body.map(element => {
      return (
        element.type === 'heading' &&
        <React.Fragment key={element.model.text}>
          <br />
          <Typography>
            <b>{element.model.text}</b>
          </Typography>
          <br />
        </React.Fragment>
      )
    })
  }
  
  /**
   * display the elements of the list of the article when they exist
   */
  returnList() {
    return (
      this.props.article && this.props.article.body && this.props.article.body.map(element => {
          return (
            element.type === 'list' && 
              <React.Fragment key={element.model.items}>
                <h4>List</h4>
                {element.model.items.map(item => { //loop to display each item from the list
                  return ( 
                    <React.Fragment >
                      <Typography>
                        {item}
                      </Typography>
                    </React.Fragment>
                  )
                })}
              </React.Fragment>
          )
        }
      )
    )
  }

  /**
   * display each image from the article when they exist
   */
  returnImage() {
    const { classes } = this.props;
    return this.props.article && this.props.article.body && this.props.article.body.map(element => {
      return (
        element.type === 'image' &&
        <React.Fragment key={element.model.altText}>
          <br />
          <Typography>
            <CardMedia
              className={classes.media}
              image={element.model.url} //will be the first image by default
              title="Image title"
            />
            {element.model.image}<br/>
          </Typography>
          <br />
        </React.Fragment>
      )
    })
  }

  render() {
    const { classes, article, articleNumber } = this.props;

    if(articleNumber === 6) {
      return <Review/>
    }

    return (
      <Card className={classes.card}>
        <CardHeader className={classes.cardHeader} title={article.title}/>
        {/* <h2>{article.title}</h2> */}
        {this.returnImage()}
        {this.returnHeading()}
        <CardContent>
          {this.returnParagraphs()}
          {this.returnList()}
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton id="prevButton" aria-label="Previous article"
              onClick={() => {this.props.changePage(articleNumber-1);}}
              disabled={articleNumber === 1} //if the user is in the 1st page the previous button should be disabled
          >
            Prev Article
          </IconButton> 
          <IconButton id="nextButton" aria-label="Next article" style={{marginLeft: 'auto'}}
            onClick={() => {
                this.props.changePage(articleNumber+1);
            }}
            disabled={articleNumber === 6} //if the user is in the last page the only button should be that one for submitting the review
          >
            Next Article
          </IconButton>  
        </CardActions>
      </Card>
    );
  }
}

Page.propTypes = {
  classes: PropTypes.object.isRequired,
  article: PropTypes.object
};

Page.defaultProps = {
  classes: {},
  article: {}
}

export default withStyles(styles)(Page);
