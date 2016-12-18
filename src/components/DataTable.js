import React, {PropTypes} from 'react';
import getTableHeader from '../utils/getTableHeader';
import getRowValues from '../utils/getRowValues';
import TableHeaderRow from './TableHeaderRow';
import TableRow from './TableRow';
import TableRowKids from './TableRowKids';


class DataTable extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    const {entities} = this.props;
    return (
      <table>
        <thead>
          <TableHeaderRow columns={getTableHeader(entities)}/>
        </thead>
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
    );
  }
  renderRows() {
    const columnsCount = getTableHeader(this.props.entities).length;
    return this.props.entities.map(function(row, index) {
      return [
        (
          <TableRow key="row-${index}" values={getRowValues(row.data)}/>
        ),
        (
          <TableRowKids key="kids-${index}" kids={row.kids} colSpan={columnsCount} />
        )
      ];
    });
  }

}

DataTable.propTypes = {
  entities: PropTypes.array.isRequired,
  title: PropTypes.string
};

export default DataTable;
