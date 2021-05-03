import { connect } from 'react-redux';
import Table from 'src/components/HistoryPage/HistoryPageTable';
import { fetchOrderHistory } from 'src/actions/cart';

const mapStateToProps = (state) => ({
  orderHistory: state.user.orderHistory,
});

const mapDispatchToProps = (dispatch) => ({
  fetchOrders: () => {
    dispatch(fetchOrderHistory());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
