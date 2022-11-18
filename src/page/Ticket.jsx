import React, { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';
import {Typography,
    Grid,
    List} from '@ellucian/react-design-system/core';
import { withStyles } from '@ellucian/react-design-system/core/styles';

axios.defaults.baseURL = 'https://its.jitbit.com/helpdesk/api';
axios.defaults.timeout = 1000;
axios.defaults.headers = {"Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEwOTc2NjI5LCJhZGQiOiI2MjU4M0UxODA2QTg1RTAxOEZCQTY4RUQyQzIwQThCRDkyRjgyOUY1NDAyNURBOTQ3NDQ3MkFFMDBBRUNGRUU3In0.DjxtTY3oSUymGF3OkdoDeFJT48q4DEfc_EYiZa7Ks2A"}


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