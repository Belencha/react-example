import * as React from 'react';
import Typography from '@mui/material/Typography';

const CustomText = (props) => {
    return(
        <Typography variant={ props.wannabe} component={ props.component }>
            { props.text }
        </Typography>
    );
}

export default CustomText;