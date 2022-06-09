import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import style from './accountitem.module.scss';

const cx = classNames.bind(style);

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <img className={cx('avatar')} src={data.avatar} alt={data.avatar} />
            <div className={cx('info')}>
                <div className={cx('name')}>
                    <h4> {data.full_name} </h4>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>}
                </div>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
