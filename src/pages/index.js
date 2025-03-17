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
  const sprintListGroups = {
    "2025": [
      { id: 1, date: "01/01 - 01/12", sprintName: "Bumfuzzle", definition: "To bumfuzzle is to confuse or fluster. It is colloquial, meaning it is typically used in informal conversation.", paragraphs: Array(3).fill("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.") },
      { id: 2, date: "01/15 - 01/26", sprintName: "Cattywampus", definition: "Something that is in disarray or askew. Often used in Southern dialect.", paragraphs: Array(3).fill("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.") },
    ],
    "2024": [
      { id: 3, date: "02/01 - 02/12", sprintName: "Lollygag", definition: "To spend time aimlessly; dawdle.", paragraphs: Array(3).fill("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.") },
      { id: 4, date: "02/15 - 02/26", sprintName: "Pettifogger", definition: "A lawyer whose methods are petty, underhanded, or disreputable.", paragraphs: Array(3).fill("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.") },
    ],
  }
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
          <SprintTable sprintListGroups={sprintListGroups} />
          <SprintList sprintListGroups={sprintListGroups} />
        </Box>
      </main>
    </>
  );
}
