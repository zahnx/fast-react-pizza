import { formatCurrency } from '../../utils/helpers';

function OrderItem({
  item,
  isLoadingIngredients,
  ingredients,
  imageUrl,
  imageName,
}) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="space-y-1 py-3">
      <div className="flex items-center gap-4 text-sm">
        {/* order details */}
        <div className="flex w-full justify-between">
          <div className="flex items-center gap-4">
            <img
              className="h-[80px] w-[80px] rounded-md object-cover"
              src={imageUrl}
              alt={imageName}
            />
            <div>
              <p>
                <span className="font-bold">{quantity}&times;</span> {name}
              </p>
              {/* ingredients */}
              <p className="text-sm capitalize italic text-stone-500">
                {isLoadingIngredients ? 'Loading...' : ingredients.join(', ')}
              </p>
            </div>
          </div>
        </div>
        <p className="font-bold"> {formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
