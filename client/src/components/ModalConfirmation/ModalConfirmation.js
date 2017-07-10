import React from 'react'
import Dialog from 'react-md/lib/Dialogs'
import Button from 'react-md/lib/Buttons/Button'

const ModalConfirmation = (props) => {
  return (
    <Dialog
      id="modalModalActionAdmin"
      visible={props.visible}
      title={props.title}
      aria-labelledby="modalNewAdminDescription"
      modal
      actions={[{
        onClick: () => props.action(),
        primary: true,
        label: 'Confirmar',
      }, {
        onClick: () => props.close(),
        primary: true,
        label: 'Cancelar',
      }]}
    />
  )
}

export default ModalConfirmation
