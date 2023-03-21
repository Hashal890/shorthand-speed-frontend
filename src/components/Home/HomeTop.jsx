import React from "react";
import {
  AspectRatio,
  Box,
  Flex,
  Heading,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const HomeTop = () => {
  return (
    <Box mb={6}>
      <Heading textAlign={"center"} py={6} fontWeight={600}>
        Increase Your Shorthand Speed with Us
      </Heading>
      <Flex
        flexDir={["column", "column", "row"]}
        gap={[0, 0, 6]}
      >
        <Box w={["100%", "100%", "50%"]}>
          <Text fontSize={"26px"}>Hello Shorthand Aspirants!!</Text>
          <Text pb={6}>
            You have finally turned your career in the right direction by coming
            to our Website. You would have already known and learnt about the
            skill of Shorthand, it’s uses and would have most probably gone
            through the rules and exercises of the Book. Let’s define this
            Interesting topic again.
          </Text>
          <Text mb={10}>" Write, Type and Analyse Your Shorthand Skill "</Text>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Link
              to={
                "https://play.google.com/store/apps/details?id=com.shorthandspeed"
              }
            >
              <Image
                src={"https://www.shorthandspeed.com/assets/images/android.jpg"}
                alt={"Play Store"}
                maxW={"150px"}
              />
            </Link>
          </Box>
        </Box>
        <Box w={["100%", "100%", "50%"]}>
          <Tabs isFitted>
            <TabList mb={"1em"}>
              <Tab>English</Tab>
              <Tab>Hindi</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <AspectRatio ratio={2}>
                  <iframe
                    title="English translation"
                    src="https://www.youtube.com/embed/_aWnIMOkOUY"
                    allowFullScreen
                    style={{ borderRadius: "10px" }}
                  />
                </AspectRatio>
              </TabPanel>
              <TabPanel>
                <AspectRatio ratio={2}>
                  <iframe
                    title="English translation"
                    src="https://www.youtube.com/embed/_lId6Lg8z-0"
                    allowFullScreen
                    style={{ borderRadius: "10px" }}
                  />
                </AspectRatio>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </Box>
  );
};

export default HomeTop;
