import { makeStyles } from '@material-ui/core/styles';
import colors from '../../utils/colors';

const useStyles = makeStyles({
    tableContainer: {
        marginBottom: 50,
    },
    table: {
        padding:0,
        margin:0
    },
    textHeader: {
        fontSize: 14,
        color: colors.smoke,
        fontWeight: '800',
        fontFamily: 'MontSerrat',
        borderBottomWidth: 2.5,
        borderBottomStyle: 'solid',
        backgroundColor: 'transparent',
        paddingBottom: 15,
    },
    header: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: colors.black,
        borderBottomWidth: 3,
    },
    contentText: {
        fontWeight: 400,
        color: colors.gray,
        textTransform: 'none'
    }

});

export default useStyles;