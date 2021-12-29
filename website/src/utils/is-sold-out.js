const isSoldOut = (numberOfItem) => {
  if (numberOfItem > 0) {
    return "Còn hàng";
  }
  return "Hết hàng";
}

export default isSoldOut;