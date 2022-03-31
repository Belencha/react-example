import * as React from 'react';
import { styled } from '@mui/material/styles';

const StyledDiv = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  }));

export default function TypographyTheme() {
    return <StyledDiv>{"This div's text looks like that of a button."}</StyledDiv>;
  }