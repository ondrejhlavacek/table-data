import React, {PropTypes} from 'react';

class TableRow extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <tr>
        <td key='collapseArrow'>{this.renderArrow()}</td>
        {this.renderColumns()}
      </tr>
    );
  }

  renderColumns() {
    return this.props.values.map(function(value, index) {
      return (<td key={index}>{value}</td>);
    });
  }

  renderArrow() {
    if (this.props.hasKids) {
      return (
        <span>▼</span>
      )
    } else {
      return null;
    }
  }
}

TableRow.propTypes = {
  values: PropTypes.array.isRequired,
  hasKids: PropTypes.bool.isRequired
};

export default TableRow;
