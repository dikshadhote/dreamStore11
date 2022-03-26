const sortByPrice = (data, sortBy) => {
  const sortArray = [...data];
  console.log(sortArray);
  if (sortBy === "high-to-low") {
    const arr = sortArray.sort((item1, item2) => {
      console.log("item1", item1.discountPrice);
      console.log("item2", item2.discountPrice);
      return Number(item2.discountPrice) - Number(item1.discountPrice);
    });
    return arr;
  }

  if (sortBy === "low-to-high") {
    return sortArray.sort(
      (item1, item2) =>
        Number(item1.discountPrice) - Number(item2.discountPrice)
    );
  }
  return sortArray;
};

const sortByCategory = (data, category) => {};

const sortByRating = (data, rating) => {
  if (rating === "4 stars & above")
    return data.filter((item) => {
      item.rating === "4 stars & above" ? item : null;
    });
  if (rating === "3 stars & above")
    return data.filter((item) => {
      item.rating === "4 stars & above" ? item : null;
    });
  if (rating === "2 stars & above")
    return data.filter((item) => {
      item.rating === "4 stars & above" ? item : null;
    });
  if (rating === "1 stars & above")
    return data.filter((item) => {
      item.rating === "4 stars & above" ? item : null;
    });
};

export { sortByPrice, sortByCategory, sortByRating };
