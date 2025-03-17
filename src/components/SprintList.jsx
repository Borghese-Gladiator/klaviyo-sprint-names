// List of dropdowns with sprint information

import { Box, Collapsible, Heading, Stack, Text } from "@chakra-ui/react"

export default function SprintTable({ sprintListGroups }) {
  return (
    <Box p={2}>
      {Object.entries(sprintListGroups)
        .sort(([a], [b]) => b.localeCompare(a))
        .map(([year, sprintList]) => (
          <Box key={year} mb={4}>
            <Heading size="xl" mb={2}>{year}</Heading>
            {sprintList.map(({ id, date, sprintName, definition, paragraphs }) => (
              <Collapsible.Root defaultOpen>
                <Collapsible.Trigger>
                  <Heading size="2xl">{sprintName}</Heading>
                </Collapsible.Trigger>
                <Collapsible.Content>
                  <Box p={2} borderWidth="1px" borderRadius="lg">
                    <Heading size="lg">{date}</Heading>
                    <Heading size="md">{definition}</Heading>
                    <Stack>
                      {paragraphs.map((paragraph, idx) => (
                        <Text key={idx}>{paragraph}</Text>
                      ))}
                    </Stack>
                  </Box>
                </Collapsible.Content>
              </Collapsible.Root>
            ))}
          </Box>
        ))}
    </Box>
  )
}

