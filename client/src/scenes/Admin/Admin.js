import React from 'react'
import CSSTransitionGroup from 'react-addons-css-transition-group'
import Tabs from 'react-md/lib/Tabs/Tabs'
import Tab from 'react-md/lib/Tabs/Tab'
import Toolbar from 'react-md/lib/Toolbars'
import TabsContainer from 'react-md/lib/Tabs/TabsContainer'
import Button from 'react-md/lib/Buttons'

import TableAdmins from '../../components/TableAdmins'

const styles = {
  container: {
    margin: 0
  }
}

const Admin = (props) => {
  return (
    <TabsContainer
      fixed
      headerStyle={styles.container}
      colored
      toolbar={
        <Toolbar
          title='Canasta Campesina'
          actions={<Button raised secondary key='logoutButton' label='Salir' onClick={() => props.logout()} />}
        />
      }
    >
      <Tabs tabId="tab" centered>
        <Tab label="Productores">
          <h3 className="md-cell md-cell--12">Hello, World!</h3>
        </Tab>
        <Tab label="Administradores">
          <TableAdmins />
        </Tab>
      </Tabs>
    </TabsContainer>
  )
}

export default Admin
