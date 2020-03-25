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


const useStyles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#115173',
        height: window.innerHeight,

    },
    paper: {
        margin: '4%',
        height: '100%',
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
        textAlign: 'left',
        marginTop: theme.spacing(5),
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
    SCORE: {
        textAlign: 'left',
        fontWeight: 'bold'
    }
});


class Start extends React.Component {


    constructor(props){
        super(props);
        let messageToShow= '';

        this.state= {
            mytext: '',
            show: true,
            buttonText: 'START',
            message: messageToShow,
            messageSize: 'h6',
        }
    }
    componentDidMount() {
        if(window.innerWidth<=414){
            this.setState({
                messageSize: 'body1'
            })
        }
    }



    handleButton=()=>{
        this.props.history.push('/play');
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


                                <Typography className={classes.mygridclass} variant={"h2"} >{"START GAME"}</Typography>


                                <Typography className={classes.mymessage} variant={this.state.messageSize} >{"Let's see how good you are at typing"}</Typography>
                                {/*<Button variant="contained" onClick={this.handleRestart}><Typography variant={"h5"}> RESTART</Typography></Button>*/}
                                <Button disabled={this.state.buttonDisabled} variant="contained" onClick={this.handleButton}><Typography variant={"h5"}> {"Play"}</Typography></Button>

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
