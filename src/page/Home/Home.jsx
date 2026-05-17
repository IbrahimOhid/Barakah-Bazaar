
  {/* Hero Section */}
  <section className="hero-section relative">
    <div className="container mx-auto px-4 py-24 md:py-32 w-full">
      <div className="max-w-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Summer Collection 2025
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Discover our latest arrivals designed for comfort and style. Premium
          quality that lasts.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#"
            className="py-3 px-6 bg-primary text-white font-medium rounded-button hover:bg-primary/90 transition-colors whitespace-nowrap"
          >
            Shop Now
          </a>
          <a
            href="#"
            className="py-3 px-6 bg-white text-gray-800 font-medium rounded-button border border-gray-200 hover:bg-gray-50 transition-colors whitespace-nowrap"
          >
            Explore Collection
          </a>
        </div>
      </div>
    </div>
  </section>
  {/* Categories Section */}
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <a href="#" className="group">
          <div className="relative overflow-hidden rounded-lg aspect-[3/4]">
            <img
              src="https://readdy.ai/api/search-image?query=elegant%20womens%20clothing%20collection%2C%20minimal%20background%2C%20professional%20fashion%20photography%2C%20soft%20lighting%2C%20high-end%20apparel%20displayed%20neatly&width=400&height=500&seq=cat1&orientation=portrait"
              alt="Women's Collection"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 flex items-end p-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">Women</h3>
                <p className="text-white/80 text-sm">View Collection</p>
              </div>
            </div>
          </div>
        </a>
        <a href="#" className="group">
          <div className="relative overflow-hidden rounded-lg aspect-[3/4]">
            <img
              src="https://readdy.ai/api/search-image?query=stylish%20mens%20clothing%20collection%2C%20minimal%20background%2C%20professional%20fashion%20photography%2C%20soft%20lighting%2C%20high-end%20apparel%20displayed%20neatly&width=400&height=500&seq=cat2&orientation=portrait"
              alt="Men's Collection"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 flex items-end p-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">Men</h3>
                <p className="text-white/80 text-sm">View Collection</p>
              </div>
            </div>
          </div>
        </a>
        <a href="#" className="group">
          <div className="relative overflow-hidden rounded-lg aspect-[3/4]">
            <img
              src="https://readdy.ai/api/search-image?query=premium%20accessories%20collection%20including%20bags%2C%20jewelry%2C%20watches%2C%20minimal%20background%2C%20professional%20product%20photography%2C%20soft%20lighting%2C%20high-end%20items%20displayed%20neatly&width=400&height=500&seq=cat3&orientation=portrait"
              alt="Accessories Collection"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 flex items-end p-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">
                  Accessories
                </h3>
                <p className="text-white/80 text-sm">View Collection</p>
              </div>
            </div>
          </div>
        </a>
        <a href="#" className="group">
          <div className="relative overflow-hidden rounded-lg aspect-[3/4]">
            <img
              src="https://readdy.ai/api/search-image?query=luxury%20footwear%20collection%20including%20shoes%2C%20boots%2C%20sneakers%2C%20minimal%20background%2C%20professional%20product%20photography%2C%20soft%20lighting%2C%20high-end%20items%20displayed%20neatly&width=400&height=500&seq=cat4&orientation=portrait"
              alt="Footwear Collection"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 flex items-end p-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">
                  Footwear
                </h3>
                <p className="text-white/80 text-sm">View Collection</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
  {/* Featured Products */}
  <section className="py-16">
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl font-bold">Featured Products</h2>
        <div className="flex space-x-1 px-1 py-1 bg-gray-100 rounded-full">
          <button className="px-4 py-1.5 bg-white text-gray-800 rounded-full shadow-sm text-sm font-medium whitespace-nowrap">
            All
          </button>
          <button className="px-4 py-1.5 text-gray-600 rounded-full text-sm font-medium hover:bg-white hover:shadow-sm transition whitespace-nowrap">
            New Arrivals
          </button>
          <button className="px-4 py-1.5 text-gray-600 rounded-full text-sm font-medium hover:bg-white hover:shadow-sm transition whitespace-nowrap">
            Best Sellers
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Product 1 */}
        <div className="group">
          <div className="relative overflow-hidden rounded-lg mb-4">
            <span className="absolute top-3 left-3 bg-primary text-white text-xs px-2 py-1 rounded">
              New
            </span>
            <img
              src="https://readdy.ai/api/search-image?query=elegant%20white%20blouse%20on%20minimal%20light%20background%2C%20professional%20fashion%20photography%2C%20high%20quality%20product%20image%2C%20detailed%20fabric%20texture&width=500&height=600&seq=prod4&orientation=portrait"
              alt="White Blouse"
              className="w-full h-80 object-cover object-top"
            />
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <button className="bg-white text-gray-900 w-10 h-10 rounded-full flex items-center justify-center shadow-md mx-1 hover:bg-gray-100 transition">
                <i className="ri-eye-line" />
              </button>
              <button className="bg-white text-gray-900 w-10 h-10 rounded-full flex items-center justify-center shadow-md mx-1 hover:bg-gray-100 transition">
                <i className="ri-heart-line" />
              </button>
              <button className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md mx-1 hover:bg-primary/90 transition">
                <i className="ri-shopping-bag-line" />
              </button>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-1">
              Elegant White Blouse
            </h3>
            <div className="flex items-center mb-1">
              <div className="flex text-amber-400 text-sm">
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
                <i className="ri-star-half-fill" />
              </div>
              <span className="text-xs text-gray-500 ml-1">(42)</span>
            </div>
            <p className="text-gray-900 font-medium">$49.99</p>
          </div>
        </div>
        {/* Product 2 */}
        <div className="group">
          <div className="relative overflow-hidden rounded-lg mb-4">
            <span className="absolute top-3 left-3 bg-amber-500 text-white text-xs px-2 py-1 rounded">
              Best Seller
            </span>
            <img
              src="https://readdy.ai/api/search-image?query=premium%20denim%20jeans%20on%20minimal%20light%20background%2C%20professional%20fashion%20photography%2C%20high%20quality%20product%20image%2C%20detailed%20fabric%20texture&width=500&height=600&seq=prod5&orientation=portrait"
              alt="Denim Jeans"
              className="w-full h-80 object-cover object-top"
            />
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <button className="bg-white text-gray-900 w-10 h-10 rounded-full flex items-center justify-center shadow-md mx-1 hover:bg-gray-100 transition">
                <i className="ri-eye-line" />
              </button>
              <button className="bg-white text-gray-900 w-10 h-10 rounded-full flex items-center justify-center shadow-md mx-1 hover:bg-gray-100 transition">
                <i className="ri-heart-line" />
              </button>
              <button className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md mx-1 hover:bg-primary/90 transition">
                <i className="ri-shopping-bag-line" />
              </button>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-1">
              Premium Denim Jeans
            </h3>
            <div className="flex items-center mb-1">
              <div className="flex text-amber-400 text-sm">
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
              </div>
              <span className="text-xs text-gray-500 ml-1">(128)</span>
            </div>
            <p className="text-gray-900 font-medium">$79.99</p>
          </div>
        </div>
        {/* Product 3 */}
        <div className="group">
          <div className="relative overflow-hidden rounded-lg mb-4">
            <img
              src="https://readdy.ai/api/search-image?query=stylish%20leather%20jacket%20on%20minimal%20light%20background%2C%20professional%20fashion%20photography%2C%20high%20quality%20product%20image%2C%20detailed%20leather%20texture&width=500&height=600&seq=prod6&orientation=portrait"
              alt="Leather Jacket"
              className="w-full h-80 object-cover object-top"
            />
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <button className="bg-white text-gray-900 w-10 h-10 rounded-full flex items-center justify-center shadow-md mx-1 hover:bg-gray-100 transition">
                <i className="ri-eye-line" />
              </button>
              <button className="bg-white text-gray-900 w-10 h-10 rounded-full flex items-center justify-center shadow-md mx-1 hover:bg-gray-100 transition">
                <i className="ri-heart-line" />
              </button>
              <button className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md mx-1 hover:bg-primary/90 transition">
                <i className="ri-shopping-bag-line" />
              </button>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-1">
              Classic Leather Jacket
            </h3>
            <div className="flex items-center mb-1">
              <div className="flex text-amber-400 text-sm">
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
                <i className="ri-star-line" />
              </div>
              <span className="text-xs text-gray-500 ml-1">(76)</span>
            </div>
            <p className="text-gray-900 font-medium">$199.99</p>
          </div>
        </div>
        {/* Product 4 */}
        <div className="group">
          <div className="relative overflow-hidden rounded-lg mb-4">
            <span className="absolute top-3 left-3 bg-rose-500 text-white text-xs px-2 py-1 rounded">
              Sale
            </span>
            <img
              src="https://readdy.ai/api/search-image?query=elegant%20summer%20dress%20on%20minimal%20light%20background%2C%20professional%20fashion%20photography%2C%20high%20quality%20product%20image%2C%20detailed%20fabric%20texture&width=500&height=600&seq=prod7&orientation=portrait"
              alt="Summer Dress"
              className="w-full h-80 object-cover object-top"
            />
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <button className="bg-white text-gray-900 w-10 h-10 rounded-full flex items-center justify-center shadow-md mx-1 hover:bg-gray-100 transition">
                <i className="ri-eye-line" />
              </button>
              <button className="bg-white text-gray-900 w-10 h-10 rounded-full flex items-center justify-center shadow-md mx-1 hover:bg-gray-100 transition">
                <i className="ri-heart-line" />
              </button>
              <button className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md mx-1 hover:bg-primary/90 transition">
                <i className="ri-shopping-bag-line" />
              </button>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-1">
              Floral Summer Dress
            </h3>
            <div className="flex items-center mb-1">
              <div className="flex text-amber-400 text-sm">
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
                <i className="ri-star-half-fill" />
              </div>
              <span className="text-xs text-gray-500 ml-1">(54)</span>
            </div>
            <div className="flex items-center">
              <p className="text-gray-900 font-medium">$59.99</p>
              <p className="text-gray-500 line-through text-sm ml-2">$79.99</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-12">
        <a
          href="#"
          className="inline-block py-3 px-8 border border-gray-300 text-gray-800 font-medium rounded-button hover:bg-gray-50 transition-colors whitespace-nowrap"
        >
          View All Products
        </a>
      </div>
    </div>
  </section>
  {/* Special Offer Banner */}
  <section className="py-16 bg-gray-900 text-white">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Summer Sale</h2>
          <p className="text-xl text-gray-300 mb-6">
            Up to 50% off on selected items. Limited time offer.
          </p>
          <div className="flex gap-4 mb-8">
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <span className="block text-3xl font-bold">00</span>
              <span className="text-sm text-gray-300">Days</span>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <span className="block text-3xl font-bold">12</span>
              <span className="text-sm text-gray-300">Hours</span>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <span className="block text-3xl font-bold">45</span>
              <span className="text-sm text-gray-300">Minutes</span>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <span className="block text-3xl font-bold">30</span>
              <span className="text-sm text-gray-300">Seconds</span>
            </div>
          </div>
          <a
            href="#"
            className="inline-block py-3 px-8 bg-white text-gray-900 font-medium rounded-button hover:bg-gray-100 transition-colors whitespace-nowrap"
          >
            Shop the Sale
          </a>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://readdy.ai/api/search-image?query=stylish%20summer%20clothing%20collection%20with%20discount%20tags%2C%20professional%20fashion%20photography%2C%20multiple%20items%20arranged%20elegantly%2C%20high-end%20apparel%20on%20minimal%20background&width=600&height=400&seq=sale1&orientation=landscape"
            alt="Summer Sale"
            className="rounded-lg w-full"
          />
        </div>
      </div>
    </div>
  </section>
  {/* New Arrivals */}
  <section className="py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">New Arrivals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Product 1 */}
        <div className="group">
          <div className="relative overflow-hidden rounded-lg mb-4">
            <span className="absolute top-3 left-3 bg-primary text-white text-xs px-2 py-1 rounded">
              New
            </span>
            <img
              src="https://readdy.ai/api/search-image?query=elegant%20silk%20scarf%20on%20minimal%20light%20background%2C%20professional%20fashion%20photography%2C%20high%20quality%20product%20image%2C%20detailed%20fabric%20texture&width=500&height=600&seq=prod8&orientation=portrait"
              alt="Silk Scarf"
              className="w-full h-80 object-cover object-top"
            />
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <button className="bg-white text-gray-900 w-10 h-10 rounded-full flex items-center justify-center shadow-md mx-1 hover:bg-gray-100 transition">
                <i className="ri-eye-line" />
              </button>
              <button className="bg-white text-gray-900 w-10 h-10 rounded-full flex items-center justify-center shadow-md mx-1 hover:bg-gray-100 transition">
                <i className="ri-heart-line" />
              </button>
              <button className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md mx-1 hover:bg-primary/90 transition">
                <i className="ri-shopping-bag-line" />
              </button>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-1">
              Luxury Silk Scarf
            </h3>
            <div className="flex items-center mb-1">
              <div className="flex text-amber-400 text-sm">
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
                <i className="ri-star-line" />
              </div>
              <span className="text-xs text-gray-500 ml-1">(12)</span>
            </div>
            <p className="text-gray-900 font-medium">$39.99</p>
          </div>
        </div>
        {/* Product 2 */}
        <div className="group">
          <div className="relative overflow-hidden rounded-lg mb-4">
            <span className="absolute top-3 left-3 bg-primary text-white text-xs px-2 py-1 rounded">
              New
            </span>
            <img
              src="https://readdy.ai/api/search-image?query=premium%20leather%20handbag%20on%20minimal%20light%20background%2C%20professional%20fashion%20photography%2C%20high%20quality%20product%20image%2C%20detailed%20leather%20texture&width=500&height=600&seq=prod9&orientation=portrait"
              alt="Leather Handbag"
              className="w-full h-80 object-cover object-top"
            />
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <button className="bg-white text-gray-900 w-10 h-10 rounded-full flex items-center justify-center shadow-md mx-1 hover:bg-gray-100 transition">
                <i className="ri-eye-line" />
              </button>
              <button className="bg-white text-gray-900 w-10 h-10 rounded-full flex items-center justify-center shadow-md mx-1 hover:bg-gray-100 transition">
                <i className="ri-heart-line" />
              </button>
              <button className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md mx-1 hover:bg-primary/90 transition">
                <i className="ri-shopping-bag-line" />
              </button>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-1">
              Designer Leather Handbag
            </h3>
            <div className="flex items-center mb-1">
              <div className="flex text-amber-400 text-sm">
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
                <i className="ri-star-half-fill" />
              </div>
              <span className="text-xs text-gray-500 ml-1">(8)</span>
            </div>
            <p className="text-gray-900 font-medium">$149.99</p>
          </div>
        </div>
        {/* Product 3 */}
        <div className="group">
          <div className="relative overflow-hidden rounded-lg mb-4">
            <span className="absolute top-3 left-3 bg-primary text-white text-xs px-2 py-1 rounded">
              New
            </span>
            <img
              src="https://readdy.ai/api/search-image?query=stylish%20sunglasses%20on%20minimal%20light%20background%2C%20professional%20product%20photography%2C%20high%20quality%20image%2C%20detailed%20texture&width=500&height=600&seq=prod10&orientation=portrait"
              alt="Sunglasses"
              className="w-full h-80 object-cover object-top"
            />
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <button className="bg-white text-gray-900 w-10 h-10 rounded-full flex items-center justify-center shadow-md mx-1 hover:bg-gray-100 transition">
                <i className="ri-eye-line" />
              </button>
              <button className="bg-white text-gray-900 w-10 h-10 rounded-full flex items-center justify-center shadow-md mx-1 hover:bg-gray-100 transition">
                <i className="ri-heart-line" />
              </button>
              <button className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md mx-1 hover:bg-primary/90 transition">
                <i className="ri-shopping-bag-line" />
              </button>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-1">
              Premium Sunglasses
            </h3>
            <div className="flex items-center mb-1">
              <div className="flex text-amber-400 text-sm">
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
                <i className="ri-star-line" />
              </div>
              <span className="text-xs text-gray-500 ml-1">(6)</span>
            </div>
            <p className="text-gray-900 font-medium">$89.99</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-12">
        <a
          href="#"
          className="inline-block py-3 px-8 border border-gray-300 text-gray-800 font-medium rounded-button hover:bg-gray-50 transition-colors whitespace-nowrap"
        >
          View All New Arrivals
        </a>
      </div>
    </div>
  </section>
  {/* Testimonials */}
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">
        What Our Customers Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Testimonial 1 */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex text-amber-400 mb-4">
            <i className="ri-star-fill" />
            <i className="ri-star-fill" />
            <i className="ri-star-fill" />
            <i className="ri-star-fill" />
            <i className="ri-star-fill" />
          </div>
          <p className="text-gray-700 mb-6">
            "The quality of the clothes is exceptional. I've ordered multiple
            times and have never been disappointed. The customer service is also
            top-notch!"
          </p>
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 mr-4">
              <i className="ri-user-3-line text-xl" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Emily Richardson</h4>
              <p className="text-sm text-gray-500">Loyal Customer</p>
            </div>
          </div>
        </div>
        {/* Testimonial 2 */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex text-amber-400 mb-4">
            <i className="ri-star-fill" />
            <i className="ri-star-fill" />
            <i className="ri-star-fill" />
            <i className="ri-star-fill" />
            <i className="ri-star-half-fill" />
          </div>
          <p className="text-gray-700 mb-6">
            "Fast shipping and the products look exactly like the pictures. The
            sizing guide was very helpful. Will definitely shop here again!"
          </p>
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 mr-4">
              <i className="ri-user-3-line text-xl" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Michael Thompson</h4>
              <p className="text-sm text-gray-500">Verified Buyer</p>
            </div>
          </div>
        </div>
        {/* Testimonial 3 */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex text-amber-400 mb-4">
            <i className="ri-star-fill" />
            <i className="ri-star-fill" />
            <i className="ri-star-fill" />
            <i className="ri-star-fill" />
            <i className="ri-star-fill" />
          </div>
          <p className="text-gray-700 mb-6">
            "I love the sustainable approach this brand takes. The packaging is
            eco-friendly and the clothes are made from high-quality, sustainable
            materials."
          </p>
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 mr-4">
              <i className="ri-user-3-line text-xl" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Sophia Martinez</h4>
              <p className="text-sm text-gray-500">Repeat Customer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Instagram Feed */}
  <section className="py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-4">
        Follow Us on Instagram
      </h2>
      <p className="text-gray-600 text-center mb-12">@shopease_official</p>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <a
          href="#"
          className="block aspect-square overflow-hidden rounded-lg group"
        >
          <img
            src="https://readdy.ai/api/search-image?query=fashion%20lifestyle%20image%2C%20person%20wearing%20stylish%20outfit%20in%20urban%20setting%2C%20natural%20lighting%2C%20candid%20pose%2C%20high%20quality&width=300&height=300&seq=insta1&orientation=squarish"
            alt="Instagram Post"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </a>
        <a
          href="#"
          className="block aspect-square overflow-hidden rounded-lg group"
        >
          <img
            src="https://readdy.ai/api/search-image?query=close-up%20of%20fashion%20accessories%20arrangement%2C%20minimal%20aesthetic%2C%20soft%20lighting%2C%20high%20quality%20product%20photography&width=300&height=300&seq=insta2&orientation=squarish"
            alt="Instagram Post"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </a>
        <a
          href="#"
          className="block aspect-square overflow-hidden rounded-lg group"
        >
          <img
            src="https://readdy.ai/api/search-image?query=person%20wearing%20elegant%20outfit%20in%20cafe%20setting%2C%20lifestyle%20fashion%20photography%2C%20soft%20natural%20lighting%2C%20candid%20moment&width=300&height=300&seq=insta3&orientation=squarish"
            alt="Instagram Post"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </a>
        <a
          href="#"
          className="block aspect-square overflow-hidden rounded-lg group"
        >
          <img
            src="https://readdy.ai/api/search-image?query=flatlay%20of%20fashion%20items%20including%20clothing%20and%20accessories%2C%20minimal%20aesthetic%2C%20soft%20lighting%2C%20high%20quality%20product%20photography&width=300&height=300&seq=insta4&orientation=squarish"
            alt="Instagram Post"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </a>
        <a
          href="#"
          className="block aspect-square overflow-hidden rounded-lg group"
        >
          <img
            src="https://readdy.ai/api/search-image?query=person%20wearing%20casual%20outfit%20in%20urban%20setting%2C%20lifestyle%20fashion%20photography%2C%20natural%20lighting%2C%20candid%20pose&width=300&height=300&seq=insta5&orientation=squarish"
            alt="Instagram Post"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </a>
        <a
          href="#"
          className="block aspect-square overflow-hidden rounded-lg group"
        >
          <img
            src="https://readdy.ai/api/search-image?query=close-up%20of%20shoes%20and%20accessories%2C%20minimal%20aesthetic%2C%20soft%20lighting%2C%20high%20quality%20product%20photography&width=300&height=300&seq=insta6&orientation=squarish"
            alt="Instagram Post"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </a>
      </div>
    </div>
  </section>
  {/* Newsletter */}
  <section className="py-16 bg-gray-900 text-white">
    <div className="container mx-auto px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-gray-300 mb-8">
          Stay updated with our latest collections, exclusive offers, and style
          tips.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-4 py-3 rounded-button border-none text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-primary text-white font-medium rounded-button hover:bg-primary/90 transition-colors whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
        <p className="text-sm text-gray-400 mt-4">
          By subscribing, you agree to our Privacy Policy and consent to receive
          updates from our company.
        </p>
      </div>
    </div>
  </section>
  {/* Footer */}
  
  {/* Scripts */}
</>
