import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Base
        'dark': '#0D0D0D',
        'purple-base': '#1F1F38',
        'deep-blue': '#1B1F3B',
        'soft-white': '#EDEDED',
        
        // Accents
        'neon-blue': '#3B82F6',
        'neon-purple': '#8B5CF6',
        'cyan': '#06B6D4',
        
        // Status
        'paid': '#10B981',
        'owing': '#EF4444',
        'pending': '#F59E0B',
      },
    },
  },
  plugins: [],
}

export default config 