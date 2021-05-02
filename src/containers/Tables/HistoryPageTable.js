import { connect } from 'react-redux';
import Table from 'src/components/HistoryPage/HistoryPageTable';
import {} from 'src/actions/inventory';

const mapStateToProps = (state) => ({
  orderHistory: state.user.orderHistory,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
