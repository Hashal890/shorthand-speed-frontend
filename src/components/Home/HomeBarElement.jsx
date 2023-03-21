import { Box, TabPanel, Text } from "@chakra-ui/react";
import React from "react";

const HomeBarElement = ({ name, bgColor }) => {
  return (
    <TabPanel>
      <Box bg={bgColor}>Dictation No.</Box>
      <Box>
        <Text>Dictation No.</Text>
        <Text>{name}</Text>
      </Box>
    </TabPanel>
  );
};

export default HomeBarElement;
