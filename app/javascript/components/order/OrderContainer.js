import React, { Component } from 'react';
import { Main, Grid, Box, Heading } from 'grommet';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

class OrderContainer extends Component{
    render() {
        if (!this.props.loggedIn) {
            return <Redirect to="/users/login" />
        }
        return(
            <Main>
                <Box pad="medium">
                    <Grid
                        areas={[
                            { name: 'section-1', start: [0, 0], end: [0, 0] },
                            { name: 'section-2', start: [1, 0], end: [1, 0] },
                            { name: 'section-3', start: [2, 0], end: [2, 0] }
                        ]}
                        columns={['small']}
                        rows={['auto']}
                        gap="small"
                    >
                        <Box
                        gridArea="section-1"
                        alignSelf="start"
                        background="light-1"
                        pad="medium"
                        >
                            <Heading level="3">Unprocessed</Heading>
                        </Box>
                        <Box
                            gridArea="section-2"
                            alignSelf="start"
                            background="light-1"
                            pad="medium"
                        >
                            <Heading level="3">Processed</Heading>
                        </Box>
                        <Box
                            gridArea="section-3"
                            alignSelf="start"
                            background="light-1"
                            pad="medium"
                        >
                            <Heading level="3">Printed</Heading>
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

export default connect(mapStateToProps)(OrderContainer);
