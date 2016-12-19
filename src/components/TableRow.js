import React, {PropTypes} from 'react';

class TableRow extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.toggle = this.toggle.bind(this);
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
    if (!this.props.hasKids) {
      return null;
    }
    if (this.props.isExpanded) {
      return (
        <span className="expand" onClick={this.toggle}>▼</span>
      )
    } else {
      return (
        <span className="expand" onClick={this.toggle}>▶</span>
      )
    }
  }

  toggle() {
    return this.props.toggleNode();
  }
}

TableRow.propTypes = {
  values: PropTypes.array.isRequired,
  hasKids: PropTypes.bool.isRequired,
  isExpanded: PropTypes.bool.isRequired,
  toggleNode: PropTypes.func
};

export default TableRow;
