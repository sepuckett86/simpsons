export const getQuote = () => {
  return fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(res => {
      if(!res.ok) {
        throw 'Res not ok';
      }
      return res.json();
    })
    .then(res => {
      const [quoteObject] = res;
      const quote = quoteObject.quote;
      const characterName = quoteObject.character;
      const characterImage = quoteObject.image;
      return { quote, characterName, characterImage };
    });
};
