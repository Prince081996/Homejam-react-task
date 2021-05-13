import React from 'react'
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles'
import './styles/Review.css'

const useStyles =  makeStyles((theme) => ({
  root:{
      height:'100vh',
      display:'flex',
      width:'70%',
      position:'relative',
      right:'11%'
  },
  root1:{
      background: '#111229',
      color:'#ffffff',
      border:'3px solid #E5C558',
      borderRadius: '16px',
      boxShadow: '10px -10px #276C73',
      width:'350px',
      height:'240px',
      position:'relative',
      left:'24%',
      marginTop:'8rem'
  },
  image:{
      height:'50px',
      width:'50px',
      position:'relative',
      top:'27px',
      left:'10px',
  },
  name:{
      position:'relative',
      top:'-40px',
      marginLeft:'55px'
  },
  country:{
      position:'relative',
      top:'-40px',
      marginLeft:'55px',
      color: '#E5C558'

  },
  content:{
      marginTop:'-1.3rem',
  },
  gridParent:{
    margin:'-20px'
  }
}))
const UsableCard = () => {
    const classes = useStyles()
    const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing."
    return (
        <div>
             <Grid className={classes.gridparent} container spacing={4}>
                <Grid className={classes.grid} item sm={3}>
            <Card className={classes.root1}>
            <CardMedia className={classes.image} image="images/customer1.png" />
            <CardContent>
              <Typography className={classes.name} variant="h5">
                Hellen Jummy
              </Typography>
              <Typography className={classes.country} variant="subtitle1">
                Palo Alto, CA
              </Typography>
              <Typography className={classes.content} variant="subtitle1">{content}</Typography>
            </CardContent>
          </Card>
          </Grid>
          </Grid>
        </div>
    )
}

export default UsableCard
