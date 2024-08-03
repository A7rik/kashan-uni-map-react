import { Box, Typography, TextField, Button } from '@mui/material';

const Collaborate = () => (
  <Box mt={4}>
    <Typography variant="h6">Collaborate</Typography>
    <TextField label="Suggest a Change" fullWidth sx={{ mt: 2 }} />
    <Button variant="contained" color="primary" sx={{ mt: 2 }}>
      Submit Suggestion
    </Button>
  </Box>
);

export default Collaborate;
