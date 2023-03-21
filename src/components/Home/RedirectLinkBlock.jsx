import React from "react";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { AiOutlineCaretRight } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

const RedirectLinkBlock = () => {
  return (
    <Box maxW={"600px"} my={6}>
      <Heading mb={3}>The Complete English Shorthand Course</Heading>
      <Text mb={3}>
        Learn Shorthand From Zero: Take this course if you would like to learn
        shorthand step by step, if you want to learn it right, right from the
        beginning so this course is for you. Start Your Shorthand Online Course
        Now.
      </Text>
      <Flex gap={2} alignItems={"center"} mb={3}>
        <AiFillStar color={"gold"} fontSize={"24px"} />
        <AiFillStar color={"gold"} fontSize={"24px"} />
        <AiFillStar color={"gold"} fontSize={"24px"} />
        <AiFillStar color={"gold"} fontSize={"24px"} />
        <AiFillStar color={"gold"} fontSize={"24px"} />
      </Flex>
      <Button leftIcon={<AiOutlineCaretRight />} colorScheme={"teal"} mb={8}>
        Enroll Now
      </Button>
    </Box>
  );
};

export default RedirectLinkBlock;
