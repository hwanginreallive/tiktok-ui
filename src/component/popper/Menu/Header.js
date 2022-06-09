import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Menuitems.module.scss';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

function Header({ title, onBack }) {
    return (
        <header className={cx('header')}>
            <div className={cx('back-btn')}>
                <FontAwesomeIcon icon={faChevronLeft} onClick={onBack}></FontAwesomeIcon>
            </div>
            <h4 className={cx('header-title')}>{title}</h4>
        </header>
    );
}

Header.prototype = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func,
};

export default Header;
