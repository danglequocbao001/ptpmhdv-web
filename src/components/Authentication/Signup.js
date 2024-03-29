import React, { useState, useContext } from "react";
import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { BudgetContext } from "../../context/budget-context";

const Signup = () => {
  const [show, setShow] = useState(false);

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  const { user } = useContext(BudgetContext);

  const toast = useToast();
  const navigate = useNavigate();

  const handleClick = () => setShow(!show);

  const submitHandler = async () => {
    setLoading(true);

    console.log("signup button clicked");

    if (!name || !email || !password || !confirmpassword) {
      toast({
        title: "Hãy điền vào những chỗ còn trống",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }

    if (password !== confirmpassword) {
      toast({
        title: "Passwords Do Not Match",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }

    console.log(name, email, "on Signup name email");

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
        name
      );

      toast({
        title: `Sign-Up Successful.`,
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });

      ///console.log(result, "userInfo on sign up");

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
    <VStack spacing="5px">
      <FormControl id="first-name" isRequired>
        <FormLabel>Họ Tên</FormLabel>
        <Input
          placeholder="Nhập họ tên"
          onChange={(e) => setName(e.target.value)}
          focusBorderColor="pink.400"
          errorBorderColor="red.300"
        />
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel>Địa Chỉ Email</FormLabel>
        <Input
          type="email"
          placeholder="Nhập địa chỉ email"
          onChange={(e) => setEmail(e.target.value)}
          focusBorderColor="pink.400"
          errorBorderColor="red.300"
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Mật khẩu</FormLabel>
        <InputGroup size="md">
          <Input
            type={show ? "text" : "password"}
            placeholder="Nhập mật khẩu"
            onChange={(e) => setPassword(e.target.value)}
            focusBorderColor="pink.400"
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
      <FormControl id="password" isRequired>
        <FormLabel>Xác nhận mật khẩu</FormLabel>
        <InputGroup size="md">
          <Input
            type={show ? "text" : "password"}
            placeholder="Xác nhận mật khẩu"
            onChange={(e) => setConfirmpassword(e.target.value)}
            focusBorderColor="pink.400"
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
        style={{ marginTop: "15px", fontWeight: "bold" }}
        onClick={submitHandler}
        isLoading={loading}
        disabled={user}
      >
        {user ? "Already Loged In !!" : "Signup"}
      </Button>
    </VStack>
  );
};

export default Signup;
