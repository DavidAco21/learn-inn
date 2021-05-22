
import React from 'react';
import './Community.css';
import Button from '@material-ui/core/Button'
import { createStyles, makeStyles, Theme , Grid, Paper} from '@material-ui/core';
import clsx from 'clsx';
import { app } from '../../utils/firebase';



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

    const [showResults, setShowResults] = React.useState(true)
    const onClick = () => setShowResults(!showResults)
    const Results = () => (
        <div id="results" className="search-results">
          Some Results
        </div>
      )
    const onChange = (e: any) =>{
        const file = e.target.files[0];
        console.log("file >>> ", JSON.stringify(file, null, 2));
        const storageRef = app.storage().ref()
        const fileRef = storageRef.child(file.name)
        fileRef.put(file).then(() => {
            console.log("Uploaded file")

        })
    }
    return (
        <div>
        <input type="submit" value="Search" onClick={onClick} />
        { showResults ? <Results /> : null }
        <input type="file" onChange={onChange}/>
        </div>

    )
    // const classes = useStyle();
    // return (
        
    //     <Grid className = {classes.grid}>

    //     </Grid>
        
    
    // )
}

export default Community
