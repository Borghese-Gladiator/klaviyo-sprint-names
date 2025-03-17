// Word API - get list of sprint words + definitions

export default function handler(req, res) {
  const sprintListGroups ={
    "2025": [
      { id: 1, date: "01/01 - 01/12", sprintName: "Bumfuzzle", definition: "To bumfuzzle is to confuse or fluster. It is colloquial, meaning it is typically used in informal conversation.", paragraphs: Array(3).fill("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.") },
      { id: 2, date: "01/15 - 01/26", sprintName: "Cattywampus", definition: "Something that is in disarray or askew. Often used in Southern dialect.", paragraphs: Array(3).fill("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.") },
    ],
    "2024": [
      { id: 3, date: "02/01 - 02/12", sprintName: "Lollygag", definition: "To spend time aimlessly; dawdle.", paragraphs: Array(3).fill("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.") },
      { id: 4, date: "02/15 - 02/26", sprintName: "Pettifogger", definition: "A lawyer whose methods are petty, underhanded, or disreputable.", paragraphs: Array(3).fill("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.") },
    ],
  }
  res.status(200).json(sprintListGroups);
}
