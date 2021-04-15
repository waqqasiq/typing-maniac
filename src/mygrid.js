import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import {Link, withRouter} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import withStyles from "@material-ui/core/styles/withStyles";
import compose from 'recompose/compose'
import PropTypes from "prop-types";
//import Appbar from "./appbar";
import Paper from "@material-ui/core/Paper";
//import SweetAlert from 'sweetalert2-react'
import Badge from '@material-ui/core/Badge';
import words from './wordlist';
import Easy from './wordlist_easy';
import Medium from './wordlist_medium';
import Hard from './wordlist_hard';



const useStyles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#115173',
        height: window.innerHeight,

    },
    paper: {
        padding: theme.spacing(3),
        textAlign: 'center',
        color: 'whitesmoke',
        backgroundColor: '#022C43',
        height: '107%'

    },
    mygridclass: {
        marginTop:  theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    //myword is for mobile site with less than equal 414 width
    myword:{
        marginTop:  theme.spacing(3),
        marginBottom: theme.spacing(2),
        fontSize: '50px'
    },
    enter: {
        textAlign: 'left',
        marginLeft: theme.spacing(1),
        marginBottom: theme.spacing(5),
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
    score: {
        textAlign: 'center',
        fontWeight: 'bold'
    },
    mybadge:{
        marginLeft:theme.spacing(2),
        marginBottom: theme.spacing(5)
    },
    link:{
        color: 'grey',
        textDecoration: 'none'
    },
    copyright:{
        fontSize: '12px',
        color: "grey",
        marginTop: theme.spacing(16)
    },
    difficulty: {
        marginTop: theme.spacing(1),
        color: 'dimgrey'
    }
});

let wordList = words;
//console.log('wordlist: ',wordList);

class Mygrid extends React.Component {
    constructor(props){
        super(props);
        let difficultymode = this.props.difficultymode;
        console.log('props  username', this.props.username)
        let username = this.props.username;

        if(difficultymode==='Easy'){
            wordList = Easy;
        }else if(difficultymode==='Medium'){
            wordList = Medium;
        }else if(difficultymode==='Hard'){
            wordList = Hard;

        }
        //console.log('my grid difficulty: ', difficultymode)
        this.state= {
            status: 'Game On!',
            currentTimer: 5,
            currentWord: 'Dyslexia',
            word_list: wordList,
            countClicked: 0,
            mytext: '',
            buttonDisabled: false,
            textfieldDisabled: false,
            show: true,
            alertTitle: 'START',
            alertText: 'Hone your typing skills!',
            buttonText: 'START',
            score: 0,
            currentWordFixedTime: 5,
            difficultymode: difficultymode,
            username: username
            // self = this;
            //this.handleClick = this.handleClick.bind(this)
            //this.routeTo = this.routeTo.bind(this)
        }
    }


    componentDidMount() {

        this.setState({
            word_list: wordList,
             score: 0,
        });
        //console.log(this.state.word_list);
        console.log('this.state.username ', this.state.username);

        this.myTextField.focus();


        // if(this.state.countClicked === this.state.word_list.length){
        //     alert("We ran out of words to challenge you with");
        //     this.setState({
        //         textfieldDisabled: true
        //     })
        // }else{
            let ind = Math.floor(Math.random() * Math.floor(this.state.word_list.length));
            //console.log("ind: ", ind);

            let wordlist = this.state.word_list;


            while(this.state.currentWord === wordList[ind].word ){
                ind = Math.floor(Math.random() * Math.floor(this.state.word_list.length));
            }
            //wordlist[ind].occur = true;

            this.setState({
                currentWord: wordList[ind].word,
                currentTimer: wordList[ind].time,
                currentWordFixedTime: wordlist[ind].time,
                word_list: wordlist,
                timer: wordList[ind].time
            })




// Update the count down every 1 second


        this.handleTimer()

            this.setState(prevState=>{
                return { countClicked: prevState.countClicked+1 }
            })

    }

    handleTimer(){
        clearInterval(this.Interval)
        this.Interval=setInterval(() => {
            let timer=this.state.timer;
            if(timer > 0){
                this.setState({
                    timer: this.state.timer - 1,
                    currentTimer: timer
                })
            }
            else{
                clearInterval(this.Interval);
                this.props.history.push({pathname:'/gameover', state:{message:'timeup', myscore: this.state.score, difficultymode: this.state.difficultymode, username: this.state.username}});
            }
        },1000)}





