# Project Documentation

## Features

- Responsive React + Vite frontend with an admin dashboard.
- Express API with MongoDB models for Projects, Services, Testimonials.
- Image upload support (Cloudinary or multer).
- Interactive WebGL / shader-based UI components in the `lightswind` design system.
- Role-based route protection for admin tasks.

## Environment variables

Server (.env)
- MONGO_URI — MongoDB connection string
- JWT_SECRET — JWT signing secret for auth
- CLOUDINARY_URL / CLOUDINARY_CLOUD_NAME / CLOUDINARY_API_KEY / CLOUDINARY_API_SECRET — if using Cloudinary
- PORT — server port (default 5000)

Client (.env)
- VITE_API_BASE_URL — API base URL used by the frontend
- Any other Vite-prefixed keys required by client components

## Common scripts

Check each package.json for exact script names.

Server
- pnpm install
- pnpm start (or pnpm dev for nodemon-based development)

Client
- pnpm install
- pnpm dev
- pnpm build
- pnpm preview

Root (if monorepo scripts exist)
- pnpm install
- pnpm --filter server install
- pnpm --filter client install

## Deployment notes

- Build the client (pnpm build) and serve static assets from a static host or from the server (if configured).
- Ensure production environment variables are set (MongoDB, JWT secret, Cloudinary).
- Consider using a process manager (PM2) or containerization (Docker) for the server.

## Testing & Linting

- There are no dedicated test suites included by default. Add Jest / Vitest for unit tests in client/server as needed.
- Follow existing ESLint/format rules in the workspace; run configured linters before commits.

## Troubleshooting

- CORS issues: verify server CORS settings and client API base URL.
- Uploads: confirm Cloudinary credentials or multer storage paths and that the server receives multipart/form-data.
- Auth: check JWT_SECRET consistency between environments and token expiration handling.

## Contributing

- Fork the repo, create a feature branch, open a PR against main.
- Keep changes focused and include relevant tests if you add logic.
- Follow existing code patterns in client/src/components and server/controllers.

## Credits

- Project scaffolded with Vite (React) and Express + MongoDB.
- Visuals and UI patterns implemented under `client/src/components/lightswind`.

## Contacts

- Phone: +254 745 801 435
- Email: [samuelkimanthi02@gmail.com](mailto:samuelkimanthi02@gmail.com)
- WhatsApp: [https://wa.me/254745801435](https://wa.me/254745801435)
- LinkedIn: (https://www.linkedin.com/in/samuel-kimanthi-a8a607209/)
- GitHub: (https://github.com/samkhm)

For implementation questions, inspect controllers and components linked in this README, or open an issue/PR in the repository.