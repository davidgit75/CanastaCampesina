import React, { Component } from 'react'
import DataTable from 'react-md/lib/DataTables/DataTable'
import TableOrdersContainer from '../../components/TableOrders'

class App extends Component {
  render() {
    return (
      <div>
        <TableOrdersContainer />
      </div>
    )
  }
}

export default App
