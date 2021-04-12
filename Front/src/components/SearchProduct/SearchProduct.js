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

const SearchProduct = () => {
    const age = 10;
    const handleChangeType = () => {
        console.log("ok")
    }
    return (
        <Box display="flex" flexDirection="column" justifyContent="space-between" height="100vh">
            <Box className="header">
                Header
            </Box>
            <Box height="100%" width="100%" display="flex" id='body'>
                <LeftMenu/>
                    <Box bgcolor="#C6C6C6"
                    height="100%"
                    width="100%"
                    p={4}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                >
                        <Box display="flex" justifyContent="center" p={2} mb={8} bgcolor="white" width="400px" borderRadius='10px' boxShadow={3}>
                                <form>
                                    <div>
                                        <InputLabel htmlFor="input-with-icon-adornment">Votre recherche ici</InputLabel>
                                        <Input
                                        id="input-with-icon-adornment"
                                        startAdornment={
                                            <InputAdornment position="start">
                                            <SearchIcon />
                                            </InputAdornment>
                                        }
                                        />
                                    </div>
                                    <FormControl>
                                        <InputLabel id="demo-simple-select-label">Type</InputLabel>
                                            <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={age}
                                            onChange={handleChangeType}
                                            >
                                            <MenuItem value={10}>Nom</MenuItem>
                                            <MenuItem value={20}>CIS</MenuItem>
                                            <MenuItem value={30}>Pathologie</MenuItem>
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
}

export default SearchProduct
