import React from 'react'


class TableCol extends React.Component {

    changeColor = (e) => {
        e.target.style.backgroundColor = this.props.color
    }

    addCol = () => {
        let column = []
        
        for (let i = 0; i < this.props.numberOfColumns; i++) {
            column.push(
                <td onClick={this.changeColor}>
                    <div className="td-cell white"></div>
                </td>)
        }
        return column
    }

    render() {
        return (
            this.addCol()
        )
    }
}

export default TableCol