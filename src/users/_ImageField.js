import {ImageField} from 'react-admin';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    list: {
        display: 'flex',
        listStyleType: 'none',
    },
    image: {
        maxHeight: '3rem',
        maxHeight: '3rem',
    },
};

const _ImageField = withStyles(styles)(ImageField);

export default _ImageField;