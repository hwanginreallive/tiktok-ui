import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import style from './accountitem.module.scss';

const cx = classNames.bind(style);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://i.pinimg.com/736x/40/e7/a9/40e7a93e62ec4b9497180f226384d969.jpg"
                alt=""
            />
            <div className={cx('info')}>
                <div className={cx('name')}>
                    <h4>Nguyen Van A</h4>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
                </div>
                <span className={cx('username')}>Nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
