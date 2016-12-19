import React, {PropTypes} from 'react';
import DataTable from './DataTable';

class TableDataContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div>
        <h2>Table Data</h2>
        <DataTable
          entities={this.props.data.entities}
          toggleNode={this.props.toggleNode}
          deleteNode={this.props.deleteNode}
        />
      </div>
    );
  }
}

TableDataContainer.propTypes = {
  data: PropTypes.object.isRequired,
  toggleNode: PropTypes.func.isRequired,
  deleteNode: PropTypes.func.isRequired
};

export default TableDataContainer;
