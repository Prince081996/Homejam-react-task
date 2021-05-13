// import React,{useState} from 'react'
// import { Container, Grid, Typography, Card, CardContent, CardMedia,} from '@material-ui/core'
// import {makeStyles} from '@material-ui/core/styles'
// import './styles/Reviews.css'
// import Carousel from 'react-bootstrap/Carousel'

// const useStyles =  makeStyles((theme) => ({
//     root:{
//         height:'100vh',
//         display:'flex',
//         width:'70%',
//         position:'relative',
//         right:'11%'
//         // background: 'linear-gradient(to right bottom, #276C73 5.43%, #5293E8 110.6%)',
//         // background:'#0A0B1A',
//         // backgroundColor:'gray',
//         // boxShadow: '0px -10px 10px -10px green'
//     },
//     root1:{
//         background: '#111229',
//         color:'#ffffff',
//         border:'3px solid #E5C558',
//         // position: 'absolute';
//         // left: 2.17%;
//         // right: 0%;
//         // top:'0%'
//         // bottom: '3.12%',
//         borderRadius: '16px',
//         boxShadow: '10px -10px #276C73',
//         width:'350px',
//         height:'232px',
//         position:'relative',
//         left:'24%',
//         marginTop:'1rem'
//     },
//     image:{
//         height:'50px',
//         width:'50px',
//         position:'relative',
//         top:'27px',
//         left:'10px',
//     },
//     name:{
//         position:'relative',
//         top:'-40px',
//         marginLeft:'55px'
//     },
//     country:{
//         position:'relative',
//         top:'-40px',
//         marginLeft:'55px',
//         color: '#E5C558'

//     },
//     content:{
//         marginTop:'-20px',
//         lineHeight:'0',
//     }
// }))

// function Reviews() {
//     const classes = useStyles()
//     const [index, setIndex] = useState(0);
//     const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing."
//     const handleSelect = (selectedIndex, e) => {
//         setIndex(selectedIndex);
//       };
    
//     return (
//         <div className="reviewCardMainWrapper">
//             {/* <h2 className="reviews">Reviews</h2>
//             <div className="container">
//             <Container className={classes.root}> */}
//                 {/* <Grid container spacing={4}>
//                     <Grid item sm={3}> */}
//                     {/* <div className="multi-carousel">
//                     <div className="multi-carousel-inner">
//                         <div className="multi-carousel-item"> */}
//                           <Carousel style={{display:'flex'}} activeIndex={index} onSelect={handleSelect}>
//                             <Carousel.Item style={{display:'flex'}} interval={100000}>
//                             {/* <Grid container spacing={4}>
//                                 <Grid item sm={3}> */}
//                                 <Card className={classes.root1}>
//                                 <CardMedia className={classes.image} image= "images/customer1.png"/>
//                                 <CardContent>
//                                     <Typography className={classes.name} variant="h5">Hellen Jummy</Typography>
//                                     <Typography className={classes.country} variant="subtitle1">Palo Alto, CA</Typography>
//                                     <Typography variant="subtitle1">{content}</Typography>
//                                 </CardContent>
//                                 </Card>
//                                 {/* </Grid>
//                             </Grid> */}
//                             {/* <Grid container spacing={4}>
//                                 <Grid item sm={3}> */}
//                                 <Card className={classes.root1}>
//                                 <CardMedia className={classes.image} image= "images/customer1.png"/>
//                                 <CardContent>
//                                     <Typography className={classes.name} variant="h5">Hellen Jummy</Typography>
//                                     <Typography className={classes.country} variant="subtitle1">Palo Alto, CA</Typography>
//                                     <Typography variant="subtitle1">{content}</Typography>
//                                 </CardContent>
//                                 </Card>
//                                 {/* </Grid>
//                             </Grid> */}
//                             {/* <Grid container spacing={4}>
//                                 <Grid item sm={3}> */}
//                                 <Card className={classes.root1}>
//                                 <CardMedia className={classes.image} image= "images/customer1.png"/>
//                                 <CardContent>
//                                     <Typography className={classes.name} variant="h5">Hellen Jummy</Typography>
//                                     <Typography className={classes.country} variant="subtitle1">Palo Alto, CA</Typography>
//                                     <Typography variant="subtitle1">{content}</Typography>
//                                 </CardContent>
//                                 </Card>
//                                 {/* </Grid>
//                             </Grid> */}
//                             </Carousel.Item>

