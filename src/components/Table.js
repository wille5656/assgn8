import React from 'react'

import TableRow from './TableRow'

class Table extends React.Component {

    render() {
        return (
            <TableRow
                numberOfRows={this.props.numberOfRows}
                numberOfColumns={this.props.numberOfColumns}
                color={this.props.color}
            />
        )
    }
}

export default Table