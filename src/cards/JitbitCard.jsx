import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import LoginForm from '../components/LoginForm.jsx';
import Home from '../components/Home.jsx';
import {Typography,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText } from '@ellucian/react-design-system/core';
import { withStyles } from '@ellucian/react-design-system/core/styles';
import { spacing40 } from '@ellucian/react-design-system/core/styles/tokens';

axios.defaults.baseURL = 'https://its.jitbit.com/helpdesk/api';
axios.defaults.timeout = 1000;
axios.defaults.headers = {"Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEwOTc2NjI5LCJhZGQiOiI2MjU4M0UxODA2QTg1RTAxOEZCQTY4RUQyQzIwQThCRDkyRjgyOUY1NDAyNURBOTQ3NDQ3MkFFMDBBRUNGRUU3In0.DjxtTY3oSUymGF3OkdoDeFJT48q4DEfc_EYiZa7Ks2A"}

//const [tickets, setTickets] = useState([]);

axios('/Tickets')
    .then(response => {
        console.log(response.data);
        setTickets(response.data);
    })
    .catch(error => console.log(error));

const TicketList = tickets.map((ticket) => {
    return (
        <List key={ticket.TicketID}>
            <ListItem>
                <ListItemText
                    primary={ticket.Subject}
                    secondary={ticket.IssueDate}/> 
            </ListItem>
        </List>
    );
});

const styles = () => ({
    card: {
        marginTop: 0,
        marginRight: spacing40,
        marginBottom: 0,
        marginLeft: spacing40
    }
});


const JitbitCard = (props) => {
    const { classes } = props;
    return (
        <div className={classes.card}>
            <Grid container direction="column" justifyContent="center" alignItems="center" >
                <Typography variant="caption">
                    <p>Ticketing System</p>
                </Typography>
                <TicketList />
            </Grid>
        </div>
    );
};

JitbitCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(JitbitCard);