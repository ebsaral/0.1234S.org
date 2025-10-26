import { Locales, type IntlayerConfig } from "intlayer";

const config: IntlayerConfig = {
  internationalization: {
    locales: [
      Locales.TURKISH,
      Locales.ENGLISH
    ],
    defaultLocale: Locales.TURKISH,
  },
  routing: {
    mode: "prefix-all",
  },
  log: {
    mode: "verbose"
  },
  build: {
    importMode: "dynamic",
  },
};

export default config;