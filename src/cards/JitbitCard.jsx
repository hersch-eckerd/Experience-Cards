import React from 'react';
import PropTypes from 'prop-types';
import TicketList from '../components/TicketList.jsx';
import {Typography,
    Grid,
    List} from '@ellucian/react-design-system/core';
import { withStyles } from '@ellucian/react-design-system/core/styles';
import { useData } from '@ellucian/experience-extension/extension-utilities';
import { spacing40 } from '@ellucian/react-design-system/core/styles/tokens';

const styles = () => ({
    card: {
        marginTop: 0,
        marginRight: spacing40,
        marginBottom: 0,
        marginLeft: spacing40
    }
});

/* async function invokeCustomApi(payload) {
    const jwt = await props.data.getExtensionJwt();
    const response = await fetch(CUSTOM_API_URL, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + jwt
        },
        body: JSON.stringify(payload)
    });
};
*/

const JitbitCard = (props) => {
    const { classes } = props;
    console.log(useData())

    return (
        <div className={classes.card}>
            <Grid container direction="column" justifyContent="center" alignItems="center" >
                <Typography variant="caption">
                    <p>Ticketing System</p>
                </Typography>
                <List>
                    <TicketList />
                </List>
            </Grid>
        </div>
    );
};

JitbitCard.propTypes = {
    classes: PropTypes.object.isRequired
};
export default withStyles(styles)(JitbitCard);