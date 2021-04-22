import { createMuiTheme, Theme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import teal from '@material-ui/core/colors/teal';
import deepOrange from '@material-ui/core/colors/deepOrange'




export const lightTheme: Theme = createMuiTheme({
    
    palette: {
        type: "light",
        primary: {
            main: indigo['A400'],
        },
        secondary: {
            main: teal['A700'],
        },

        error: {
            main: deepOrange[500],
        },
        
        success: {
            main: teal['A700'],
        },

        text: {
            secondary: '#939393'

        },
    

    },

    typography: {
        h1: {
        fontWeight: 700,
        fontSize: '3rem',

        }
    },


  

});


/*export const darkTheme: Theme = createMuiTheme({
    palette: {
        type: "dark",
        primary: {
             main: indigo['A400'],
        },
        secondary: {
            main: teal['A700'],
        },
    },
});
*/