import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/navbar.scss"

export default (() => {
  const Navbar: QuartzComponent = ({ allFiles, displayClass }: QuartzComponentProps) => {
    // Lógica: Buscar carpetas únicas (excluyendo 'tags' e 'index')
    const folders = new Set<string>()
    allFiles.forEach((file) => {
      const parts = file.slug?.split("/") ?? []
      if (parts.length > 1 && parts[0] !== "tags" && parts[0] !== "index") {
        folders.add(parts[0])
      }
    })
    const folderList = Array.from(folders).sort()

    return (
      <nav class={`navbar ${displayClass ?? ""}`}>
        {/* Enlace estático al Home */}
        <a href="/Digital-Garden-Mechatronics/" class="nav-link home">Inicio</a>
        
        {/* Enlaces dinámicos generados por tus carpetas */}
        {folderList.map((folder) => (
          <a href={`/Digital-Garden-Mechatronics/${folder}`} class="nav-link">
            {folder.replace(/-/g, " ")}
          </a>
        ))}
        
        <div class="nav-right">
            <a href="https://cafecito.app/TU_USER" target="_blank" class="nav-btn donate">☕ Donar</a>
        </div>
      </nav>
    )
  }
  Navbar.css = style
  return Navbar
}) satisfies QuartzComponentConstructor