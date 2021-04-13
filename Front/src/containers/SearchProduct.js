import { connect } from 'react-redux';
import SearchProduct from '../components/SearchProduct/SearchProduct';
import { changeInputValue, changeSelectInputValue } from '../actions/search'

const mapStateToProps = (state) => ({
    searchInputValue: state.search.searchInputValue,
    searchSelectValue: state.search.searchSelectValue,
});

const mapDispatchToProps = (dispatch) => ({
    handleChange: (fieldValue) => {
        dispatch(changeInputValue(fieldValue))
    },
    handleChangeType: (fieldValue) => {
        dispatch(changeSelectInputValue(fieldValue))
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(SearchProduct);