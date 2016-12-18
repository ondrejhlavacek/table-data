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
      <span>
        {this.renderTitle()}
        <table>
          <thead>
            <TableHeaderRow columns={getTableHeader(entities)}/>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
      </span>
    );
  }
  renderRows() {
    const columnsCount = getTableHeader(this.props.entities).length + 1;
    return this.props.entities.map(function(row, index) {
      const hasRowKids = Object.keys(row.kids).length > 0;
      return [
        (
          <TableRow key="row-${index}" values={getRowValues(row.data)} hasKids={hasRowKids}/>
        ),
        (
          <TableRowKids key="kids-${index}" kids={row.kids} colSpan={columnsCount} />
        )
      ];
    });
  }
  renderTitle() {
    if (this.props.title) {
      return (<h4>{this.props.title}</h4>);
    }
  }

}

DataTable.propTypes = {
  entities: PropTypes.array.isRequired,
  title: PropTypes.string
};

export default DataTable;
