// Cart management
let cart = JSON.parse(localStorage.getItem('manxCart')) || [];

// Product catalog
const products = [
    {
        id: 1,
        name: "Eternal Solitaire",
        category: "rings",
        price: 3500,
        description: "18k White Gold with 1.2ct GIA Certified Diamond",
        icon: "💍",
        badge: "Signature",
        fullDescription: "A timeless symbol of eternal love. This exquisite solitaire features a brilliant 1.2 carat GIA certified diamond, meticulously set in 18k white gold. The classic four-prong setting allows maximum light to enter the stone, creating unparalleled brilliance and fire."
    },
    {
        id: 2,
        name: "Trilogy Romance",
        category: "rings",
        price: 4200,
        description: "Platinum setting with three brilliant cut diamonds",
        icon: "💎",
        badge: "Bestseller",
        fullDescription: "Symbolizing past, present, and future. This stunning trilogy ring features three perfectly matched brilliant cut diamonds set in luxurious platinum. Each stone represents a chapter in your love story, united in perfect harmony."
    },
    {
        id: 3,
        name: "Celestial Pendant",
        category: "necklaces",
        price: 2400,
        description: "14k Yellow Gold with IGI Certified Diamond",
        icon: "📿",
        badge: "",
        fullDescription: "Inspired by the stars above. This delicate pendant features an IGI certified diamond suspended in 14k yellow gold, catching the light with every movement. A piece that adds understated elegance to any ensemble."
    },
    {
        id: 4,
        name: "Radiance Tennis Necklace",
        category: "necklaces",
        price: 5800,
        description: "18k White Gold with graduated diamonds",
        icon: "✨",
        badge: "Premium",
        fullDescription: "The epitome of luxury. This magnificent tennis necklace features graduated diamonds perfectly matched for color and clarity, set in 18k white gold. Each stone is hand-selected to create a seamless river of light around your neck."
    },
    {
        id: 5,
        name: "Classic Diamond Studs",
        category: "earrings",
        price: 1900,
        description: "18k White Gold with 0.6ct each diamond",
        icon: "✨",
        badge: "",
        fullDescription: "Timeless elegance for every day. These classic diamond stud earrings feature 0.6 carat diamonds in each ear, set in 18k white gold with secure screw-back closures. Perfect for any occasion, from boardroom to ballroom."
    },
    {
        id: 6,
        name: "Halo Elegance",
        category: "earrings",
        price: 2800,
        description: "Rose Gold with diamond halo setting",
        icon: "💫",
        badge: "New",
        fullDescription: "Modern romance meets vintage charm. These stunning halo earrings feature a central diamond surrounded by a delicate halo of smaller stones, all set in luxurious rose gold. The perfect balance of classic and contemporary."
    },
    {
        id: 7,
        name: "Eternal Tennis Bracelet",
        category: "bracelets",
        price: 4500,
        description: "Platinum with round brilliant diamonds",
        icon: "⚜️",
        badge: "Signature",
        fullDescription: "A classic reinvented. This tennis bracelet showcases perfectly matched round brilliant diamonds set in platinum. The secure clasp ensures your treasure stays safe while you shine at every occasion."
    },
    {
        id: 8,
        name: "Pavé Bangle",
        category: "bracelets",
        price: 3200,
        description: "18k Yellow Gold with pavé diamonds",
        icon: "💫",
        badge: "",
        fullDescription: "Sophisticated sparkle. This elegant bangle is adorned with pavé-set diamonds that create a continuous circle of brilliance. Crafted in 18k yellow gold, it's designed to be worn alone or stacked for maximum impact."
    },
    {
        id: 9,
        name: "Infinity Band",
        category: "rings",
        price: 2200,
        description: "14k Rose Gold with diamond infinity design",
        icon: "💍",
        badge: "",
        fullDescription: "Love without end. This romantic band features an infinity symbol adorned with diamonds, crafted in warm 14k rose gold. A symbol of eternal commitment and endless devotion."
    },
    {
        id: 10,
        name: "Victorian Rose Ring",
        category: "rings",
        price: 2900,
        description: "18k Rose Gold with vintage-inspired setting",
        icon: "💎",
        badge: "",
        fullDescription: "Romance from another era. This vintage-inspired ring features intricate detailing and a center diamond in a gorgeous 18k rose gold setting. Perfect for those who appreciate timeless beauty and craftsmanship."
    },
    {
        id: 11,
        name: "Pearl Drop Necklace",
        category: "necklaces",
        price: 1600,
        description: "South Sea Pearl with diamond accent",
        icon: "📿",
        badge: "",
        fullDescription: "Oceanic elegance. A lustrous South Sea pearl is beautifully complemented by a diamond accent, suspended on a delicate chain. This necklace embodies understated luxury and natural beauty."
    },
    {
        id: 12,
        name: "Chandelier Earrings",
        category: "earrings",
        price: 3400,
        description: "White Gold with cascading diamonds",
        icon: "✨",
        badge: "Premium",
        fullDescription: "Make a grand entrance. These show-stopping chandelier earrings feature cascading diamonds in white gold that catch the light with every turn. Perfect for the most special occasions."
    }
];

// Initialize cart count on page load
function initCart() {
    updateCartCount();
}

// Update cart count badge
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = itemCount;
    }
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    saveCart();
    updateCartCount();
    showNotification('Added to cart!');
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    if (window.location.pathname.includes('cart.html')) {
        displayCartPage();
    }
}

// Update quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            if (window.location.pathname.includes('cart.html')) {
                displayCartPage();
            }
        }
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('manxCart', JSON.stringify(cart));
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 40px;
        background: #C9A961;
        color: white;
        padding: 20px 30px;
        border-radius: 0;
        z-index: 10000;
        font-size: 14px;
        letter-spacing: 1px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        animation: slideInRight 0.3s ease-out;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Get product by ID
function getProduct(id) {
    return products.find(p => p.id === parseInt(id));
}

// Get products by category
function getProductsByCategory(category) {
    return products.filter(p => p.category === category);
}

// Format price
function formatPrice(price) {
    return `£${price.toLocaleString()}`;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initCart);
