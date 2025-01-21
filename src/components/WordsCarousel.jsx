

const WordsCarousel = () => {
  const wordsRow1 = [
    "Strategy", "Product", "People", "Design", "Sales", "Finance",
    "Customer Success", 
  ];
  const wordsRow2 = [
    "Business Development", "Analytics", "Operations", "Marketing", "Leadership","Engineering",
  ];

  return (
    <div className="wordsCarousel">
      <div className="wordsRow">
        {wordsRow1.map((word, index) => (
          <span key={index} className="word">
            {word}
          </span>
        ))}
      </div>
      <div className="wordsRow">
        {wordsRow2.map((word, index) => (
          <span key={index} className="word">
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default WordsCarousel;
