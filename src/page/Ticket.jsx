import React, { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';
import {Typography,
    Grid,
    List} from '@ellucian/react-design-system/core';
import { withStyles } from '@ellucian/react-design-system/core/styles';

axios.defaults.baseURL = 'https://its.jitbit.com/helpdesk/api';
axios.defaults.timeout = 1000;
axios.defaults.headers = {"Authorization":"Bearer "}


function Ticket(props){
    useEffect( () => {
        axios('/tickets/'+ props.ticketId)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => console.log(error));
        }
   , [] );
}

export default withStyles(styles)(Ticket);