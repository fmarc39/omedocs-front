import React from 'react'
import LeftMenu from '../LeftMenu/LeftMenu';
import './styles.scss';
import Box from '@material-ui/core/Box';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import Select from '@material-ui/core/Select';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import Table from './Table';
import FormControl from '@material-ui/core/FormControl';
import PropTypes from 'prop-types';

const SearchProduct = ({
    handleChange,
    handleChangeType,
    searchInputValue,
    searchSelectValue,
    }) => {
    const age = 10;

    const handleChangeTypeInput = (event) => {
        handleChangeType(event.target.value, event.target.name)
    };

    const handleChangeSearchInput = (event) => {
        handleChange(event.target.value, event.target.name);
    };

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            height="100vh"
        >
            <Box className="header">
                Header
            </Box>
            <Box
                height="100%"
                width="100%"
                display="flex"
                id='body'
            >
                <LeftMenu/>
                    <Box bgcolor="#C6C6C6"
                    height="100%"
                    width="100%"
                    p={4}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                >
                        <Box
                            display="flex"
                            justifyContent="center"
                            p={2}
                            mb={8}
                            bgcolor="white"
                            width="400px"
                            borderRadius='10px'
                            boxShadow={3}>
                                <form>
                                    <div>
                                        <InputLabel htmlFor="input-with-icon-adornment">Votre recherche ici</InputLabel>
                                        <Input
                                        id="input-with-icon-adornment"
                                        onChange={handleChangeSearchInput}
                                        value={searchInputValue}
                                        name='searchProductInputValue'
                                        startAdornment={
                                            <InputAdornment position="start">
                                            <SearchIcon />
                                            </InputAdornment>
                                        }
                                        />
                                    </div>
                                    <FormControl size='medium' style={{width: "100px"}} >
                                        <InputLabel id="typeSelect">Type</InputLabel>
                                            <Select
                                            labelId="typeSelect"
                                            id="typeSelectBtn"
                                            value={searchSelectValue}
                                            name="searchProductSelectValue"
                                            onChange={handleChangeTypeInput}
                                            >
                                            <MenuItem value='name'>Nom</MenuItem>
                                            <MenuItem value='cis'>CIS</MenuItem>
                                            <MenuItem value='pathology'>Pathologie</MenuItem>
                                            </Select>
                                    </FormControl>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        endIcon={<CheckIcon/>}
                                    >
                                    Valider
                                    </Button>
                                </form>
                        </Box>
                        <Table/>
                    </Box>
            </Box>
            <Box className="footer">
                Footer
            </Box>
        </Box>
    )
};

SearchProduct.propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleChangeType: PropTypes.func.isRequired,
    searchInputValue: PropTypes.string.isRequired,
    searchSelectValue: PropTypes.string.isRequired,
};

export default SearchProduct