    handleButton=()=>{

        if(this.state.buttonText==='START'){
            this.setState({
                buttonText: 'STOP',
                textfieldDisabled: false
            })
        }else if(this.state.buttonText==='STOP'){
            this.setState({
                buttonText: 'START',
                textfieldDisabled: true
            })
        }


        this.setState({
            mytext: '',
            // buttonDisabled: true,
            //buttonText: 'STOP',
            textfieldDisabled: false,
        })
        this.myTextField.focus();

        // if(this.state.countClicked === this.state.word_list.length){
        //     alert("We ran out of words to challenge you with");
        //     this.setState({
        //         textfieldDisabled: true
        //     })
        // }else{
            let ind = Math.floor(Math.random() * Math.floor(this.state.word_list.length));
            //console.log("ind: ", ind);

            let wordlist = this.state.word_list;


            while(this.state.currentWord === wordList[ind].word ){
                ind = Math.floor(Math.random() * Math.floor(this.state.word_list.length));
            }
            //wordlist[ind].occur = true;

            this.setState({
                currentWord: wordList[ind].word,
                currentTimer: wordList[ind].time,
                word_list: wordlist,

            })

            this.setState(prevState=>{
                return { countClicked: prevState.countClicked+1 }
            })
       // }

    }

    handleTextFieldChange=(event)=>{

        let currenttimer = this.state.currentTimer;

        let gameover = false;


        if(gameover){
            this.props.history.push({pathname:'/gameover', state:{message:'wrong', myscore: this.state.score,  difficultymode: this.state.difficultymode, username: this.state.username}})
        }

        this.setState({
            [event.target.name]: event.target.value,
            status: 'Game On!',
        })

    }


    matchText(){
        if(this.state.mytext!==''){
            this.setState(prevState=>{
                return { countClicked: prevState.countClicked+1 }
            })
        }
        if(this.state.currentWord.toLowerCase()===this.state.mytext.toLowerCase()){
            let presentscore = this.state.score;
            this.setState({
                status: 'Correct!',
                mytext: '',
                score: presentscore+Math.floor(this.state.currentTimer/2),

            })
        }else{
            this.props.history.push({pathname:'/gameover', state:{message: 'wrong', myscore: this.state.score,  difficultymode: this.state.difficultymode, username: this.state.username}})
            this.setState({
                status: 'Wrong!!!',
                mytext: '',
                alertTitle: 'GAME OVER',
                alertText: 'Click OK to Play Again',
                show: true,
                textfieldDisabled: true,
                buttonText: 'START',
                buttonDisabled: false,

            });
            //alert("GAME OVER")
        }

        this.setState({
            mytext: ''
        })


        let ind = Math.floor(Math.random() * Math.floor(this.state.word_list.length));
        //console.log("ind: ", ind);

        let wordlist = this.state.word_list;


        while(this.state.currentWord === wordList[ind].word){
            ind = Math.floor(Math.random() * Math.floor(this.state.word_list.length));
        }
        //wordlist[ind].occur = true;

        this.setState({
            currentWord: wordList[ind].word,
            currentTimer: wordList[ind].time,
            word_list: wordlist,
            currentWordFixedTime: wordList[ind].time,
            timer: wordList[ind].time

        })

    }


