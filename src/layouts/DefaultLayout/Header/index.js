import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import Tippy from '@tippyjs/react';
import Button from '~/component/Button';
import Menu from '~/component/popper/Menu';
import Search from './Search';
import routes from '~/configs/routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faEllipsisVertical,
    faEarthAsia,
    faKeyboard,
    faQuestionCircle,
    faArrowRightToBracket,
    faUser,
    faGear,
    faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import { InboxIcon, MessageIcon } from '~/component/Icons';
import Image from '~/component/Image';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
        title: 'English',
        children: {
            title: 'language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
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
    const currentUser = true;

    const handleMenuChange = (MenuItem) => {
        console.log(MenuItem);
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>,
            title: 'View profile',
            to: '/user',
        },
        {
            icon: <FontAwesomeIcon icon={faBitcoin}></FontAwesomeIcon>,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>,
            title: 'Setting',
            to: '/feedback',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faRightFromBracket}></FontAwesomeIcon>,
            title: 'Logout',
            to: '/feedback',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={routes.home} className={cx('logo')}>
                    <Image src={images.logo} alt="tiktok" />
                </Link>
                <Search></Search>

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Button medium>
                                <FontAwesomeIcon className={cx('plus')} icon={faPlus}></FontAwesomeIcon>
                                <span className={cx('upload')}>Upload</span>
                            </Button>
                            <Tippy delay={(0, 100)} placement="bottom" content="Message">
                                <button className={cx('action-btn')}>
                                    <MessageIcon></MessageIcon>
                                </button>
                            </Tippy>
                            <Tippy delay={(0, 100)} placement="bottom" content="Inbox">
                                <button className={cx('action-btn')}>
                                    <InboxIcon></InboxIcon>
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button medium>
                                <FontAwesomeIcon className={cx('plus')} icon={faPlus}></FontAwesomeIcon>
                                <span className={cx('upload')}>Upload</span>
                            </Button>
                            <Button primary rightIcon={<FontAwesomeIcon icon={faArrowRightToBracket} />}>
                                Log in
                            </Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="https://i.pinimg.com/736x/82/33/47/823347377556e4b2eb3a852b5c02369a.jpg"
                                className={cx('user-avt')}
                            />
                        ) : (
                            <div className={cx('more-btn')}>
                                <FontAwesomeIcon className={cx('')} icon={faEllipsisVertical}></FontAwesomeIcon>
                            </div>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
