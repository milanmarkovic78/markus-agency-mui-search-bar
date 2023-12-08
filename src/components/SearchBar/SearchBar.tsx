/*
*  Author: Milan Marković - Markus Agency
*  Created: 04.12.2023
*  Last change: 07.12.2023
*/
import React from "react";
import { SearchBarProps } from "./SearchBar.types";
import { ButtonBase, InputAdornment } from '@mui/material';
import TextField from '@mui/material/TextField';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';

// ==============================|| SEARCH INPUT ||============================== //

const SearchBar: React.FC<SearchBarProps> = ({
    id,
    value,
    label,
    placeholder,
    onChange,
    onCancelSearch,
    autoComplete,
    disabled,
    debounceTime,
    ...props
    }) => {
    const [searchValue, setSearchValue] = React.useState(value || '');
    const [dbTime, setDbTime] = React.useState(debounceTime || 0);
    const clearSearch = () => {
        setSearchValue('');
        if (onCancelSearch) {
            onCancelSearch();
        }
    };

    const changeValue = (searchValue: any) => {
        setSearchValue(searchValue);
    };
    React.useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (onChange) {
                onChange(searchValue);
            }
        }, dbTime);
        return () => clearTimeout(timeoutId);
    }, [searchValue, dbTime]);
    return (
        <>
        <TextField sx={{ width: { xs: '100%' } }}
            disabled={disabled}
            id={id}
            label={label}
            placeholder={placeholder}
            value={searchValue}
            onChange={(e) => changeValue(e.target.value)}
            autoComplete={autoComplete}
            InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                    <SearchIcon />
                </InputAdornment>
            ),
            endAdornment:(
                <InputAdornment position="end">
                    {searchValue ? (
                    <ButtonBase onClick={clearSearch} sx={{ borderRadius: '12px', padding: '5px', marginRight: '-5px' }}>
                        <ClearIcon />
                    </ButtonBase>
                    ): (
                        <></>
                    )}
                </InputAdornment>
            )
            }}
        />
        </>
    );
};
export default SearchBar;