//                             <Carousel.Item style={{display:'flex'}} interval={false}>
//                             {/* <Grid container spacing={4}>
//                                 <Grid item sm={3}> */}
//                                 <Card className={classes.root1}>
//                                 <CardMedia className={classes.image} image= "images/customer1.png"/>
//                                 <CardContent>
//                                     <Typography className={classes.name} variant="h5">Hellen Jummy</Typography>
//                                     <Typography className={classes.country} variant="subtitle1">Palo Alto, CA</Typography>
//                                     <Typography variant="subtitle1">{content}</Typography>
//                                 </CardContent>
//                                 </Card>
//                                 {/* </Grid>
//                             </Grid> */}
//                             {/* <Grid container spacing={4}>
//                                 <Grid item sm={3}> */}
//                                 <Card className={classes.root1}>
//                                 <CardMedia className={classes.image} image= "images/customer1.png"/>
//                                 <CardContent>
//                                     <Typography className={classes.name} variant="h5">Hellen Jummy</Typography>
//                                     <Typography className={classes.country} variant="subtitle1">Palo Alto, CA</Typography>
//                                     <Typography variant="subtitle1">{content}</Typography>
//                                 </CardContent>
//                                 </Card>
//                                 {/* </Grid>
//                             </Grid> */}
//                             {/* <Grid container spacing={4}>
//                                 <Grid item sm={3}> */}
//                                 <Card className={classes.root1}>
//                                 <CardMedia className={classes.image} image= "images/customer1.png"/>
//                                 <CardContent>
//                                     <Typography className={classes.name} variant="h5">Hellen Jummy</Typography>
//                                     <Typography className={classes.country} variant="subtitle1">Palo Alto, CA</Typography>
//                                     <Typography variant="subtitle1">{content}</Typography>
//                                 </CardContent>
//                                 </Card>
//                                 {/* </Grid>
//                             </Grid> */}
//                             </Carousel.Item>
//                             {/* <Carousel.Item>
//                             <Grid container spacing={4}>
//                                 <Grid item sm={3}>
//                                 <Card className={classes.root1}>
//                                 <CardMedia className={classes.image} image= "images/customer1.png"/>
//                                 <CardContent>
//                                     <Typography className={classes.name} variant="h5">Hellen Jummy</Typography>
//                                     <Typography className={classes.country} variant="subtitle1">Palo Alto, CA</Typography>
//                                     <Typography variant="subtitle1">{content}</Typography>
//                                 </CardContent>
//                                 </Card>
//                                 </Grid>
//                             </Grid>
//                             </Carousel.Item>
//                             <Carousel.Item>
//                             <Grid container spacing={4}>
//                                 <Grid item sm={3}>
//                                 <Card className={classes.root1}>
//                                 <CardMedia className={classes.image} image= "images/customer1.png"/>
//                                 <CardContent>
//                                     <Typography className={classes.name} variant="h5">Hellen Jummy</Typography>
//                                     <Typography className={classes.country} variant="subtitle1">Palo Alto, CA</Typography>
//                                     <Typography variant="subtitle1">{content}</Typography>
//                                 </CardContent>
//                                 </Card>
//                                 </Grid>
//                             </Grid>
//                             </Carousel.Item> */}
//                         </Carousel>
//                         {/* </Container> */}
//                         // </div>
//                         // </div>
//     )
// }

// export default Reviews
