const products = [
    { id: 1, name: "Men's Casual Shirt", image: "/images/mens-shirt.jpg", price: "$25" },
    { id: 2, name: "Men's Formal Shirt", image: "/images/mens-formal.jpg", price: "$30" },
    { id: 3, name: "Women's Kurti", image: "/images/womens-kurti.jpg", price: "$35" },
    { id: 4, name: "Women's Designer Kurti", image: "/images/womens-designer.jpg", price: "$40" },
    { id: 5, name: "Men's T-Shirt", image: "/images/mens-tshirt.jpg", price: "$20" },
    { id: 6, name: "Women's Fancy Kurti", image: "/images/womens-fancy.jpg", price: "$38" },
  ];
  
  export default function Products() {
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <h2 className="text-3xl font-semibold text-center text-blue-600">Latest Fashion Collection</h2>
        
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-10">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 shadow-lg rounded-lg hover:shadow-2xl transition">
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-lg" />
              <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
              <p className="text-blue-600 font-bold">{product.price}</p>
              <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                Add to Cart 🛒
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
  