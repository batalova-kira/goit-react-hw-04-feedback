import { Box } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <Box>
      <h2>{title}</h2>
      {children}
    </Box>
  );
};

export default Section;
