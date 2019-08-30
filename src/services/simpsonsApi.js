export const getQuote = () => {
  return fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(res => {
      if(!res.ok) {
        throw 'Res not ok';
      }
      return res.json();
    });
};
