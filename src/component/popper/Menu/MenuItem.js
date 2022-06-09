import Button from '~/component/Button';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from './Menuitems.module.scss';

const cx = classNames.bind(style);

function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });

    return (
        <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

MenuItem.prototype = {
    data: PropTypes.object.isRequired,
    onclick: PropTypes.func,
};

export default MenuItem;
