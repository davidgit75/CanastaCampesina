import React from 'react'
import List from 'react-md/lib/Lists/List'
import ListItem from 'react-md/lib/Lists/ListItem'
import Avatar from 'react-md/lib/Avatars'
import FontIcon from 'react-md/lib/FontIcons'
import Divider from 'react-md/lib/Dividers'
import Subheader from 'react-md/lib/Subheaders'
import MenuButton from 'react-md/lib/Menus/MenuButton'

const InfoIcon = (props) => {
  const { editSaler, removeSaler } = props
  return (
    <MenuButton
      id="vert-menu"
      icon
      buttonChildren="more_vert"
      className="menu-example"
    >
      <ListItem onClick={() => editSaler()} primaryText="Editar" />
      <ListItem onClick={() => removeSaler()} primaryText="Eliminar" />
    </MenuButton>
  )
}

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

  const { saler, editSaler, removeSaler } = props

  return (
    <List className="md-cell md-cell--middle md-cell--6 md-paper md-paper--1">
      {/* <Subheader primaryText="Productor" /> */}
      <ListItem
        leftAvatar={<Avatar suffix={saler.products.length ? 'blue' : 'red'} icon={<FontIcon>person_pin</FontIcon>} />}
        rightIcon={<InfoIcon editSaler={() => editSaler(saler)} removeSaler={() => removeSaler(saler._id)} />}
        primaryText={saler.name}
        secondaryText={saler.products.length ? `Muestra: ${saler.products[0].name}` : 'Sin productos aún'}
      />
    </List>
  )
}

export default SalerList
