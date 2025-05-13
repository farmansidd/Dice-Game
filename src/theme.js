// Theme configuration for consistent styling across components
const theme = {
  colors: {
    primary: '#4F46E5', // Indigo
    secondary: '#10B981', // Emerald
    dark: '#1F2937',
    light: '#F9FAFB',
    white: '#FFFFFF',
    black: '#000000',
    success: '#10B981',
    error: '#EF4444',
    warning: '#F59E0B',
  },
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Inter', sans-serif",
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '12px',
    round: '50%',
  },
  shadows: {
    small: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    medium: '0 3px 6px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.12)',
    large: '0 10px 20px rgba(0,0,0,0.15), 0 3px 6px rgba(0,0,0,0.10)',
  },
  transitions: {
    fast: '0.2s ease',
    medium: '0.3s ease',
    slow: '0.5s ease',
  }
};

export default theme;