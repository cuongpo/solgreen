# SolGreen - Carbon Credit Exchange

SolGreen is a modern, user-friendly carbon credit exchange platform built on Solana's blockchain technology. The platform connects businesses and individuals seeking to offset their carbon footprint with verified carbon reduction and removal projects from around the world.

## Features

### Landing Page
- **Modern Design**: Clean, responsive interface with parallax scrolling effects
- **Project Showcase**: Highlights featured carbon offset projects with detailed information
- **Benefit Sections**: Separate tabs for buyers and sellers showcasing platform advantages
- **Partner Logos**: Displays certification partners including Verra, Gold Standard, UN Climate, Puro.earth, and Solana

### Marketplace
- **Project Listings**: Browse various carbon credit projects with filtering and sorting options
- **Detailed Project Information**: View comprehensive project details via modal interface
- **Interactive Elements**: 
  - Image galleries with thumbnails
  - Tabbed content for verification, documentation, and recent activity
  - Responsive design for optimal viewing on all devices

## Project Details Feature
The marketplace includes a detailed view for each carbon project that displays:

- **Project Overview**: Title, location, certification badge, and price information
- **Project Gallery**: Main image with thumbnail navigation
- **Key Stats**: Credit price, available credits, vintage years, and project type
- **Detailed Information**: 
  - Comprehensive project description
  - Environmental impact metrics (trees planted, CO2 reduced, communities supported)
  - Certification details and verification process
  - Project documentation
  - Recent trading activity

## Installation and Setup

1. Clone the repository to your local machine
2. Navigate to the project directory
3. Run a local server to view the project:
   ```
   python -m http.server 8000
   ```
4. Open your browser and navigate to `http://localhost:8000` to view the landing page or `http://localhost:8000/marketplace.html` to view the marketplace

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with responsive design
- **Blockchain**: Solana integration for transactions
- **Graphics**: SVG images for project illustrations and partner logos
- **Hosting**: Compatible with any static web hosting service

## Project Structure

```
carbon/
├── index.html           # Landing page
├── marketplace.html     # Marketplace page
├── styles.css           # Main stylesheet for landing page
├── marketplace-styles.css # Marketplace-specific styles
├── marketplace.js       # JavaScript functionality for marketplace
├── images/              # Project and partner images
│   ├── project images   # Carbon project illustrations
│   └── partner logos    # Certification partner SVGs
└── README.md            # Project documentation
```

## Development

### Future Enhancements
- Wallet integration for Solana transactions
- User account management system
- Real-time price updates and project availability
- Advanced filtering and search capabilities
- Dashboard for tracking purchased and retired credits

## Credits

SolGreen is a demonstration project showcasing the potential of blockchain technology in environmental markets. All project data is simulated for demonstration purposes.

## License

[MIT License](LICENSE)
