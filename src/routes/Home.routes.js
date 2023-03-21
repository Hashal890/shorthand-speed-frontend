import React from "react";
import {
  Button,
  Divider,
  Flex,
  Tab,
  TabList,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import HomeTop from "../components/Home/HomeTop";
import RedirectLinkBlock from "../components/Home/RedirectLinkBlock";
import { HomeBars } from "../assets/data";
// import HomeBarElement from "../components/Home/HomeBarElement";

const Home = () => {
  return (
    <Flex maxW={"1200px"} m={"auto"} flexDir={"column"}>
      <HomeTop />
      <Divider />
      <RedirectLinkBlock />
      <Divider />
      <Tabs size={"md"} variant={"enclosed"} my={3}>
        <TabList>
          {HomeBars.forEach((el) => {
            <Tab>{el.name}</Tab>;
          })}
        </TabList>
        <TabPanels></TabPanels>
      </Tabs>
      <Button
        bg={"orange.500"}
        color={"whiteAlpha.900"}
        _hover={{ bg: "orange.600", color: "whiteAlpha.900" }}
        maxW={"150px"}
        m={"auto"}
      >
        more..
      </Button>
    </Flex>
  );
};

export default Home;
