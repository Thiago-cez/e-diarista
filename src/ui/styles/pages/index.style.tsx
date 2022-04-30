import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";

export const FormElementsContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)};
  max-width: 650px;
  margin: 0 auto ${({ theme }) => theme.spacing(7)};
`;

export const ProfissionaisPaper = styled(Paper)`
  padding: ${({ theme }) => theme.spacing(7)};
  margin: 0 auto ${({ theme }) => theme.spacing(10)};
`;
export const ProfissionaisContainer = styled("div")`
  margin: 0 auto ${({ theme }) => theme.spacing(10)};
`;
