import { connect } from 'react-redux';
import Table from 'src/components/PharmacyPage/PharmacyTable';

import { addArticleToCart, openDialogBoxAction } from 'src/actions/cart';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (data) => {
    dispatch(addArticleToCart(data));
  },
  openDialogBox: () => {
    dispatch(openDialogBoxAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
