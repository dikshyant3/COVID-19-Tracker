export const sortData = (data) => {
  const sortedData = [...data];
  return sortedData.sort((a, b) => (a.cases > b.cases ? -1 : 1));
};
// So basically it is saying if the first index has more cases than second leave it as it is else put it in front in terms of highest number of cases
