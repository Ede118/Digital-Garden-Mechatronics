import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  const Navbar: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    return (
      <nav class={`navbar ${displayClass ?? ""}`}>
        {/* Aquí tus enlaces manuales */}
        <a href="/Digital-Garden-Mechatronics/">Inicio</a>
        <a href="/Digital-Garden-Mechatronics/Mecánica-Vibratorio">Mecánica Vibratoria</a>
        <a href="https://cafecito.app/TU_USER" target="_blank">Donar</a>
      </nav>
    )
  }
  return Navbar
}) satisfies QuartzComponentConstructor