import { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import AccountItem from '~/component/AccountIteam';
import PopperWrapper from '~/component/popper/Wrapper';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import useDebounce from '~/Hooks/useDebounce';
import * as searchServices from '~/utils/services/searchService';
import { SearchIcon } from '~/component/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [SearchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const debounced = useDebounce(SearchValue, 500);

    const inputRef = useRef();
    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);

            const result = await searchServices.search(debounced);

            setSearchResult(result);
            setLoading(false);
        };
        fetchApi();
    }, [debounced]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!SearchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    return (
        <div>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts </h4>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result}></AccountItem>
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={SearchValue}
                        type="text"
                        placeholder="Search accounts and videos"
                        spellCheck="false"
                        onFocus={() => setShowResult(true)}
                        onChange={handleChange}
                    />
                    {!!SearchValue && !loading && (
                        <button onClick={handleClear} className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}

                    <button>
                        {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner}></FontAwesomeIcon>}
                    </button>

                    <button className={cx('search-button')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon></SearchIcon>
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
