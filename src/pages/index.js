import Head from "next/head";
import NextLink from "next/link";

import { Box, Container, Link as ChakraLink, Flex, Heading } from "@chakra-ui/react";
import { Github } from "lucide-react";

import SprintList from "@/components/SprintList";
import SprintTable from "@/components/SprintTable";


const LinkFAB = () => {
  return (
    <ChakraLink
      href="https://github.com/Borghese-Gladiator/klaviyo-sprint-names"
      display="flex"
      alignItems="center"
      justifyContent="center"
      w="3rem"
      h="3rem"
      borderRadius="full"
      bg="blue.500"
      color="white"
      _hover={{ bg: "blue.600" }}
      _active={{ bg: "blue.700" }}
      boxShadow="md"
    >
      <Github />
    </ChakraLink>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>SPRINT NAMES Data Dictionary</title>
        <meta name="description" content="Quick website to group the interesting word sprint names with their definitions for people at work." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Flex p={4}>
          <Flex marginEnd="auto">
            <Heading size="4xl">
              SPRINT NAMES Data Dictionary
            </Heading>
          </Flex>
          <Flex>
            <LinkFAB />
          </Flex>
        </Flex>
        <Box p={4}>
          <SprintTable />
          <SprintList />
        </Box>
      </main>
    </>
  );
}
