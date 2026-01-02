# H1
## H2
### H3
#### H4
##### H5
###### H6

---

# Tipos de letras LaTeX
$$
\mathrm{X}   % romana recta
\mathit{X}   % cursiva explícita (a veces redundante)
\mathbf{X}   % negrita
\mathsf{X}   % sans serif
\mathtt{X}   % monoespaciado (typewriter)
\mathcal{X}  % caligráfica (mayúsculas)
\mathbb{X}   % blackboard bold (requiere amsfonts/amssymb)
\mathfrak{X} % fraktur (requiere amsfonts/amssymb)
\mathscr{X}  % script (requiere mathrsfs)
$$
$$
\xrightarrow[debajo]{encima}
$$
$$
A \xRightarrow{\text{def}} B

X \xLeftarrow[\text{hip.}]{\text{teo.}} Y
$$
$$
\begin{flalign*}
& % 1. Este ampersand ancla todo a la izquierda
\begin{array}{ll}
\qquad x_{0} & \text{ es el desplazamiento en } t=t_{0} \\
\qquad v_{0} & \text{ es la velocidad en } t=t_{0}
\end{array}
&& % 2. Estos dos ampersands empujan el resto a la derecha
\end{flalign*}
$$

$$
\begin{flalign*}
& % 1. Este ampersand ancla todo a la izquierda
\begin{array}{ll}
\mathrm{Datos} & \text{ } \\
\qquad r=0.2 \; \mathrm{m} & \text{ } \\
\qquad a=0.4  \; \mathrm{m} & \text{ } \\
\qquad k_{1}=2  \; \mathrm{\frac{kN}{m}} & \text{ } \\
\qquad m_{1}=100 \; \mathrm{kg} & \text{ } \\
\qquad m_{2}=100 \; \mathrm{kg} & \text{ } \\
\qquad J_{0}=25 \; \mathrm{kgm} & \text{ } \\
\qquad c=1000 \; \mathrm{\frac{kg}{s}} & \text{ } \\
\qquad F_{0}= 1 \; \mathrm{kN} & \text{ } \\
\qquad f_{0}= \; \mathrm{Hz} & \text{ } \\

\end{array}
&& % 2. Estos dos ampersands empujan el resto a la derecha
\end{flalign*}
$$

---

# Tipos de Notas

Aquí tienes la lista completa de los **Callouts nativos** soportados por Obsidian. He incluido los **alias** (sinónimos que generan el mismo cuadro) para que elijas el que te sea más fácil de recordar.

Para usarlos, recuerda siempre la sintaxis: `> [!NOMBRE]`

## Informativos y Generales (Azul)


> [!NOTE]
> (Nota)
> 
> _El predeterminado._    
  
>[!INFO] 
>(Información)

> [!TODO] 
> (Para hacer)
> 
> "To Do Later"

## Éxito y Completado (Verde)


> [!SUCCESS] 
> (Éxito)

>[!CHECK]
> Revisado

>[!DONE]
>(Hecho)

## Consejos y Claves (Turquesa / Cian)


>[!TIP]
>(Consejo)

> [!HINT]
> (Pista)

>[!IMPORTANT]
>(Importante)

## Precaución y Dudas (Amarillo / Naranja)

> [!WARNING]
> (Advertencia)

>[!CAUTION]
>(Precaución)

> [!ATTENTION]
> (Atención)

> [!QUESTION]
> (Pregunta)

> [!HELP]
> (Ayuda)

>[!FAQ] FAQ
>(Preguntas frecuentes)


## Peligro y Errores (Rojo)

>[!DANGER]
>(Peligro)

>[!ERROR]
>(Error)

> [!BUG]
> (Bug / Fallo de código)

> [!FAILURE]
> (Fallo)

> [!FAIL]
> (Fallo)

> [!MISSING]
> (Faltante)


## Académicos y Citas (Morado / Gris)


> [!EXAMPLE]
> (Ejemplo)
> 
> _Ideal para casos prácticos._

> [!QUOTE]
> (Cita) 
>
>_Para definiciones literales._

> [!ABSTRACT]
> (Resumen)
>
> _Para introducciones de temas._

> [!SUMMARY]
> (Resumen)

>[!TLDR]
>(Resumen rápido)


---

# Tipos de "items"

Solo se visualizan en __modo lectura__:
- `{A}`: Upper alpha
- `{a}`: Lower alpha
- `{I}`: Upper roman
- `{i}`: lower roman
- `{01}`: decimal with leading zero
- `{1}`: decimal (default, though this may not be the case in your theme)

