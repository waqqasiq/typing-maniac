import React from 'react';
import Button from '@material-ui/core/Button';
import {Link, withRouter} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from "@material-ui/core/styles/withStyles";
import compose from 'recompose/compose'
import PropTypes from "prop-types";
import Appbar from "./appbar";
import Paper from "@material-ui/core/Paper";
import { TextField } from '@material-ui/core';
//import SweetAlert from 'sweetalert2-react'


const useStyles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#115173',
        height: window.innerHeight,
    },
    paper: {
        margin: '4%',
        padding: theme.spacing(3),
        minHeight:'90%',
        textAlign: 'center',
        color: 'whitesmoke',
        backgroundColor: '#022C43',
    },
    mygridclass: {
        marginTop:  theme.spacing(4),
        marginBottom: theme.spacing(2)
    },
    mymessage:{
        marginTop:  theme.spacing(3),
        marginBottom: theme.spacing(3)
    },


    enter: {
        textAlign: 'center',
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(1),
        fontStyle: 'italic',
        fontSize: '14sp'
    },
    statusmessage: {
        marginBottom: theme.spacing(5),
        marginTop: theme.spacing(1)
    },
    timer: {
        textAlign: 'right',
        fontWeight: 'bold'
    },
    SCORE: {
        textAlign: 'left',
        fontWeight: 'bold'
    },
    difficultymode: {
        marginTop: theme.spacing(2),
        position: 'relative',
    },

});


let bot_message = '';
let bot_token = '1127562494:AAGC1hC7KfVyISKisL91ZOFRfgpXeYvaCG4'
let bot_chatID = '710526388';
let textsent= false;

class Start extends React.Component {

    constructor(props){
        super(props);
        let messageToShow= '';

        this.state= {
            status: 'Game On!',
            currentTimer: 5,
            currentWord: 'Dyslexia',
            countClicked: 0,
            mytext: '',
            buttonDisabled: false,
            textfieldDisabled: false,
            show: true,
            alertTitle: 'START',
            alertText: 'Hone your typing skills!',
            buttonText: 'START',
            message: messageToShow,
            messageSize: 'h6',
            buttoncolor: 'default',
            username: ''
        }
    }
    componentDidMount() {
        if(window.innerWidth<=414){
            this.setState({
                messageSize: 'body1'
            })
        }

    }

    handleButton=(e)=>{
        //
        //console.log(e)
        //this.telegram_bot_sendtext(e)
        console.log('handleButton state username ', this.state.username);
        this.props.history.push({pathname:'/play', state:{difficultymode: e, username: this.state.username}});

    }

    telegram_bot_sendtext(e) {

        bot_message = 'Someone just started playing your game in "' + e + '" difficulty mode'+ '\n\n';
        bot_message = bot_message + window.navigator.appVersion + '\n';
        // #bot_chatID2 = '732678988'
        // #bot_chatID3 = '823711407'
        let send_text = 'https://api.telegram.org/bot' + bot_token + '/sendMessage?chat_id=' + bot_chatID + '&parse_mode=Markdown&text=' + bot_message
        // #send_text2 = 'https://api.telegram.org/bot' + bot_token + '/sendMessage?chat_id=' + bot_chatID2 + '&parse_mode=Markdown&text=' + bot_message
        // #send_text3 = 'https://api.telegram.org/bot' + bot_token + '/sendMessage?chat_id=' + bot_chatID3 + '&parse_mode=Markdown&text=' + bot_message
        let requests = require('request')
        let response = requests.get(send_text)
        //console.log('textsent')

        return response.json();

    }
    handleNameChange = (e) => {
        console.log('e value ', e.target.value);
        console.log('e name ', e.target.name);
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        const {classes} = this.props;

        return (
            <React.Fragment>
            

                <div className={classes.root}>
                    <Appbar/>


                    <Grid container spacing={0} >

                        <Grid item xs={12} sm={3}>
                            {/*<Paper className={classes.paper}>xs=12 sm=3</Paper>*/}
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Paper className={classes.paper} elevation={10}>

                                {/*<Typography className={classes.timer} variant={"h3"}>{this.state.currentTimer} s</Typography>*/}


                                <Typography className={classes.mygridclass} variant={"h2"} >{"START GAME"}</Typography>


                                <Typography className={classes.mymessage} variant={this.state.messageSize} >{"Let's see how good you are at typing"}</Typography>
                                
                                <div >
                                    <input onChange={this.handleNameChange} value={this.state.username} placeholder="Enter your name" name="username" style={{color:'white', border:'1px solid #FFF', backgroundColor:'inherit', width:'150', height:'50px', textAlign:'center', fontSize:'18px', borderRadius:'5px'}}/>
                                </div>

                                {/*<Myinput/>*/}

                                {/*<Typography className={classes.enter}  >Hit "Enter"</Typography>*/}

                                {/*<Typography className={classes.statusmessage} variant={"h5"} >{this.state.status}</Typography>*/}
                                {/*<Button variant="contained" onClick={this.handleRestart}><Typography variant={"h5"}> RESTART</Typography></Button>*/}
                                <div className={classes.difficultymode}>
                                    <Button color={this.state.buttoncoloreasy} disabled={this.state.buttonDisabled} variant="contained" onClick={(e)=>this.handleButton('Easy')}><Typography variant={"h5"}> {"EASY"}</Typography></Button>
                                </div>
                                <div className={classes.difficultymode}>
                                    <Button color={this.state.buttoncolor} disabled={this.state.buttonDisabled} variant="contained" onClick={(e)=>this.handleButton('Medium')}><Typography variant={"h5"}> {"MEDIUM"}</Typography></Button>
                                </div>
                                <div className={classes.difficultymode}>
                                    <Button color={this.state.buttoncolor} disabled={this.state.buttonDisabled} variant="contained" onClick={(e)=>this.handleButton('Hard')}><Typography variant={"h5"}> {"HARD"}</Typography></Button>
                                </div>

                                <Typography className={classes.enter}  >Select difficulty mode</Typography>

                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            {/*<Paper className={classes.paper}>xs=12 sm=3</Paper>*/}
                        </Grid>

                    </Grid>

                </div>
            </React.Fragment>
        );
    }
}
Start.propTypes ={
    classes: PropTypes.object.isRequired
}

export default compose(withRouter, withStyles(useStyles))(Start);
