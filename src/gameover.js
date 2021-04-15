import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {Link, withRouter} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import withStyles from "@material-ui/core/styles/withStyles";
import compose from 'recompose/compose'
import PropTypes from "prop-types";
import Appbar from "./appbar";
import Paper from "@material-ui/core/Paper";
//import SweetAlert from 'sweetalert2-react'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';


const useStyles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#115173',
        height: window.innerHeight,

    },
    paper: {
        margin: '4%',
        height: '92%',
        padding: theme.spacing(3),
        textAlign: 'center',
        color: 'whitesmoke',
        backgroundColor: '#022C43',


    },
    mygridclass: {
        marginTop:  theme.spacing(4),
        marginBottom: theme.spacing(2)
    },
    mymessage:{
        marginTop:  theme.spacing(2),
        marginBottom: theme.spacing(1)
    },

    enter: {
        textAlign: 'center',
        margin: theme.spacing(1),
        fontStyle: 'italic',
        fontSize: '12sp'
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
    thumbButton: {
        marginTop: theme.spacing(2),
        marginRight: theme.spacing(3)
    },
    difficulty: {
        marginBottom: theme.spacing(4),
        color: 'dimgrey'
    },
    usernamestyle: {
        marginTop: theme.spacing(3),
    }

});


let bot_message = '';
let bot_token = '1127562494:AAGC1hC7KfVyISKisL91ZOFRfgpXeYvaCG4'
let bot_chatID = '710526388';

class Gameover extends React.Component {
    constructor(props){
        super(props);
        let msg = this.props.location.state.message;
        let score = this.props.location.state.myscore;
        let difficultymode = this.props.location.state.difficultymode;
        let username = this.props.location.state.username;
        console.log('username gameover ', username)
        if (username === '') {
            username = 'Guest'
        }
        //console.log('gameover: ', difficultymode)
        //console.log('score: ', score)
        let messageToShow= '';
        
        if(msg==='timeup'){
            messageToShow = "Seems like you are too slow at typing";
        }else if(msg==='wrong'){
            messageToShow = "You typed in a wrong word";
        }
        //console.log("msg: ", msg);

        this.state= {
            mytext: '',
            show: true,
            alertTitle: 'START',
            alertText: 'Hone your typing skills!',
            buttonText: 'START',
            message: messageToShow,
            myscore: score,
            thumbupcolor: 'inherit',
            thumbdowncolor: 'inherit',
            feedback: 'Leave your feedback',
            likedislikebuttonclicked: false,
            difficultymode: difficultymode,
            username: username
        }
    }
    componentDidMount() {

    }

    handleButton=()=>{
        this.props.history.push({pathname:'/play', state:{difficultymode: this.state.difficultymode, username: this.state.username}});

    }


    handleThumbClick(e){
        console.log("e target val "+ e);

        if(!this.state.likedislikebuttonclicked){
            this.telegram_bot_sendtext(e)
            if(e==='thumbup'){
                this.setState({
                    thumbupcolor: 'secondary',
                    thumbdowncolor: 'inherit',
                    likedislikebuttonclicked: true,
                })
            }else {
                this.setState({
                    thumbdowncolor: 'secondary',
                    thumbupcolor: 'inherit',
                    likedislikebuttonclicked: true,
                })
            }
            this.setState({
                feedback: 'Thank you for your feedback'
            })
        }else{
            this.setState({
                feedback: 'Your feedback is already submitted'
            })
        }
        //console.log("msg: "+msg)
    }

    telegram_bot_sendtext(msg) {
        if(msg==='thumbup'){
            bot_message = this.state.username + " just liked your game.\nShe/He scored "+this.state.myscore+".\nDifficulty selected - " + this.state.difficultymode +".\nMessage shown to them - "+this.state.message;
        }else{
            bot_message =  this.state.username + " just disliked your game.\nShe/He scored "+this.state.myscore + ".\nDifficulty selected - " + this.state.difficultymode +".\nMessage shown to them - "+this.state.message;
        }
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



    render() {
        const {classes} = this.props;

        return (
            <React.Fragment>
                <Appbar/>

                <div className={classes.root}>


                    <Grid container spacing={0} >

                        <Grid item xs={12} sm={3}>
                            {/*<Paper className={classes.paper}>xs=12 sm=3</Paper>*/}
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Paper className={classes.paper} elevation={10}>

                                {/*<Typography className={classes.timer} variant={"h3"}>{this.state.currentTimer} s</Typography>*/}


                                <Typography className={classes.mygridclass} variant={"h2"} >{"GAME OVER"}</Typography>
                                <Typography className={classes.usernamestyle} variant={"h6"} >{'Dear '+this.state.username}</Typography>
                                <Typography className={classes.mymessage} variant={"h6"} >{this.state.message}</Typography>

                                <Typography className={classes.mymessage} variant={"h4"} >{"Your Score: "+this.state.myscore}</Typography>

                                <Typography className={classes.difficulty} variant={"body2"} >{'Difficulty: '+this.state.difficultymode}</Typography>

                                {/*<Myinput/>*/}

                                {/*<Typography className={classes.enter}  >Hit "Enter"</Typography>*/}

                                {/*<Typography className={classes.statusmessage} variant={"h5"} >{this.state.status}</Typography>*/}
                                {/*<Button variant="contained" onClick={this.handleRestart}><Typography variant={"h5"}> RESTART</Typography></Button>*/}
                                <Button disabled={this.state.buttonDisabled} variant="contained" onClick={this.handleButton}><Typography variant={"h5"}> {"Play Again"}</Typography></Button>
                                <div >
                                    <br/>
                                     <ThumbUpIcon onClick={(e)=>this.handleThumbClick("thumbup")} className={classes.thumbButton} fontSize={"large"} color={this.state.thumbupcolor} />


                                <ThumbDownIcon onClick={(e)=>this.handleThumbClick("thumbdown")} fontSize={"large"} color={this.state.thumbdowncolor} />
                                </div>
                                <Typography className={classes.enter} variant={"body2"} >{this.state.feedback}</Typography>

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
Gameover.propTypes ={
    classes: PropTypes.object.isRequired
}


export default compose(withRouter, withStyles(useStyles))(Gameover);
