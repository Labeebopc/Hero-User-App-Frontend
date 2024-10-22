import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles({
    headerContainer: {
        border: "1px solid brown",
        background: "black",
        height: "4.5rem",
        display: "flex",
        justifyContent: "space-between",
        paddingRight: "0.9em",
        paddingLeft: "0.9em"
    },
    logoutBtn: {
        height: "2.5em",
        display: "flex",
        alignSelf: "center",
    },
    homeBtn: {
        height: "2.5em",
        display: "flex",
        alignSelf: "center",
    }
});