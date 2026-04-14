import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
      /*
            - Font sizes (px)
            10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98

            - Spacing system (px)
            2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128
      */

      :root {
            --on-primary-container: #c8daff;
            --on-tertiary-container: #ffcecd;
            --on-secondary: #ffffff;
            --surface-container-low: #f3f3f3;
            --outline: #727783;
            --on-tertiary: #ffffff;
            --on-background: #1a1c1c;
            --secondary-fixed-dim: #66df75;
            --surface-container: #eeeeee;
            --on-error: #ffffff;
            --background: #f9f9f9;
            --on-secondary-fixed-variant: #00531a;
            --on-primary-fixed-variant: #00468c;
            --surface-variant: #e2e2e2;
            --surface-container-high: #e8e8e8;
            --inverse-primary: #a9c7ff;
            --error-container: #ffdad6;
            --on-secondary-container: #007327;
            --primary-container: #005eb8;
            --on-secondary-fixed: #002106;
            --on-error-container: #93000a;
            --on-primary: #ffffff;
            --surface-dim: #dadada;
            --tertiary-fixed-dim: #ffb3b2;
            --tertiary-container: #bb1931;
            --outline-variant: #c2c6d4;
            --surface: #f9f9f9;
            --primary-fixed-dim: #a9c7ff;
            --on-tertiary-fixed-variant: #92001f;
            --inverse-on-surface: #f0f1f1;
            --surface-container-lowest: #ffffff;
            --tertiary-fixed: #ffdad9;
            --surface-container-highest: #e2e2e2;
            --secondary-fixed: #83fc8e;
            --surface-bright: #f9f9f9;
            --on-surface-variant: #424752;
            --on-surface: #1a1c1c;
            --inverse-surface: #2f3131;
            --tertiary: #94001f;
            --on-tertiary-fixed: #410008;
            --error: #ba1a1a;
            --surface-tint: #005db6;
            --secondary: #006e25;
            --primary-fixed: #d6e3ff;
            --on-primary-fixed: #001b3d;
            --secondary-container: #80f98b;
            --primary: #00478d;
      }

      *, *::after, *::before {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
      }

      * {
            font-size: 62.5%;
      }

      body {
            font-family: "Inter", sans-serif;
            line-height: 1;
            font-weight: 400;
            color: var(--on-surface);
            background-color: var(--surface);
      }
`;

export default GlobalStyles;
