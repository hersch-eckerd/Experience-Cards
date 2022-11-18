import React from 'react';
import PropTypes from 'prop-types';
import { Typography, TextLink, Grid} from '@ellucian/react-design-system/core';
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



const LoginForm = (props) => {
    const { classes } = props;
    function authenticateUser() {
        fetch('https://jitbit.com/api/v2/tickets?apiKey=API_KEY&accessId=ACCESS_ID')
        .then(response => response.json())
        .then(data => console.log(data));
    }

    return (
        <div className={classes.card}>
            <form>
                <Grid container direction="column" justifyContent="center" alignItems="center" >
                    <Typography variant="caption">
                        Login
                    </Typography>
                    <Typography>
                        <span>
                            Use the link below to get your Jitbit authentication token, and then enter it into the input below.
                        </span>
                    </Typography>
                    <div>
                        <TextLink href="https://its.jitbit.com/helpdesk/User/Token" target="_blank">Get Authentication Token</TextLink>
                        <button onClick={authenticateUser}>Authenticate</button>
                    </div>
                </Grid>
            </form>
        </div>
    );
};

LoginForm.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LoginForm);