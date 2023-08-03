import data from '../../data.json';

export function getProductsByCategory(make) {
  const products = data.filter((product) => product.make === make);
  return products;
}

export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  } else {
    const products = getProductsByCategory(req.query.make);
    res.status(200).json(products);
  }
}