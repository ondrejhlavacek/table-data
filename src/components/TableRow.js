import React, {PropTypes} from 'react';

class TableRow extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.toggle = this.toggle.bind(this);
    this.delete = this.delete.bind(this);
  }

  renderColumns() {
    return this.props.values.map(function(value, index) {
      return (<td key={index}>{value}</td>);
    });
  }

  renderExpand() {
    if (!this.props.hasKids) {
      return null;
    }
    if (this.props.isExpanded) {
      return (
        <span className="expand" onClick={this.toggle}>▼</span>
      );
    } else {
      return (
        <span className="expand" onClick={this.toggle}>▶</span>
      );
    }
  }

  renderDelete() {
    return (
      <span className="delete" onClick={this.delete}>✗</span>
    );
  }

  toggle() {
    if (this.props.hasKids) {
      return this.props.toggleNode();
    }
  }

  delete() {
    return this.props.deleteNode();
  }

  render() {
    return (
      <tr className="dataRow">
        <td className="function" key="collapseArrow">{this.renderExpand()}</td>
        {this.renderColumns()}
        <td className="function" key="delete">{this.renderDelete()}</td>
      </tr>
    );
  }
}

TableRow.propTypes = {
  values: PropTypes.array.isRequired,
  hasKids: PropTypes.bool.isRequired,
  isExpanded: PropTypes.bool.isRequired,
  deleteNode: PropTypes.func.isRequired,
  toggleNode: PropTypes.func

};

export default TableRow;
