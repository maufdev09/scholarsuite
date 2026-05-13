# ScholarSuite

A modern, comprehensive school management platform built with Next.js, designed to streamline educational administration for schools, teachers, students, and parents.

## 🚀 Features

- **User Authentication**: Secure login and registration system powered by Firebase
- **Course Management**: Add, manage, and display educational courses
- **Responsive Design**: Mobile-first design using Tailwind CSS and shadcn/ui components
- **Real-time Updates**: Firebase integration for real-time data synchronization
- **Modern UI/UX**: Clean, intuitive interface with smooth animations

## 🛠️ Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui, Radix UI
- **Authentication**: Firebase Auth
- **Database**: Firebase (configurable)
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React, React Icons
- **Build Tools**: ESLint, PostCSS

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version 18 or higher)
- npm, yarn, pnpm, or bun
- A Firebase project

## 🔧 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd scholarsuite
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up Firebase**
   - Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication and Firestore (if using database features)
   - Get your Firebase configuration from Project Settings

4. **Environment Variables**

   Create a `.env.local` file in the root directory and add your Firebase configuration:

   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
   ```

## 🚀 Running the Application

1. **Development Server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

2. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

3. **Build for Production**
   ```bash
   npm run build
   npm run start
   ```

## 📁 Project Structure

```
scholarsuite/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   ├── about-us/           # About page
│   │   ├── items/              # Course/item management pages
│   │   ├── login/              # Authentication pages
│   │   └── register/
│   ├── components/             # Reusable UI components
│   │   ├── ui/                 # shadcn/ui components
│   │   └── ...                 # Custom components
│   ├── data/                   # Static data files
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Utility functions and types
│   └── providers/              # Context providers
├── public/                     # Static assets
├── firebase.config.ts          # Firebase configuration
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
└── package.json                # Dependencies and scripts
```

## 🔍 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support, email support@scholarsuite.com or join our Discord community.

---

Built with ❤️ using Next.js and Firebase
