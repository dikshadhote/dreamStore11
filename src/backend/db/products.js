import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    categoryName: "Sofas & armchairs",
    orignalPrice: 10000,
    subtitle: "Wing Chair,grey",
    description:
      "A comfortable arm chair available in grey, white, black color",

    discountPrice: 7999,
    rating: 4,
    productImg:
      "https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129803.jpg?w=740",
  },
  {
    _id: uuid(),
    categoryName: "Cookware & Table ware",
    orignalPrice: 6000,
    subtitle: "Kitchen Utensils",
    description: "All kitchen utensils which can satisfy your daily needs",

    discountPrice: 4999,
    rating: 3,
    productImg:
      "https://media.istockphoto.com/photos/kitchen-utensil-picture-id476392316?k=20&m=476392316&s=612x612&w=0&h=ZRITFwJHbJ1rzJYepXzLcgV3VjpZ5Kp5kbRR28sWqEo=",
  },
  {
    _id: uuid(),
    categoryName: "Smart home",
    orignalPrice: 25000,
    subtitle: "Smart Lighting",
    description: "Control lighting of all of your home just on one click.",

    discountPrice: 22999,
    rating: 2,
    productImg:
      "https://media.istockphoto.com/photos/smart-home-picture-id1020969630?k=20&m=1020969630&s=612x612&w=0&h=oaIPzwIkHY7_SYz17ihWgFqm48IO3MhxLvGpBQsStro=",
  },
  {
    _id: uuid(),
    categoryName: "Table & Desk",
    orignalPrice: 30000,
    subtitle: "Dining Table",
    description:
      "Dive into an affordable dining room that's luxurious and the best way to impress your dinner guests!",

    discountPrice: 28999,
    rating: 1,
    productImg:
      "https://img.freepik.com/free-photo/modern-dining-room-interior-design-with-white-wall_41470-3331.jpg?t=st=1647774781~exp=1647775381~hmac=c7975bf97f83c7d56511026676ba11efd366dea0eb0a6fda80581a3df5328afd&w=740",
  },
  {
    _id: uuid(),
    categoryName: "Storage & Organisation",
    orignalPrice: 5000,
    subtitle: "Book shelve",
    description:
      "Spacious and neat, you can display all your beautiful objects in our well-designed shelving units",

    discountPrice: 3999,
    rating: 2,
    productImg:
      "https://img.freepik.com/free-psd/interior-room-with-shelves-decoration_176382-526.jpg?t=st=1647775070~exp=1647775670~hmac=48518de4df8dcb094ce973d62214999c3a3e5aa746623c0f070bfd812f81e85a&w=740",
  },
  {
    _id: uuid(),
    categoryName: "Chairs",
    orignalPrice: 9000,
    subtitle: "Ergonomoc chair",
    description:
      "This chair helps to keep your back straight while working for long hours.",

    discountPrice: 7999,
    rating: 3,
    productImg:
      "https://media.istockphoto.com/photos/office-chair-at-the-studying-desk-picture-id1058683954?b=1&k=20&m=1058683954&s=170667a&w=0&h=ub7t77XQjVE2YR2s_kNoNKw3MGtJyoB1UB0jfxYHI2M=",
  },
  {
    _id: uuid(),
    categoryName: "Mirrors",
    orignalPrice: 5000,
    subtitle: "Round mirror",
    description:
      "Round base sink mirror which will add asthetics to your bathroom",

    discountPrice: 3999,
    rating: 1,
    productImg:
      "https://img.freepik.com/free-vector/bathroom-boiler-water-heater-washbasin-tub_107791-676.jpg?t=st=1647774498~exp=1647775098~hmac=d27e583e19bece4c7eee6ce6dbad0a291e63bb8447ad57bc8ef6feb36a3fbd88&w=826",
  },
  {
    _id: uuid(),
    categoryName: "Beds",
    orignalPrice: 40000,
    subtitle: "Bedroom bed",
    description: "A comfortable bed to sleep on while you had hard day at work",

    discountPrice: 36999,
    rating: 4,
    productImg:
      "https://img.freepik.com/free-photo/3d-render-bedroom_1048-8372.jpg?t=st=1647772256~exp=1647772856~hmac=85992900c5ce8c13e8deb2eb6c8f3322fe187302b46c0f58f5b6550e237a601b&w=826",
  },
];
