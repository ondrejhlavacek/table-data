import React, {PropTypes} from 'react';
import DataTable from './DataTable';

class TableDataContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    const {data} = this.props;

    return (
      <div>
        <h2>Table Data</h2>
        <DataTable entities={this.props.data.entities} />
      </div>
    );
  }
}

TableDataContainer.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TableDataContainer;
