# Portfolio

This is my personal web portfolio, showcasing my projects and skills.

## 🚀 Live Demo

Check out the live version: [crljhnmngs](https://crljhnmng.dev/)

## 🛠 Tech Stack

-   **Framework**: [React](https://reactjs.org/)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Type Checking**: [TypeScript](https://www.typescriptlang.org/)

## 📦 Getting Started

To run this project locally:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/crljhnmngs/portfolio.git
    cd portfolio
    ```

2. **Install dependencies:**

    ```Bun
    curl -fsSL https://bun.sh/install | bash
    ```

    ```bash
    bun install
    ```

3. **Start the development server:**

    ```bash
    bun run dev
    ```

    Open [http://localhost:3001](http://localhost:3001) to view it in your browser.

## 🔨 Building for Production

To create a production build:

```bash
bun run build
```

The optimized files will be in the `dist` folder.

## 🚀 Deployment

This project is hosted on [Vercel](https://vercel.com/). To deploy:

1. **Install Vercel CLI:**

    ```bash
    bun install -g vercel
    ```

2. **Deploy the project:**

    ```bash
    vercel
    ```

Follow the prompts to complete the deployment.

## 🔄 Migration from Create React App (CRA) to Vite

This project was originally bootstrapped with Create React App and has been migrated to Vite for faster builds and improved performance.

### Key Changes:

-   Replaced `react-scripts` with Vite.
-   Updated `package.json` scripts:

    ```json
    {
        "scripts": {
            "dev": "vite",
            "build": "vite build",
            "serve": "vite preview"
        }
    }
    ```

-   Added `vite.config.ts` for Vite-specific configuration.
-   Updated import paths for assets based on Vite’s requirements.

For more details, check out the [Vite Migration Guide](https://vitejs.dev/guide/migration-from-cra.html).
