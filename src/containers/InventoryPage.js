import { connect } from 'react-redux';
import InventoryPage from 'src/components/InventoryPage';
import { withRouter } from 'react-router-dom';
import {} from 'src/actions/user';

const mapStateToProps = (state) => ({
  inventoryData: state.inventory.drugs,
});

const mapDispatchToProps = (dispatch) => ({});

const container = connect(mapStateToProps, mapDispatchToProps)(InventoryPage);

const containerWithRouter = withRouter(container);

export default containerWithRouter;
