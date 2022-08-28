import { FormControl, TextField } from "@mui/material";
import { Controller } from "react-hook-form";

const CustomDateField = ({ label, name, control }) => {
  return (
    <Controller
      render={({ field }) => (
        <FormControl size="small" fullWidth>
          <InputLabel shrink={true} id="from-label">
            {label}
          </InputLabel>
          <TextField
            {...field}
            required
            label={label}
            focused
            color="primary"
            variant="outlined"
            size="small"
            type="date"
          />
        </FormControl>
      )}
      name={name}
      control={control}
    />
  );
};
export default CustomDateField;
