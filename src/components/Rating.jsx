const Rating = ({ children }) => {
  let points = Math.round(children);

  let rating;
  switch (points) {
    case 0:
      rating = '☆☆☆☆☆';
      break;
    case 1:
      rating = '★☆☆☆☆';
      break;
    case 2:
      rating = '★★☆☆☆';
      break;
    case 3:
      rating = '★★★☆☆';
      break;
    case 4:
      rating = '★★★★☆';
      break;
    case 5:
      rating = '★★★★★';
      break;
  }

  return <div>{rating}</div>;

  // const fullStarCount = Math.round(Number(props.children));
  // const emptyStarCount = 5 - fullStarCount;
  // return (
  //   <div>
  //     {'★'.repeat(fullStarCount)}
  //     {'☆'.repeat(emptyStarCount)}
  //   </div>
  // );
};

export default Rating;
