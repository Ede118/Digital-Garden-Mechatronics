# Respuesta de un Sistema de un Grado de Libertad a una Carga Periódica

## Serie de Fourier

Toda carga periódica puede ser reemplazada por una suma de cargas armónicas mediante la serie de Fourier $\mathrm{Carga}\xrightarrow{\mathrm{Fourier}}\mathrm{Serie \ Armonica}$.

Luego, a partir de la respuesta a una carga armónica y el principio de superposición (para sistemas LTI) la respuesta del sistema a la carga periódica puede ser determinada por la superposición de las respuestas a cada una de las cargas armónicas.


> [!ATTENTION]
> Se debe prestar especial atención entre la diferencia de las frecuencias.
> - $\omega_{n}=\sqrt{ \frac{k}{m} }$  
> 	es la __frecuencia natural__ del sistema
> - $\Omega$  
> 	es la __frecuencia fundamental de la carga__  
> -  $\tau$  
> 	es el __periodo fundamental de la carga__
> -$T$
> 	es el __periodo de muestreo__ (que suele ser más grande que el periodo fundamental de la carga)
> - $\Delta f$  
> 	es la __resolución espectral__ (paso de la frecuencia).  
> - $\Omega_{m}=m\Omega$  
> 	son los armónicos discretos (armónicos numéricos) que aparecen en la serie de Fourier de la carga periódica  
  
### Serie Trigonométrica de Fourier 

Admitiendo una carga externa $F(t)$ con periodo $\tau=\frac{2\pi}{\Omega}=\frac{1}{f}$, se puede hacer la expansión mediante serie de senos y cosenos como:
$$
\begin{align}
F(t)  & =  \frac{a_{0}}{2}+\sum_{m=1}^{\infty} a_{m}\cos(m\Omega t) + \sum_{m=1}^{\infty} b_{m}\sin(m\Omega t) \\ \\

a_{0} & =  \frac{2}{\tau}\int_{0}^{\tau} F(t)\;dt \\
a_{m} & =  \frac{2}{\tau}\int_{0}^{\tau} F(t)\cos(m\Omega t)\;dt \\
b_{m} & =  \frac{1}{\tau}\int_{0}^{\tau} F(t)\sin(m\Omega t)\;dt
\end{align}
$$
>[!QUESTION] 
>>Admitiendo una carga externa $F(t)$ con periodo $\tau=\frac{2\pi}{\Omega}=\frac{1}{f}$
>
>¿Eso quiere decir que el periodo fundamental de la carga coincide con mi periodo de adquisición?
>
> Si, el periodo de adquisición y el periodo fundamental coinciden en el siguiente estudio. Podrían no hacerlo. Es conveniente que $T$ (periodo de muestreo) sea lo suficientemente grande como para darme una "buena definición" en el dominio de la frecuencia


Para un sistema de 1 grado de libertad masa-resorte-amortiguador

![[Pasted image 20251214212518.png]]

la ecuación de movimiento será:
$$
m \ddot{x}(t) + c \dot{x}(t) + k x(t) = F(t) = \frac{a_{0}}{2}+\sum_{m=1}^{\infty} a_{m}\cos(m\Omega t) + \sum_{m=1}^{\infty}b_{m}\sin(m\Omega t)
$$
Gracias al principio de superposición, podemos simplemente buscar las respuestas a las siguientes _cargas_ del sistema:
$$
\begin{align}
m \ddot{x}(t) + c \dot{x}(t) + k x(t)  & = \frac{a_{0}}{2} \\
 \\
m \ddot{x}(t) + c \dot{x}(t) + k x(t)  & = a_{m}\cos(m\Omega t)  \\
 \\
m \ddot{x}(t) + c \dot{x}(t) + k x(t)  & = b_{m}\sin(m\Omega t)
\end{align}
$$
donde las respuestas serán:
$$
\begin{align}
x_{p}(t)  & = \frac{a_{0}}{2k} \\
 \\
x_{p}(t) & = \frac{\frac{a_{m}}{k}}{\sqrt{ (1-\beta_{m}^{2})^{2}+(2\zeta \beta_{m})^{2} }} \cos(m\Omega t-\phi_{m}) \\
 \\
x_{p}(t) & = \frac{\frac{a_{m}}{k}}{\sqrt{ (1-\beta_{m}^{2})^{2}+(2\zeta \beta_{m})^{2} }} \sin(m\Omega t-\phi_{m}) 
\end{align}
$$
donde:  
$\qquad \beta_{m}= m\beta = m \frac{\Omega}{\omega_{n}}$  
$\qquad \phi_{m}=\tan ^{-1} \left( \frac{2m\zeta \Omega}{1-m^{2}\beta^{2}} \right)$  


