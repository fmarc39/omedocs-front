import { connect } from 'react-redux';
import PharmacyPage from 'src/components/PharmacyPage';
import { fetchInventoryEstablishment } from 'src/actions/search';

const mapStateToProps = (state) => ({
  establishments: state.search.searchEstablishmentResult,
  inventory: state.search.inventoryEstablishment,
  isLoading: state.utils.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchInventory: (id) => dispatch(fetchInventoryEstablishment(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PharmacyPage);
