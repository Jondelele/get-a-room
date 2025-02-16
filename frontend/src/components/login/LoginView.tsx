import { Box, Stack, Typography } from '@mui/material';
import { ReactComponent as DuckLogo } from './duck.svg';

const LoginView = () => {
    return (
        <Box height="100vh">
            <Stack id="login-view" height="100%" justifyContent="space-evenly">
                <Box textAlign="center">
                    <Typography textAlign="center" variant="h3">
                        Get a Room!
                    </Typography>
                    <Typography variant="subtitle1">
                        Meeting rooms on the fly
                    </Typography>
                </Box>
                <Box textAlign="center">
                    <DuckLogo
                        width="12rem"
                        height="12rem"
                        title="Vincit logo"
                    />
                </Box>
            </Stack>
        </Box>
    );
};

export default LoginView;
