import React from 'react'
import TableCol from './TableCol'

class TableRow extends React.Component {

    addRow = () => {
        let rows = []
        
        for (let i = 0; i < this.props.numberOfRows; i++) {
            rows.push(
                <tr>
                    <TableCol
                        numberOfColumns={this.props.numberOfColumns}
                        color={this.props.color}
                    />
                </tr>)
        }
        return rows
    }

    render() {
        return (
            this.addRow()
        )
    }
}

export default TableRow