export const getQuote = () => {
  return fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(res => {
      if(!res.ok) {
        throw 'Res not ok';
      }
      return res.json();
    })
    .then(res => {
      const quote = res[0].quote;
      const characterName = res[0].character;
      const characterImage = res[0].image;
      return { quote, characterName, characterImage };
    });
};
