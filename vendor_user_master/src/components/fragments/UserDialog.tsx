import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import AddIcon from '@mui/icons-material/Add';
import { MenuItem } from '@mui/material';

export default function UserDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{ textTransform: 'none' }}
          onClick={handleClickOpen}
        >
          Add New
        </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            component: 'form',
            onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries((formData as any).entries());
              const email = formJson.email;
              console.log(email);
              handleClose();
            },
          },
        }}
      >
        <DialogTitle>Add User</DialogTitle>
        <DialogContent>
          <DialogContentText>User ID
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="uid"
            name="uid"
            label="User ID"
            type="text"
            fullWidth
            variant="standard"
          />
          <DialogContentText>
            User Name
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="uname"
            name="uname"
            label="User Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <DialogContentText>
            Entity
          </DialogContentText>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Entity"
            sx={{ width: 250, height: 50 }}
          >
            <MenuItem value={1000}>ABC Private Limited</MenuItem>
            <MenuItem value={1010}>DEF Housing Limited</MenuItem>
            <MenuItem value={1100}>XYZ Private Limited</MenuItem>
          </Select>
          <DialogContentText>
            Role
          </DialogContentText>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Entity"
            sx={{ width: 250, height: 50 }}
          >
            <MenuItem value={'ADMIN'}>Admin</MenuItem>
            <MenuItem value={'BYR'}>Buyer </MenuItem>
            <MenuItem value={'PM'}>Proc. Manager</MenuItem>
            <MenuItem value={'QA'}>Quality Manager</MenuItem>
            <MenuItem value={'ISP'}>Insp. Manager</MenuItem>   
          </Select>
        </DialogContent>
        <DialogActions>
          <Button type="submit">Submit</Button>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
