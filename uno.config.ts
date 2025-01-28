import { defineConfig, presetTypography, presetUno, transformerVariantGroup } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetTypography(),
  ],
  transformers: [
    transformerVariantGroup(),
  ],
  theme: {
    colors: {
      primary: '#2f455cff',
      secondary: '#1dcdfeff',
      accent: '#21cfb3ff',
      background: '#fafafaff',
    },
    breakpoints: {
      xs: '720px',
      sm: '900px',
      md: '1400px',
      lg: '1920px',
    },
  },
})
