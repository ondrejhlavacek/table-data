import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/tableDataActions';
import TableDataContainer from '../components/TableDataContainer';

export const TableDataPage = (props) => {
  return (
    <TableDataContainer
      data={props.data}
      toggleNode={props.actions.toggleNode}
    />
  );
};

TableDataPage.propTypes = {
  actions: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    data: state.tableData
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableDataPage);
