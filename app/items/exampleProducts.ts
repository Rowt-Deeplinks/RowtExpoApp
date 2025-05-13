export interface Item {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  content: string;
}
export const items: Item[] = [
  {
    id: "1",
    name: "Item 1",
    description: "Description for Item 1",
    imageUrl: "https://example.com/image1.jpg",
    content: "Content for Item 1",
  },
  {
    id: "2",
    name: "Item 2",
    description: "Description for Item 2",
    imageUrl: "https://example.com/image2.jpg",
    content: "Content for Item 2",
  },
  {
    id: "3",
    name: "Item 3",
    description: "Description for Item 3",
    imageUrl: "https://example.com/image3.jpg",
    content: "Content for Item 3",
  },
];
