import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
 
  container: {
   height: "100vh"
  },
  messageContainer: {
    display: "flex",
    flexDirection: "column",
  height: "50%",
  justifyContent: "center",
    alignItems: "center",
    fontFamily: "Fredoka",
    
    
  },

  mainMessage: {
    fontFamily: "Fredoka",
    fontSize: "3rem",
    width: "80%",
    fontWeight: "700",

// marginBlock: "auto"
color: "white",
   
  },
  leftLogoContainer: {
display: "flex",
padding: "auto",

// marginLeft: "4rem",
justifyContent: "center",
alignItems: "center",
fontFamily: "Fredoka",
  },

  rightContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center", 
  },
  
  buttonContainer: {
    display: "flex",
    textDecoration: "none",
    backgroundColor: "#1ED760",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem",
  cursor: "pointer",
    color: "white",
    // transform: "0.5s ease-in-out",
   
    borderRadius: "0.8rem",
    "&:hover": {
      backgroundColor: "rgba(30, 215, 96, .9)",
      // transition: "0.5s ease-in-out"
    }

  
  },
  loginText: {
    fontFamily: "Fredoka",
    fontSize: "1.4rem",
  },

  loginButtonImage: {
    width: "50px",
    marginRight: "1rem",
    "& :hover": {
pointerEvents: "none"
    }

  }

  
}));
