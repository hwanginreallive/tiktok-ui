import classNames from 'classnames/bind';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './button.module.scss';
import PropTypes from 'prop-types';
const cx = classNames.bind(style);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    small = false,
    medium = false,
    rounded = false,
    big = false,
    children,
    leftIcon,
    rightIcon,
    className,
    onClick,
    ...passProps
}) {
    // console.log(children);
    let Comp = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        small,
        big,
        medium,
        rounded,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

Button.prototype = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    small: PropTypes.bool,
    medium: PropTypes.bool,
    big: PropTypes.bool,
    children: PropTypes.node.isRequired,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
