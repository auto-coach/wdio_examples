module.exports = {
  getElementWidth,
};

async function getElementWidth(elem) {
  const width = await elem.getCSSProperty('width');
  return width.parsed.value;
}
