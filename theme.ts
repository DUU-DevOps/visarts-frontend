'use client';
import { createTheme, rem, Button, Anchor } from '@mantine/core';


export const theme = createTheme({
  fontFamily: "var(--Rubik), sans-serif",
  primaryColor: "indigo",
  headings: {
    fontFamily: "var(--Rubik), sans-serif",
    fontWeight: "100",
    sizes: {
        h1: { fontSize: rem(60), fontWeight: "700"},
        h2: { fontSize: rem(48), fontWeight: "600" },
        h3: { fontSize: rem(32), fontWeight: "500" },
        h4: { fontSize: rem(16), fontWeight: "500" }
    }
  },
  fontSizes: {
    xs: rem(12),
    sm: rem(14),
    md: rem(16),
    lg: rem(18),
    xl: rem(20),
    xxl: rem(24),
  },
  components: {
    Button: Button.extend({
        defaultProps: {
            fw: "400"
        }
    }),
    Anchor: Anchor.extend({
        defaultProps: {
            fw: "400",
            c: "gray",
            underline: "never",
            style: {
              "&:hover": {
                color: "blue",
              }
            }
        }
    })
  }
});