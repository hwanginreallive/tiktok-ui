import { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import Tippy from '@tippyjs/react/headless';
import PopperWrapper from '~/component/popper/Wrapper';
import AccountItem from '~/component/AccountIteam';
import Button from '~/component/Button';
import Menu from '~/component/popper/Menu';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faPlus,
    faEllipsisVertical,
    faEarthAsia,
    faKeyboard,
    faQuestionCircle,
    faArrowRightToBracket,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
        title: 'English',
    },
    {
        icon: <FontAwesomeIcon icon={faQuestionCircle}></FontAwesomeIcon>,
        title: 'FeedBack and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>,
        title: 'Keyboard Shortcuts',
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    });

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok" />
                </div>
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts </h4>
                                <AccountItem></AccountItem>
                                <AccountItem></AccountItem>
                                <AccountItem></AccountItem>
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input type="text" placeholder="Search accounts and videos" spellCheck="false" />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <button>
                            <FontAwesomeIcon className={cx('loading')} icon={faSpinner}></FontAwesomeIcon>
                        </button>

                        <button className={cx('search-button')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>

                <div className={cx('actions')}>
                    <Button medium>
                        <FontAwesomeIcon className={cx('plus')} icon={faPlus}></FontAwesomeIcon>
                        <span className={cx('upload')}>Upload</span>
                    </Button>
                    <Button primary rightIcon={<FontAwesomeIcon icon={faArrowRightToBracket} />}>
                        Log in
                    </Button>
                    <Menu items={MENU_ITEMS}>
                        <div className={cx('more-btn')}>
                            <FontAwesomeIcon className={cx('')} icon={faEllipsisVertical}></FontAwesomeIcon>
                        </div>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
