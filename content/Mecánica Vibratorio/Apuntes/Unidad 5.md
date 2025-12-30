# Sistemas con más de un Grado de Libertad

## Vibraciones Libres de Sistemas No Amortiguados

Comenzaremos el análisis con un sistema de 2 grados de libertad, de la manera tal que:

| ![[Pasted image 20250408112332.png]] |
| ------------------------------------ |
| ![[Pasted image 20250408112434.png]] |
Para saber el sentido de las fuerzas de los resortes, se debe suponer un sentido positivo de movimiento, y de allí determinarse si el resorte trabaja a tracción o compresión cuando existe dicho movimiento positivo.

Primero, se supone que los coeficientes de amortiguamiento son nulos $c_{1}=c_{2}=c_{3}=0$ y no existen fuerzas excitadoras $f_{1}(t)=f_{2}(t)=0$. Entonces las ecuaciones de movimiento para un sistema de 2 grados de libertad sería:
$$
\begin{array}{crl}
m \ddot{x}_{1}(t) + (k_{1}+ k_{2})x_{1}(t)-k_{2}x_{2}(t)=0 \\
m \ddot{x}_{2}(t) + (k_{2}+k_{3})x_{2}(t)-k_{2}x_{1}(t)=0 \\
\end{array}
$$
Que se puede escribir de manera matricial como:
$$
\begin{bmatrix} m_{1} & 0 \\ 0 & m_{2} \end{bmatrix} \begin{bmatrix} \ddot{x}_{1} \\ \ddot{x}_{2} \end{bmatrix}
+
\begin{bmatrix} k_{1}+k_{2} & -k_{2} \\ -k_{2} & k_{2}+k_{3} \end{bmatrix} \begin{bmatrix} x_{1} \\ x_{2} \end{bmatrix}
=
\begin{bmatrix} 0  \\ 0\end{bmatrix}
$$
que puede reescribirse de forma matricial como:
$$
\mathbb{M} \underline{\ddot{x}}(t) + \mathbb{K} \underline{x}(t) = 0
$$
donde:

$\qquad \mathbb{M}=\begin{bmatrix} m_{1} & 0 \\ 0 & m_{2} \end{bmatrix}$

$\qquad \mathbb{K}=\begin{bmatrix} k_{1}+k_{2} & -k_{2} \\ -k_{2} & k_{2}+k_{3} \end{bmatrix}$

$\qquad \underline{x}(t)=\begin{Bmatrix} x_{1}(t) \\ x_{2}(t) \end{Bmatrix}$

Este es un Sistema de Ecuaciones Diferenciales, y para obtener le solución general de un sistema de $N$ coordenadas generalizadas necesitamos  $2N$ soluciones Linealmente Independiente.

