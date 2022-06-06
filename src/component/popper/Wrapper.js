import classNames from 'classnames/bind';

import style from './popper.module.scss';

const cx = classNames.bind(style);

function PopperWrapper({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

export default PopperWrapper;
