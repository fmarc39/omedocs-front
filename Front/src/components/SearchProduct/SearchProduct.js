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
import Table from './Table'

const SearchProduct = () => {
    const age = 10;
    const handleChange = () => {
        console.log("ok")
    }
    return (
        <Box display="flex" flexDirection="column" justifyContent="space-between" height="100vh">
            <Box className="header">
                Header
            </Box>
            <Box height="100%" display="flex">
                <LeftMenu/>
                    <Box bgcolor="#A5A5A5" display="flex" flexDirection="column" height="100%">
                        <Box display="flex" justifyContent="center" p={2}>
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
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value='name'>Nom</MenuItem>
                                        <MenuItem value='cis'>CIS</MenuItem>
                                        <MenuItem value='pathology'>Pathologie</MenuItem>
                                    </Select>
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