    render() {
        const {classes} = this.props;

            if(window.innerWidth<=414){
                return(
                    <React.Fragment>

                        <div className={classes.root}>


                            <Grid container spacing={0}>

                                <Grid item xs={12} sm={3}>
                                    {/*<Paper className={classes.paper}>xs=12 sm=3</Paper>*/}
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <Paper className={classes.paper} elevation={10}>




                                        <Typography className={classes.mygridclass} variant={"body1"} >Type the following word in the given time</Typography>
                                        <Typography className={classes.difficulty} variant={"body2"} >{'Difficulty: '+this.state.difficultymode}</Typography>


                                        <Typography id="mytimer" className={classes.timer} variant={"h4"}>{this.state.currentTimer} s</Typography>


                                        <Typography className={classes.myword} variant={"h2"} >{this.state.currentWord}<Badge className={classes.mybadge} color={"secondary"} badgeContent={Math.floor(this.state.currentTimer/2)}/></Typography>
                                        {/*<Myinput/>*/}
                                        <TextField
                                            id="outlined-basic"
                                            variant="outlined"
                                            name="mytext"
                                            value={this.state.mytext}
                                            onChange={this.handleTextFieldChange}
                                            style={{backgroundColor: "whitesmoke"}}
                                            placeholder="Start Typing..."
                                            // helperText="Full width!"
                                            fullWidth
                                            margin="normal"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            inputRef={(el)=>{this.myTextField = el}}
                                            disabled={this.state.textfieldDisabled}
                                            onKeyPress={(ev) => {
                                                //console.log(`Pressed keyCode ${ev.key}`);
                                                if (ev.key === 'Enter') {
                                                    // Do code here
                                                    //console.log("enter pressed");
                                                    this.matchText();
                                                    ev.preventDefault();
                                                }
                                            }}

                                        />

                                        <Typography className={classes.enter}  >Hit "Enter" or "Return"</Typography>

                                        <Typography className={classes.statusmessage} variant={"h5"} >{this.state.status}</Typography>

                                        <Typography className={classes.score} variant={"h4"}>{"Score: "+this.state.score}</Typography>


                                        <Typography className={classes.copyright} align="center">
                                            {'Copyright © '}

                                            <a className={classes.link} href={"https://whoiswaqqas.netlify.com/"} target={"__blank"} > TYPIMG MANIAC | WAQQAS IQBAL</a>

                                            {' '}
                                            {/*<Link className={classes.link} href="https://whoiswaqqas.netlify.com/">*/}
                                            {/*    TYPIMG MANIAC | WAQQAS IQBAL*/}

                                            {/*</Link>{' '}*/}

                                            {new Date().getFullYear()}
                                            {'.'}
                                        </Typography>

                                        {/*<Button variant="contained" onClick={this.handleRestart}><Typography variant={"h5"}> RESTART</Typography></Button>*/}
                                        {/*<Button disabled={this.state.buttonDisabled} variant="contained" onClick={this.handleButton}><Typography variant={"h5"}> {this.state.buttonText}</Typography></Button>*/}

                                    </Paper>
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    {/*<Paper className={classes.paper}>xs=12 sm=3</Paper>*/}
                                </Grid>

                            </Grid>


                        </div>
                    </React.Fragment>)


            }else{
                return (
                    <React.Fragment>
                    <div className={classes.root}>

                        <Grid container spacing={0}>

                            <Grid item xs={12} sm={3}>
                                {/*<Paper className={classes.paper}>xs=12 sm=3</Paper>*/}
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Paper className={classes.paper} elevation={10}>

                                    <Typography className={classes.mygridclass}  variant={"h6"}>Type the following word in the given time</Typography>
                                    <Typography className={classes.difficulty} variant={"body2"} >{'Difficulty: '+this.state.difficultymode}</Typography>


                                    <Typography id="mytimer" className={classes.timer} variant={"h3"}>{this.state.currentTimer} s</Typography>


                                    <Typography className={classes.mygridclass} variant={"h2"} >{this.state.currentWord}<Badge className={classes.mybadge} color={"secondary"} badgeContent={Math.floor(this.state.currentTimer/2)}/></Typography>
                                    {/*<Myinput/>*/}
                                    <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        name="mytext"
                                        value={this.state.mytext}
                                        onChange={this.handleTextFieldChange}
                                        style={{backgroundColor: "whitesmoke"}}
                                        placeholder="Start Typing..."
                                        // helperText="Full width!"
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        inputRef={(el)=>{this.myTextField = el}}
                                        disabled={this.state.textfieldDisabled}
                                        onKeyPress={(ev) => {
                                            //console.log(`Pressed keyCode ${ev.key}`);
                                            if (ev.key === 'Enter') {
                                                // Do code here
                                                //console.log("enter pressed");
                                                this.matchText();
                                                ev.preventDefault();
                                            }
                                        }}

                                    />

                                    <Typography className={classes.enter}  >Hit "Enter" or "Return"</Typography>

                                    <Typography className={classes.statusmessage} variant={"h5"} >{this.state.status}</Typography>

                                    <Typography className={classes.score} variant={"h3"}>{"Score: "+this.state.score}</Typography>


                                    <Typography className={classes.copyright} align="center">
                                        {'Copyright © '}

                                        <a className={classes.link} href={"https://whoiswaqqas.netlify.com/"} target={"__blank"} > TYPING MANIAC | WAQQAS IQBAL</a>

                                        {' '}
                                        {/*<Link className={classes.link} href="https://whoiswaqqas.netlify.com/">*/}
                                        {/*    TYPIMG MANIAC | WAQQAS IQBAL*/}

                                        {/*</Link>{' '}*/}

                                        {new Date().getFullYear()}
                                        {'.'}
                                    </Typography>
                                    {/*<Button variant="contained" onClick={this.handleRestart}><Typography variant={"h5"}> RESTART</Typography></Button>*/}
                                    {/*<Button disabled={this.state.buttonDisabled} variant="contained" onClick={this.handleButton}><Typography variant={"h5"}> {this.state.buttonText}</Typography></Button>*/}

                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                {/*<Paper className={classes.paper}>xs=12 sm=3</Paper>*/}
                            </Grid>

                        </Grid>


                    </div>
                </React.Fragment>)
            }

    }
}
Mygrid.propTypes ={
    classes: PropTypes.object.isRequired
}


export default compose(withRouter, withStyles(useStyles))(Mygrid);
