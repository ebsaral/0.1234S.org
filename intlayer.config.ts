import { Locales, type IntlayerConfig } from "intlayer";

const config: IntlayerConfig = {
  internationalization: {
    locales: [
      Locales.ENGLISH,
      Locales.TURKISH,
    ],
    defaultLocale: Locales.ENGLISH,
  },
  middleware: {
    prefixDefault: true,
  },
  log: {
    mode: "verbose"
  },
  build: {
    importMode: "dynamic",
  },
};

export default config;