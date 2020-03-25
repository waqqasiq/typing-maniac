import React from 'react';
import Button from '@material-ui/core/Button';
import {Link, withRouter} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import withStyles from "@material-ui/core/styles/withStyles";
import compose from 'recompose/compose'
import PropTypes from "prop-types";
import Appbar from "./appbar";
import Paper from "@material-ui/core/Paper";
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
        marginTop:  theme.spacing(4),
        marginBottom: theme.spacing(6)
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

});


class Gameover extends React.Component {
    constructor(props){
        super(props);
        let msg = this.props.location.state.message;
        let score = this.props.location.state.myscore;
        //console.log('score: ', score)
        let messageToShow= '';

        if(msg==='timeup'){
            messageToShow = "Time Up. Seems like you are too slow at typing.";
        }else if(msg==='wrong'){
            messageToShow = "You typed in a wrong word";
        }
        //console.log("msg: ", msg);

        this.state= {
            mytext: '',
            show: true,
            buttonText: 'START',
            message: messageToShow,
            myscore: score,
            thumbupcolor: 'inherit',
            thumbdowncolor: 'inherit',
            feedback: 'Leave your feedback',
            likdislikebuttonclicked: false,
        }
    }
    componentDidMount() {


    }


    handleButton=()=>{
        this.props.history.push('/play');
    }


    handleThumbClick(e){
        //console.log("e target val "+ e);
        if(!this.state.likdislikebuttonclicked) {

            if (e === 'thumbup') {
                this.setState({
                    thumbupcolor: 'secondary',
                    thumbdowncolor: 'inherit',
                    likdislikebuttonclicked: true
                })
            } else {
                this.setState({
                    thumbdowncolor: 'secondary',
                    thumbupcolor: 'inherit',
                    likdislikebuttonclicked: true
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

                                <Typography className={classes.mygridclass} variant={"h2"} >{"GAME OVER"}</Typography>

                                <Typography className={classes.mymessage} variant={"h6"} >{this.state.message}</Typography>

                                <Typography className={classes.mymessage} variant={"h4"} >{"Your Score: "+this.state.myscore}</Typography>
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
