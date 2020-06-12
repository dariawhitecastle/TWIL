const arrayToFilter = [1, null, 3, 'beri nice', undefined, '', false];

// const filter = (array) => {
//   const newArray = [];
//   for (i = 1; i < array.length; i++) {
//     const element = array[i];
//     if (element !== null && element !== undefined) {
//       newArray.push(element);
//     }
//   }
//   return newArray;
// };

// const filtered1 = filter(arrayToFilter);

// filter empty strings only
// const filter = (
//   array,
//   { filterEmptyString = false, filterNull = false, filterUndefined = false }
// ) => {
//   const newArray = [];
//   for (i = 1; i < array.length; i++) {
//     const element = array[i];
//     if (
//       (filterEmptyString && element !== '') ||
//       (filterNull && element !== null) ||
//       (filterUndefined && element !== undefined)
//     )
//       newArray.push(element);
//   }
//   return newArray;
// };

// const filtered2 = filter(arrayToFilter, { filterEmptyString: true });

// console.log(filtered2);

// inversion of control
const filter = (array, fn) => {
  const newArray = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (fn(element)) {
      newArray.push(element);
    }
  }
  return newArray;
};

const filtered3 = filter(arrayToFilter, (el) => el !== '');
console.log(filtered3);

const filtered4 = filter(arrayToFilter, (el) => el && Object.keys(el).length);
console.log(filtered4);

// Both filter and map use IoC, we pass it a function to apply on each el int he array
// This is what the Drawer, Snackbar component, Wizard refactors were for
