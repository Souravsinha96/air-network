import {
  Autocomplete,
  FormControl,
  InputLabel,
  TextField,
} from "@mui/material";
import { Controller } from "react-hook-form";

const CustomAutocomplete = ({ label, name, control, options }) => {
  return (
    <Controller
      render={({ field }) => (
        <Autocomplete
          {...field}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          disablePortal
          id="combo-box-demo"
          options={options || []}
          renderInput={(params) => (
            <FormControl focused size="small" fullWidth>
              <InputLabel shrink={true} id="from-label">
                {label}
              </InputLabel>
              <TextField
                value={""}
                {...params}
                required
                label={label}
                color="primary"
                focused
                variant="outlined"
                size="small"
              />
            </FormControl>
          )}
        />
      )}
      name={name}
      control={control}
    />
  );
};
export default CustomAutocomplete;
