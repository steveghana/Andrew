import { Box, Typography } from "@mui/material";

const Welcome = () => {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <Typography variant="h2">Welcome Page</Typography>
    </Box>
  );
};

export default Welcome;
