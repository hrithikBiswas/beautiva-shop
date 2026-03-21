# Beautiva Shop

A modern e-commerce platform for beauty and skincare products, built with Next.js 15, featuring a seamless shopping experience with user authentication, product management, and a responsive design.

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| UI Library | [HeroUI](https://heroui.io/) |
| Database | PostgreSQL |
| ORM | [Prisma](https://www.prisma.io/) |
| Authentication | [Supabase Auth](https://supabase.com/auth) |
| Storage | [Supabase Storage](https://supabase.com/storage) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com/) |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Form Handling | Formik + Yup |
| Image Carousel | [Swiper](https://swiperjs.com/) |

## Features

### Customer Features
- **Product Browsing** - Browse products with filtering by price range and category
- **Product Details** - View detailed product information with image gallery
- **Shopping Cart** - Add/remove products, adjust quantities
- **Wishlist** - Save products for later
- **User Authentication** - Email/password and Google OAuth login
- **User Profile** - Manage account information
- **Dark/Light Theme** - Toggle between themes with system preference detection

### Admin Features
- **Product Management** - Add new products with images
- **Category Management** - Organize products by category
- **Dashboard** - Overview of store management

### Content Features
- **Blog** - Company blog posts
- **Responsive Design** - Optimized for all devices

## Project Structure

```
beautiva-shop/
├── prisma/
│   └── schema.prisma          # Database schema
├── public/                    # Static assets
├── src/
│   ├── app/
│   │   ├── (site)/           # Public pages
│   │   │   ├── (auth)/       # Authentication pages
│   │   │   │   ├── login/
│   │   │   │   ├── register/
│   │   │   │   └── auth/     # OAuth callbacks
│   │   │   ├── about/
│   │   │   ├── blog/         # Blog listing & detail
│   │   │   ├── contact/
│   │   │   ├── products/     # Product listing & detail
│   │   │   └── profile/
│   │   ├── admin/            # Admin dashboard
│   │   │   ├── product/
│   │   │   ├── category/
│   │   │   └── post/
│   │   └── api/              # API routes
│   │       ├── blog/
│   │       ├── cart/
│   │       ├── category/
│   │       ├── product/
│   │       ├── user/
│   │       └── wishlist/
│   ├── components/
│   │   ├── admin/            # Admin-specific components
│   │   ├── common/           # Shared components
│   │   ├── footer/
│   │   ├── Header/           # Navigation header
│   │   ├── Home/             # Home page sections
│   │   ├── product/          # Product components
│   │   ├── skeleton/          # Loading skeletons
│   │   ├── slider/           # Swiper sliders
│   │   └── SVG/              # SVG icons
│   ├── constant/             # Static data
│   ├── context/              # React contexts
│   │   ├── AuthContext.js    # Authentication state
│   │   └── ProductContext.js # Product/cart state
│   ├── hooks/                # Custom React hooks
│   ├── providers/            # Context providers
│   └── utils/                # Utility functions
│       ├── actions.js        # Server actions
│       ├── prisma.js        # Prisma client
│       └── supabase/        # Supabase clients
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- Supabase project (for auth and storage)

### Environment Variables

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/beautiva_shop"
DIRECT_URL="postgresql://user:password@localhost:5432/beautiva_shop"

# Supabase
NEXT_PUBLIC_SUPABASE_URL="https://your-project.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-key"
```

### Installation

```bash
# Install dependencies
npm install

# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Database Commands

```bash
# Push schema changes to database
npx prisma db push

# View database in Prisma Studio
npx prisma studio

# Create migration
npx prisma migrate dev --name migration_name
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Data Models

### User
- `id` (UUID) - Unique identifier
- `email` (String) - User email (unique)
- `name` (String) - Display name
- `image` (String) - Profile image URL
- `role` (Enum) - USER or ADMIN
- Relations: CartItems, Wishlists, Posts, Products

### Product
- `id` (UUID) - Unique identifier
- `name` (String) - Product name
- `description` (String) - Product description
- `price` (Float) - Product price
- `image` (String) - Main image URL
- `hoverImage` (String) - Hover image URL
- `stock` (Int) - Stock quantity
- `category` (String) - Category name
- `featured` (Boolean) - Featured product flag
- Relations: CartItems, Wishlists

### Category
- `id` (UUID) - Unique identifier
- `name` (String) - Category name
- `slug` (String) - URL-friendly slug
- `description` (String) - Category description

### CartItem
- Links Users to Products with quantity
- Unique constraint on userId + productId

### Wishlist
- Links Users to Products
- Unique constraint on userId + productId

### Post
- Blog post content
- Links to User (author)
- Supports publishing status

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/product` | GET, POST | List/create products |
| `/api/product/[id]` | GET, PUT, DELETE | Single product operations |
| `/api/cart` | GET, POST | Cart operations |
| `/api/wishlist` | GET, POST, DELETE | Wishlist operations |
| `/api/category` | GET, POST | Category operations |
| `/api/blog` | GET, POST | Blog post operations |
| `/api/user` | POST | User creation/sync |

## Deployment

The project can be deployed to Vercel or any Node.js hosting platform.

```bash
# Build for production
npm run build

# Start production server
npm run start
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
