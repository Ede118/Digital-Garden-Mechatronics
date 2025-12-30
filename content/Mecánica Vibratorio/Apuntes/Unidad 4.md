# Respuesta a Cargas Armónicas

En esta unidad veremos la respuesta de un sistema masa-resorte-amortiguador de 1 grado de libertad frente a cargas armónicas. Además, veremos varios caso de amortiguamiento de sistema, dependiendo qué parámetro se desea controlar, y también el funcionamiento de herramientas de medición (acelerómetros).

## Respuesta a un Sistema de 1 GDL Amortiguado bajo una Carga Armónica

La carga armónica, la cual cuenta con una única frecuencia fundamental, puede ser representada en su forma compleja como:
$$
F(t) = F_{0} e^{ j \omega t }
$$
Viendo la ecuación de movimiento del sistema, queda como:
$$
m \ddot{x}(t) + c \dot{x}(t) + k x = F_{0}e^{ j\omega t }
$$
Donde:
	$m\text{ es la masa}$
	$c\text{ es el coeficiente de amortiguamiento}$
	$k \text{ es la rigidez del sistema}$
	$\omega \text{ es la frecuencia de la carga armónica}$
	$F_{0} \text{ es la amplitud de la carga armónica}$
	$x(t) \text{ es el desplazamiento del sistema}$

Primero, se tratará de encontrar la solución particular, luego se analizará la solución homogénea. En este caso, se asume una solución particular de la forma:
$$
\begin{align}
x_{p}(t) & = \mathbf{X} e^{ j \omega t } \\
\dot{x}_{p}(t) & = j \omega \mathbf{X} e^{ j \omega t } \\
\ddot{x}_{p}(t) & = -\omega^{2} \mathbf{X} e^{ j \omega t }
\end{align}
$$
introduciendola en la ecuación de movimiento, se llega a:
$$
\begin{align}
-m \omega^{2} \mathbf{X} e^{ j \omega t } + jc \omega \mathbf{X} e^{ j \omega t } + k\mathbf{X} e^{ j \omega t } & = F_{0}e^{ j\omega t } \\
\mathbf{X} \Big[ -m\omega^{2} + jc \omega + k \Big] e^{ j\omega t }  & = F_{0} e^{ j\omega t }
\end{align}
$$
Podemos despejar y determinar el valor de la amplitud de la respuesta:
$$
X = \frac{F_{0}}{(k-m\omega^{2}) + jc\omega} = F_{0} \left[  \frac{k-m\omega^{2}}{(k-m\omega^{2})^{2} + (c\omega)^{2}} - j \frac{c\omega}{(k-m\omega^{2})^{2} + (c\omega)^{2}} \right]
$$

O en forma exponencial:
$$
\begin{align}
X & = \frac{F_{0}}{\sqrt{(k-m\omega^{2})^{2} + (c\omega)^{2}}} e^{ -j\phi } \\
 \\
\phi & = \tan ^{-1} \left( \frac{c\omega}{k-m\omega^{2}} \right)
\end{align}
$$
Lo que nos deja la solución particular de la forma exponencial como:
$$
x_{p}(t) = \frac{F_{0}}{\sqrt{(k-m\omega^{2})^{2} + (c\omega)^{2}}} e^{j (\omega t-\phi) }
$$
![[Pasted image 20251212182102.png|Figura 1]]

Ahora, si definimos los siguientes parámetros para insertar en la expresión:
$$
\begin{array}{@{}l@{\quad}l@{}}
\text{Frecuencia Natural sin Amortiguamiento:} 
  & \omega_{n} = \sqrt{ \frac{k}{m} }  \\
\text{Coeficiente de amortiguamiento crítico:}
  & \zeta=\frac{c}{2m\omega_{n}}; \quad \frac{c}{m} = 2 \zeta \omega_{n} \\
\text{Deflexión estática:}
  & \delta_{st}=\frac{F_{0}}{k} \\
\text{Relación de frecuencia ($r$ o $\beta$):}
  & \beta=\frac{\omega}{\omega_{n}}
\end{array}
$$

así, si multiplicamos y dividimos por $\frac{1}{k}$ y reemplazamos los parámetros previamente definidos, llegamos a:
$$
x_{p}(t) = \frac{\frac{F_{0}}{k}}{\sqrt{ (1-\beta^{2})^{2}+(2\zeta \beta)^{2} }} e^{ j(\omega t-\phi) }
$$
Analizando la amplitud de la solución particular, se puede encontrar la expresión de la _función de respuesta en frecuencia_ (relación entre la amplitud de salida y la amplitud de la fuerza de excitación).
$$
\begin{align}
\mathbf{X} & = \frac{\frac{F_{0}}{k}}{\sqrt{ (1-\beta^{2})^{2}+(2\zeta \beta)^{2} }} \\
 \\
