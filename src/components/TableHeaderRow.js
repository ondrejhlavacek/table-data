import React, {PropTypes} from 'react';

class TableHeaderRow extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <tr>
        <th></th>
        {this.renderColumns()}
      </tr>
    );
  }
  renderColumns() {
    return this.props.columns.map(function(columnName, index) {
      return (<th key={index}>{columnName}</th>);
    });
  }
}

TableHeaderRow.propTypes = {
  columns: PropTypes.array.isRequired
};

export default TableHeaderRow;
