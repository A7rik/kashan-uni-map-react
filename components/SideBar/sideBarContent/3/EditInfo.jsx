import { Box, Typography, TextField, Button } from '@mui/material';

const EditInfo = () => (
  <Box mt={4}>
    <Typography variant="h6">Edit Information</Typography>
    <TextField label="Name" fullWidth sx={{ mt: 2 }} />
    <TextField label="Email" fullWidth sx={{ mt: 2 }} />
    <Button variant="contained" color="primary" sx={{ mt: 2 }}>
      Save Changes
    </Button>
  </Box>
);

export default EditInfo;
