import classNames from 'classnames/bind';

import style from './popper.module.scss';
import PropTypes from 'prop-types';
const cx = classNames.bind(style);

function PopperWrapper({ children, className }) {
    return <div className={cx('wrapper', className)}>{children}</div>;
}

PopperWrapper.prototype = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};
export default PopperWrapper;
