export default s =>
  s
    .split(' ')
    .map(item =>
      item
        .split('')
        .reverse()
        .join('')
    )
    .join(' ');

// export default s =>
//   s
//     .match(/[\w']+/g)
//     .map(item =>
//       item
//         .split('')
//         .reverse()
//         .join('')
//     )
//     .join(' ');
