import React from 'react'
import List from 'react-md/lib/Lists/List'
import ListItem from 'react-md/lib/Lists/ListItem'
import Avatar from 'react-md/lib/Avatars'
import FontIcon from 'react-md/lib/FontIcons'
import Divider from 'react-md/lib/Dividers'
import Subheader from 'react-md/lib/Subheaders'
import MenuButton from 'react-md/lib/Menus/MenuButton'

const InfoIcon = (props) => {
  const { openModal, removeSaler, showInfo } = props
  return (
    <MenuButton
      id="vert-menu"
      icon
      buttonChildren="more_vert"
      className="menu-example"
    >
      <ListItem onClick={() => showInfo()} primaryText="Ver" />
      <ListItem onClick={() => openModal()} primaryText="Editar" />
      <ListItem onClick={() => removeSaler()} primaryText="Eliminar" />
    </MenuButton>
  )
}

const SalerList = (props) => {
  const { saler, openModal, removeSaler, setFocusedSaler } = props

  return (
    <List className="md-cell md-cell--middle md-cell--6 md-paper md-paper--1">
      {/* <Subheader primaryText="Productor" /> */}
      <ListItem
        leftAvatar={<Avatar suffix={saler.products.length ? 'blue' : 'red'} icon={<FontIcon>person_pin</FontIcon>} />}
        rightIcon={<InfoIcon showInfo={() => setFocusedSaler()} openModal={() => openModal()} removeSaler={() => removeSaler(saler._id)} />}
        primaryText={saler.name}
        secondaryText={saler.products.length ? `Muestra: ${saler.products[0].name}` : 'Sin productos aún'}
      />
    </List>
  )
}

export default SalerList
