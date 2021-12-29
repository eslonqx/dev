const colorSoldOut = (numberOfItem) => {
  if (numberOfItem > 0) {
    return "cyan";
  }
  return "red";
}

export default colorSoldOut;
