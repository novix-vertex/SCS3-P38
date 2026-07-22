const Product = ({ product, onDelete }) => {
    return (
        <div className="overflow-hidden rounded-xl bg-white shadow-md transition-shadow duration-300 hover:shadow-xl">
            {/* Product Image */}
            <img
                src={`${product.image}?auto=format&fit=crop&w=600&q=80`}
                alt={product.name}
                className="h-64 w-full object-cover"
            />

            {/* Product Details */}
            <div className="p-5">
                <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                    {product.category}
                </span>

                <h2 className="mt-3 text-xl font-bold text-gray-800">
                    {product.name}
                </h2>

                <p className="mt-2 text-2xl font-semibold text-green-600">
                    ${product.price}
                </p>

                <div className="mt-5 flex gap-3">
                    <button
                        onClick={() => {
                            onDelete(product.id);
                        }}
                        className="cursor-pointer rounded-lg bg-red-500 px-4 py-2.5 font-medium text-white transition hover:bg-red-600"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Product