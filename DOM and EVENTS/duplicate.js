const arr = [
  {
    yFinal: 87,
    pageBreaks: 2,
  },
  {
    yFinal: 80,
    pageBreaks: 2,
  },
  {
    yFinal: 87,
    pageBreaks: 1,
  },
];

const lookup = arr.reduce((a, e) => {
  a[e.pageBreaks] = ++a[e.pageBreaks] || 0;
  return a;
}, []);
const filteredArray = arr.filter(e => lookup[e.pageBreaks]);
console.log('filtered', filteredArray);
const max = filteredArray.reduce(function (prev, current) {
  return prev.yFinal > current.yFinal ? prev : current;
});
console.log(max);
