import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { withStyles } from '@ellucian/react-design-system/core/styles';
import { Icon } from '@ellucian/ds-icons/lib';
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText } from '@ellucian/react-design-system/core';

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper
    },
    listArea: {
        backgroundColor: theme.palette.grey['200'],
        maxWidth: theme.spacing(100),
        minWidth: theme.spacing(50)
        }
});
axios.defaults.baseURL = 'https://its.jitbit.com/helpdesk/api';

function TicketList() {
    const [tickets, setTickets] = useState([]);

    /* useEffect( () => {
        axios('/Tickets?mode=unclosed')
            .then(response => {
                setTickets(response.data);
            })
            .catch(error => console.log(error));
        }, [] ); */

    const itemList = tickets.map( (ticket) =>
        <ListItem button component="a" href={"https://its.jitbit.com/helpdesk/Ticket/" + ticket.IssueID} key={ticket.IssueID}>
            <ListItemText
                primary={ticket.Subject}
                secondary={"Issued: " + moment(ticket.IssueDate).format("ddd, MMM Do YYYY, h:mm a")}
            />
            {ticket.Priority == 1 &&
                <ListItemIcon>
                    <Icon name="warning-solid" large/>
                </ListItemIcon>
            }
        </ListItem>
    );
    return <List>{itemList}</List>
}
export default withStyles(styles)(TicketList);
