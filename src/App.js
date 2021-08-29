import logo from "./logo.svg";
import "./App.css";
import { Save, Delete, Menu } from "@material-ui/icons";
import {
  Checkbox,
  FormControlLabel,
  Button,
  ButtonGroup,
  TextField,
  makeStyles,
  ThemeProvider,
  createTheme,
  Typography,
  Container,
  Paper,
  Grid,
  AppBar,
  Toolbar,
  IconButton,
} from "@material-ui/core";
import { green, orange } from "@material-ui/core/colors";
import { useState } from "react";
import "fontsource-roboto";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #fe6bbb, #ff8e53)",
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
    color: "white",
    padding: "15px 30px",
  },
});

const theme = createTheme({
  typography: {
    h2: {
      fontSize: 36,
    },
  },
  palette: {
    /* primary: {
      main: orange[500],
    },
    secondary: {
      main: green[400],
    }, */
  },
});

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Buttons</Button>;
}

function CheckBoxExample() {
  const [checked, setChecked] = useState(false);

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          icon={<Save />}
          checkedIcon={<Save />}
          inputProps={{
            "aria-label": "secondary checkbox",
          }}
        />
      }
      label="Testing Checkbox"
    />
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth={"xs"}>
        <div className="App">
          <header className="App-header">
            <AppBar>
              <Toolbar>
                <IconButton>
                  <Menu />
                </IconButton>
                <Typography variant={"h6"}>MUI Theming</Typography>
                <Button>Log In</Button>
              </Toolbar>
            </AppBar>
            <Typography variant="h2" component="div">
              Welcome to MUI
            </Typography>
            <Typography variant="subtitle1">
              Learn how to use material-ui
            </Typography>
            <ButtonStyled />
            <Grid container spacing={2} justify="center">
              <Grid item xs>
                <Paper style={{ height: 75, width: "100%" }} />
              </Grid>
              <Grid item xs>
                <Paper style={{ height: 75, width: "100%" }} />
              </Grid>
              <Grid item xs>
                <Paper style={{ height: 75, width: "100%" }} />
              </Grid>
            </Grid>
            {/* <TextField
              variant={"filled"}
              color={"secondary"}
              type={"email"}
              label={"Email"}
              placeholder={"test@test.com"}
            /> */}
            <CheckBoxExample />
            <img src={logo} className="App-logo" alt="logo" />
            <ButtonGroup>
              <Button
                variant={"contained"}
                color={"primary"}
                onClick={() => alert("hello")}
                startIcon={<Save />}
              >
                Save
              </Button>
              <Button
                variant={"contained"}
                color={"secondary"}
                onClick={() => alert("hello")}
                startIcon={<Delete />}
              >
                Discard
              </Button>
            </ButtonGroup>
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
