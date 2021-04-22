
import React from 'react';
import './Community.css';
import Button from '@material-ui/core/Button'
import { createStyles, makeStyles, Theme , Grid, Paper} from '@material-ui/core';
import clsx from 'clsx';



interface CommunityProps{

}

const useStyle = makeStyles (( theme: Theme) => 
    
    createStyles({
        
        grid: {
            width: '100%',
            margin: '0px',
        },

        Paper: {
            padding: theme.spacing(2),

        }

    })

);

export const Community: React.FC<CommunityProps> = () => {

  const classes = useStyle();
    return (
        <Grid className = {classes.grid}>

        </Grid>
        
    
    )
}

export default Community
