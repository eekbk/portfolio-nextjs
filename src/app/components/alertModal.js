import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material'

const AlertModal = ({ isDialogOpen, handleDialogClose, responseMessage }) => {
  return (
    <Dialog
      open={isDialogOpen}
      onClose={handleDialogClose}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-message"
    >
      <DialogTitle id="dialog-title">
        {responseMessage?.isSuccessful
          ? 'Message Sent!'
          : 'Message NOT sent...'}
      </DialogTitle>
      <DialogContent>{responseMessage.message}</DialogContent>
      <DialogActions>
        <Button onClick={handleDialogClose} autoFocus>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default AlertModal
