import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// quartz.layout.ts

// 1. HEADER (Lo que se ve arriba de todo)
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    Component.PageTitle(), // Título Principal (Logo)
    Component.Navbar(),    // Nuestro menú manual
    Component.Spacer(),    // Empuja lo siguiente a la derecha
    Component.Search(),
    Component.Darkmode(),
  ],
  afterBody: [],
  footer: Component.Footer({ links: {} }),
}

// 2. CUERPO DE LA PÁGINA (Lo que va debajo del header)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(), // Título de la NOTA (ej: Unidad 1), NO del sitio
    Component.ContentMeta(),
    Component.TagList(),
  ],
  
  // ¡¡IMPORTANTE!! Dejar 'left' VACÍO para borrar la barra lateral izquierda
  left: [], 

  right: [
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Graph(),
  ],
}

// 3. (Opcional) Hacer lo mismo con defaultListPageLayout si quieres que el Home se vea igual
export const defaultListPageLayout: PageLayout = {
    beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
    left: [], // Vaciar aquí también
    right: [],
}