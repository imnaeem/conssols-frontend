# Construction Solutions Platform

A comprehensive web platform connecting construction companies with clients for project bidding, management, and reviews. This marketplace enables construction service providers to showcase their expertise and clients to find reliable contractors for their projects.

## 🏗️ Platform Overview

The Construction Solutions Platform is a complete marketplace solution that facilitates the entire construction project lifecycle:

1. **Registration & Profiles**: Companies and clients can register and create detailed profiles
2. **Project Posting**: Clients post construction projects with specifications and requirements
3. **Bidding System**: Construction companies submit competitive bids on projects
4. **Project Award**: Clients review proposals and select winning companies
5. **Work Management**: Track project progress and milestones
6. **Review System**: Clients provide feedback and ratings after project completion

## 👥 User Types

### Construction Companies
- Create detailed company profiles with portfolio and credentials
- Browse and search available construction projects
- Submit competitive bids with proposals and pricing
- Manage awarded projects through company dashboard
- Build reputation through client reviews and ratings

### Clients
- Post construction projects with detailed specifications
- Browse and search construction companies by expertise and ratings
- Review and compare company bids and proposals
- Award projects to selected companies
- Track project progress and provide reviews upon completion

### Platform Administrators
- Manage user accounts and verify company credentials
- Monitor platform activity and resolve disputes
- Maintain project categories and platform settings
- Generate analytics and reports on platform usage

## ✨ Key Features

- **User Authentication**: Secure registration and login for all user types
- **Advanced Search & Filtering**: Find companies or projects by location, expertise, ratings, etc.
- **Bidding Management**: Comprehensive proposal submission and comparison tools
- **Project Tracking**: Real-time progress monitoring and milestone management
- **Review & Rating System**: Detailed feedback mechanism for quality assurance
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Profile Management**: Rich user profiles with portfolios and credentials
- **Notification System**: Keep users updated on bids, awards, and project status

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern React framework with hooks and functional components
- **Material-UI (MUI)** - Comprehensive component library for consistent UI
- **Redux Toolkit** - State management for complex application data
- **React Router** - Client-side routing with protected routes
- **Axios** - HTTP client for API communication
- **JWT Authentication** - Secure token-based authentication
- **Formik & Yup** - Form handling and validation
- **React Helmet** - Dynamic document head management

### Development Tools
- **Create React App** - Development environment and build tools
- **ESLint** - Code linting and quality assurance
- **Prettier** - Code formatting (implied by modern React setup)

## 📋 Prerequisites

Before running this application, ensure you have:

- **Node.js** (version 14.0 or higher)
- **npm** (version 6.0 or higher) or **yarn**
- **Git** for version control
- A backend API server (not included in this frontend repository)

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/imnaeem/conssols-frontend.git
cd conssols-frontend
```

### 2. Install Dependencies
```bash
# Using npm (recommended due to legacy dependencies)
npm install --legacy-peer-deps

# Or using yarn
yarn install
```

**Note**: The `--legacy-peer-deps` flag is required due to Material-UI v4 compatibility with React 18.

### 3. Environment Configuration
Create a `.env` file in the root directory and configure:
```bash
REACT_APP_API_URL=your_backend_api_url
# Add other environment variables as needed
```

### 4. Start Development Server
```bash
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

### `npm start`
Runs the app in development mode with hot-reloading enabled.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Creates an optimized production build in the `build` folder.

**Note**: Currently experiencing build issues due to dependency conflicts. Use development mode for testing.

### `npm run eject` ⚠️
**Warning**: This is irreversible! Only use if you need full control over build configuration.

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Auth/            # Authentication components
│   ├── ClientDashboard/ # Client user interface
│   ├── CompanyDashboard/ # Company user interface
│   ├── AdminDashboard/  # Admin user interface
│   ├── FindCompanies/   # Company search and listing
│   ├── FindProjects/    # Project search and listing
│   ├── Header/          # Navigation header
│   ├── Footer/          # Page footer
│   ├── homepage/        # Landing page components
│   └── StaticPages/     # About, FAQ, Privacy Policy, etc.
├── actions/             # Redux action creators
├── reducers/            # Redux reducers
├── routes/              # Route configuration and protection
├── api/                 # API service functions
├── images/              # Static image assets
├── App.js              # Main application component
├── store.js            # Redux store configuration
├── theme.js            # Material-UI theme configuration
└── styles.css          # Global styles
```

## 🔐 Authentication Flow

The platform implements JWT-based authentication with role-based access control:

1. Users register as either Company or Client
2. Upon successful login, JWT tokens are stored locally
3. Protected routes automatically verify token validity
4. Expired tokens trigger automatic logout and redirect

## 🌐 API Integration

The frontend communicates with a RESTful backend API for:
- User authentication and profile management
- Project CRUD operations
- Company listings and search
- Bidding and proposal management
- Review and rating system

## 🔧 Known Issues & Troubleshooting

### Build Issues
- **AJV Module Error**: Currently experiencing dependency conflicts with webpack/ajv
- **Material-UI Compatibility**: Using legacy peer deps due to Material-UI v4 with React 18
- **Solution**: Use development server (`npm start`) for testing and development

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile-responsive design tested on iOS and Android

## 🚀 Deployment

For production deployment:

1. Resolve dependency conflicts for successful builds
2. Configure production environment variables
3. Deploy to hosting platforms like:
   - Netlify
   - Vercel
   - AWS S3 + CloudFront
   - Traditional web hosting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit changes (`git commit -m 'Add new feature'`)
4. Push to branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support or questions:
- Create an issue in the GitHub repository
- Contact the development team through the platform's contact page

---

**Built with ❤️ for the construction industry**
