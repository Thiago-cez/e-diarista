import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

export const TextFieldStyled = styled(TextField)`
  .MuiInputBase-roott {
    background-color: ${({ theme }) => theme.palette.grey[50]};
  }

  .MuiInputBase-notchedOutline {
    border-color: ${({ theme }) => theme.palette.grey[100]};
  }
`;
