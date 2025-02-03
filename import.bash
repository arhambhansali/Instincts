# Create a new directory
mkdir instincts-website
cd instincts-website

# Initialize git
git init

# Create a Next.js project with TypeScript
npx create-next-app@latest . --typescript --tailwind --use-npm

# Install shadcn/ui and its dependencies
npx shadcn-ui@latest init

# Install additional packages
npm install lucide-react @radix-ui/react-switch @radix-ui/react-dialog

