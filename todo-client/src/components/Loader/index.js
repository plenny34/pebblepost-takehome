import { CircularProgress } from '@mui/material';
import { styled } from '@mui/system';

const StyledLoader = styled(CircularProgress)`
  color: #0e0e2c;
`;

export const Loader = () => {
  return <StyledLoader />;
};
