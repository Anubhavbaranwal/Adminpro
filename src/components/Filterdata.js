export const filterData = (SearchText, allData) => {
  console.log(allData);
  const filtereddata = allData
    .map((res) => res)
    .filter(
      (response) =>
        response?.name?.toLowerCase().includes(SearchText.toLowerCase()) ||
        response?.email?.toLowerCase().includes(SearchText.toLowerCase())
    );
  console.log(filtereddata);
  return filtereddata;
};
export const filterData2 = (id, allData) => {
  const filtereddata = allData
    .map((res) => res)
    .filter((response) => response?.id != id);
  return filtereddata;
};


export const filterData3 = (id, allData) => {
  const filtereddata = allData
    .map((res) => res)
    .filter((response) => response?.id != id);
  return filtereddata;
};
