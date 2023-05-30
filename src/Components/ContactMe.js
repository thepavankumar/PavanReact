import React from 'react'
import { useState } from "react";
import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

function ContactMe() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const [isLoading, setIsLoading] = useState(false);
      const [isSubmitted, setIsSubmitted] = useState(false);
    
      const onSubmit = async (data) => {
        setIsLoading(true);
        // Simulating an API call or form submission
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsLoading(false);
        setIsSubmitted(true);
      };
    
      const onBlurValidation = (e) => {
        const { name } = e.target;
        const fieldError = errors[name];
        if (fieldError) {
          // Handle onBlur validation here
          console.log(`${name} field has an error: ${fieldError.message}`);
        }
      };
    
    return (
        <Flex direction={{ base: "column", md: "row" }} width="100%">
            <Box flex={{ base: "1", md: "0.7" }} width="100%"   px={{ base: "10px", md: "100px" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={errors.name} mb={4}>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                id="name"
                type="text"
                {...register("name", {
                  required: "Name is required",
                })}
                onBlur={onBlurValidation}
              />
              <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
            </FormControl>
    
            <FormControl isInvalid={errors.email} mb={4}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                onBlur={onBlurValidation}
              />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>
    
            <FormControl isInvalid={errors.phone} mb={4}>
              <FormLabel htmlFor="phone">Phone Number</FormLabel>
              <Input
                id="phone"
                type="tel"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^\d{10}$/,
                    message: "Invalid phone number",
                  },
                })}
                onBlur={onBlurValidation}
              />
              <FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
            </FormControl>
    
            <FormControl isInvalid={errors.message} mb={4}>
              <FormLabel htmlFor="message">Message</FormLabel>
              <Textarea
                id="message"
                {...register("message", {
                  required: "Message is required",
                })}
                onBlur={onBlurValidation}
              />
              <FormErrorMessage>{errors.message?.message}</FormErrorMessage>
            </FormControl>
    
            <Button
              type="submit"
              isLoading={isLoading}
              loadingText="Submitting..."
              colorScheme="teal"
              mb={4}
            >
              Submit
            </Button>
    
            {isSubmitted && (
              <Box color="green.500" textAlign="center">
                Thank you for your submission!
              </Box>
            )}
          </form>
          </Box>
          <Box flex={{ base: "1", md: "0.3" }} width="100%"   px={{ base: "10px", md: "100px" }}>
        {/* Content for the smaller part (30%) */}
      </Box>
          </Flex>
      );
}

export default ContactMe