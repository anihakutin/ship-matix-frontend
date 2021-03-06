import React, { Component } from 'react';
import { Main, Grid, Box, Heading } from 'grommet';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import { authedUser } from 'components/authActions.js';
import Order from './components/Order.js';

class OrderContainer extends Component{
    componentDidMount() {
        this.props.authedUser()
    }

    render() {
        if (!this.props.loggedIn) {
            return <Redirect to="/users/login" />
        }
        return(
            <Main>
                <Box pad="medium" alignSelf="center">
                    <Grid
                        areas={[
                            { name: 'section-1', start: [0, 0], end: [0, 0] },
                            { name: 'section-2', start: [1, 0], end: [1, 0] },
                            { name: 'section-3', start: [2, 0], end: [2, 0] }
                        ]}
                        columns={['medium', 'medium', 'medium']}
                        rows={['auto']}
                        gap="small"
                    >
                        <Box
                        gridArea="section-1"
                        alignSelf="start"
                        background="light-1"
                        pad="medium"
                        round="xsmall"
                        overflow="vertical"
                        >
                            <Heading level="3">Unprocessed</Heading>
                            <Order />
                            <Order />
                            <Order />
                            <Order />
                            <Order />
                            <Order />
                            <Order />
                        </Box>
                        <Box
                            gridArea="section-2"
                            alignSelf="start"
                            background="light-1"
                            pad="medium"
                            round="xsmall"
                            overflow="vertical"
                        >
                            <Heading level="3">Processed</Heading>
                            <Order />
                            <Order />
                            <Order />
                        </Box>
                        <Box
                            gridArea="section-3"
                            alignSelf="start"
                            background="light-1"
                            pad="medium"
                            round="xsmall"
                            overflow="vertical"
                        >
                            <Heading level="3">Printed</Heading>
                            <Order />
                            <Order />
                        </Box>
                    </Grid>
                </Box>
            </Main>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.currentUser,
        loggedIn: state.auth.loggedIn,
        orders: state.auth.currentUser.orders
    }
}

const mapDispatch = dispatch => {
    return {
        authedUser: () => { dispatch(authedUser()) }
    }
}

export default connect(mapStateToProps, mapDispatch)(OrderContainer);
