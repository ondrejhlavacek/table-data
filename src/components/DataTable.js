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

  renderRows() {
    const columnsCount = getTableHeader(this.props.entities).length + 1;
    const props = this.props;
    return this.props.entities.map(function(row, index) {
      const hasRowKids = Object.keys(row.kids).length > 0;
      const isExpanded = row.expanded === true;
      const identifierKey = Object.keys(row.data)[0];
      const identifierValue = row.data[identifierKey];
      const toggleNode = function() {
        props.toggleNode(identifierKey, identifierValue);
      };
      const rowIndex = "row-" + index;
      const kidIndex = "kid-" + index;
      let retVal = [];
      retVal.push(
        (<TableRow key={rowIndex}
           values={getRowValues(row.data)}
           hasKids={hasRowKids}
           isExpanded={isExpanded}
           toggleNode={toggleNode}
        />)
      );
      if (isExpanded) {
        retVal.push(
          (<TableRowKids key={kidIndex} kids={row.kids} colSpan={columnsCount} toggleNode={props.toggleNode}/>)
        );
      }
      return retVal;
    });
  }

  renderTitle() {
    if (this.props.title) {
      return (<h4>{this.props.title}</h4>);
    }
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
}

DataTable.propTypes = {
  entities: PropTypes.array.isRequired,
  title: PropTypes.string,
  toggleNode: PropTypes.func.isRequired
};

export default DataTable;
