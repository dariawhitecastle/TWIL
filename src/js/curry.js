// curry :: ((a, b, ...) -> c) -> a -> b -> ... -> c
export default function curry(fn) {
  const arity = fn.length;

  return function $curry(...args) {
    if (args.length < arity) {
      return $curry.bind(null, ...args);
    }

    return fn.call(null, ...args);
  };
}

// refactor this
const words = string => splitBy => string.split(splitBy)
let splitResult = words('some string')(' ')

// to use partial application
const splitString = curry((splitBy, str) => str.split(splitBy))

const splitBy = splitString('-')
splitResult = splitBy('Lost-In-Yesterday')
console.log('first Split Result', splitResult)

splitResult = splitBy('Mostly-Adequate-Guide')
console.log('second Split Result', splitResult)

