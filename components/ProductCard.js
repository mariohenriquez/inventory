import Image from 'next/image';

const ProductCard = ({ product }) => {
    console.log('PL: ', product )
  return (
    <div>      
      <Image src={product.image} height={300} width={220} alt='img' />
      <h4 >{product.product}</h4>
      <h5 >{product.category}</h5>
      <p>$ {product.price}</p>
      <button >Add to Cart</button>
    </div>
  );
};

export default ProductCard;