const config = {
    darkMode: ['class'],
    content: [
    './pages/**/*.{ts,tsx,mdx}',  
    './components/**/*.{ts,tsx,mdx}', 
    './app/**/*.{ts,tsx,mdx}', 
    './src/**/*.{ts,tsx}', 
  ],
  theme: {
  	extend: {
  		screens: {
  			'min-lg': '1100px',
  			'min-xl': '1250px'
  		},
  		colors: {
  			'primary-red': '#ea0027',
  			'secondary-red': '#b4001e',
  			'primary-gray': '#0e0e0e',
  			'secondary-gray': '#F5F5F5',
  			white: '#ffffff',
  			black: '#000000',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	},
  	fontFamily: {
  		poppins: [
  			'Poppins',
  			'sans-serif'
  		],
  		bebas: [
  			'Bebas Neue',
  			'cursive'
  		]
  	}
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
