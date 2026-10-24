const explorer = [
  {
    id: "1",
    name: "root",
    isFolder: true,
    items: [
      {
        id: "2",
        name: "src",
        isFolder: true,
        items: [{ id: "3", name: "data.js", isFolder: false }],
      },
      {
        id: "2",
        name: "components",
        isFolder: true,
        items: [{ id: "4", name: "folder.jsx", isFolder: false }],
      },
      {
        id: "5",
        name: "pagination.jsx",
        isFolder: false,
        items: [],
      },
    ],
  },
  {
    id: "1",
    name: "public",
    isFolder: true,
    items: [
      {
        id: "2",
        name: "assets",
        isFolder: true,
        items: [{ id: "3", name: "image.png", isFolder: false }],
      },
      {
        id: "2",
        name: "config",
        isFolder: true,
        items: [{ id: "4", name: "data.js", isFolder: false }],
      },
    ],
  },
];
export default explorer;
