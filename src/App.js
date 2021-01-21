import React from 'react'
import Table from './components/Table'
import './App.css'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedColor: '#FFADAD',
      numRow: 1,
      numCol: 1,
    }
  }

  addRows = () => {
    this.setState({
      numRow: this.state.numRow + 1
    })
  }

  addCols = () => {
    this.setState({
      numCol: this.state.numCol + 1
    })
  }

  removeRows = () => {
    if (this.state.numRow > 1) {
      this.setState({
        numRow: this.state.numRow - 1
      })
    } else {
      return
    }
  }

  removeCols = () => {
    if (this.state.numCol > 1) {
      this.setState({
        numCol: this.state.numCol - 1
      })
    } else {
      return
    }
  }

  selectColor = (event) => {
    console.log(event.target.value)
    this.setState({
      selectedColor: event.target.value
    })
  }



  render() {
    return (
      <div className="container">

        <div className="buttons-container d-flex justify-content-around m-2">
          <button onClick={this.addRows}>Add Row</button>
          <button onClick={this.addCols}>Add Column</button>
          <button onClick={this.removeRows}>Remove Row</button>
          <button onClick={this.removeCols}>Remove Column</button>

          <div>
            <label for="colors" className="mx-3">Choose a color: </label>
            <select name="colors" id="colors" onChange={this.selectColor}>
              <option value="#FFADAD">Red</option>
              <option value="#FFD6A5">Orange</option>
              <option value="#FDFFB6">Yellow</option>
              <option value="#9BF6FF">Light Blue</option>
              <option value="#A0C4FF">Blue</option>
              <option value="#CAFFBF">Green</option>
              <option value="#BDB2FF">Purple</option>
              <option value="#FFC6FF">Pink</option>
              <option value="#FFFFFC">White</option>
            </select>
          </div>
        </div>

        <div className="buttons-container-2">

        </div>

        <Table
          numberOfRows={this.state.numRow}
          numberOfColumns={this.state.numCol}
          color={this.state.selectedColor}
        />
      </div>
    )
  }
}

export default App