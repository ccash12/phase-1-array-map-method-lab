const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


// // const titleCase = (str) => {
// //  return str.toLowerCase().split(' ').map(function(word) {

// })
// }

const titleCased = () => {
  const title = tutorials.map(function (name){
    const words = name.split (' ');
    const combine = words.map(word => word[0].toUpperCase() + word.slice(1));
    const cased = combine.join (' ');
    return cased;
  });
    return title;
}


console.log(title)

// const titleCased = (input) => {
//   return tutorials.map( line => {
//     const tokens = line.split(' ');
//     const capitalizedTokens =
//       tokens.map( token => token.charAt(0).toUpperCase() + token.slice(1) );
//     const response = capitalizedTokens.join(' ');
//     return response;
//   });
// }


// to denote the first letter of each first word in each title you can use the index. for all other words you can use needs to be a space before 