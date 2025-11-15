# Little Lemon Restaurant

A modern, responsive restaurant website built with React for Little Lemon, a family-owned Mediterranean restaurant in Chicago.

## Features

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Online Table Reservations**: Interactive booking form with real-time validation
- **Menu Showcase**: Weekly specials with beautiful imagery
- **Customer Testimonials**: Social proof from satisfied customers
- **Accessible**: WCAG compliant with semantic HTML and ARIA labels
- **Modern UI**: Polished design with smooth animations and transitions

## Technologies Used

- React 18
- React Router DOM
- CSS3 (Grid & Flexbox)
- Font Awesome Icons
- Jest & React Testing Library

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd lab
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open in your browser at `http://localhost:3000`

## Available Scripts

### `npm start`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder. The build is optimized for best performance.

### `npm run eject`
**Note: this is a one-way operation. Once you eject, you can't go back!**

## Project Structure

```
lab/
├── public/              # Static files
├── src/
│   ├── components/
│   │   ├── layout/      # Header, Footer, Layout components
│   │   └── pages/       # Page components
│   │       ├── Home/    # Home page sections
│   │       ├── Bookings/# Booking form and validation
│   │       ├── NotFound/
│   │       └── UnderConstruction/
│   ├── utils/           # Utility functions and helpers
│   ├── App.js           # Main app component with routing
│   ├── index.js         # Entry point
│   └── index.css        # Global styles
└── README.md
```

## Features in Detail

### Table Reservations

The booking system includes:
- Date picker with minimum date validation
- Available time slots selection
- Guest count validation (1-10 guests)
- Occasion selection (Birthday, Anniversary)
- Real-time form validation
- Error messaging for invalid inputs
- Confirmation page after successful booking

### Responsive Design

The website is fully responsive with breakpoints for:
- Desktop (>992px)
- Tablet (693px - 992px)
- Mobile (<692px)

### Accessibility

- Semantic HTML5 elements (header, nav, main, footer, section, article)
- ARIA labels for screen readers
- Alt text for all images
- Keyboard navigation support
- Focus indicators on interactive elements
- High contrast color scheme
- Form labels properly associated with inputs

### Testing

Unit tests cover:
- Form field rendering and default values
- Form validation logic
- Submit functionality
- Error message display
- Button state management

Run tests with:
```bash
npm test
```

## Design System

### Colors
- Primary: `#495E57` (Dark Green)
- Secondary: `#F4CE14` (Yellow)
- Accent: `#EE9972` (Peach)
- Background: `#FFFFFF` (White)
- Surface: `#EDEFEE` (Light Gray)

### Typography
- Headings: Markazi Text
- Body: Karla

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

This is a course project. For any suggestions or improvements, please open an issue.

## License

This project was created as part of a Meta Front-End Developer course.

## Acknowledgments

- Meta Front-End Developer Professional Certificate
- Font Awesome for icons
- Google Fonts for typography