Entonces, por principio de superposición, la respuesta de estado estacionario completa será:
$$
\begin{align}
x_{p}(t) & = \frac{a_{0}}{2k} \\
 & + \sum_{m=1}^{\infty} \frac{\frac{a_{m}}{k}}{\sqrt{ (1-\beta_{m}^{2})^{2}+(2\zeta \beta_{m})^{2} }} \cos(m\Omega t-\phi_{m})   \\
 & + \sum_{m=1}^{\infty} \frac{\frac{b_{m}}{k}}{\sqrt{ (1-\beta_{m}^{2})^{2}+(2\zeta \beta_{m})^{2} }} \sin(m\Omega t-\phi_{m}) 
\end{align}
$$
y haciendo uso de la Función de Respuesta en Frecuencia, podemos expresarlo de la forma:
$$
\begin{align}
x_{p}(t) & = \frac{a_{0}}{2k} \\
 & + \sum_{m=1}^{\infty} a_{m} \lvert H(jm\Omega) \rvert  \cos(m\Omega t-\phi_{m})   \\
 & + \sum_{m=1}^{\infty} b_{m} \lvert H(jm\Omega) \rvert \sin(m\Omega t-\phi_{m}) 
\end{align}
$$
donde:  
$\qquad j\quad$ es el operador imaginario  
$\qquad m\quad$ es el iterador  
$\qquad \lvert H(jm\Omega) \rvert\quad$ es la magnitud de función de transferencia evaluado en el m-esimo armónico de la serie de Fourier de la carga

Vemos que tanto la amplitud como la fase del $m$-esimo término dependen de $m$. En el caso $m\Omega=\omega_{n}$ la amplitud del correspondiente armónico será comparativamente grande, especialmente para valores pequeños de $m$ y $\zeta$. 

Para valores grandes de $m$ la amplitud se torna pequeña y los correspondientes términos tienden a cero; así, los primeros pocos términos son usualmente suficientes para determinar la respuesta con aceptable aproximación.

Para determinar la respuesta de estado transitorio es necesario determinar las constantes de integración a partir de la solución de la ecuación diferencial homogénea más la solución particular (a.k.a. la solución general) y sus derivadas, ambas evaluadas en un mismo $t=t_{0}$ (usualmente $t=0$) e igualandolas respectivamente a los desplazamientos y velocidades iniciales.

En muchos casos, la expresión de la carga no tiene una forma analítica y esta disponible en forma de un vector para un número de puntos discretos (debido a mediciones experimentales).

![[Pasted image 20251214233127.png]]

