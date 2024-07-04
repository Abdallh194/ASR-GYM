const url = "https://exercisedb.p.rapidapi.com/status";
export const ExersiceOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": process.env.REACT_APP_RAPIED_KEY,
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

export const FetchData = async (URL, Option) => {
  const res = await fetch(URL, Option);
  const data = res.json();
  return data;
};
