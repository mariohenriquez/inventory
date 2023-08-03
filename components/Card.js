import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';

const Card = ({
  id = '',
  image = '',
  title = '',
  price = 0,
}) => (
  <Link href={`/inventory/${id}`}>
    <div className="block w-full">
        <div className="overflow-hidden aspect-w-16 aspect-h-9">
            <Image
                src={image}
                alt={title}
                height={200}
                width={302}
                className="hover:opacity-80 transition"
            />
        </div>

        <div className="mt-2 w-full text-gray-700 font-semibold leading-tight">
            {title ?? ''}
        </div>
        <p className="mt-2 text-gray-500">
            {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            }).format(price ?? 0)}{' '}
        </p>
    </div>
  </Link>
);

Card.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  favorite: PropTypes.bool,
  onClickFavorite: PropTypes.func,
};

export default Card;