En dichos casos, es posible __encontrar los coeficientes de Fourier por integración numérica__. Sea una carga para la cual se desconoce su expresión analítica, sea $N$ el número impar de puntos equidistantes en un periodo de tiempo $\tau$ donde se tiene $\tau= N \Delta t$, sea $\Delta t$ el paso en el dominio del tiempo, entonces los coeficientes de Fourier se pueden determinar por la regla del trapecio como:
$$
\left\{
\begin{align}
a_{0} & = \frac{2}{N} \sum_{n=1}^{N} F_{n} \\
a_{m} & = \frac{2}{N} \sum_{n=1}^{N} F_{n} \cos\left( \frac{2\pi mn}{N} \right) \\
b_{m} & = \frac{2}{N} \sum_{n=1}^{N} F_{n} \sin\left( \frac{2\pi mn}{N} \right)
\end{align}
\right.
$$
> [!ATTENTION]
> Cuidado con la diferencia de subindices: el _m-esimo_ coeficiente de las series trigonométrica de fourier se calcula en base a una suma de $N$ términos.
> - $m$ indica el __NÚMERO DEL ARMÓNICO__
> - $n$ indica el __NÚMERO DEL INSTANTE DE TIEMPO__.

### Serie Compleja de Fourier

Debido a la identidad de Euler, también se tienen las siguientes relaciones trigonométricas complejas:
$$
\begin{flalign*}
& % 1. Este ampersand ancla todo a la izquierda
\begin{array}{ll}
e^{ j\omega t } = \cos(\omega t) + j\sin(\omega t) \\
e^{ -j\omega t } = \cos(\omega t) - j\sin(\omega t) \\
 \\
\cos(\omega t) = \frac{e^{ j\omega t } + e^{ -j\omega t }}{2} \\
\sin(\omega t) = \frac{e^{ j\omega t } - e^{ -j\omega t }}{2j}
\end{array}
&& % 2. Estos dos ampersands empujan el resto a la derecha
\end{flalign*}
$$

por lo que podemos reemplazar las funciones trigonométricas por funciones exponenciales complejas y se obtiene:
$$
F(t) = \sum_{m=-\infty}^{\infty} c_{m} e^{ jm\Omega t }
$$
donde los coeficientes $c_{m}$ se calculan como:
$$
c_{m} = \frac{1}{\tau} \int_{0}^{\tau} F(t) e^{ -jm \Omega t } dt
$$
y se tiene:
$$
\begin{flalign*}
& % 1. Este ampersand ancla todo a la izquierda
\begin{array}{ll}
\qquad \Delta f=\frac{1}{T} & \text{Resolución Espectral (Paso de frecuencia)} \\
\qquad T=N\Delta t  & \text{Periodo de Adquisición (Duración del registro)}
\end{array}
&& % 2. Estos dos ampersands empujan el resto a la derecha
\end{flalign*}
$$
Cabe aclarar que la cantidad de armónicos máxima posible queda limitada a $J=\frac{N}{2}$.

Con la fórmula de la serie compleja de Fourier podemos concluir que cualquier función periódica se puede expresar como la suma de infinitos armónicos con "amplitud" compleja $c_{m}$ y con frecuencias $m\Omega$ que son múltiplos enteros de la frecuencia fundamental $\Omega$.

La diferencia entre dos frecuencias consecutivas es:
$$
(m+1)\Omega - m\Omega = \Delta \Omega = \frac{2\pi}{\tau} = \Omega
$$
De nuevo, se pueden calcular los coeficientes de manera numérica mediante la ecuación:
$$
c_{m} = \frac{1}{N} \sum_{n=1}^{N} F_{n} e^{ -j \frac{2\pi mn}{N} }
$$
Como $F(t)$ es una función real $\mathbb{R}$, se puede demostrar que los valores $m=a$ y $m=-a$ son coeficientes complejos conjugados, es decir:
$$
c_{m} = c_{-m}^{*}
$$
A continuación, se demuestra que los coeficientes $c_{m}$ presentan una periodicidad de periodo $N$, es decir, $c_{m} = c_{m+N}$.

Recordando la expresión general para un armónico $m$ cualquiera:

$$c_{m} = \frac{1}{N} \sum_{n=1}^{N} F_{n} e^{-j \frac{2\pi m n}{N}}$$
Si intentamos calcular el coeficiente para un armónico $m + N$ (es decir, una frecuencia mucho más alta desplazada en $N$ pasos), tenemos:
$$
\begin{align}
c_{m+N} & = \frac{1}{N} \sum_{n=1}^{N} F_{n} e^{-j \frac{2\pi (m+N) n}{N}}  \\
& = \frac{1}{N} \sum_{n=1}^{N} F_{n} \cdot e^{-j \frac{2\pi m n}{N}} \cdot e^{-j \frac{2\pi N n}{N}}  \\
& = \frac{1}{N} \sum_{n=1}^{N} F_{n} \cdot e^{-j \frac{2\pi m n}{N}} \cdot \underbrace{ e^{-j 2\pi n} }_{1}  \\
\end{align}
$$

Dado que $n$ es siempre un número entero ($n=1, 2, \dots, N$), el término $e^{-j2\pi n}$ representa rotaciones completas en el plano complejo y siempre es igual a **1**.

Por lo tanto:

$$c_{m+N} = \frac{1}{N} \sum_{n=1}^{N} F_{n} e^{-j \frac{2\pi m n}{N}} = c_{m}$$

Podemos concluir que los coeficientes se repiten cíclicamente. Calcular el coeficiente del armónico $N+1$ nos da exactamente el mismo valor que el del armónico $1$.

Esto demuestra que, debido a nuestro muestreo discreto, **no podemos distinguir** entre la frecuencia $m$ y la frecuencia $m+N$. Si la señal real tuviera energía en la frecuencia alta $m+N$, nuestro análisis matemático la sumaría erróneamente a la frecuencia baja $m$ ("confusión de frecuencias").

Por esta razón, existe un límite preestablecido para el armónico más alto que podemos representar de forma única, conocido como el límite de Nyquist:

$$J = \frac{N}{2}$$
Finalmente, la respuesta en estado estacionario tendrá la expresión:
$$
\begin{align}
x_{p}(t) & = \sum_{m=-\infty}^{\infty} c_{m} \lvert H_{m}(j\Omega) \rvert e^{ j(m\Omega t-\phi_{m}) }   \\
 & = \sum_{m=-\infty}^{\infty} c_{m} H_{m}(j\Omega) e^{ jm\Omega t } 
\end{align}
$$
aunque en la práctica, solo se pueden calcular hasta el armónico $J$ debido a los mismos instrumentos de medición:
$$
\begin{align}
x_{p}(t) & = \sum_{m=-J}^{J} c_{m}  H_{m}(j\Omega)  e^{ jm\Omega t }   \\
 & = \sum_{m=1}^{N} c_{m}  H_{m}(j\Omega)  e^{ jm\Omega t } 
\end{align}
$$




---
La frecuencia del armónico más grande que podemos calcular sin cometer este error de "suma de más a las amplitudes de las frecuencias erróneas" viene dado por la **Frecuencia de Corte** o **Frecuencia de Nyquist**

$$
f_{\text{corte}}=J_{f}=\frac{f_{s}}{2}=\frac{1}{2\Delta t}
$$
Denominamos como frecuencia de "sampling" o "muestreo" a $f_{s}$.

Debo tener la relación:

__GRUPO 1: TIEMPO__
$$
\begin{flalign*}
& % 1. Este ampersand ancla todo a la izquierda
\begin{array}{ll}
\qquad f_{s} = \frac{1}{\Delta t} & \text{: Frecuencia de Muestreo (Hz)} \\
\qquad \Delta t= \frac{1}{f_{s}}  & \text{: Paso en el tiempo (s)}
\end{array}
&& % 2. Estos dos ampersands empujan el resto a la derecha
\end{flalign*}
$$
__GRUPO 2: FRECUENCIA__
$$
\begin{flalign*}
& % 1. Este ampersand ancla todo a la izquierda
\begin{array}{ll}
\qquad T=\frac{1}{\Delta f} & \text{: Duración de la Adquisición (s)} \\
\qquad \Delta f = \frac{1}{T}  & \text{: Resolución Espectral (Hz)}
\end{array}
&& % 2. Estos dos ampersands empujan el resto a la derecha
\end{flalign*}
$$
__GRUPO 3: CANTIDAD__
$$
\begin{flalign*}
& % 1. Este ampersand ancla todo a la izquierda
\begin{array}{ll}
\qquad N = 2J & \text{: Cantidad Total de Puntos} \\
\qquad J = \frac{N}{2}  & \text{: Cantidad máxima de Armónicos}
\end{array}
&& % 2. Estos dos ampersands empujan el resto a la derecha
\end{flalign*}
$$

"Tengo que definir 2 parámetros que no pertenezcan al mismo grupo".
![[Pasted image 20250422101908.png]]

Y la ecuación que une estos 3 grupos es:
$$
\boxed{T=N \Delta t}
$$

## Transformada de Fourier

Recordando que: $\frac{2\pi}{T}=\Delta \omega$ podemos reemplazar:
$$
\begin{align}
P(t) &= \sum_{-\infty}^{+\infty}c_{m}e^{ im\omega t } \\
 \\
c_{m} &= \frac{1}{T}\int_{0}^{T}P(t)\; e^{ -im\omega t }dt
\end{align}
$$
Reemplazando $T=\frac{\Delta \omega}{2\pi}$:

$$
\begin{align}
P(t) &= \sum_{-\infty}^{+\infty}c_{m}e^{ -m\omega t } \\
 \\ 
P(t) &= \sum_{-\infty}^{+\infty} \left(  \frac{1}{T}\int_{0}^{T}P(t)\; e^{ -im\omega t }dt  \right) e^{ im\omega t } \\
 \\
P(t) &= \sum_{-\infty}^{+\infty} \left(  \frac{\Delta \omega}{2\pi}\int_{0}^{T}P(t)\; e^{ -im\omega t }dt  \right) e^{ im\omega t } \\
 \\
P(t) &= \frac{1}{2\pi}\lim_{ \Delta\omega \to 0 }  \sum_{-\infty}^{+\infty} \left(  \int_{0}^{T}P(t)\; e^{ -im\omega t }dt  \right) e^{ im\omega t } \Delta\omega \\
 \\
P(t) &= \frac{1}{2\pi} \int_{-\infty}^{+\infty} \left(  \int_{0}^{T}P(t)\; e^{ -im\omega t }dt  \right) e^{ im\omega t } d\omega \\
 \\
P(t) &= \frac{1}{2\pi} \int_{-\infty}^{+\infty} P(i\omega) e^{ im\omega t } d\omega \\
 \\
\end{align}
$$
Denominamos $P(i\omega)$ a la **Transformada de Fourier**, la cual me da el valor de los módulos correspondientes a cada frecuencia. Dicha función se calcula cómo:
$$
F(i\omega) = \int_{-\infty}^{+\infty}F(t)e^{ -i\omega t }dt
$$
La Transformada de Fourier y la Transformada de Laplace tienen la siguiente relación:

$$\Huge 
\mathcal{F}[P(t)]=\mathcal{L}[P(t)]|_{s=i\omega}
$$

#### Fast Fourier Transform

Se puede utilizar cuando se cumple la condición $N=2^{J}$.

