import classNames from 'classnames';

import style from './Menuitems.module.scss';
import Button from '~/component/Button';

const cx = classNames.bind(style);

function MenuItem({ data }) {
    return (
        <Button className={cx('menu-item')} leftIcon={data.icon} to={data.to}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
