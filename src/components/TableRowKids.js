import React, {PropTypes} from 'react';
import DataTable from './DataTable';

class TableRowKids extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  renderKidTables() {
    const kids = this.props.kids;
    const props = this.props;
    return Object.keys(kids).map(function (key) {
      return (
        <DataTable key={key} entities={kids[key].records} title={key} toggleNode={props.toggleNode} />
      );
    });
  }
  render() {
    return (
      <tr>
        <td colSpan={this.props.colSpan}>
          {this.renderKidTables()}
        </td>
      </tr>
    );
  }
}

TableRowKids.propTypes = {
  kids: PropTypes.object.isRequired,
  colSpan: PropTypes.number.isRequired,
  toggleNode: PropTypes.func.isRequired
};

export default TableRowKids;
