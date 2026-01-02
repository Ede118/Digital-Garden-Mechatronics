import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Mecatrónica - DG",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "es-ES",
    baseUrl: "ede118.github.io/Digital-Garden-Mechatronics",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      // En quartz.config.ts
      colors: {
        lightMode: {
          light: "#faf4ed",       // EL FONDO CREMA (Rosé Pine Dawn Base)
          lightgray: "#fffaf3",   // Fondo de bloques de código/cajas
          gray: "#9893a5",        // Elementos inactivos
          darkgray: "#575279",    // Texto del cuerpo (Subtle Pine)
          dark: "#575279",        // Títulos por defecto
          secondary: "#1A7DA4",   // Tu "Teal" personalizado para enlaces
          tertiary: "#EE653A",    // Tu "Subtext" personalizado (naranja rojizo) para hover
          highlight: "rgba(26, 125, 164, 0.15)", // Tu Teal con transparencia
          textHighlight: "#b3aa0288", // Amarillo pálido con transparencia

        },
        darkMode: {
          light: "#303446",       // Frappé Base
          lightgray: "#292c3c",
          gray: "#626880",
          darkgray: "#c6d0f5",
          dark: "#c6d0f5",
          secondary: "#11B7C5",   // Tu Teal oscuro
          tertiary: "#FB35D8",
          highlight: "rgba(17, 183, 197, 0.15)",
          textHighlight: "#b3aa0288", // Amarillo pálido con transparencia

        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "mathjax" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
