import React, {PropTypes} from 'react';

class TableRow extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <tr>
        {this.renderColumns()}
      </tr>
    );
  }
  renderColumns() {
    return this.props.values.map(function(value, index) {
      return (<td key={index}>{value}</td>);
    });
  }
}

TableRow.propTypes = {
  values: PropTypes.array.isRequired
};

export default TableRow;
