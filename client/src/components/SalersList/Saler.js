import React from 'react'

const SalerList = (props) => {
  /* return (
    <div className='md-grid'>
      <div className='md-cell md-cell--3'></div>

      <Card tableCard style={styles.container} className='md-cell md-cell--6'>
        <DataTable baseId='tableAdmins' plain>
          <TableHeader>
            <TableRow>
              <TableColumn>Nombre</TableColumn>
              <TableColumn>Contraseña</TableColumn>
              <TableColumn>
                <Button
                  style={{ fontSize: 20 }}
                  icon
                  onClick={() => {
                    props.setTypeModal('add')
                    props.setModalVisibility(true)
                  }}
                >
                    person_add
                  </Button>
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
                    <Button
                      icon
                      onClick={() => {
                        props.setTypeModal('edit')
                        props.setModalVisibility(true)
                        props.openModalToEdit({ _id: a._id, username: a.username, password: a.password })
                      }}
                    >
                      edit
                    </Button>
                    <Button icon onClick={() => props.removeAdmin(a)}>
                      delete
                    </Button>
                  </TableColumn>
                </TableRow>
              ))
            }
          </TableBody>
        </DataTable>
      </Card>

      <div className='md-cell md-cell--3'></div>
    </div>
  ) */

  const { saler } = props

  return (
    <div className='md-grid'>
      <ul>
        <li>{saler.name}</li>
      </ul>
    </div>
  )
}

export default SalerList
