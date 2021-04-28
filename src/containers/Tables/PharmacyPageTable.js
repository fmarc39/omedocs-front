import { connect } from 'react-redux';
import Table from 'src/components/PharmacyPage/PharmacyTable';
import { fetchInventoryEstablishment } from 'src/actions/search';
import { addArticleToCart, openDialogBoxAction } from 'src/actions/cart';

const mapStateToProps = (state) => ({
  inventory: state.search.inventoryEstablishment,
});

const mapDispatchToProps = (dispatch) => ({
  fetchInventory: (id) => dispatch(fetchInventoryEstablishment(id)),
  addToCart: (data) => {
    dispatch(addArticleToCart(data));
  },
  openDialogBox: () => {
    dispatch(openDialogBoxAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
