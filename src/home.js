import React from 'react';
import {Link, withRouter} from 'react-router-dom';

import withStyles from "@material-ui/core/styles/withStyles";
import compose from 'recompose/compose'
import PropTypes from "prop-types";
import Appbar from "./appbar";
import MyGrid from "./mygrid";


const useStyles = theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});

class Home extends React.Component {
    constructor(props){
        super(props);
        let difficultmode = this.props.location.state.difficultymode;
        let username = this.props.location.state.username;
        //console.log('home difficulty: ',difficultmode);
        this.state={
            data:[],
            errorAlert: false,
            difficultmode: difficultmode,
            username: username
        }

    }
    componentDidMount() {

    }

    render() {
        const {classes} = this.props;
        //console.log(this.state.data)
        return (
            <React.Fragment>

                <Appbar/>
                <MyGrid difficultymode={this.state.difficultmode} username={this.state.username}/>

            </React.Fragment>
        );
    }
}
Home.propTypes ={
    classes: PropTypes.object.isRequired
}


export default compose(withRouter, withStyles(useStyles))(Home);