Si asumimos que la solución de ambos sistemas comparten una frecuencia $\omega$ y un desfasaje $\theta$, entonces podemos concluir que las soluciones son:
$$
\begin{array}{r}
x_{1}(t) = X_{1} \cos(\omega t - \theta) \\
x_{2}(t) = X_{2} \cos(\omega t - \theta)
\end{array}
$$
Donde los valores $X_{1}$ y $X_{2}$ se encuentra del siguiente sistema de ecuaciones:
$$
\left\{
\begin{array}{clcl}
[-m_{1}\omega^{2}+(k_{1}+k_{2})] & X_{1} & -k_{2} & X_{2} & & = 0 \\
-k_{2} & X_{1} & +[-m_{2}\omega^{2}+(k_{2}+k_{3})] & X_{2} & &= 0
\end{array}
\right.
$$

Este es un sistema de 2 ecuaciones y 2 incógnitas, por lo que podemos despejar los valores de $X_{1}$ y $X_{2}$. Si ordenamos la solución que supusimos en un principio, la podemos escribir de forma matricial como:
$$
\underline{x}(t) = \begin{bmatrix} X_{1} \\ X_{2} \end{bmatrix} \cos(\omega t - \theta)
$$
Y luego podemos derivarlo en nuestro problema matricial y obtener:
$$
\begin{array}{r}
\mathbb{M}\underline{\ddot{x}}(t)+\mathbb{K}\underline{x}(t)&=0 \\ 
 \\
\mathbb{M}\begin{bmatrix} X_{1} \\ X_{2} \end{bmatrix} (-\omega^{2}) \cos(\omega t - \theta) + \mathbb{K} \begin{bmatrix} X_{1} \\ X_{2} \end{bmatrix} \cos(\omega t - \theta) &= 0 \\ 
 \\
\left( \mathbb{K} - \omega^{2}\mathbb{M} \right) \begin{bmatrix} X_{1} \\ X_{2} \end{bmatrix} \cos(\omega t - \theta) &= 0
\end{array}
$$
Como nosotros queremos una solución que se cumpla $\forall t$, entonces el término que nosotros tenemos que igualar a cero será:

$$
\begin{array}{}
\left( \mathbb{K} - \omega^{2}\mathbb{M} \right) \begin{bmatrix} X_{1} \\ X_{2} \end{bmatrix} &= 0 \\
 \\
\left( \mathbb{K} - \omega^{2}\mathbb{M} \right) \vec{X} &= 0
\end{array}
$$

Este será un problema de autovalores y autovectores. 

Denominamos a los autovectores como **vector modal**, **modo normal** o **modo de vibración**. 

Denominamos a $\mathbb{E}=\left( \mathbb{K} - \omega^{2}\mathbb{M} \right)$ como **Matriz de Rigidez Dinámica**.

Resolviendo el caso particular de un sistema de 2 GDL, se debe resolver un problema de eigenvalues y eigenvectors. Para ello, requerimos que el determinante de la Matriz de Rigidez Dinámica sea nula:
$$
\det \mathbb{E} = \det \begin{bmatrix}
-m_{1}\omega^{2}+k_{1}+k_{2} & -k_{2} \\ -k_{2} & -m_{2}\omega^{2}+k_{2}+k_{3}
\end{bmatrix} =0
$$
por lo que se deben buscar las raices del polinomio:
$$
\Big(m_{1}m_{2}\Big)\omega^{4} - \Big( (k_{1}+k_{2})m_{2} + (k_{2}+k_{3})m_{1} \Big) \omega^{2} + \Big( (k_{1}+k_{2})(k_{2}+k_{3}) - k_{2}^{2} \Big) = 0
$$
donde las raices son:
$$ \small
\omega^{2}_{1,2} = \tfrac12 \left( \frac{(k_{1}+k_{2})m_{2} + (k_{2}+k_{3})m_{1}}{m_{1}m_{2}}  \right)\mp \tfrac12 \sqrt{ \left( \frac{(k_{1}+k_{2})m_{2} + (k_{2}+k_{3})m_{1}}{m_{1}m_{2}} \right)^{2}-4 \frac{(k_{1}+k_{2})(k_{2}+k_{3}) - k_{2}^{2}}{m_{1}m_{2}} }
$$
La interpretación que se hace es: existe una solución no trivial a nuestro problema de 2 grados de libertad cuando $\omega=\omega_{1}$ o $\omega=\omega_{2}$. Es decir, se obtienen dos frecuencias naturales para el sistema de 2 grados de libertad. Para cada frecuencia natural existirá un eigenvector o autovector asociado (__vector modal__ / __modo normal__) o simplemente __modo de vibración__. A cada eigenvalue se le asocia un eigenvector, los cuales vienen dado por:
$$
\begin{align}
\omega_{1} \implies \underline{X}_{1} = \begin{Bmatrix} X_{11} \\ X_{12} \end{Bmatrix} \\
\omega_{2} \implies \underline{X}_{2} = \begin{Bmatrix} X_{21} \\ X_{22} \end{Bmatrix}
\end{align}
$$
Ahora, cuando $\omega=\omega_{1}$ o $\omega=\omega_{2}$, el sistema de ecuaciones es indeterminado, por lo que solo se pueden calcular las relaciones entre los elementos de los eigenvectors, por lo que se llega a:
$$
\begin{align}
\underline{X}_{1} = \begin{Bmatrix} X_{11} \\ X_{12} \end{Bmatrix} \implies \begin{Bmatrix} 1 \\ r_{1} \end{Bmatrix} \\
\underline{X}_{2} = \begin{Bmatrix} X_{21} \\ X_{22} \end{Bmatrix} \implies \begin{Bmatrix} 1 \\ r_{2} \end{Bmatrix}
\end{align}
$$
donde:
$\qquad r_{1}=\frac{X_{12}}{X_{11}}$
$\qquad r_{2}=\frac{X_{22}}{X_{21}}$

Con estas relaciones, se puede despejar:
$$
\begin{align}
r_{1} & = \frac{-m_{1}\omega_{1}^{2}+(k_{1}+k_{2})}{k_{2}}=\frac{k_{2}}{-m_{2}\omega_{1}^{2}+(k_{2}+k_{3})} \\
r_{2} & = \frac{-m_{1}\omega_{2}^{2}+(k_{1}+k_{2})}{k_{2}}=\frac{k_{2}}{-m_{2}\omega_{2}^{2}+(k_{2}+k_{3})}
\end{align}
$$
Así, las soluciones linealmente independientes quedan de la forma:
$$
\begin{align}
\underline{x}_{1}(t) = \begin{Bmatrix} X_{11} \cos(\omega_{1} t - \phi_{1})  \\ r_{1}X_{11} \cos(\omega_{1} t - \phi_{1}) \end{Bmatrix}  \\
 \\
\underline{x}_{2}(t) = \begin{Bmatrix} X_{12} \cos(\omega_{2} t - \phi_{2})  \\ r_{2}X_{12} \cos(\omega_{2} t - \phi_{2}) \end{Bmatrix}
\end{align}
$$
donde los valores ($X_{11}, X_{12}, \phi_{1}, \phi_{2}$) se calculan a partir de los valores iniciales del problema ($x_{1}(t_{0}), x_{2}(t_{0}), \dot{x}_{1}(t_{0}), \dot{x}_{2}(t_{0})$).

### Problema de $N$ Coordenadas Generalizadas 

Si buscamos encontrar nuestra solución para una cantidad $n$ de coordenadas generalizadas, podemos plantear:
$$
\begin{array}{}
\mathbb{M}\underline{\ddot{x}}(t)+\mathbb{K}\underline{x}(t)&=0 \\ \\

-\omega^{2}\mathbb{M}\underline{x}(t)+\mathbb{K}\underline{x}(t)&=0 \\ \\

\left( \mathbb{K} - \omega^{2}\mathbb{M} \right) \underline{x}(t)&=0
\end{array}
$$
Este es un problema de *"autovectores"* de algebra lineal. El cual tiene solución sola y exclusivamente si se cumple: $\det\left( \mathbb{K} - \omega^{2}\mathbb{M} \right)=0$.

Se obtiene un vector $\underline{\omega}^{2}$ de $n\times 1$ frecuencias, a la que cada frecuencia le corresponde autovector $X_{j}$.

Definimos la matriz $\mathbb{E}:=\left( \mathbb{K} - \omega^{2}\mathbb{M} \right)$.


Del problema de autovalores y autovectores, se obtiene $N$ modos de vibrar $\underline{X}_{1}, \underline{X}_{2},\dots,\underline{X}_{n}$ y sus respectivas frecuencias naturales $\omega_{1}, \omega_{2},\dots,\omega_{N}$. Las frecuencias naturales del sistema cumplen $\omega_{1}\leq \omega_{2}\leq\dots\leq \omega_{N}$ donde se llama la __frecuencia natural fundamental__ o primera frecuencia natural a la frecuencia menor.

El problema es que al obtener las frecuencias naturales, se observa que el sistema de ecuaciones proporcionado por la matriz de rigidez dinámica evaluada en una frecuencia natural proporciona un sistema compatible indeterminado. Es decir:
$$
\mathbb{E}(\omega_{i}) \underline{X}_{i}=0 \quad \text{Compatible Indeterminado}
$$
¿Cómo se puede asegurar que el sistema es Compatible Indeterminado? Esto es consecuencia de que $\det |\mathbb{E}(\omega_{i})|=0$ por lo que se obtendrá una matriz $N\times N$ con $N-1$ filas no nulas, multiplicado por un vector de $N\times 1$. El sistema cuenta con una incógnita más que ecuaciones. 

¿Cómo se soluciona este problema? Se iguala un eigenvector cualquiera $\underline{X}_{i}$  a la unidad, y proyecto el problema en un SEL de $(N-1)\times(N-1)$. Esto me dice que los modos de vibrar $\underline{X}_{i}$ me muestra las **relaciones de amplitud entre las coordenadas generalizadas**, pero no necesariamente las amplitudes en si.

Esto me permite armar mi respuesta general a mi sistema de ecuaciones diferenciales como:
$$
\underline{x}(t)=\sum \underline{X}_{i} A_{i} \cos(\omega_{i}t-\theta_{i})
$$
Denominamos como **coordenadas modales** o **coordenadas normales** a los términos $q_{i}(t)=A_{i}\cos(\omega_{i}t-\theta_{i})$.

El espacio vectorial solución formado por los $N$ autovectores, multiplicados por sus respectivas frecuencias y desfasajes, se puede formular de la siguiente forma:
$$
\begin{array}{l}
\text{Solución}: \quad &\mathbb{X} = \underline{X}_{1}A_{1}\cos(\omega_{1}t+\phi_{1})+\underline{X}_{2}A_{2}\cos(\omega_{2}t+\phi_{2})+\dots \\
& \mathbb{X} = \sum \underline{X}_{j} A_{j} \cos(\omega_{j}t+\phi_{j})
\end{array}
$$

¿De dónde consigo los valores de $A_{i}$ y $\theta_{i}$? Esto se despeja con los valores iniciales de mi problema de PVI.

### Condiciones de Ortogonalidad de los Modos de Vibración

Ya conocidos los modos de vibrar $\underline{X}_{i}$ y las frecuencias naturales, vamos a estudiar alguna de las propiedades que tienen las matrices del sistema. Esto tiene su inmediata implementación en el desacople de sistemas amortiguados, es decir, esto tiene una GRAN utilidad en el siguiente estudio.

Debido al problema de eigenvalues y eigenvectors, se puede plantear:
$$
\omega_{i}^{2}\mathbb{M}\underline{X}_{i} = \mathbb{K}\underline{X}_{i}
$$
Si yo considero otra frecuencia y modo de vibrar $\omega_{j}$ y $\underline{X}_{j}$, se puede observar que también se satisface:
$$
\omega_{j}^{2}\mathbb{M}\underline{X}_{j} = \mathbb{K}\underline{X}_{j}
$$
Si se pre-multiplica el modo de vibrar $\underline{X}_{j}$ en la ecuación $(i)$ y visceversa, se llega a:
$$
\begin{array}{}
& \omega_{i}^{2}\underline{X}_{j}^{T}\mathbb{M}\underline{X}_{i} &= \underline{X}_{j}^{T}\mathbb{K}\underline{X}_{i} \\
& \omega_{j}^{2}\underline{X}_{i}^{T}\mathbb{M}\underline{X}_{j} &= \underline{X}_{i}^{T}\mathbb{K}\underline{X}_{j}
\end{array}
$$
Si nosotros analizamos las dimensiones de los elementos, vemos:
Vemos:
$\qquad \mathbb{M}^{n\times n}$
$\qquad \underline{X}_{j}^{n\times 1}$
$\qquad (\underline{X}_{j}^{T})^{1\times n}$

Entonces el producto $\underline{X}_{j}^{T}\mathbb{M}\underline{X}_{j}$ será de dimensiones $1\times 1$ es decir, un escalar. Debido a que la transpuesta de un escalar es el mismo escalar $\mathrm{Escalar} = (\mathrm{Escalar})^{T}$, por lo que se desarrolla:
$$
\begin{array}{rl}
& \underline{X}_{j}^{T}\mathbb{M}\underline{X}_{i} &= (\underline{X}_{j}^{T}\mathbb{M}\underline{X}_{i})^{T} \\
& &= (\mathbb{M}\underline{X}_{i})^{T} (\underline{X}_{j}^{T})^{T} \\
& &= (\underline{X}_{i}^{T}) (\mathbb{M})^{T}(\underline{X}_{j}^{T})^{T} \\
& &= \underline{X}_{i}^{T}\mathbb{M}\underline{X}_{j}
\end{array}
$$
Lo mismo pasa respecto a la matriz $\mathbb{K}$. En criollo: se pueden "intercambiar" los subindices $i, j$ al trasponer el producto matricial.

Restando la ecuación $(j)$ a la ecuación $(i)$, se puede llegar a:
$$
\begin{array}{l}
& \omega_{i}^{2}\underline{X}_{j}^{T}\mathbb{M}\underline{X}_{i} - \omega_{i}^{2}\underline{X}_{i}^{T}\mathbb{M}\underline{X}_{j}&= \underline{X}_{j}^{T}\mathbb{K}\underline{X}_{i} - \underline{X}_{i}^{T}\mathbb{K}\underline{X}_{j} \\
& \omega_{i}^{2}\underline{X}_{j}^{T}\mathbb{M}\underline{X}_{i} - \omega_{i}^{2}\underline{X}_{j}^{T}\mathbb{M}\underline{X}_{i}&= \underline{X}_{j}^{T}\mathbb{K}\underline{X}_{i} - \underline{X}_{j}^{T}\mathbb{K}\underline{X}_{i} \\ 
& \omega_{i}^{2}\underline{X}_{j}^{T}\mathbb{M}\underline{X}_{i} - \omega_{i}^{2}\underline{X}_{j}^{T}\mathbb{M}\underline{X}_{j} &= \underline{X}_{j}^{T}(\mathbb{K} - \mathbb{K})\underline{X}_{i} \\
& (\omega_{i}^{2}-\omega_{j}^{2}) \; \underline{X}_{j}^{T}\mathbb{M}\underline{X}_{i} &= 0
\end{array}
$$
Cómo usualmente $\omega_{j}\neq \omega_{i}$ la expresión que deberá ser siempre nula es:
$$ \tag{1ra Condición de Ortogonalidad}
\underline{X}_{j}^{T}\mathbb{M}\underline{X}_{i} = 0
$$
Lo mismo pasa con la matriz de rigidez:
$$ \tag{2da Condición de Ortogonalidad}
\underline{X}_{j}^{T}\mathbb{K}\underline{X}_{i} = 0
$$

¿Qué pasa cuando $i=j$? 

Denominamos **masa y rigidez generalizada**, **masa y rigidez modal** o **masa y rigidez normal** a:
$$
\begin{array}{l}
& M_{jj} &= \underline{X}_{j}^{T}\mathbb{M}\underline{X}_{j}  \\
& K_{jj} &= \underline{X}_{j}^{T}\mathbb{K}\underline{X}_{j} \\ 
\end{array}
$$
Estos valores son **escalares**. Al armar una matriz diagonal con estos valores en la diagonal principal, es lo mismo que armar una matriz modo de vibración tal que:
$$
\begin{align}
\mathbb{M}_{\mathrm{modal}}  & = \begin{bmatrix}
M_{11}  & 0 & 0 & \dots & 0 \\
0 & M_{22} & 0 & \dots & 0 \\
\vdots & \vdots & \vdots & \ddots  & \vdots \\
0 & 0 & 0 & \dots & M_{NN}
\end{bmatrix} = \mathbb{X}^{T} \mathbb{M} \mathbb{X} \\
 \\
\mathbb{K}_{\mathrm{modal}}  & = \begin{bmatrix}
K_{11}  & 0 & 0 & \dots & 0 \\
0 & K_{22} & 0 & \dots & 0 \\
\vdots & \vdots & \vdots & \ddots  & \vdots \\
0 & 0 & 0 & \dots & K_{NN}
\end{bmatrix} = \mathbb{X}^{T} \mathbb{K} \mathbb{X} \\
 \\
\mathbb{X}  & = [\underline{X}_{1} \; \underline{X}_{2} \; \dots \; \underline{X}_{n}]
\end{align}
$$
Donde
$\qquad\mathbb{M}_{\mathrm{modal}}\text{ es la matriz de masa modal}$
$\qquad\mathbb{K}_{\mathrm{modal}}\text{ es la matriz de rigidez modal}$
$\qquad\mathbb{X}\text{ es la matriz modal del sistema}$

A menudo es útil normalizar los valores de $\underline{X}_{i}$ de manera tal que la matriz de masa modal sea igual a la unidad, esto es decir:
$$
\mathbb{M}_{\mathrm{norm}} = \mathbb{X}^{T}_{\mathrm{norm}} \mathbb{M} \mathbb{X}_{\mathrm{norm}} = \mathbb{I}
$$
para ello, se requiere que cada modo de vibrar sea normalizado por la raíz de su masa modal correspondiente, esto es decir:
$$
\underline{X}_{i, \mathrm{norm}} = \underline{X}_{i} \cdot \frac{1}{\sqrt{ M_{ii} }}
$$
así, al calcular la matriz de masa modal se obtiene:
$$
\begin{align}
M_{ii, \mathrm{norm}} & =  \underline{X}_{i, \mathrm{norm}}^{T} \mathbb{M} \underline{X}_{i, \mathrm{norm}} \\
 & = \frac{1}{\sqrt{ M_{ii} }} \underline{X}_{i}^{T} \mathbb{M} \underline{X}_{i}^{T} \cdot \frac{1}{\sqrt{ M_{ii} }} \\
 & = \frac{1}{M_{ii}} M_{ii} \\
 & = 1
\end{align}
$$
Utilizando estos mismos vectores normalizados en el cálculo de la matriz de rigidez modal, se obtienen las frecuencias naturales del sistema:
$$
\mathbb{K}_{\mathrm{norm}} = \mathbb{X}_{\mathrm{norm}}^{T} \mathbb{K} \mathbb{X}_{\mathrm{norm}}  = \begin{bmatrix}
\omega_{1}^{2}  & 0 & 0 & \dots & 0 \\
0 & \omega_{2}^{2} & 0 & \dots & 0 \\
\vdots & \vdots & \vdots & \ddots  & \vdots \\
0 & 0 & 0 & \dots & \omega_{N}^{2}
\end{bmatrix}
$$
## Vibraciones Forzadas de Sistemas No Amortiguados

Se dice que un sistema de múltiples grados de libertad está en vibración forzada cuando actúan en él fuerzas externas. Para un sistema con $N$ grados de libertad, la ecuación de movimiento es un __conjunto de $N$ ecuaciones diferenciales ordinarias de segundo orden acopladas__.

La solución del sistema de $N$ ecuaciones se torna muy complejo cuando el número de grados de libertas es muy grande y/o cuando las funciones de la carga son no periódicas. En tales casos, para resolver el problema se puede usar un método muy conveniente conocido como __método de descomposición modal__. En este método, los desplazamientos asociados a los grados de libertad se expresan como una combinación lineal de los modos normales del sistema. Esta transformación lineal desacopla el sistema de ecuaciones diferenciales original, de manera de obtener un sistema de $N$ ecuaciones diferenciales de segundo orden desacoplado (independientes entre si).

La solución de cada una de estas ecuaciones corresponde a cada modo de vibración y es similar a la solución de la ecuación diferencial de un sistema de un grado de libertad la cual se puede resolver con relativa facilidad.

### Método de Descomposición Modal

Teniendo una ecuación de movimiento de múltiples grados de libertad bajo cargas externas de la forma:
$$
\mathbb{M} \underline{\ddot{x}}(t) + \mathbb{K} \underline{x}(t) = \underline{F}(t)
$$
en el cual $\underline{F}(t)$ es el vector de cargas externas.

Para resolver esta ecuación, primero es necesario resolver el problema homogéneo asociado: encontrar los modos de vibrar y las frecuencias naturales:
$$
\left( \mathbb{K} - \omega^{2}\mathbb{M} \right) \underline{X} = 0
$$
Luego, la solución del problema se puede expresar como una combinación lineal de estos modos de vibrar:
$$
\begin{align}
\underline{x}(t) & = \underline{X}_{1}q_{1}(t) + \underline{X}_{2}q_{2}(t) + \dots + \underline{X}_{N}q_{N}(t) \\
 & = \sum \underline{X}_{i} q_{i}(t) \\
 & = \sum \underline{X}_{i} A_{i} \cos(\omega_{i}t-\phi_{i})
\end{align}
$$
en donde las funciones dependientes del tiempo $q_{i}(t)$ son conocidas como coordenadas principales, coeficientes de partición modal, __coordenadas modales__ o __coordenadas normales__.

Teniendo la matriz modal $\mathbb{X}$ se puede expresar la solución de forma compacta de la manera:
$$
\underline{x}(t) = \mathbb{X} \underline{q}(t)
$$
donde el vector de coordenadas modales se escribe como:
$$
\underline{q}(t) = \begin{Bmatrix}
q_{1}(t) \\
q_{2}(t) \\
\vdots \\
q_{N}(t)
\end{Bmatrix}
$$
Debido a que la matriz modal $\mathbb{X}$ no es función del tiempo, se tiene que:
$$
\underline{\ddot{x}}(t) = \mathbb{X} \underline{\ddot{q}}(t)
$$
y reemplazando en la ecuación de movimiento del sistema
$$
\mathbb{M}\mathbb{X} \underline{\ddot{q}}(t) + \mathbb{K} \mathbb{X} \underline{q}(t) = \underline{F}(t)
$$
si pre multiplicamos por $\mathbb{X}^{T}$ se obtiene la expresión:
$$
\mathbb{X}^{T} \mathbb{M} \mathbb{X} \underline{\ddot{q}}(t) + \mathbb{X}^{T} \mathbb{K} \mathbb{X} \underline{q}(t) = \mathbb{X}^{T} \underline{F}(t)
$$
y normalizando la matriz modal, se llega a
$$
\mathbb{X}_{\mathrm{norm}}^{T} \mathbb{M} \mathbb{X}_{\mathrm{norm}} \underline{\ddot{q}}(t) + \mathbb{X}_{\mathrm{norm}}^{T} \mathbb{K} \mathbb{X}_{\mathrm{norm}} \underline{q}(t) = \mathbb{X}_{\mathrm{norm}}^{T} \underline{F}(t)

$$
Es conveniente trabajar con la matriz modal normalizada debido a que simplifica la solución de las ecuaciones diferenciales. Efectuando la multiplicación matricial me deja:
$$
\underline{\ddot{q}}(t) + \mathbb{K}_{\mathrm{norm}} \underline{q}(t) = \underline{Q}(t)
$$
donde
$\qquad\mathbb{K}_{\mathrm{modal}}$ es la matriz de rigidez modal, la cual contiene las frecuencias naturales en su diagonal
$\qquad \underline{Q}(t) = \mathbb{X}_{\mathrm{norm}}^{T} \underline{F}(t)$ es el vector de fuerzas generalizadas o __vector de carga modal__.

Esta ecuación matricial representa un sistema de $N$ ecuaciones diferenciales de segundo orden desacopladas, las cuales se pueden expresar como:
$$
\ddot{q}_{i}(t) + \omega^{2}_{i}q_{i}(t) = Q_{i}(t) \qquad i=1,2,\dots,N
$$
y la solución queda expresada como:
$$
q_{i}(t) = \underbrace{ q_{i}(t_{0}) \cos(\omega_{i}t) + \frac{\dot{q}(t_{0})}{\omega_{i}} \sin(\omega_{i}t) }_{ \text{Solución Homogénea} } + \underbrace{ \frac{1}{\omega_{i}} \int_{0}^{t} Q_{i}(\tau) \sin\big(\omega_{i} (t-\tau) \big) d\tau }_{ \text{Solución Particular} }
$$

Para obtener los valores $q_{i}(t_{0}), \dot{q}_{i}(t_{0})$ simplemente se calcula:
$$
\left\{\begin{align}
\underline{q}(t_{0}) = \mathbb{X}_{\mathrm{norm}}^{T} \mathbb{M} \underline{x}(t_{0}) \\
\underline{\dot{q}}(t_{0}) = \mathbb{X}_{\mathrm{norm}}^{T} \mathbb{M} \underline{\dot{x}}(t_{0})
\end{align} \right.
$$
En la practica, las coordenadas modales que requieren mayor energía de excitación tienen un aporte insignificativo a la respuesta, por lo que se puede aproximar un vector solución con los primeros $P<N$ vectores modales, quedando:
$$
\underbrace{ \underline{x}(t) }_{ N\times N } = \underbrace{ \mathbb{X} }_{ N\times P } \; \underbrace{ \underline{q} (t) }_{ P \times 1 }
$$
donde:
$\qquad \mathbb{X}  = [\underline{X}_{1} \; \underline{X}_{2} \; \dots \; \underline{X}_{P}]$


## Vibraciones Forzadas de Sistemas Amortiguados

En muchos casos, la influencia del amortiguamiento en la respuesta del sistema vibratorio puede ser despreciado. Sin embargo, es necesario considerarlo en casos en el cual la respuesta debe ser determinada durante un periodo de tiempo relativamente largo respecto al periodo natural del sistema. Además, si la frecuencia de excitación, en el caso de tener una carga periódica, está cerca de una de las frecuencias naturales del sistema, el amortiguamiento tiene primordial importancia y debe ser considerado.

La ecuación de movimiento de un sistema de $N$ grados de libertad con __amortiguamiento viscoso__ es:
$$
\mathbb{M} \underline{\ddot{x}}(t) + \mathbb{C} \underline{\dot{x}}(t) + \mathbb{K} \underline{x}(t) = \underline{F}(t)
$$
en el cual $\mathbb{C}$ es llamada matriz de amortiguamiento vizcoso.

En general, por simplicidad y para aprovechar las propiedades de ortogonalidad (diagonalización de $\mathbb{M}, \mathbb{K}$ y desacople de ecuaciones), la matriz de amortiguamiento conviene expresarla como una combinación lineal de la matriz de masa y de rigidez, tal que:
$$
\mathbb{C} = \alpha \mathbb{M} + \beta \mathbb{K}
$$
en el cual $\alpha,\beta$ son constantes a determinar. 

Esta forma de definir el amortiguamiento se conoce con el nombre de __amortiguamiento proporcional__, debido a que $\mathbb{C}$ es proporcional a $\mathbb{M}, \mathbb{K}$. Reemplazando esta expresión en la ecuación de movimiento, se tiene:
$$
\mathbb{M} \underline{\ddot{x}}(t) + \Big[ \alpha \mathbb{M} + \beta \mathbb{K} \Big] \underline{\dot{x}}(t) + \mathbb{K} \underline{x}(t) = \underline{F}(t)
$$
pasando a coordenadas modales, pre multiplicando por $\mathbb{X}^{T}$ y normalizando, se llega a:
$$
\mathbb{X}_{\mathrm{norm}}^{T} \mathbb{M} \mathbb{X}_{\mathrm{norm}} \underline{\ddot{q}}(t) + \mathbb{X}_{\mathrm{norm}}^{T} \Big[ \alpha \mathbb{M} + \beta \mathbb{K} \Big] \mathbb{X}_{\mathrm{norm}} \underline{\dot{q}}(t)  +  \mathbb{X}_{\mathrm{norm}}^{T} \mathbb{K} \mathbb{X}_{\mathrm{norm}} \underline{q}(t) = \mathbb{X}_{\mathrm{norm}}^{T} \underline{F}(t)
$$
Esta expresión nos lleva a:
$$
\underline{\ddot{q}}(t) + \Big[ \alpha \mathbb{I} + \beta \mathbb{K}_{\mathrm{norm}} \Big]  \underline{\dot{q}}(t) + \mathbb{K}_{\mathrm{norm}} \underline{q}(t) = \underline{Q}(t)
$$
el cual, desacoplando, nos permite llegar a:
$$
\ddot{q}_{i}(t) + (\alpha + \beta \omega_{i}^{2}) \dot{q}_{i}(t) + \omega_{i}^{2}q_{i}(t) = Q_{i}(t)
$$
Definiendo la relación de amortiguamiento modal como $\zeta_{i}$, esta puede ser calculada con la formula:
$$
\alpha + \omega_{i}^{2}\beta = 2 \zeta_{i}\omega_{i}
$$
y reemplazando, podemos llegar a la expresión:
$$
\ddot{q}_{i}(t) + 2 \zeta_{i}\omega_{i} \dot{q}_{i}(t) + \omega_{i}^{2}q_{i}(t) = Q_{i}(t)
$$

Apelando a la solución para sistemas sub amortiguados, se llega a la solución:
$$
\begin{align}
q_{i}(t) & = e^{ -\zeta_{i}\omega_{i}t } \Big[ \cos(\omega_{di}t) + \frac{\zeta_{i}}{\sqrt{ 1-\zeta_{i}^{2} }} \sin(\omega_{di}t) \Big] q_{i}(0) \\
 & + \Big[ \frac{1}{\omega_{di}} e^{ -\zeta_{i}\omega_{i}t } \sin(\omega_{di}t) \Big] \dot{q}(0) \\
 & + \frac{1}{\omega_{di}} \int_{0}^{t} Q_{i}(\tau)e^{ -\zeta_{i}\omega_{i}(t-\tau) } \sin \big(\omega_{di} (t-\tau) \big) d\tau
\end{align}
$$
donde  
$\qquad \omega_{di}=\omega_{i}\sqrt{ 1-\zeta_{i}^{2} }$

En general, a fin de resolver la ecuación de movimiento desacoplada en coordenadas modales, la relación de amortiguamiento modal $\zeta_{i}$ se adopta mediante un criterio o experiencia del especialista o bien, se determina experimentalmente a partir de un análisis de vibraciones.

En caso de ser necesario, es posible reconstruir la matriz de amortiguamiento viscoso proporcional $\mathbb{C}$ a partir de la ecuación $\alpha + \omega_{i}^{2}\beta = 2 \zeta_{i}\omega_{i}$. En efecto, si se conoce la frecuencia natural circular para dos modos de vibración $\omega_{1}, \omega_{P}$ (en general el primero y el último modo de vibración a ser considerado en la determinación de la respuesta del sistema), y se adopta, con criterio para seleccionar las relaciones de amortiguamiento crítico correspondientes, $\zeta_{1}, \zeta_{P}$, se puede formular un sistema de dos ecuaciones con dos incógnitas en $\alpha, \beta$.

Es importante destacar los siguientes aspectos:
1. En la mayoría de los problemas prácticos, se torna difícil la identificación de las fuentes y la magnitud del amortiguamiento. Más de un tipo de amortiguamiento, tales como amortiguamiento de Coulomb, Viscoso e Histerético pueden estar presentes en algunos sistemas dinámicos reales. En general, se recomienda determinar experimentalmente el amortiguamiento mediante el uso de análisis de vibraciones. En muchos estudios de sistemas vibrantes, el amortiguamiento se puede despreciar o bien ser asumido como proporcional a la matriz de masa y matriz de rigidez con el objetivo de simplificar el análisis. En muchas aplicaciones prácticas, tales como suspensión de vehículos, trenes de aterrizaje y asilación de máquinas, el amortiguamiento es introducido deliberadamente.
2. En casos de sistemas con amortiguamiento arbitrario, la matriz de amortiguamiento no puede ser diagonalizada simultáneamente con la matriz de masa y rigidez. En esos casos los autovalores del sistema son reales y negativos o bien complejos conjugados con parte real negativa. Los autovalores complejos existen de a pares conjugados; los autovectores asociados también aparecen de pares complejos conjugados. Un procedimiento común para encontrar los autovalores y autovectores complejos de un sistema amortiguado consiste en transformar un sistema de $N$ ecuaciones diferenciales de segundo orden acopladas, en $2N$ ecuaciones diferenciales de primer orden desacopladas usando la formulación espacio- estado. Este último procedimiento está fuera del alcance de este curso. Se introduce en la materia "Automática y Máquinas Eléctricas" (AyME).

### Formulación Alternativa para obtener $\mathbb{C}$

Admitiendo que se conoce la frecuencia natural circular $\omega_{i}$ y la relación de amortiguamiento modal $\zeta_{i}$ para cada modo de vibración considerado en la respuesta del sistema, es posible formar la matriz diagonal de amortiguamiento modal $\mathbb{C}_{M}$:
$$
\mathbb{C}_{M}  = \begin{bmatrix}
2\zeta_{1}\omega_{1}  & 0 & 0 & \dots & 0 \\
0 & 2\zeta_{2}\omega_{2} & 0 & \dots & 0 \\
\vdots & \vdots & \vdots & \ddots  & \vdots \\
0 & 0 & 0 & \dots & 2\zeta_{N}\omega_{N}
\end{bmatrix}
$$
la cual puede ser determinada como:
$$
\mathbb{C}_{M} = \mathbb{X}_{\mathrm{norm}}^{T} \mathbb{C} \mathbb{X}_{\mathrm{norm}}
$$
por lo que se puede calcular $\mathbb{C}$ de la manera:
$$
\mathbb{C} = \mathbb{X}_{\mathrm{norm}}^{-T} \mathbb{C}_{M} \mathbb{X}_{\mathrm{norm}}^{-1}
$$
En vez de calcular estas inversas, podemos usar la siguiente igualdad:
$$
\begin{align}
\mathbb{I} = \mathbb{X}_{\mathrm{norm}}^{T} \mathbb{M} \mathbb{X}_{\mathrm{norm}} \implies \mathbb{X}_{\mathrm{norm}}^{-1} = \mathbb{X}_{\mathrm{norm}}^{T} \mathbb{M} \\
\mathbb{I} = \mathbb{X}_{\mathrm{norm}}^{T} \mathbb{M} \mathbb{X}_{\mathrm{norm}} \implies \mathbb{X}_{\mathrm{norm}}^{-T} = \mathbb{M}\mathbb{X}_{\mathrm{norm}}
\end{align}
$$
y calcular la matriz de amortiguamiento como:
$$
\mathbb{C}=\mathbb{M} \mathbb{X}_{\mathrm{norm}} \mathbb{C}_{M} \mathbb{X}_{\mathrm{norm}}^{T}  \mathbb{M}
$$
Así se puede calcular la matriz de amortiguamiento proporcional del sistema $\mathbb{C}$ con un bajo costo computacional y menor error numérico (no se calculan matrices inversas) a partir del conocimiento de la frecuencia natural circular $\omega_{i}$ y la relación de amortiguamiento modal $\zeta_{i}$ de todos los modos de vibración considerados en la respuesta del sistema.

## Ventajas del Método de Descomposición Modal

El método de descomposición modal proporciona un __menor costo computacional__:
- Para determinar la respuesta de un sistema de $N$ grados de libertad se necesita resolver $N$ ecuaciones diferenciales de segundo orden _independientes_ en vez de $N$ ecuaciones diferenciales de segundo orden _acopladas_.
- En reiteradas oportunidades para alcanzar una respuesta con precisión aceptable es necesario resolver solo $r,  (r < N)$ ecuaciones diferenciales de segundo orden independientes (solo las primeras $r$ respuestas modales tienen mayor participación en la respuesta del sistema).


## Anexo 

#### Propiedad de Matrices Simétricas

El problema de autovalores cuando $\mathbb{M}$ y $\mathbb{K}$ son matrices definidas positivas y simétricas, me asegura que los autovalores son reales positivos y los autovectores son reales puros.

Tener un autovalor igual a cero me dice que el sistema tiene una vinculación "aparente", lo que quiere decir que mi sistema podría tener un desplazamiento absoluto (no vibra, se mueve).

#### Propiedades de Modos de Vibrar

Los $n$ modos de vibrar, tanto normalizados como no normalizados respecto a la matriz de inercia $\mathbb{M}$, siempre son Linealmente Independientes.

Para que sean Linealmente independientes, yo tengo que los modos deben cumplir que $\forall k: c_{k}=0$ ¿Cómo demostramos eso? Partiendo de:
$$
c_{1}X_{1} + c_{2}X_{2} + \dots + c_{i}X_{i} + \dots+=0
$$
Si pre-multiplicamos por $X_{i}^{T}M$ toda la expresión, llegamos a:
$$
c_{1} X_{i}^{T}MX_{1} + c_{2}X_{i}^{T}MX_{2} + \dots + c_{i}X_{i}^{T}MX_{i} + \dots+=0
$$
Nosotros sabemos que cuando $i\neq j \implies X_{i}^{T}MX_{j}=0$, por lo que el único término que queda sería:

$$
\begin{align}
c_{1} \overbrace{ X_{i}^{T}MX_{1}CU }^{ 0 } + c_{2}\overbrace{ X_{i}^{T}MX_{2} }^{ 0 } + \dots + c_{i}X_{i}^{T}MX_{i} + \dots+ &= 0 \\
 \\
c_{i}X_{i}^{T}MX_{i} &= 0

\end{align}
$$

Como el producto $X_{i}^{T}MX_{i} \neq 0$ entonces la única alternativa es que $c_{i}=0$. Luego, por inducción matemática se deduce que todos los valores $c_{k}$ deben ser nulos. Esto implica que los modos de vibrar son Linealmente Independientes.

#### Autovalores y Autovectores

Los autovalores y autovectores $\vec{\phi}_{i}$ y $\omega_{i}$ son los mismos en sistema no amortiguados y sistemas amortiguados siempre y cuando la matriz de amortiguamiento pueda ser expresada como una combinación lineal de las matrices de inercia y rigidez. Es decir:

$$
\left.
\begin{array}{ll}
\mathbb{M}\underline{\ddot{x}} + \mathbb{K}\underline{x} &= 0 \\
\mathbb{M}\underline{\ddot{x}} + \mathbb{C}\underline{\dot{x}} + \mathbb{K}\underline{x} &= \mathbb{P}(t)
\end{array}
\right\} \quad
\text{Mismos } \vec{\phi}_{i} \; \omega_{i} \iff \mathbb{C} = \alpha \mathbb{M}+\beta\mathbb{K}
$$

#### Ley de Betti (incompleto)

>[!WARNING]
>Este tema se suele tomar más de lo que uno creería.

Dice que:
$$
\underline{F_{m}}^{T} \underline{x}_{n} = \underline{F_{n}}^{T} \underline{x}_{m} 
$$

