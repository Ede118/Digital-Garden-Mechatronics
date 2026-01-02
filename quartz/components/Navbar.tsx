import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/navbar.scss"

export default (() => {
  const Navbar: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    
    // Lógica simple: Si la URL tiene el nombre de tu repo, es Producción.
    // Si no, es Localhost.
    const baseDir = (typeof window !== "undefined" && window.location.pathname.includes("/Digital-Garden-Mechatronics")) 
      ? "/Digital-Garden-Mechatronics" 
      : ""

    return (
      <nav class={`navbar ${displayClass ?? ""}`}>
        {/* IZQUIERDA: Inicio */}
        <a href={`${baseDir}/`} class="nav-link home">Inicio</a>

        {/* CENTRO: Tus Materias (AÑADE AQUÍ TUS ENLACES MANUALMENTE) */}
        {/* Copia y pega esta línea para cada materia nueva */}
        <a href={`${baseDir}/Mecánica-Vibratorio`} class="nav-link">Mecánica Vibratoria</a>
        {/* <a href={`${baseDir}/Otra-Materia`} class="nav-link">Otra Materia</a> */}

        {/* DERECHA: Botón Donar */}
        <div class="nav-right">
            <a href="https://cafecito.app/TU_USER" target="_blank" class="nav-btn donate">☕ Donar</a>
        </div>
      </nav>
    )
  }
  Navbar.css = style
  return Navbar
}) satisfies QuartzComponentConstructor