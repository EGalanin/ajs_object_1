export default function orderByProps(obj, setOrder) {
  const propsSetOrder = [];
  const restData = [];

  for (const key in obj) {
    if (setOrder.includes(key)) {
      const index = setOrder.indexOf(key);
      propsSetOrder.splice(index, 0, { key, value: obj[key] });
    } else {
      restData.push({ key, value: obj[key] });
    }
  }
  restData.sort((a, b) => (a.key > b.key ? 1 : -1));
  return [...propsSetOrder, ...restData];
}
