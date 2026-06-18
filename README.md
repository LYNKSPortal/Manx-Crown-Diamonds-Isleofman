# Manx Crown Diamonds - Multi-Page Website

## 🎉 Your Complete Luxury E-commerce Website

This is a fully functional, multi-page luxury jewellery website with a working shopping cart system.

## 📁 File Structure

```
manx-website/
├── index.html              # Home page
├── images/
│   └── logo.jpeg          # Your brand logo
├── css/
│   └── style.css          # All styling (shared across pages)
├── js/
│   └── main.js            # Shopping cart & product data
└── pages/
    ├── category.html       # Universal product category page
    ├── product.html        # Individual product details
    ├── cart.html          # Shopping cart page
    ├── collections.html    # Collections overview
    ├── about.html         # About Andy Asbridge
    ├── services.html      # Services page
    ├── contact.html       # Contact page
    └── rings.html, necklaces.html, earrings.html, bracelets.html
        (These redirect to category.html with the appropriate filter)
```

## 🔗 How The Navigation Works

### From Home Page:
- Click "Collections" in nav → Goes to collections overview
- Click collection cards → Goes to specific category (rings, necklaces, etc.)
- Click product cards → Goes to individual product detail page
- Click "Add to Cart" → Adds item to cart
- Click cart icon → Goes to cart page

### Internal Navigation:
- All pages link to each other via the main navigation
- Breadcrumbs show your current location
- Product pages link back to their category
- Cart is persistent across all pages (uses localStorage)

## 🛒 Shopping Cart Features

- **Add to Cart**: Click any "Add to Cart" button
- **View Cart**: Click the cart icon (shows item count)
- **Update Quantity**: Use +/- buttons in cart
- **Remove Items**: Click "Remove" button
- **Checkout**: Displays order summary (currently shows alert, ready for payment integration)
- **Persistent Cart**: Cart saves even if you close the browser

## 🎨 How to Customize

### Adding Your Product Photos:

1. **Replace the icon placeholders** in `js/main.js`:
   - Find the `products` array
   - Replace `icon: "💍"` with your image path
   - Example: `icon: "images/products/ring1.jpg"`

2. **Update product information**:
   ```javascript
   {
       id: 1,
       name: "Your Product Name",
       category: "rings", // rings, necklaces, earrings, or bracelets
       price: 3500,
       description: "Short description",
       icon: "images/products/yourimage.jpg", // Your photo
       badge: "New", // Optional: "New", "Bestseller", "Signature", etc.
       fullDescription: "Longer detailed description for product page"
   }
   ```

3. **Add more products**: Just add more objects to the array following the same format

### Changing Prices:
- Edit the `price` field in each product object in `js/main.js`

### Adding New Categories:
1. Add category to `js/main.js` products
2. Add category card to `index.html` and `collections.html`
3. Users can then click to view that category

## 🚀 How to Upload to Your Website

### Option 1: Direct Upload (Most Hosting Providers)
1. Log into your web hosting control panel (cPanel, Plesk, etc.)
2. Go to File Manager
3. Navigate to `public_html` or `www` folder
4. Upload ALL files and folders
5. Your site will be live at your domain!

### Option 2: FTP Upload
1. Download an FTP client (FileZilla is free)
2. Connect to your hosting using FTP credentials
3. Upload all files to the root web directory
4. Done!

### Option 3: Web Host's File Upload
- Most hosts have a simple "Upload Website" feature
- Just zip all the files and upload
- The host will extract and deploy them

## 💳 Adding Real Payment Processing

To accept real payments, you'll need to integrate with:

### Recommended: Stripe
```javascript
// In the checkout() function in cart.html, replace the alert with:
// Stripe integration code (Stripe provides this)
```

### Other Options:
- **PayPal**: paypal.com/business
- **Square**: squareup.com
- **Shopify Payments**: if you migrate to Shopify

## 📱 Mobile Responsive

✅ The website is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## 🎯 Key Features

✅ Multi-page navigation
✅ Product catalog with 12 sample products
✅ Category filtering (rings, necklaces, earrings, bracelets)
✅ Individual product detail pages
✅ Working shopping cart with localStorage
✅ Add/remove items, update quantities
✅ Professional luxury design
✅ Your brand logo integrated
✅ Contact information on every page
✅ Social media links
✅ Sticky navigation header
✅ Breadcrumb navigation
✅ Mobile responsive

## 🔧 Technical Notes

- **No database required** - Products are in JavaScript for easy editing
- **No backend needed** - Pure HTML/CSS/JavaScript
- **Works on any host** - Even simple shared hosting
- **Fast loading** - Optimized and lightweight
- **Modern browsers** - Chrome, Firefox, Safari, Edge

## 📞 Support

For questions about your website:
- Email: andy@manxcrowndiamonds.com
- Phone: +44 7624 368505

## 🎨 Future Enhancements

Want to add later?
- Product search functionality
- Customer reviews
- Wishlist feature
- Email newsletter signup
- Blog section
- Virtual try-on
- Live chat support
- Customer accounts/login

---

**Ready to go live!** Just upload these files to your web hosting and your luxury jewellery store will be online! 💎
