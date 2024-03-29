import React, { useContext, useEffect } from "react";
//import { useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import { BudgetContext } from "../context/budget-context";
import TransactionPage from "./TransactionPage";
import { useNavigate } from "react-router-dom";
import Alerts from "../components/Alerts";

//import { useToast } from "@chakra-ui/toast";

const HomePage = () => {
  const { user } = useContext(BudgetContext);
  const navigate = useNavigate();
  //const navigate = useNavigate();

  // useEffect(() => {
  //   if (user) {
  //     navigate("/transactions");
  //   }
  // }, [navigate]);

  return (
    <React.Fragment>
      {user ? (
        <Alerts />
      ) : (
        // <TransactionPage />
        <Container maxW="xl" centerContent>
          <Box
            d="flex"
            justifyContent="center"
            margin="2rem 0 1rem 0"
            p={3}
            borderRadius="lg"
            borderColor="black"
            borderWidth="1px"
            w="100%"
            bg="#009adb"
          >
            <Text
              color="gray.100"
              fontSize="4xl"
              fontFamily="Work sans"
              fontWeight="bold"
            >
              Thu Chi
            </Text>
          </Box>
          <Box
            bg="purple.50"
            w="100%"
            p={4}
            borderRadius="lg"
            borderColor="black"
            borderWidth="1px"
          >
            <Tabs isFitted variant="soft-rounded" colorScheme="pink">
              <TabList mb="1em">
                <Tab fontWeight="bold">Đăng Nhập</Tab>
                <Tab fontWeight="bold">Đăng Ký</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Login />
                </TabPanel>
                <TabPanel>
                  <Signup />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Container>
      )}
    </React.Fragment>
  );
};

export default HomePage;
