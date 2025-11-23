interface Product {
  image: string;
  title: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  shopifyLink: string;
}

export const products: Product[] = [
  {
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    title: "Premium Wireless Headphones",
    description: "Experience crystal-clear sound with active noise cancellation, 30-hour battery life, and premium comfort padding for all-day listening.",
    originalPrice: 299.99,
    discountedPrice: 199.99,
    shopifyLink: "https://your-store.myshopify.com/products/wireless-headphones"
  },
  {
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    title: "Classic Analog Watch",
    description: "Elegant timepiece with Swiss movement, sapphire crystal glass, and genuine leather strap. Perfect for any occasion.",
    originalPrice: 599.99,
    discountedPrice: 449.99,
    shopifyLink: "https://your-store.myshopify.com/products/analog-watch"
  },
  {
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop",
    title: "Designer Sunglasses",
    description: "UV400 protection with polarized lenses, lightweight titanium frame, and scratch-resistant coating for lasting durability.",
    originalPrice: 249.99,
    discountedPrice: 149.99,
    shopifyLink: "https://your-store.myshopify.com/products/designer-sunglasses"
  },
  {
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&h=500&fit=crop",
    title: "Leather Sneakers",
    description: "Handcrafted premium leather sneakers with memory foam insole and anti-slip rubber sole. Style meets comfort.",
    originalPrice: 179.99,
    discountedPrice: 129.99,
    shopifyLink: "https://your-store.myshopify.com/products/leather-sneakers"
  },
  {
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    title: "Professional Camera Backpack",
    description: "Water-resistant camera bag with customizable dividers, laptop compartment, and quick-access side pocket for gear on the go.",
    originalPrice: 159.99,
    discountedPrice: 99.99,
    shopifyLink: "https://your-store.myshopify.com/products/camera-backpack"
  },
  {
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500&h=500&fit=crop",
    title: "Smart Fitness Watch",
    description: "Track your health with heart rate monitor, GPS, sleep tracking, and 7-day battery life. Water-resistant up to 50m.",
    originalPrice: 349.99,
    discountedPrice: 249.99,
    shopifyLink: "https://your-store.myshopify.com/products/fitness-watch"
  },
  {
    image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&h=500&fit=crop",
    title: "Minimalist Desk Lamp",
    description: "LED desk lamp with adjustable brightness, touch controls, USB charging port, and eye-care technology for comfortable reading.",
    originalPrice: 89.99,
    discountedPrice: 59.99,
    shopifyLink: "https://your-store.myshopify.com/products/desk-lamp"
  },
  {
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&h=500&fit=crop",
    title: "Stainless Steel Water Bottle",
    description: "Double-wall insulated bottle keeps drinks cold for 24 hours or hot for 12 hours. BPA-free and leak-proof design.",
    originalPrice: 44.99,
    discountedPrice: 29.99,
    shopifyLink: "https://your-store.myshopify.com/products/water-bottle"
  },
  {
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500&h=500&fit=crop",
    title: "Wireless Charging Pad",
    description: "Fast wireless charger compatible with all Qi-enabled devices. Slim design with LED indicator and overcharge protection.",
    originalPrice: 49.99,
    discountedPrice: 34.99,
    shopifyLink: "https://your-store.myshopify.com/products/charging-pad"
  },
  {
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&h=500&fit=crop",
    title: "Ergonomic Office Chair",
    description: "Lumbar support with breathable mesh back, adjustable armrests, and 360-degree swivel. Designed for 8+ hour comfort.",
    originalPrice: 399.99,
    discountedPrice: 299.99,
    shopifyLink: "https://your-store.myshopify.com/products/office-chair"
  },
  {
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop",
    title: "Portable Bluetooth Speaker",
    description: "360-degree sound with deep bass, 12-hour playtime, waterproof IPX7 rating, and built-in microphone for hands-free calls.",
    originalPrice: 129.99,
    discountedPrice: 79.99,
    shopifyLink: "https://your-store.myshopify.com/products/bluetooth-speaker"
  },
  {
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&h=500&fit=crop",
    title: "Mechanical Keyboard",
    description: "RGB backlit mechanical keyboard with tactile switches, aluminum frame, and programmable keys for gaming and productivity.",
    originalPrice: 189.99,
    discountedPrice: 139.99,
    shopifyLink: "https://your-store.myshopify.com/products/mechanical-keyboard"
  }
];