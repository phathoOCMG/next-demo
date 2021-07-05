import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import PersistentDrawerLeft from '../components/PersistentDrawerLeft';

function About() {
    return (
        <React.Fragment>
            <PersistentDrawerLeft />
            <br></br>
            <Container maxWidth="sm">
                <Typography variant="h4" component="h1" gutterBottom>
                    Next.js example
                </Typography>
                <Button variant="contained" color="primary" component={Link} naked href="/">
                    Go to the main page
                </Button>
                <ProTip />
                <Copyright />
            </Container>
        </React.Fragment>
    );
}
export default About