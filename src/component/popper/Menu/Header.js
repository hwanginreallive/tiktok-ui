import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Menuitems.module.scss';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

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

export default Header;
