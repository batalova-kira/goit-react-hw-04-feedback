import { Box } from '../Section.styled';

const Notification = ({ message }) => {
  return (
    <Box>
      <h2>{message}</h2>
    </Box>
  );
};

export default Notification;
