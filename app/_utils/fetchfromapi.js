export const ExersiceOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "9b7928c1d2msha124e05e4b043abp1ede7bjsnbf13cd325843",
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

export const FetchData = async (URL, Option) => {
  const res = await fetch(URL, Option);
  const data = res.json();
  return data;
};
