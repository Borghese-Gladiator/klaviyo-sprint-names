// Table to show sprints per year (date, sprint name, word definition)

import { Box, Collapsible, Container, Heading, Table } from "@chakra-ui/react"

export default function SprintTable() {
  const sprintListGroups = {
    "2025": [
      { id: 1, date: "01/01 - 01/12", sprintName: "Bumfuzzle", definition: "To bumfuzzle is to confuse or fluster. It is colloquial, meaning it is typically used in informal conversation." },
      { id: 2, date: "01/15 - 01/26", sprintName: "Cattywampus", definition: "Something that is in disarray or askew. Often used in Southern dialect." },
    ],
    "2024": [
      { id: 3, date: "02/01 - 02/12", sprintName: "Lollygag", definition: "To spend time aimlessly; dawdle." },
      { id: 4, date: "02/15 - 02/26", sprintName: "Pettifogger", definition: "A lawyer whose methods are petty, underhanded, or disreputable." },
    ],
  }

  return (
    <Container maxWidth="2xl">
      {Object.entries(sprintListGroups)
        .sort(([a], [b]) => b.localeCompare(a))
        .map(([year, sprintList]) => (
          <Collapsible.Root defaultOpen>
            <Collapsible.Trigger>
              <Heading size="2xl">{year}</Heading>
            </Collapsible.Trigger>
            <Collapsible.Content>
              <Table.Root striped size="lg">
                <Table.Header>
                  <Table.Row>
                    <Table.ColumnHeader>Date</Table.ColumnHeader>
                    <Table.ColumnHeader>Sprint Name</Table.ColumnHeader>
                    <Table.ColumnHeader>Word Definition</Table.ColumnHeader>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {sprintList.map((item) => (
                    <Table.Row key={item.id}>
                      <Table.Cell whiteSpace="nowrap">{item.date}</Table.Cell>
                      <Table.Cell>{item.sprintName}</Table.Cell>
                      <Table.Cell>{item.definition}</Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table.Root>
            </Collapsible.Content>
          </Collapsible.Root>
      ))}
    </Container>
  )
}
