import { connect } from 'react-redux';
import Table from 'src/components/PharmacyPage/PharmacyTable';
import { fetchInventoryEstablishment } from 'src/actions/search';
import { addArticleToCart, openDialogBoxAction } from 'src/actions/cart';
import { openSnackBar } from 'src/actions/utils';

const mapStateToProps = (state) => ({
  inventory: state.search.inventoryEstablishment,
  pharmacyToOrder: state.cart.pharmacyToOrder,
  cartData: state.cart.cart,
});

const mapDispatchToProps = (dispatch) => ({
  fetchInventory: (id) => dispatch(fetchInventoryEstablishment(id)),
  addToCart: (data, pharmacyId) => {
    dispatch(addArticleToCart(data, pharmacyId));
  },
  openDialogBox: () => {
    dispatch(openDialogBoxAction());
  },
  openSnackBar: (message, color) => {
    dispatch(openSnackBar(message, color));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
