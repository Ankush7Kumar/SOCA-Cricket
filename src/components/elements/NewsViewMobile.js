import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { useState, useRef, useEffect } from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ArticleView from './ArticleView'

 
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});



export default function NewsViewMobile(props) {
  const classes = useStyles();


  const [isActive, setIsactive] = useState(false);

  const nav = useRef(null);
  const closeMenu = () => {
    document.body.classList.remove('off-nav-is-active');
    nav.current && (nav.current.style.maxHeight = null);
    setIsactive(false);
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require('./../../assets/images/batball.jpg')}
          title="soca"
        />
        <CardContent style={{backgroundColor: '#1e1e1e'}}>
         
          <Typography variant="body2" color="text-color-low" component="p">
          
          <span className="text-color-high">Southern Ontario Cricket League starting July 17 2021 after taking all the permissions.</span>
          </Typography>
        </CardContent >
      </CardActionArea>
      <CardActions style={{backgroundColor: '#1e1e1e'}}>
        <Button size="small" color="">
        
        <span className="text-color-high">15 July 2021</span>
          
        
        </Button>
      
       
        <Link to="/ArticleView" onClick={closeMenu}><span style={{color: '#ACADFF'}}>Read More</span></Link>
    
      </CardActions>
    </Card>
  );
}
