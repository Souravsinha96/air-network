import { Button } from "@mui/material";

const LoginButton = ({ text }) => {
  return (
    <Button type="submit" variant="contained" color="primary" fullWidth>
      {text}
    </Button>
  );
};
export default LoginButton;
