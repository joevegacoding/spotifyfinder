import React from 'react'
import { Grid, Link, Typography } from "@material-ui/core";
import useStyles from "./styles.js";
import SpotifyLeftLogo from "../assets/spotifyleftlogo.png"
import SpotifyOnlyLogo from "../assets/whitelogoonly.png"
// var client_id = 'CLIENT_ID';
// var redirect_uri = 'http://localhost:8888/callback';

// var app = express();

// app.get('/login', function(req, res) {

//   var state = generateRandomString(16);
//   var scope = 'user-read-private user-read-email';

//   res.redirect('https://accounts.spotify.com/authorize?' +
//     querystring.stringify({
//       response_type: 'code',
//       client_id: client_id,
//       scope: scope,
//       redirect_uri: redirect_uri,
//       state: state
//     }));
// });

const authURL = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;

const Login = () => {
  const classes = useStyles();
  return (
<Grid className={classes.container} container>
<Grid style={{backgroundColor: "#000"}} xs={12} sm={12} md={6} lg={6}>
  <Grid className={classes.messageContainer} >

  
    <Typography variant="h3"  className={classes.mainMessage}>What are you in the mood to listen today?</Typography>
    </Grid>
    <Grid className={classes.leftLogoContainer}>
      <img src={SpotifyLeftLogo} alt="main-logo"/>

    </Grid>

</Grid>
<Grid className={classes.rightContainer} style={{backgroundColor: "#1F2226"}} xs={12} sm={12} md={6} lg={6}>
  <a href={authURL} className={classes.buttonContainer}>
  <img className={classes.loginButtonImage} src={SpotifyOnlyLogo}/>
  <Typography className={classes.loginText}> Login With Spotify</Typography>
  </a>

</Grid>
</Grid>
  )
}

export default Login