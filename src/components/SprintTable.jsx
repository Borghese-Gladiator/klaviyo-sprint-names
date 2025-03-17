// Table to show sprints per year (date, sprint name, word definition)

import { Box, Collapsible, Container, Heading, Table } from "@chakra-ui/react"

export default function SprintTable({ sprintListGroups }) {
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
