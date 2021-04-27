import { connect } from 'react-redux';
import Table from 'src/components/PharmacyPage/PharmacyTable';
import { fetchInventoryEstablishment } from 'src/actions/search';

const mapStateToProps = (state) => ({
  inventory: state.search.inventoryEstablishment,
});

const mapDispatchToProps = (dispatch) => ({
  fetchInventory: (id) => dispatch(fetchInventoryEstablishment(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
