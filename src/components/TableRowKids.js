import React, {PropTypes} from 'react';
import DataTable from './DataTable';

class TableRowKids extends React.Component {
  constructor(props, context) {
    super(props, context);
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
  renderKidTables() {
    const kids = this.props.kids;
    return Object.keys(kids).map(function (key) {
      return (
        <DataTable key={key} entities={kids[key].records} title={key}/>
      );
    });
  }
}

TableRowKids.propTypes = {
  kids: PropTypes.object.isRequired,
  colSpan: PropTypes.number.isRequired
};

export default TableRowKids;
