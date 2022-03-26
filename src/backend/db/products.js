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
    categoryName: "Cookware & Table ware",
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
    categoryName: "Cookware & Table ware",
    orignalPrice: 1000,
    subtitle: "Bowl set",
    description: "A Bowl to drink your hot soup",

    discountPrice: 699,
    rating: 3,
    productImg:
      "https://img.freepik.com/free-photo/kitchen-utensil_144627-32228.jpg?t=st=1647786380~exp=1647786980~hmac=379af2cf2b8372df2e061b0aa966621898a738b167438421ab866a2090c461bd&w=740",
  },
  {
    _id: uuid(),
    categoryName: "Mirrors",
    orignalPrice: 5000,
    subtitle: "Round mirror",
    description:
      "Round base sink mirror which will add asthetics to your bathroom",

    discountPrice: 3999,
    rating: 5,
    productImg:
      "https://img.freepik.com/free-vector/bathroom-boiler-water-heater-washbasin-tub_107791-676.jpg?t=st=1647774498~exp=1647775098~hmac=d27e583e19bece4c7eee6ce6dbad0a291e63bb8447ad57bc8ef6feb36a3fbd88&w=826",
  },
  {
    _id: uuid(),
    categoryName: "Beds & mattresses",
    orignalPrice: 40000,
    subtitle: "Bedroom bed",
    description: "A comfortable bed to sleep on while you had hard day at work",

    discountPrice: 36999,
    rating: 4,
    productImg:
      "https://img.freepik.com/free-photo/3d-render-bedroom_1048-8372.jpg?t=st=1647772256~exp=1647772856~hmac=85992900c5ce8c13e8deb2eb6c8f3322fe187302b46c0f58f5b6550e237a601b&w=826",
  },
  {
    _id: uuid(),
    categoryName: "Sofas & armchairs",
    orignalPrice: 30000,
    subtitle: "Living room sofa",
    description: "A comfortable sofa available in grey, white, black color",

    discountPrice: 26999,
    rating: 2,
    productImg:
      "https://img.freepik.com/free-photo/white-wall-living-room-have-sofa-decoration-3d-rendering_41470-3282.jpg?t=st=1647785400~exp=1647786000~hmac=90614759f30b87d4d27195c50f88aa2ec1909ac5d333124ed0d228b1503e8e7a&w=826",
  },
  {
    _id: uuid(),
    categoryName: "Sofas & armchairs",
    orignalPrice: 40000,
    subtitle: "Living room sofa",
    description: "A comfortable sofa available in grey, white, black color",

    discountPrice: 35999,
    rating: 3,
    productImg:
      "https://img.freepik.com/free-photo/green-interior-modern-interior-living-room-style-with-soft-sofa-green-wall-3d-rendering_41470-3902.jpg?w=740",
  },
  {
    _id: uuid(),
    categoryName: "Cookware & Table ware",
    orignalPrice: 3000,
    subtitle: "Spoons,Knives and Forks",
    description: "New kitchen appliances for your new home.",

    discountPrice: 2999,
    rating: 3,
    productImg:
      "https://img.freepik.com/free-photo/view-kitchen-utensils-flatlay_1098-19770.jpg?t=st=1647786380~exp=1647786980~hmac=1bc41eac5928fd6bf797c69e4429a272790fca102d875267b039aff203694628&w=740",
  },
  {
    _id: uuid(),
    categoryName: "Sofas & armchairs",
    orignalPrice: 8000,
    subtitle: "Yellow arm chair ",
    description:
      "A comfortable armchair available in yellow, grey, black color",

    discountPrice: 6999,
    rating: 5,
    productImg:
      "https://img.freepik.com/free-psd/picture-frame-mockup-psd-hanging-modern-living-room-home-decor-interior_53876-114536.jpg?t=st=1647785400~exp=1647786000~hmac=245f42e82a176e50cba7894afd29ea0eb8f9776a567d45776274deadfd50e6f4&w=740",
  },
  {
    _id: uuid(),
    categoryName: "Sofas & armchairs",
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
    categoryName: "Beds & mattresses",
    orignalPrice: 20000,
    subtitle: " Chuimui Matress",
    description:
      "A comfortable matress to sleep on while you had hard day at work",

    discountPrice: 18999,
    rating: 3,
    productImg:
      "https://img.freepik.com/free-photo/cute-little-girl-is-sleeping-white-bed_169016-6449.jpg?t=st=1647787236~exp=1647787836~hmac=f19e43ec5aaa6bf1c66a5997bf44ee9807803095c82a956bf9eba6fbc13d9758&w=740",
  },
  {
    _id: uuid(),
    categoryName: "Cookware & Table ware",
    orignalPrice: 5000,
    subtitle: "Study Table",
    description:
      "A table to keep your books organized.so, that you can study well",

    discountPrice: 4699,
    rating: 2,
    productImg:
      "https://media.istockphoto.com/photos/home-office-picture-id1211584942?b=1&k=20&m=1211584942&s=170667a&w=0&h=2e4IDHWbusKjt_VkoUtAK5DCZMKt9Hzq6WyROJEU0dI=",
  },
  {
    _id: uuid(),
    categoryName: "Beds & mattresses",
    orignalPrice: 25000,
    subtitle: " Comfort Matress",
    description:
      "A comfortable matress to sleep on while you had hard day at work",

    discountPrice: 23999,
    rating: 3,
    productImg:
      "https://img.freepik.com/free-photo/sleeping-young-woman-lies-bed-with-eyes-closed_171337-13215.jpg?w=740&t=st=1647788592~exp=1647789192~hmac=b86fb132009d8da53d040fc34c0a3c31641fe405c69dba027fc63d03f3d2f630",
  },
  {
    _id: uuid(),
    categoryName: "Storage & Organisation",
    orignalPrice: 40000,
    subtitle: "Cupboard",
    description:
      "Spacious and neat, you can display all your beautiful objects in our well-designed shelving units",

    discountPrice: 36999,
    rating: 2,
    productImg:
      "https://img.freepik.com/free-photo/wardrobe-renovation-concept_23-2149190370.jpg?t=st=1647797344~exp=1647797944~hmac=4cb88558a3c22a57f89bb3bc4bb2ffd012b80e9d548d513ba4d6d6be78879171&w=740",
  },
  {
    _id: uuid(),
    categoryName: "Beds & mattresses",
    orignalPrice: 45000,
    subtitle: "Double bed",
    description: "A comfortable bed to sleep on while you had hard day at work",

    discountPrice: 42999,
    rating: 4,
    productImg:
      "https://img.freepik.com/free-photo/double-bed-with-cushions_1203-19.jpg?t=st=1647788635~exp=1647789235~hmac=17afa223f573d93f7d14b06f77e47b0baa32b26b82615bfed4d9a04851475f9d&w=740",
  },
  {
    _id: uuid(),
    categoryName: "Beds & mattresses",
    orignalPrice: 35000,
    subtitle: "Hotel room bed",
    description: "A comfortable bed to sleep on while you had hard day at work",

    discountPrice: 33999,
    rating: 3,
    productImg:
      "https://img.freepik.com/free-psd/elegant-bedroom-hotel-room-with-classic-furniture_176382-189.jpg?t=st=1647788635~exp=1647789235~hmac=0e33de0ef48ce7eaf9e01b04d72646f61b7570e2caa58de69320514089c887e5&w=826",
  },
  {
    _id: uuid(),
    categoryName: "Beds & mattresses",
    orignalPrice: 35000,
    subtitle: "Wooden bed",
    description: "A comfortable bed to sleep on while you had hard day at work",

    discountPrice: 32999,
    rating: 4,
    productImg:
      "https://img.freepik.com/free-psd/classic-bedroom-hotel-room-with-double-bed_176382-88.jpg?t=st=1647788635~exp=1647789235~hmac=65e99f6e8dd3f29799c4a33be2a4bbf9315fa19438f46e317c7d0c8cef313515&w=826",
  },
  {
    _id: uuid(),
    categoryName: "Storage & Organisation",
    orignalPrice: 27000,
    subtitle: "Children Wardrobe",
    description:
      "Spacious and neat, you can display all your beautiful objects in our well-designed shelving units",

    discountPrice: 25999,
    rating: 4,
    productImg:
      "https://img.freepik.com/free-photo/white-child-bedroom-interior-with-copy-space_43614-761.jpg?t=st=1647798235~exp=1647798835~hmac=b93a09f9798a86faa4517ccfa656c95a4d7a5072ec6dd3469a163b91e728d2b8&w=740",
  },
  {
    _id: uuid(),
    categoryName: "Storage & Organisation",
    orignalPrice: 15000,
    subtitle: "Shoe rack",
    description:
      "Spacious and neat, you can display all your beautiful objects in our well-designed shelving units",

    discountPrice: 13999,
    rating: 4,
    productImg:
      "https://thumbs.dreamstime.com/b/stylish-hallway-interior-shoe-rack-near-brick-wall-stylish-hallway-interior-shoe-rack-near-brick-wall-154803426.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Storage & Organisation",
    orignalPrice: 10000,
    subtitle: "Shoe rack",
    description:
      "Spacious and neat, you can display all your beautiful objects in our well-designed shelving units",

    discountPrice: 9999,
    rating: 3,
    productImg:
      "https://media.istockphoto.com/photos/indoor-shoe-rack-of-sneakers-lovers-shoes-picture-id1003735800?b=1&k=20&m=1003735800&s=170667a&w=0&h=RN8slLQpaJMz9qLlq_HGiI8Sj_AxTiQWWxiOslEU6NU=",
  },
];
