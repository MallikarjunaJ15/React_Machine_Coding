export const checkboxData = {
  id: "1",
  name: "Parent 1",
  isChecked: false,
  children: [
    {
      id: "2",
      name: "Parent 2",
      isChecked: false,
      children: [
        {
          id: "3",
          name: "Child 1",
          isChecked: false,
        },
        {
          id: "4",
          name: "Child 2",
          isChecked: false,
        },
        {
          id: "5",
          name: "Child 3",
          isChecked: false,
          children: [
            {
              id: "6",
              name: "Child 4",
              isChecked: false,
            },
            {
              id: "7",
              name: "Child 5",
              isChecked: false,
            },
          ],
        },
      ],
    },
    {
      id: "8",
      name: "Parent 3",
      isChecked: false,
    },
    {
      id: "9",
      name: "Parent 4",
      isChecked: false,
    },
    {
      id: "10",
      name: "Parent 5",
      isChecked: false,
    },
  ],
};
