import React, { useState, useContext } from "react";
import { BudgetContext } from "../../context/budget-context";
import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  const { user } = useContext(BudgetContext);

  const toast = useToast();
  const navigate = useNavigate();

  const handleClick = () => setShow(!show);

  const submitHandler = async () => {
    setLoading(true);
    if (!email || !password) {
      toast({
        title: "Hãy điền vào những chỗ còn trống",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }
    console.log(email, password);

    try {
      const result = await signInWithEmailAndPassword(auth, email, password); //fb

      toast({
        title: "Đăng nhập thành công",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });

      //console.log(result, "userInfo on sign up");
      setLoading(false);
      navigate("/transactions");
    } catch (error) {
      console.log(error.message);
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };

  return (
    <VStack spacing="10px">
      <FormControl id="email" isRequired>
        <FormLabel>Địa chỉ Email</FormLabel>
        <Input
          value={email}
          type="email"
          focusBorderColor="pink.400"
          placeholder="Nhập địa chỉ email"
          onChange={(e) => setEmail(e.target.value)}
          errorBorderColor="red.300"
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Mật khẩu</FormLabel>
        <InputGroup size="md">
          <Input
            value={password}
            focusBorderColor="pink.400"
            onChange={(e) => setPassword(e.target.value)}
            type={show ? "text" : "password"}
            placeholder="Nhập mật khẩu"
            errorBorderColor="red.300"
          />
          <InputRightElement width="4.5rem">
            <Button
              colorScheme="purple"
              h="1.75rem"
              size="sm"
              onClick={handleClick}
            >
              {show ? "Ẩn" : "Hiện"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        fontWeight="bold"
        colorScheme="pink"
        width="100%"
        style={{ marginTop: "15px" }}
        onClick={submitHandler}
        isLoading={loading}
      >
        Đăng nhập
      </Button>
      <Button
        fontWeight="bold"
        variant="solid"
        colorScheme="purple"
        width="100%"
        disabled={user}
        onClick={() => {
          setEmail("guest@test.com");
          setPassword("guesttest");
          setTimeout(() => {
            submitHandler();
          }, 50);
        }}
        isLoading={loading}
      >
        Tài khoản khách
      </Button>
    </VStack>
  );
};

export default Login;