\frac{\mathbf{X}}{F_{0}} & = \frac{\frac{1}{k}}{\sqrt{ (1-\beta^{2})^{2}+(2\zeta \beta)^{2} }} = H(j\omega)
\end{align}
$$
La función de respuesta en frecuencia también puede expresarse como:
$$
\left\{\begin{align}
H(j\omega) &  = \lvert H(j\omega) \rvert e^{ -j\phi } \\
 \\
\phi & = \tan^{-1} \left( \frac{2\zeta \beta}{1-\beta^{2}} \right)
\end{align} \right.
$$
Por lo que la solución particular puede quedar como:
$$
x_{p}(t) = F_{0} H(j\omega) e^{ j\omega t } = F_{0} \lvert H(j\omega) \rvert  e^{ j(\omega t-\phi)}
$$
Se observa que $H(j\omega)$ contiene la magnitud y fase de la respuesta permanente del sistema bajo una carga de magnitud unitaria ($F_{0}=1$).

Se discriminan 2 casos:
1. La fuerza externa se representa con un __coseno__. La respuesta del sistema será la parte __REAL__ de la solución particular.
	$$ x_{p}(t) = \mathrm{Re} \Big\{F_{0} \lvert H(j\omega) \rvert  e^{ j(\omega t-\phi)}\Big\} $$
2. La fuerza externa se representa con un __seno__. La respuesta del sistema será la parte __IMAGINARIA__ de la solución particular.
	$$ x_{p}(t) = \mathrm{Im} \Big\{F_{0} \lvert H(j\omega) \rvert  e^{ j(\omega t-\phi)}\Big\} $$
Siguiendo el análisis en el plano complejo, vemos que la solución particular y sus derivadas tienen la siguiente relación:
$$
\left\{
\begin{align}
x_{p}(t) & = F_{0} \lvert H(j\omega) \rvert  e^{ j(\omega t-\phi)}  & \\
\dot{x}_{p}(t) & = j \omega F_{0} \lvert H(j\omega) \rvert  e^{ j(\omega t-\phi)}  \quad \implies \dot{x}_{p}(t) = j\omega x_{p}(t) \\
\ddot{x}_{p}(t) & = -\omega^{2} F_{0} \lvert H(j\omega) \rvert  e^{ j(\omega t-\phi)}  \ \implies \ddot{x}_{p}(t)= -\omega^{2}x_{p}(t)
\end{align} 
\right.
$$
lo que nos permite hacer un análisis de versores, debido a que todos se mueven a la misma frecuencia $\omega$ y solo difieren en amplitud y fase.
![[Pasted image 20251212190439.png|Figura 2]]

Finalmente, definimos el __factor de magnificación dinámica__ como la relación entre la amplitud de la respuesta del sistema y la deflexión estática:
$$
D = \left\lvert  \frac{\mathbf{X}}{\delta_{st}}  \right\rvert = \left\lvert  \frac{k\mathbf{X}}{F_{0}}  \right\rvert = k \lvert H(j\omega) \rvert = \frac{1}{\sqrt{ (1-\beta^{2})+(2\zeta \beta)^{2} }}
$$
Se puede ver que tanto el factor de magnificación dinámica $D$ como el ángulo de fase $\phi$ son funciones de la relación de frecuencia $\beta$ y la relación de amortiguamiento crítico $\zeta$. Es decir $D=f(\beta, \zeta)$ y $\phi=f(\beta, \zeta)$. 

Para ello, se trazan curvas de nivel para diferentes valores de $\zeta$ y se analizan los gráficos $D(\beta)|_{\zeta=\mathrm{conts}}$ y $\phi(\beta)|_{\zeta=\mathrm{conts}}$

![[Pasted image 20251212195215.png|Figura 3a]]

De este gráfico, podemos inferir lo siguiente:
1. Para un sistema no amortiguado: $\zeta=0 \implies \lim_{ \beta \to 1 }D=\infty$.
2. Cualquier cantidad de amortiguamiento $\zeta$ reduce la magnitud de $D$ para cualquier valor de relación de frecuencia $\beta$.
3. Para el caso estático $\beta=0 \implies D=1$.
4. El valor de $D$ es el más crítico cuando $\beta\to 1$.
5. El valor de $D$ cuando $\beta\to 1$ se reduce significativamente a mayor relación de amortiguamiento crítico $\zeta$.
6. La amplitud de la respuesta forzada se reduce con el incremento de la relación de frecuencia: $\lim_{ \beta \to \infty }D=0$
7. Para sistemas tales que $0<\zeta < \frac{1}{\sqrt{ 2 }}$ el factor de magnificación dinámica alcanza su valor máximo cuando la relación de frecuencia es $\beta=\sqrt{ 1-2\zeta^{2} }\iff \omega=\omega_{n}\sqrt{ 1-2\zeta^{2} }$ (cuidado con la multiplicación por 2). Esta frecuencia es menor que la la natural no amortiguada y la natural amortiguada $\omega<\omega_{d}<\omega_{n} \iff \sqrt{ 1-2\zeta^{2} }<\sqrt{ 1-\zeta^{2} }<1$.
8. El máximo valor de $\mathbf{X}$ para $\beta=\sqrt{ 1-2\zeta^{2} }$ es $\left( \frac{\mathbf{X}}{\delta_{st}} \right)_{\mathrm{max}}=\frac{1}{2\zeta \sqrt{ 1-\zeta^{2} }}$
9. El valor máximo cunado $\beta=1 \iff \omega=\omega_{n}$ es $\left( \frac{\mathbf{X}}{\delta_{st}} \right) \Big| _{\beta=1}=\frac{1}{2\zeta}$. En este caso ($\beta=1$) el sistema se dice que está en __resonancia__.
10. Para valores $\zeta> \frac{1}{\sqrt{ 2 }}$ el valor de $D$ decrece monotónicamente a medida que $\beta$ crece.

Ahora, veremos las curvas de fase.
![[Pasted image 20251212201046.png|Figura 3b]]

De este otro gráfico, podemos inferir:
1. Para un sistema no amortiguado $\zeta=0$ el ángulo de fase es nulo para $\beta \in [0, 1)$ y $180$° para $\beta >1$.
2. Para $\zeta>0$ y $\beta \in [0, 1)$ el ángulo de fase $\phi \in [0^{\circ}, 90^{\circ})$. En este caso, la __fuerza externa__ es equilibrada __principalmente__ por la __fuerza elástica__.
3. Para $\zeta>0$ y $\beta =1$ el ángulo de fase es $\phi = 90^{\circ}$. En este caso, la __fuerza externa__ es equilibrada totalmente por la __fuerza disipativa__.
4. Para $\zeta>0$ y $\beta > 1$ el ángulo de fase $\phi \in (90^{\circ}, 180^{\circ}]$. 
5. Para $\zeta>0$ y $\beta \to \infty$ el ángulo de fase $\phi \to 180^{\circ}$. En este caso, la __fuerza externa__ es equilibrada principalmente por la __fuerza de inercia__.
![[Pasted image 20251212201856.png|Figura 4]]

## Respuesta Total de un Sistema Bajo una Carga Armónica Cosenoidal

En el apartado anterior, se estudió exclusivamente la respuesta forzada (solución particular) de la ecuación de movimiento. A continuación, se verá la respuesta total del sistema.

Teniendo una sistema que responde a la siguiente ecuación de movimiento:
$$
m \ddot{x}(t) + c \dot{x}(t) + k x = F_{0} \cos(\omega t)
$$
La solución general será la solución particular (_estado estacionario_ o permanente) sumada la solución de la ecuación homogénea (_estado transitorio_):
$$
\begin{align}
x(t) & = x_{h}(t) + x_{p}(t)  \\
x(t) & = \mathbf{X}_{0} e^{ -\zeta \omega_{n}t } \cos(\omega_{d}t - \phi_{0}) + \mathbf{X} \cos(\omega t - \phi)
\end{align}
$$
Donde los valores de $(\mathbf{X}, \phi)$ se calculan a partir de los parámetros del sistema ($m, k, c$) y los valores $(\mathbf{X}_{0}, \phi_{0})$ se calculan a partir de las condiciones iniciales. Se tiene que:
$$
\left\{\begin{align}
x(t_{0}) &  = \mathbf{X}_{0}\cos(\phi_{0}) + \mathbf{X} \cos(\phi) \\
 
\dot{x}(t_{0}) & = -\zeta \omega_{n}\mathbf{X}_{0}\cos(\phi_{0}) + \omega_{d} \mathbf{X}_{0}\sin(\phi_{0}) + \omega \mathbf{X} \cos(\phi) 
\end{align} \right.
$$
Despejando, se llegan a los valores:
$$
\left\{\begin{align}
\mathbf{X}_{0} &  = \left[ \big(x_{0}-\mathbf{X}\cos(\phi)\big)^{2} + \frac{1}{\omega_{d}^{2}} \big( \zeta \omega_{n}x_{0} + \dot{x}_{0} -\zeta \omega_{n}\mathbf{X}\cos(\phi) - \omega \mathbf{X} \sin(\phi) \big)^{2}  \right]^{\tfrac12}\\
  \\
\phi_{0} & = \tan ^{-1} \left( \frac{\zeta \omega_{n}x_{0} + \dot{x}_{0} -\zeta \omega_{n} \mathbf{X} \cos(\phi) - \omega \mathbf{X} \sin(\phi)}{\omega_{d}(x_{0}-\mathbf{X}\cos(\phi))} \right)
\end{align} \right.
$$

## Aislamiento de la vibración
Se consideran dos sistemas dinámicos:

- **Sistema fuente**: masa $m_{e}$​, que genera la vibración, apoyada mediante elementos elásticos y disipativos $(k_e, c_e)$.
- **Sistema receptor**: masa $m_r$​, que representa la estructura o soporte que puede recibir la vibración, caracterizada por $(k_r, c_r)$.

![[Pictures/Unidad 4/Imagen 1.png]]

El objetivo del aislamiento es **reducir la vibración transmitida desde la fuente hacia el receptor**.

Las principales estrategias de aislamiento son:

1. **Aislamiento de la fuente**  
    Consiste en interponer elementos elásticos y disipativos entre la fuente de vibración y el soporte, de manera de reducir la fuerza transmitida.  
    La fuente puede vibrar, pero se limita la transmisión de energía al entorno.
    
2. **Aislamiento del medio**  
    Se introduce una barrera o elemento intermedio (fundaciones aisladas, capas elásticas, montajes flotantes) que atenúa la propagación de la vibración entre la fuente y el receptor.
    
3. **Aislamiento del receptor (o soporte)**  
    Se actúa sobre el sistema receptor, modificando sus propiedades dinámicas (masa, rigidez o amortiguamiento), de modo que su respuesta frente a la excitación transmitida sea mínima.

> El aislamiento no busca necesariamente minimizar el movimiento de la fuente, sino **minimizar la vibración o fuerza transmitida al receptor**.

> [!QUESTION]
> ### Sistema de la **fuente** (emisor)
>
>- Representa la **máquina** o elemento que vibra (masa $m_{e}$​).
>- Su resorte/amortiguador ($k_e, c_e$) representan el **aislador** (silentblocks, tacos, mounts).
>- Lo importante en el emisor es: **qué fuerza transmite hacia afuera**.
>### Sistema del **receptor**
>- Representa lo que “recibe” vibración: **soporte, estructura, piso, bancada**, etc. (masa $m_{r}$).
>- Su “resorte” ($k_{r}$) representa la **rigidez dinámica del soporte respecto a la “tierra lejana”** (fundación, suelo, estructura grande).
>- Lo importante en el receptor es: **cuánto se mueve o vibra cuando le aplicás la fuerza transmitida**.
>
>En criollo: el emisor genera “molestia”; el receptor decide si esa molestia se convierte en vibración grande o queda en nada.
> $$ \text{excitación interna} \to m_{e} \xrightarrow[debajo]{encima} $$
> 
> #Question 

### 1) Aislamiento de la Fuente

Cuando la máquina esta fija a una fundación rígida (suelo), ésta es sometida a la fuerza trasmitida desde la máquina (fuente de vibración) además del peso propio de la máquina.
![[Pasted image 20251212210537.png|Figura 5]]

Si admitimos que la excitación generada por la máquina es una carga armónica, se tiene que:
$$
F(t) = F_{0} \cos(\omega t)
$$
y la ecuación de movimiento del sistema queda como:
$$
m \ddot{x}(t) + c \dot{x}(t) + k x(t) = F_{0} \cos(\omega t) 
$$
La respuesta en régimen permanente (como visto en el apartado previo) será:
$$
x(t) = \mathbf{X} \cos(\omega t - \phi)
$$
Ahora, nos interesa estudiar la __fuerza trasmitida a la fundación__ a través del resorte y amortiguador del sistema de la fuente. Eso es:
$$
\begin{align}
F_{T}(t)  & = k x(t) + c \dot{x}(t) \\ \\
 & = k\mathbf{X} \cos(\omega t-\phi ) - c \omega \mathbf{X} \sin(\omega t-\phi )
\end{align}
$$
La magnitud de la fuerza trasmitida será entonces:
$$
\begin{align}
\mathbf{F_{T}} & = \sqrt{ (kx)^{2}+(c \dot{x})^{2} } \\
 & = \mathbf{X} \sqrt{ k^{2}+\omega^{2}c^{2} } \\
 & = F_{0} \sqrt{ \frac{k^{2}+\omega^{2}c^{2}}{(k-m\omega^{2})^{2}+\omega^{2}c^{2}} }
\end{align}
$$
Definimos la __trasmisibilidad__ $T_{f}$ como la relación entre la magnitud de la fuerza trasmitida $\mathbf{F_{T}}$ y la magnitud de la fuerza excitadora $F_{0}$. Eso nos da:
$$
\begin{align}
T_{f} & = \frac{\mathbf{F_{T}}}{F_{0}} \\ \\
 & =  \sqrt{ \frac{k^{2}+\omega^{2}c^{2}}{(k-m\omega^{2})^{2}+\omega^{2}c^{2}} } \\ \\
 & = \sqrt{ \frac{1 +(2\zeta \beta)^{2}}{(1-\beta^{2})^{2} + (2\zeta \beta)^{2}} } \\ \\
 & = D \sqrt{ 1+(2\zeta \beta)^{2} }
\end{align}
$$

Con esto podemos graficar la variación de la fuerza trasmitida respecto de la relación de frecuencia $\beta$
![[Pasted image 20251212214323.png|Figura 6]]

Vemos que para lograr aislamiento (para que la fuerza trasmitida sea menor que la fuerza excitadora) se requiere que si o si la relación de frecuencias sea $\beta> \sqrt{ 2 }$, de otro modo, sin importar cual sea el valor de la relación de amortiguamiento crítico, la trasmisibilidad será mayor a la unidad.

Para pequeños valores de relación de amortiguamiento crítico y para valores mayores a la unidad de relación de frecuencia, es decir $\zeta \approx 0$ y $\beta>1$, la trasmisibilidad se puede aproximar a:
$$
T_{f} \approx \frac{1}{\beta^{2}-1} \iff \beta^{2}=\frac{1+T_{f}}{T_{f}}
$$
![[Pasted image 20251212214652.png]]

A partir de la Figura (6) se puede inferir:
1. La fuerza trasmitida a la fundación se puede reducir disminuyendo la frecuencia natural del sistema. A menor frecuencia natural, menor fuerza trasmitida: ↓$\omega_{n}$ $\implies$ ↓$\mathbf{F_{T}}$ 
2. Aunque el amortiguamiento reduce la amplitud de la masa para todo el rango de frecuencias, reduce solo la fuerza trasmitida para valores $\beta<\sqrt{ 2 }$ . Para valores superiores $\beta>\sqrt{ 2 }$ la adición de amortiguamiento incrementa la fuerza trasmitida.
3. La fuerza trasmitida se puede reducir disminuyendo la relación de amortiguamiento. Sin embardo, dado que el aislamiento de la vibración requiere trabajar a frecuencias tales que $\beta>\sqrt{ 2 }$, la máquina debe pasar a través de la resonancia durante el arranque y parada, por lo tanto es necesario un amortiguamiento mínimo para evitar grandes amplitudes de resonancia cuando se pase por la zona $\beta=1$.
4. De 2. y 3. se infiere que se debe elegir una solución de compromiso al definir la cantidad de amortiguamiento a incorporar en el sistema de aislamiento. Es decir, se debe elegir una cantidad suficiente de amortiguamiento para limitar la amplitud de desplazamiento y la fuerza trasmitida durante la resonancia, pero no demasiado para no incrementar la fuerza trasmitida en a la velocidad de operación.


| ![[img1.jpg]] | ![[img2.jpg]] |
| ------------- | ------------- |
| ![[img3.jpg]] | ![[img4.jpg]] |

### 2) Aislamiento de la Base bajo un Movimiento Armónico

Sea el sistema masa-resorte-amortiguador bajo un movimiento armónico como muestra la Figura:

![[Pasted image 20251212221205.png| Figura 7]]

Denotamos como $y(t)$ al movimiento de la base y con $x(t)$ al movimiento de la masa respecto de la posición de equilibrio estático en, ambas consideradas como __coordenadas absolutas__, ambas medidas con respecto de un _sistema de referencia inercial_.

Así, la elongación del resorte será $x-y$ y la velocidad relativa entre extremos será $\dot{x}-\dot{y}$. A partir del diagrama de cuerpos libres, se puede encontrar la siguiente ecuación de movimiento:
$$
m \ddot{x}(t) + c \big(\dot{x}(t)-\dot{y}(t)\big) + k \big( x(t) - y(t) \big) = 0
$$
Si consideramos $y(t)=\mathbf{Y}\sin(\omega t)$ nos queda:
$$
\begin{align}
m \ddot{x}(t) + c \dot{x}(t) + k x(t) & = c \dot{y}(t) + k y(t)  \\
 & = k\mathbf{Y} \sin(\omega t) + c \omega \mathbf{Y} \cos(\omega t) \\
 & = A \sin(\omega t - \alpha)
\end{align}
$$
Donde:  
$\qquad A=\mathbf{Y}\sqrt{ k^{2}+(c\omega)^{2} }$  
$\qquad \alpha=\tan ^{-1}\left( -\frac{c\omega}{k} \right)$  

Así se demuestra que la excitación de la base es similar a aplicar una fuerza de magnitud $A$ sobre la masa manteniendo la base fija. La respuesta en estado estacionario será:
$$
x_{p}(t) = \mathbf{Y} \sqrt{ \frac{k^{2}+c(c\omega)^{2}}{(k-m\omega^{2})^{2}+(c\omega)^{2}} } \sin(\omega t - \phi' - \alpha)
$$
Donde:  
$\qquad \phi'=\tan ^{-1} \left( \frac{c\omega}{k-m\omega^{2}} \right)$

Esta expresión se puede reescribir como la expresión previamente trabajada:
$$
x_{p}(t) = \mathbf{X}\sin(\omega t-\phi)
$$
Pero ahora los valores ($\mathbf{X}, \phi$) se calculan como:
$$
\left\{\begin{align}
\mathbf{X} &  = \mathbf{Y} \sqrt{ \frac{k^{2}+c(c\omega)^{2}}{(k-m\omega^{2})^{2}+(c\omega)^{2}} } = \mathbf{Y} \sqrt{ \frac{1 +(2\zeta \beta)^{2}}{(1-\beta^{2})^{2} + (2\zeta \beta)^{2}} } \\
  \\
\phi & = \tan ^{-1} \left( \frac{mc\omega^{3}}{k(k-m\omega^{2})+(\omega c)^{2}} \right) = \tan ^{-1} \left( \frac{2\zeta \beta^{3}}{1+(4\zeta^{2}-1)\beta^{2}} \right) 
\end{align} \right.
$$
Definimos la __trasmisibilidad de desplazamiento__ como la relación entre las amplitudes $T_{d}=\frac{\mathbf{X}}{\mathbf{Y}}$. Da la casualidad de que la trasmisibilidad de desplazamiento tiene la misma expresión matemática que la trasmisibilidad de fuerzas. Pero no tienen el mismo significado:

- La **transmisibilidad** cuantifica qué fracción de la fuerza generada por la fuente (o qué fuerza dinámica resultante) se **transmite al soporte/receptor**, es decir, mide el “nivel de carga vibratoria” que llega a la estructura. 
- La **transmisibilidad de desplazamiento** cuantifica cuánto movimiento del soporte (base) se **reproduce en la masa**; es decir, mide el grado de **aislamiento frente a excitación por base**. Si $T_d<1$, la masa se mueve menos que la base (hay aislamiento); si $T_d>1$, la vibración se amplifica.

Debido a su expresión matemática, se tiene el mismo gráfico. El ángulo de fase si tiene una gráfica diferente.


| ![[Pasted image 20251212214323.png\|Figura 8a]] | ![[Pasted image 20251212225709.png\| Figura 8b]] |
| ----------------------------------------------- | ------------------------------------------------ |
|                                                 |                                                  |
 De los gráficos, se pueden inferir:
 1. El valor de $T_{d}$ es la unidad ara $\beta=0$ y proximo a la unidad para valores de $\beta\to0$.
 2. Para un sistema no amortiguado $\zeta=0 \implies \lim_{ \beta \to 1 }T_{d}=\infty$
 3. El valor de la trasmisibilidad de desplazamiento es menor a la unidad para valores de la relación de frecuencia mayores a $\sqrt{ 2 }$ para cualquier valor de relación de amortiguamiento: $\forall \zeta: \beta>\sqrt{ 2 } \implies T_{d}<1$
 4. El valor de la trasmisibilidad de desplazamiento es la unidad cuando la relación de frecuencia es $\sqrt{ 2 }$, para cualquier valor de relación de amortiguamiento: $\forall \zeta: T_{d}(\beta=\sqrt{ 2 })=1$.
 5. Para $\beta<\sqrt{ 2 }$ menores relaciones de amortiguamiento conducen a mayores valores de $T_{d}$. Por otro lado, para $\beta>\sqrt{ 2 }$ menores relaciones de amortiguamiento conducen a menores valores de $T_{d}$.
 6. La trasmisibilidad de desplazamiento $T_{d}$ alcanza valores máximos para $0<\zeta<1$ para el valor $\beta=\frac{1}{2\zeta}\sqrt{ \sqrt{ 1+8\zeta^{2} }  -1}$.

Ahora, la fuerza trasmitida debido a las reacciones del resorte y del amortiguador son:
$$
F = k( x - y) + c( \dot{x} - \dot{y}) = - m \ddot{x}
$$
la cual se puede expresar como:
$$
F(t) = m \omega^{2} \mathbf{X} \sin(\omega t - \phi) = \mathbf{F_{T}} \sin(\omega t - \phi)
$$
Definimos la __trasmisibilidad de fuerza__ $T_{F}$ como:
$$
\begin{align}
T_{F} = \frac{\mathbf{F_{T}}}{k\mathbf{Y}}  & = \beta^{2} \sqrt{ \frac{1 +(2\zeta \beta)^{2}}{(1-\beta^{2})^{2} + (2\zeta \beta)^{2}} } \\
 & = \beta^{2} \; T_{d}
\end{align}
$$

![[Pasted image 20251213163801.png]]
A partir del gráfico, se puede inferir:
1. Para cualquier valor de relación de amortiguamiento, la trasmisibilidad de fuerza es igual a 2 cuando la relación de frecuencia es igual a $\sqrt{ 2 }$, es decir: $\forall \zeta: T_{F}(\beta=\sqrt{ 2 })=2$
2. Para $\beta>\sqrt{ 2 }$ menores valores de relación de amortiguamiento corresponden a menores valores de $T_{F}$, es decir: ↓$\zeta$ $\implies$ ↓$\mathbf{F_{T}}$.
3. Para $\beta>\sqrt{ 2 }$ para cualquier valor específico de relación de amortiguamiento, $T_{F}$ incrementa con $\beta$. Este comportamiento es contrario al de trasmisibilidad de desplazamiento $T_{d}$.
4. $T_{F}$ es próximo a cero para valores de $\beta \approx 0$ y alcanza valores máximos cuando $\beta\to1$.

Estas "inferencias" son del profesor. Lo que yo agrego:
1. {i} El "máximo local" se da en resonancia, y tiene valor $F_{T}=\sqrt{ \frac{1+4\zeta^{2}}{4\zeta^{2}} }$.
2. El caso especial $\zeta=0$ provoca $\lim_{ \beta \to \infty }T_{F}(\beta)=1$
3. Para $\zeta \in(0,1)$ se tiene $T_{F}(\beta)\sim 2\zeta \beta$ por lo que $T_{F}$ demuestra un comportamiento asintótico con una recta de pendiente $2\zeta$ y su valor diverge a mayores valores de relación de frecuencia $\lim_{ \beta \to \infty }T_{F}(\beta)=\infty$.

Ahora, analizando el movimiento relativo de la masa respecto a la base, definido como $z=x-y$, se puede escribir la ecuación de movimiento como:
$$
m \ddot{z}(t) + c \dot{z}(t) + k z(t) = -m \ddot{y}(t) = m \omega^{2} \mathbf{Y} \sin(\omega t)
$$
La solución en estado estacionario será:
$$
z(t) = \frac{m\omega^{2}\mathbf{Y}}{\sqrt{(k-m\omega^{2})^{2} + (c\omega)^{2}}} \sin(\omega t-\phi_{\mathrm{rel}}) = \mathbf{Z}\sin(\omega t-\phi_{\mathrm{rel}})
$$
donde la amplitud del movimiento relativo y el desfasaje se pueden expresar como:
$$
\left\{\begin{align}
\mathbf{Z} &  = \frac{m\omega^{2}\mathbf{Y}}{\sqrt{(k-m\omega^{2})^{2} + (c\omega)^{2}}} = \mathbf{Y} \frac{\beta^{2}}{\sqrt{ {(1-\beta^{2})^{2} + (2\zeta \beta)^{2}} }} \\
  \\
\phi_{\mathrm{rel}} & = \tan ^{-1} \left( \frac{c\omega}{(k-m\omega^{2})} \right) = \tan ^{-1} \left( \frac{2\zeta \beta}{1-\beta^{2}} \right) 
\end{align} \right.
$$
![[Pasted image 20251213170754.png]]

La amplitud de movimiento relativo $\mathbf{Z}$ si __tiende a la unidad cuando la relación de frecuencias tiende a infinito__ $\lim_{ \beta \to \infty }\mathbf{Z}=1$.

### 3) Aislamiento de un Sistema Amortiguado Bajo un Desbalance.

El desbalance en máquinas rotantes es uno de los motivos más comunes e importantes del origen de la vibración. A continuación, se ve un modelo simplificado:

| ![[Pasted image 20251213171119.png]] | ![[Pasted image 20251213171150.png]] |
| ------------------------------------ | ------------------------------------ |
|                                      |                                      |
La masa total de la máquina es $M$ y el desbalance lo producen dos masas $\frac{m}{2}$ que rotan en sentidos opuestos con una velocidad constante $\omega$. La fuerza centrífuga será $F_{C}=\tfrac12 me\omega^{2}$ debido a que cada masa cuasará una excitación sobre la masa $M$ mientras que las componentes horizontales se anulan mutuamente.

La fuerza de excitación será dada por la ecuación:
$$
F(t) = me \omega^{2} \sin(\omega t)
$$
y la ecuación de movimiento del sistema será:
$$
M \ddot{x}(t) + c \dot{x}(t) + k x(t) = me \omega^{2} \sin(\omega t)
$$
La solución será de la forma:
$$
\left\{\begin{align}
x_{p}(t) & = \mathbf{X} \sin(\omega t - \phi) \\
 \\
\mathbf{X} &  = \frac{me\omega^{2}}{\sqrt{(k-M\omega^{2})^{2} + (c\omega)^{2}}} = \frac{me}{M} \beta^{2} D \\
  \\
\phi & = \tan ^{-1} \left( \frac{c\omega}{(k-M\omega^{2})} \right) = \tan ^{-1} \left( \frac{2\zeta \omega}{1-\beta^{2}} \right)
\end{align} \right.
$$
Donde:  
$\qquad \omega_{n} = \sqrt{ \frac{k}{M} }$  
$\qquad \beta=\frac{\omega}{\omega_{n}}$  
$\qquad \zeta=\frac{c}{c_{c}}$  
$\qquad c_{c}=2M\omega_{n}$  



La variación de ($\mathbf{X}, \phi$) para este caso son los gráficos siguientes (debido a que comparten expresiones matemáticas con otros casos de estudio)

| ![[Pasted image 20251213170754.png]] | ![[Pasted image 20251212201046.png]] |
| ------------------------------------ | ------------------------------------ |

Las siguientes observaciones se infieren:
1. Todas las curvas comienzan con amplitud nula.
2. La amplitud en resonancia es fuertemente afectada por el amortiguamiento, expresión dada por $\frac{1}{2\zeta}$. Por ello, la máquina debe poseer suficiente amortiguamiento para evitar amplitud peligrosas durante el periodo de aceleración y desaceleración (operación y frenado de la máquina).
3. A muy altas velocidades, la relación $\frac{M\mathbf{X}}{me}$ tiende a la unidad y el efecto del amortiguamiento es despreciable.
4. Para valores $0<\zeta< \frac{1}{\sqrt{ 2 }}$ el máximo se encuentra en $\beta=\frac{1}{\sqrt{ 1-2\zeta^{2} }}$ con amplitud $\left( \frac{M\mathbf{X}}{me} \right)_{\mathrm{max}}=\frac{1}{2\zeta \sqrt{ 1-\zeta^{2} }}$.
5. Para valores de $\zeta> \frac{1}{\sqrt{ 2 }}$ la amplitud $\frac{M\mathbf{X}}{me}$ no alcanza un máximo y su valor crece desde 0 hasta 1 mientras $\beta$ va desde 0 hasta $\infty$.
6. La fuerza trasmitida a la fundación debido a la fuerza de desbalance se puede calcular como:
$$
F_{\mathrm{trasmitida}}(t) = kx(t) + c \dot{x}(t)
$$
	y su magnitud es:
$$
\lvert F_{\mathrm{trasmitida}} \rvert = me\omega^{2} \sqrt{ \frac{1 + (2\zeta \omega)^{2}}{ {(1-\beta^{2})^{2} + (2\zeta \beta)^{2}}} }
$$

## Sensores

### Sensores de Vibración

El instrumento "sensor de vibración" (también llamado "instrumento sísmico") consiste en un sistema masa-resorte-amortiguador montado sobre un bastidor como se muestra a continuación:
![[Pasted image 20251213174151.png]]

El movimiento vibratorio se mide mediante el desplazamiento de la masa respecto al soporte sobre el que está montado. El movimiento de la masa respecto a su soporte esta dado por el movimiento relativo: $z=x-y$.

Si el movimiento del soporte se admite que sea:
$$
y(t)= \mathbf{Y}\sin(\omega t)
$$
entones, la ecuación de movimiento esta dada por:
$$
m \ddot{x}(t) + c \big(\dot{x}(t)-\dot{y}(t)\big) + k \big( x(t) - y(t) \big) = 0
$$
y puede reescribirse como movimiento relativo en la ecuación:
$$
m \ddot{z}(t) + c \dot{z}(t) + k z(t) = -m \ddot{y}(t) = m \omega^{2} \mathbf{Y} \sin(\omega t)
$$
donde la solución será:
$$
z(t) = \frac{\omega^{2}\mathbf{Y}}{\sqrt{(k-m\omega^{2})^{2} + (c\omega)^{2}}} \sin(\omega t-\phi_{\mathrm{rel}}) = \mathbf{Z}\sin(\omega t-\phi_{\mathrm{rel}})
$$
$$
\left\{\begin{align}
\mathbf{Z} &  = \frac{\omega^{2}\mathbf{Y}}{\sqrt{(k-m\omega^{2})^{2} + (c\omega)^{2}}} = \mathbf{Y} \frac{\beta^{2}}{\sqrt{ {(1-\beta^{2})^{2} + (2\zeta \beta)^{2}} }} \\
  \\
\phi_{\mathrm{rel}} & = \tan ^{-1} \left( \frac{c\omega}{(k-m\omega^{2})} \right) = \tan ^{-1} \left( \frac{2\zeta \beta}{1-\beta^{2}} \right) 
\end{align} \right.
$$
![[Pasted image 20251213174626.png]]

Vemos que:
- $0<\beta<1$ es el rango de __sensor de aceleración__.
- $3<\beta$ es el rango para __sensor de desplazamiento__.

### Sensor de aceleración

El acelerómetro (o sensor de aceleración) es un instrumento que mide la aceleración de un cuerpo que vibra. De las ecuaciones previas, podemos obtener:
$$
-z(t)\omega_{n}^{2}= \frac{1}{\sqrt{ {(1-\beta^{2})^{2} + (2\zeta \beta)^{2}} }} \Big[ -\mathbf{Y}\omega^{2}\sin(\omega t-\phi) \Big]
$$
por lo que si:
$$
\frac{1}{\sqrt{ {(1-\beta^{2})^{2} + (2\zeta \beta)^{2}} }} \approx 1
$$
esto se cumple para valores $\beta \approx 0$ como se ve en el gráfico del coeficiente de magnificación dinámica.

Luego, se llega a:
$$
z(t)\omega_{n}^{2} \simeq \mathbf{Y}\omega^{2}\sin(\omega t-\phi)
$$
por lo que se mide exactamente la vibración $\ddot{y}(t)=-\mathbf{Y}\omega^{2}\sin(\omega t)$.



Debido a que $\lvert z(t) \rvert = \frac{\lvert \ddot{y}(t) \rvert}{\omega_{n}^{2}}$, podemos deducir que los valores de $\lvert z(t) \rvert$ son relativamente pequeños, por lo que aparece la necesidad de tener un amplificador de señal.

### Sensor de Desplazamiento (Sismómetro)

El sismómetro es un instrumento que mide desplazamientos de un cuerpo que vibra. De la solución de movimiento relativo, se vio que $\frac{\mathbf{Z}}{\mathbf{Y}}\approx 1$ para valores $\beta>3$. Así, el desplazamiento relativo entre la masa y su soporte (medido por el instrumento) es esencialmente el mismo que el desplazamiento de la base. Es decir, el sensor indica directamente el movimiento a medir:
$$
z(t) \simeq \mathbf{Y}\sin(\omega t-\phi)
$$
cuando
$$
\frac{\beta^{2}}{\sqrt{ {(1-\beta^{2})^{2} + (2\zeta \beta)^{2}} }} \approx 1
$$
este sería el gráfico de $\left\lvert  \frac{\mathbf{Z}}{\mathbf{Y}}  \right\rvert$ el cuál se cumple para $\beta> 3$.

Dado que $\beta$ tiene que ser grande, para lograr un rango de frecuencias amplio, la frecuencia natural $\omega_{n}=\sqrt{ \frac{k}{m} }$ debe ser lo más pequeña posible. Esto conduce a un sensor con masa relativamente grande y rigidez relativamente pequeña.

### Sensor de velocidad 

Este instrumento mide la velocidad de un cuerpo que vibra. Considerando dicha velocidad como:
$$
\dot{y}(t) = \omega \mathbf{Y} \cos(\omega t)
$$
la velocidad relativa del sistema del sensor será:
$$
z(t) = \frac{\beta^{2}\omega\mathbf{Y}}{\sqrt{(1-\beta)^{2} + (c\omega)^{2}}} \cos(\omega t-\phi_{\mathrm{rel}}) = \mathbf{Z}\sin(\omega t-\phi_{\mathrm{rel}})
$$
Si se logra que:
$$
\frac{\beta^{2}}{\sqrt{ {(1-\beta^{2})^{2} + (2\zeta \beta)^{2}} }} \approx 1
$$
se puede aproximar:
$$
\dot{z}(t) = \omega \mathbf{Y}\cos(\omega t-\phi)
$$

De lograrse esta aproximación, se tendría que la velocidad medida es igual a la velocidad a medir $\dot{z}=\dot{y}$. En general, estos sensores se basan en el principio de inducción electromagnética, en donde la tensión inducida en una bobina es proporcional a la velocidad relativa de la masa $\dot{z}(t)$ (trasductor electrodinámico, bobina e imán permanente).

---
## Apuntes incompletos
### Método de Medición Potencia Media
Sabiendo que:
$$
D = \frac{1}{\sqrt{ (1-\beta^{2})^{2}+(2\beta \zeta)^{2} }}
$$
Yo de manera gráfica, se que existen 2 valores $\beta_{1}$ y $\beta_{2}$ en los que $D(\beta_{1})=D(\beta_{2}) = \frac{1}{\sqrt{ 2 }}D_{max}$. Yo puedo armar una ecuación de segundo orden en $\beta$
$$
\begin{align}
\frac{1}{\sqrt{ (1-\beta^{2})^{2}+(2\beta \zeta)^{2} }} &= \frac{1}{\sqrt{ 2 }}D_{max} = \frac{1}{\sqrt{ 2 }} \cdot \frac{1}{2\zeta} \\ \\

\frac{1}{\sqrt{ 2 }} \left( \sqrt{ (1-\beta^{2})^{2}+(2\beta \zeta)^{2}} \right) -2\zeta &= 0
\end{align}
$$
Despejando esta ecuación, las raices son:
$$
\beta_{1,2} = 1 \pm \zeta
$$
Y despejando:
$$
\zeta = \frac{\beta_{2}-\beta_{1}}{\beta_{2}+\beta_{1}}
$$
La pregunta es ¿Cómo calculo las relaciones de frecuencia $\beta_{1,2}$? Recordando que $H(i\omega)=\frac{1}{k}D$, nosotros podemos calcular las relaciones de frecuencia mediante la medición de una vibración de impulso (no necesariamente unitario) y su posterior transformada de fourier. Es decir:
$$
\text{Impulso} \implies \text{Medición} \overset{F(i\omega)}{\implies} |H(i\omega)| \implies \beta_{1,2} \implies \zeta
$$


## Acelerómetro (Sensor de Aceleración)

El acelerómetro es un instrumento que mide la **aceleración** de un cuerpo que vibra. Emiten una señal proporcional al desplazamiento ejercido al sensor. Mantener en cuenta que el sensor es un sistema que vibra adicional al sistema a medir. 
$$
\Delta V_{\text{sensor}} \propto |Z|
$$
Donde:  
$\qquad x\text{ : Desplazamiento de la masa}$  
$\qquad y\text{ : Desplazamiento de la base}$  
$\qquad z:=(x-y)$  
$\qquad z(t) = Z \sin(\omega t)$  

Adaptando la ecuación de movimiento a la diferencia de desplazamiento $z$ relacionado con el desplazamiento de la base $y$ tenemos:
$$
m \ddot{z} + c \dot{z} + kz = -m \ddot{y}
$$
El sensor me da valores de $\Delta V \propto z(t)$ y lo que yo quiero medir es $\ddot{y}(t)$. Si bien se conoce la frecuencia del sensor $\omega_{sensor}$ pero desconozco el coeficiente $D$, sabiendo que:
$$
z = \frac{\ddot{y}}{\omega_{s}^{2}} D(\beta)
$$
Si bien $\omega_{s}$ es constante, vemos que $D$ varia para cada valor de $\beta$ .

¿Cómo se soluciona esto? Se construye un sensor con $\zeta \approx 0,7$, lo que trabajando con $\beta \leq 0,6$ vemos que los valores de $D$ se mantienen **casi constante**.

Esto significa que la frecuencia natural del sensor $f_{s}$ es un valor que debo conocer, para asegurarme de trabajar con $\beta = \frac{\bar{f}}{f_{s}} \leq 0,6$. Finalmente podemos concluir que:
$$
\tag 1
\frac{\ddot{y}}{\omega_{s}^{2}} D \approx \frac{\ddot{y}}{\omega_{s}^{2}} = z
$$

Finalmente, podemos concluir que:
$$
\Delta V \propto \frac{\ddot{y}}{\omega_{s}^{2}}
$$

Si en cambio, quiero estudiar el **desplazamiento**, hacemos la igualdad:
$$
\begin{align}
\ddot{Y} &= \bar{\omega}^{2} Y_{g} \\ \\

z &= \frac{m \bar{\omega}^{2} Y_{g}}{k} D = Y_{g} \beta^{2}D
\end{align}
$$
Nuevamente, para $\zeta \approx 0,7$ vemos que para $\beta >2 \to D \approx 1$.

Dependiendo de si quiero medir aceleraciones o desplazamientos, es el rango de $\beta$ que elegiré, pero la amortiguación de mi sensor deberá ser siempre (convenientemente) $\zeta \approx 0,7$.

Podemos concluir entonces que:  

$\qquad\text{Acelerómetro:} \quad \beta <0,6$  

![[Imagen 6.png]]

$\qquad\text{Sismómetro:} \;\; \quad \beta >2$  

![[Imagen 7.png]]

Lo que nos asegura $D \approx 1$ es que se cumpla $\zeta \approx 0,7$. El rango de valores de $\beta$ dependerá de si el sensor es un *acelerómetro* o un *sismómetro*.
