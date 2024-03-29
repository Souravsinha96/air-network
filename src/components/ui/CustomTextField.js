import { FormControl, InputLabel, TextField } from "@mui/material";
import { Controller } from "react-hook-form";

const CustomTextField = ({ label, name, control }) => {
  return (
    <Controller
      render={({ field }) => (
        <FormControl focused size="small" fullWidth>
          <InputLabel shrink={true} id="from-label">
            {label}
          </InputLabel>
          <TextField
            {...field}
            label={label}
            focused
            required
            color="primary"
            variant="outlined"
            size="small"
          />
        </FormControl>
      )}
      name={name}
      control={control}
    />
  );
};
export default CustomTextField;
