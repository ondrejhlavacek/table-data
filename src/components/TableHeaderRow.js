import React, {PropTypes} from 'react';

class TableHeaderRow extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  renderColumns() {
    return this.props.columns.map(function(columnName, index) {
      return (<th key={index}>{columnName}</th>);
    });
  }

  render() {
    return (
      <tr>
        <th></th>
        {this.renderColumns()}
        <th></th>
      </tr>
    );
  }
}

TableHeaderRow.propTypes = {
  columns: PropTypes.array.isRequired
};

export default TableHeaderRow;
