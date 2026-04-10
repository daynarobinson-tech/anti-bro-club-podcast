@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 40 30% 98%;
    --foreground: 30 10% 12%;
    --card: 40 25% 96%;
    --card-foreground: 30 10% 12%;
    --popover: 40 30% 98%;
    --popover-foreground: 30 10% 12%;
    --primary: 16 85% 55%;
    --primary-foreground: 0 0% 100%;
    --secondary: 30 20% 90%;
    --secondary-foreground: 30 10% 12%;
    --muted: 30 15% 92%;
    --muted-foreground: 30 10% 45%;
    --accent: 16 85% 55%;
    --accent-foreground: 0 0% 100%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 30 15% 85%;
    --input: 30 15% 85%;
    --ring: 16 85% 55%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 30 15% 8%;
    --foreground: 40 20% 95%;
    --card: 30 12% 12%;
    --card-foreground: 40 20% 95%;
    --popover: 30 15% 8%;
    --popover-foreground: 40 20% 95%;
    --primary: 16 85% 55%;
    --primary-foreground: 0 0% 100%;
    --secondary: 30 10% 18%;
    --secondary-foreground: 40 20% 95%;
    --muted: 30 10% 20%;
    --muted-foreground: 40 10% 60%;
    --accent: 16 85% 55%;
    --accent-foreground: 0 0% 100%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 30 10% 22%;
    --input: 30 10% 22%;
    --ring: 16 85% 55%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
    font-family: 'DM Sans', sans-serif;
  }
  h1, h2, h3, .headline {
    font-family: 'Bebas Neue', sans-serif;
  }
}

.grain-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 100;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
}

.text-gradient {
  background: linear-gradient(135deg, #e85a33 0%, #c94420 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.15);
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease forwards;
}

.animate-delay-100 {
  animation-delay: 0.1s;
}

.animate-delay-200 {
  animation-delay: 0.2s;
}

.animate-delay-300 {
  animation-delay: 0.3s;
}

.animate-delay-400 {
  animation-delay: 0.4s;
}

.strikethrough-decoration {
  position: relative;
  display: inline-block;
}

.strikethrough-decoration::after {
  content: '';
  position: absolute;
  left: -5%;
  top: 50%;
  width: 110%;
  height: 4px;
  background: #e85a33;
  transform: rotate(-2deg);
}
