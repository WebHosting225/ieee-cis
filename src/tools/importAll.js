export default function importAll(r) {
  let images = {};
  r.keys().map(item => images[item.replace('./', '')] = r(item));
  return images;
}

// importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));
