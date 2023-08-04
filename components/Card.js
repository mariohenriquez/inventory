import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';

const Card = ({
  id = '',
  image = '',
  title = '',
  price = 0,
}) => (

  <Link href={`/inventory/${id}`} className='group'>
    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
      <Image
          src={image}
          alt={title}
          height={200}
          width={302}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
    </div>
    <h3 class="mt-4 text-sm text-gray-700">{title ?? ''}</h3>
    <p class="mt-1 text-lg font-medium text-gray-900">
      {new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        }).format(price ?? 0)}{' '}
    </p>
  </Link>
);

Card.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  onClickFavorite: PropTypes.func,
};

export default Card;
