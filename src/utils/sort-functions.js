const sortByPrice = (data, stateProduct) => {
  if (data !== [] || data != undefined) {
    const sortArray = [...data];
    if (stateProduct.sortBy === "high-to-low") {
      const arr = sortArray.sort((item1, item2) => {
        return Number(item2.discountPrice) - Number(item1.discountPrice);
      });
      return arr;
    }
    if (stateProduct.sortBy === "low-to-high") {
      return sortArray.sort(
        (item1, item2) =>
          Number(item1.discountPrice) - Number(item2.discountPrice)
      );
    }
    return sortArray;
  }
};

const sortByRating = (data, stateProduct) => {
  const sortArray = [...data];
  const { sortRating } = stateProduct;
  switch (sortRating) {
    case 4:
      return sortArray.filter((item) => Number(item.rating) >= 4);
    case 3:
      return sortArray.filter((item) => Number(item.rating) >= 3);
    case 2:
      return sortArray.filter((item) => Number(item.rating) >= 2);
    case 1:
      return sortArray.filter((item) => Number(item.rating) >= 1);
    default:
      return sortArray;
  }
};

const sortByCategory = (data, category) => {};

export { sortByPrice, sortByCategory, sortByRating };
