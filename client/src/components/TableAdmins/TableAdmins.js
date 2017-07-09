import React from 'react'
import Card from 'react-md/lib/Cards/Card'
import DataTable from 'react-md/lib/DataTables/DataTable'
import TableHeader from 'react-md/lib/DataTables/TableHeader'
import TableBody from 'react-md/lib/DataTables/TableBody'
import TableRow from 'react-md/lib/DataTables/TableRow'
import TableColumn from 'react-md/lib/DataTables/TableColumn'
import Button from 'react-md/lib/Buttons/Button'

import NewAdmin from '../NewAdmin'

const styles={
  container: {
    margin: 10,
    minHeight: 400
  }
}

const TableAdmins = (props) => {
  return (
    <div className='md-grid'>
      <div className='md-cell md-cell--3'></div>

      <Card tableCard style={styles.container} className='md-cell md-cell--6'>
        <DataTable baseId='tableAdmins' plain>
          <TableHeader>
            <TableRow>
              <TableColumn>Nombre</TableColumn>
              <TableColumn>Contraseña</TableColumn>
              <TableColumn>
                <Button style={{ fontSize: 20 }} icon onClick={() => props.setModalVisibility(true)}>person_add</Button>
              </TableColumn>
            </TableRow>
          </TableHeader>

          <TableBody>
            {
              props.admins.map((a, i) => (
                <TableRow key={i}>
                  <TableColumn style={{ paddingTop: 30 }}>{a.username}</TableColumn>
                  <TableColumn style={{ paddingTop: 30 }}>{a.password}</TableColumn>
                  <TableColumn>
                    <Button icon onClick={() => props.editAdmin(a._id)}>edit</Button>
                    <Button icon onClick={() => props.removeAdmin(a._id)}>delete</Button>
                  </TableColumn>
                </TableRow>
              ))
            }
          </TableBody>
        </DataTable>
      </Card>

      <div className='md-cell md-cell--3'></div>

      <NewAdmin
        visible={props.showModal}
        addAdmin={(credentials, callback) => props.addAdmin(credentials, callback)}
        rejectAction={() => props.setModalVisibility(false)}
      />
    </div>
  )
}

export default TableAdmins
