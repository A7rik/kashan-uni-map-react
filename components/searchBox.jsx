import { Box } from "@mui/material";
import { TextField } from "@mui/material";

export default function searchBox(props) {
  return (
    <Box className="search-box">
    <TextField
      id="outlined-search"
      label="Search"
      type="search"
      variant="outlined"
      size="small"
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: '20px',
          backgroundColor:'white',
          
        },
      }}
    />
  </Box>
  );
}
