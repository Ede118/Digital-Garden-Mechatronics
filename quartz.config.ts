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
      colors: {
        lightMode: {
          light: "#faf4ed",      // Fondo Rosé Pine Dawn
          lightgray: "#fffaf3",  // Fondo secundario
          gray: "#9893a5",       // Elementos inactivos
          darkgray: "#575279",   // Texto normal
          dark: "#286983",       // Títulos (Pine)
          secondary: "#1A7DA4",  // TU PERSONALIZACIÓN (ctp-custom-teal@@light)
          tertiary: "#EE653A",   // TU PERSONALIZACIÓN (ctp-custom-subtext1@@light)
          highlight: "rgba(26, 125, 164, 0.15)", // Tu color secundario con transparencia
          textHighlight: "#b3aa0288", // Amarillo pálido con transparencia
        },
        darkMode: {
          light: "#303446",      // Fondo Catppuccin Frappé
          lightgray: "#292c3c",  // Fondo secundario
          gray: "#626880",       // Elementos inactivos
          darkgray: "#c6d0f5",   // Texto normal
          dark: "#8caaee",       // Títulos (Blue)
          secondary: "#11B7C5",  // TU PERSONALIZACIÓN (ctp-custom-teal@@dark)
          tertiary: "#FB35D8",   // TU PERSONALIZACIÓN (ctp-custom-subtext0@@dark)
          highlight: "rgba(17, 183, 197, 0.15)", // Tu color secundario con transparencia
          textHighlight: "#b3aa0288",
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
      Plugin.Latex({ renderEngine: "katex" }),
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
