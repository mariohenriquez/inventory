import data from '../../data.json';

export function getProductsByID(id) {
  const products = data.filter((product) => product.id === id);
  return products;
}

export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  } else {
    const products = getProductsByID(req.query.id);
    console.log(products)
    res.status(200).json(products);
  }
}