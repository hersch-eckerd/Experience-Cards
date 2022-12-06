import React from 'react';
import PropTypes from 'prop-types';
import TicketList from '../components/TicketList.jsx';
import SignIn from '../components/SignIn.jsx';
import {Typography,
    Grid,
    List} from '@ellucian/react-design-system/core';
import { withStyles } from '@ellucian/react-design-system/core/styles';
import { spacing40 } from '@ellucian/react-design-system/core/styles/tokens';

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
    const [auth, setAuth] = React.useState(false);
    return (
        <div className={classes.card}>
            <SignIn></SignIn>
            <Grid container direction="column" justifyContent="center" alignItems="center" >
                <Typography variant="caption">
                    <p>TEST System</p>
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