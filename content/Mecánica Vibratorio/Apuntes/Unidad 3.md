# Respuestas en Vibraciones Libres

En esta unidad vamos a analizar los sistemas en "Vibraciones Libres", esto es decir, sin fuerzas externas que puedan excitar (modificar) al sistema. Veremos:
- Respuesta a vibraciones libres __no amortiguadas__
- Respuesta a vibraciones libres __amortiguadas__
- Naturaleza de los coeficientes de Amortiguamiento.
## Vibraciones Libres No Amortiguadas

Consideramos un sistema dinámico de 1 grado de libertad, consistente en una masa y un resorte. El sistema no cuenta con excitación externa, es decir, no hay fuerza ejercida en la masa (vibraciones libres).

![[Pasted image 20251211190154.png]]

La ecuación de movimiento del sistema será:
$$
m \ddot{x}(t) + k x(t) = 0
$$
A continuación, asumiremos una posible solución del tipo:
$$
\begin{align}
x(t)  & = C e^{ st } \\
\dot{x}(t) & = sC e^{ st } \\
\ddot{x}(t) & = s^{2}C e^{ st }
\end{align}
$$
Si reemplazamos esta posible solución en la ecuación de movimiento, se llega a:
$$
\Big[ C \Big( ms^{2} + k \Big) \Big] e^{ st } = 0
$$
Existen ciertas limitaciones con esta expresión:
- El término $e^{ st }$ es no nulo en todo su dominio.
- El término $C$ no puede ser nulo, sino la solución sería trivial: $C=0 \implies x=0 \ , \forall t$

Por ello, para cumplir la igualdad, se debe dar que:
$$
ms^{2} + k = 0
$$
Debido a que $m, k$ son parámetros del mismo sistema, la única variable que nos queda es $s$: se debe encontrar los valores de $s$ para los cuales se cumple la ecuación anterior, esto es:
$$
s = \pm \left( -\frac{k}{m} \right)^{2} = \pm j \omega_{n}
$$
donde $j$ es el operador imaginario.

Esto nos deja: $\omega_{n} = \frac{k}{m}$.

Dado que ambos valores de $s$ satisfacen la ecuación de movimiento, se tiene que la ecuación general debe ser del tipo:
$$
x(t) = C_{1} e^{ j\omega_{n}t } + C_{2} e^{ -j\omega_{n}t }
$$
Haciendo uso de la identidad de Euler, podemos expresar la solución utilizando expresiones puramente reales:
$$
x(t) = A_{1} \cos(\omega_{n}t) + A_{2} \sin(\omega_{n}t)
$$
donde $A_{1}, A_{2}$ son constantes de integración a ser determinadas por las condiciones iniciales (PVI). Estos valores se calculan a partir de:
$$
\left\{ \begin{align}
x(t=0)  & = x_{0} = A_{1} \\
\dot{x}(t=0)  & = \dot{x}_{0} = \omega_{n}A_{2}
\end{align} \right.
$$

>[!TIP] ¿Y los coeficientes $C_{1}, C_{2}$?
>Se puede conseguir los valores de $C_{1}, C_{2}$ a partir de:
>$$ \left\{ \begin{align} A_{1}  & = C_{1}+C_{2} \\ A_{2}  & = j(C_{1}-C_{2}) \end{align} \right. $$
>lo cual nos deja:
>$$ \left\{ \begin{align} C_{1} & = \tfrac12 x_{0} + j \frac{\dot{x}_{0}}{2\omega_{n}} \\ C_{2} & = \tfrac12 x_{0} - j \frac{\dot{x}_{0}}{2\omega_{n}} \end{align} \right. $$

Esto nos deja la solución como:
$$
x(t) = x_{0} \cos(\omega_{n}t) + \frac{\dot{x}_{0}}{\omega_{n}} \sin (\omega_{n}t)
$$
que también puede tomarse como una única sinusoide de amplitud $A$ y desfasaje $\phi$:
$$
\begin{align}
A  & = (A_{1}^{2}+A_{2}^{2})^{1/2} = \left[ x_{0}^{2}+ \left( \frac{\dot{x}_{0}}{\omega_{n}} \right)^{2}  \right]^{1/2} \\
\phi  & = \tan ^{-1} \left( \frac{A_{2}}{A_{1}} \right) = \tan ^{-1} \left( \frac{\dot{x}_{0}}{x_{0} \ \omega_{n}} \right)
\end{align}
$$
Lo que nos deja una solución de la forma:
$$
x(t) = A \cos(\omega_{n}t - \phi)
$$
Lo cual se ve de la forma:
![[Pasted image 20251211192636.png]]

>[!SUMMARY]
>Para un modelo masa-resorte de 1 grado de libertad y sin fuerza externa excitando el sistema, se tiene una ecuación de movimiento tal que:
>$$ m \ddot{x}(t) + k x(t) = 0 $$
>y la solución general puede expresarse como cualquiera de las siguientes formas:
>$$ \begin{align} (1) \qquad & x(t) = x_{0} \cos(\omega_{n}t) + \frac{\dot{x}_{0}}{\omega_{n}} \sin (\omega_{n}t)
 \\ \\ (2) \qquad & x(t) = \left[ x_{0}^{2}+ \left( \frac{\dot{x}_{0}}{\omega_{n}} \right)^{2}  \right]^{1/2} \cos\left( \omega_{n}t - \tan ^{-1} \left( \frac{\dot{x}_{0}}{x_{0} \ \omega_{n}} \right) \right) \\ \\ (3) \qquad  & x(t) = \left( \tfrac12 x_{0} + j \frac{\dot{x}_{0}}{2\omega_{n}} \right) e^{ j\omega_{n}t } + \left( \tfrac12 x_{0} - j \frac{\dot{x}_{0}}{2\omega_{n}} \right) e^{ -j\omega_{n}t } \end{align} $$


## Vibraciones Libres Amortiguadas

Ahora, consideramos un sistema dinámico de 1 grado de libertad del tipo masa-resorte-amortiguador. Nuevamente, no existe excitación externa.

![[Pasted image 20251211194208.png]]

Ahora, la ecuación de movimiento del sistema será del tipo:
$$
m\ddot{x}(t) + c \dot{x}(t) + k x(t) = 0
$$
Se vuelve a asumir una solución del tipo:
$$
\begin{align}
x(t)  & = C e^{ st } \\
\dot{x}(t) & = sC e^{ st } \\
\ddot{x}(t) & = s^{2}C e^{ st }
\end{align}
$$
Si reemplazamos esta posible solución en la ecuación de movimiento, se llega a:
$$
\Big[ C \Big( ms^{2} + cs + k \Big) \Big] e^{ st } = 0
$$
Existen ciertas limitaciones con esta expresión:
- El término $e^{ st }$ es no nulo en todo su dominio.
- El término $C$ no puede ser nulo, sino la solución sería trivial: $C=0 \implies x=0 \ , \forall t$

Por ello, para cumplir la igualdad, se debe dar que:
$$
ms^{2} + cs + k = 0
$$
Los valores de estas raíces son:
$$
s_{1,2} = -\frac{c}{2m} \pm \sqrt{ \left( \frac{c}{2m} \right)^{2} - \frac{k}{m} }
$$
Lo que nos deja una solución que se vería como:

$$
\begin{align}
x(t) & = C_{1} e^{ s_{1}t } + C_{2}e^{ s_{2} t} \\
 & = C_{1} e^{ \left( -\frac{c}{2m} + \sqrt{ \left( \frac{c}{2m} \right)^{2} - \frac{k}{m} }  \right)t } + C_{2} e^{ \left( -\frac{c}{2m} - \sqrt{ \left( \frac{c}{2m} \right)^{2} - \frac{k}{m} }  \right)t }
\end{align}
$$

Dependiendo de los valores de los parámetros del sistema, podemos dividir el comportamiento de la respuesta en 3 grupos:
- Sistemas con __amortiguamiento crítico__
- Sistemas __subamortiguados__
- Sistemas __sobreamortiguados__: en este escenario, el sistema no tendría vibración.

### Sistema con Amortiguamiento Crítico

El amortiguamiento crítico $c_{c}$ se define como _el valor del coeficiente de amortiguamiento $c$ para el cualel radical de la solución se anula_. Es decir:

$$
\left( \frac{c_{c}}{2m} \right)^{2}-\frac{k}{m} = 0 \iff c_{c} = 2m \sqrt{ \frac{k}{m} } = 2 \sqrt{ km } = 2m\omega_{n}
$$
Esto haría que los valores de $s$ que satisface la ecuación de movimiento sería:
$$
s_{1}=s_{2}= -\frac{c_{c}}{2m} = -\omega_{n}
$$
Debido a la multiplicidad repetida, se agrega un término lineal a la solución propuesta y se llega a la expresión:
$$
x(t) = \Big(C_{1}+C_{2}t\Big)e^{ -\omega_{n}t }
$$
Con las condiciones iniciales, se obtienen los valores de $C_{1}, C_{2}$ y se llega a:
$$
\left\{ \begin{align}
C_{1} &  = x_{0} \\
C_{2} &  = \dot{x}_{0} + \omega_{n} x_{0}
\end{align} \right.
$$
Se dice que el sistema posee el menor amortiguamiento para lograr un movimiento aperiódico (el sistema no oscila). Así, la masa retorna al reposo en el menor tiempo posible.

La solución queda:
$$
x(t) = \Big[ x_{0} + (\dot{x}_{0}+\omega_{n}x_{0})t \Big] e^{ -\omega_{n}t }
$$
esta expresión es puramente __REAL__: es una exponente negativa, por lo que la respuesta es decreciente. Cuando $t\to \infty$ la respuesta tiende a cero: 
$$
\lim_{ t \to \infty }x(t)=0
$$

Y definimos la relación de amortiguamiento crítico como:
$$
\zeta= \frac{c}{c_{c}} = \frac{c}{2\omega_{n}m}
$$

### Sistema con Subamortiguamiento

El sistema se categoriza como subamortiguado cuando el coeficiente de amortiguamiento del sistema es menor que el amortiguamiento crítico $c < c_{c}$, que es lo mismo que decir que la relación de amortiguamiento crítico es menor a la unidad $\zeta < 1$.

En dicho caso, los valores de $s$ que permiten obtener la solución valen:
$$
\begin{align}
s_{1} & = \Big(-\zeta + j \sqrt{ 1-\zeta^{2} }\Big) \omega_{n } \\
s_{2} & = \Big(-\zeta - j \sqrt{ 1-\zeta^{2} }\Big) \omega_{n }
\end{align}
$$
donde podemos ver que estos valores son compuestos conjugados. 

Reemplazando en la solución y operando:

$$
\begin{align}
x(t) & = C_{1}e^{ \Big(-\zeta + j \sqrt{ 1-\zeta^{2} }\Big) \omega_{n }t }  + C_{2}e^{ \Big(-\zeta + j \sqrt{ 1-\zeta^{2} }\Big) \omega_{n }t } \\
 & = e^{ -\zeta \omega_{n}t } \Big[ C_{1}e^{ j\sqrt{ 1-\zeta^{2} } } + C_{2}e^{- j\sqrt{ 1-\zeta^{2} } } \Big] \\
 & = e^{ -\zeta \omega_{n}t } \Big[ A_{1} \cos \big(\omega_{n} \sqrt{ 1-\zeta^{2} } \ t\big) + A_{2} \sin \big(\omega_{n} \sqrt{ 1-\zeta^{2} } \ t\big) \Big] \\ 
\end{align}
$$
Definimos a la frecuencia de amortiguamiento $\omega_d$​ como la frecuencia angular de las oscilaciones de un sistema subamortiguado, dada por $\omega_d = \omega_n\sqrt{1-\zeta^2}$​, y resulta menor que la frecuencia natural no amortiguada debido al efecto del amortiguamiento.

Y la solución toma la forma:
$$
\begin{align}
x(t)  & = e^{ -\zeta \omega_{n}t } \Big[ A_{1} \cos \big(\omega_{d} \ t\big) + A_{2} \sin \big(\omega_{d} \ t\big) \Big] \\
 \\
\dot{x}(t)  & = -\zeta \omega e^{ -\zeta \omega_{n}t } \Big[ A_{1} \cos \big(\omega_{d} \ t\big) + A_{2} \sin \big(\omega_{d} \ t\big) \Big] \\
 & + e^{ -\zeta \omega_{n}t } \Big[ -\omega_{d}A_{1} \sin \big(\omega_{d} \ t\big) + \omega_{d} A_{2} \cos \big(\omega_{d} \ t\big) \Big]
\end{align}
$$
Con las condiciones iniciales, los valores de $A_{1}, A_{2}$ quedan como:
$$
\left\{ \begin{align}
A_{1} &  = x_{0} \\
A_{2} &  = \frac{\dot{x}_{0} + \zeta\omega_{n} x_{0}}{\omega_{d}}
\end{align} \right.
$$
Lo que nos deja las expresiones:

$$
x(t) = e^{ -\zeta \omega_{n}t } \Big[ x_{0} \cos \big(\omega_{d} \ t\big) + \frac{\dot{x}_{0} + \zeta\omega_{n} x_{0}}{\omega_{d}} \sin \big(\omega_{d} \ t\big) \Big]
$$

que también se pueden expresar en los términos con ($\mathbb{X}, \phi$) que se calculan como:
$$
\left\{ \begin{align}
\mathbf{X}_{0} &  = \frac{\sqrt{ x_{0}^{2} + x_{0}^{2}\omega_{n}^{2}+2x_{0}\dot{x}_{0}\zeta \omega_{n}}}{\omega_{d}} \\
 \\
\phi_{0} &  = \tan ^{-1} \left( \frac{\dot{x}_{0} + \zeta \omega_{n} x_{0}}{x_{0} \omega_{d}} \right)
\end{align} \right.
$$
Lo que nos deja:
$$
x(t) = \mathbf{X}_{0} e^{ -\zeta \omega_{n}t } \cos \Big( \omega_{d}t - \phi_{0} \Big)
$$
![[Pasted image 20251211203442.png]]

Vemos que la relación:
$$
\omega_{d} = \omega_{n} \sqrt{ 1-\zeta^{2} } \implies \frac{\omega_{d}}{\omega_{n}} = \sqrt{ 1-\zeta^{2} }
$$
nos permite graficar:

![[Pasted image 20251211203847.png]]

Esto implica que para valores pequeños de $\zeta$ se tiene que practicamente $\omega_{d}\approx \omega_{n}$

### Sistema con Sobreamortiguamiento

El sistema se categoriza como sobreamortiguado cuando el coeficiente de amortiguamiento del sistema es mayor que el amortiguamiento crítico $c > c_{c}$, que es lo mismo que decir que la relación de amortiguamiento crítico es mayor a la unidad $\zeta > 1$.

En dicho caso, los valores de $s$ que permiten obtener la solución valen:
$$
\begin{align}
s_{1} & = \Big(-\zeta + \sqrt{ \zeta^{2}-1 } \Big) \omega_{n} < 0 \\
s_{2} & = \Big(-\zeta - \sqrt{ \zeta^{2}-1 } \Big) \omega_{n} < 0
\end{align}
$$
donde podemos ver que estos valores son __reales negativos__.

Se tiene que:
$$
\begin{align}
-\zeta<0 \\
\sqrt{ \zeta^{2}-2 }<\zeta
\end{align}
$$
por lo que:
$$
\begin{align}
-\zeta-\sqrt{ \zeta^{2} - 1} < -\zeta+\sqrt{ \zeta^{2} - 1}  & < 0 \\
s_{2} < s_{1}  & <0
\end{align}
$$

Reemplazando en la solución y operando:

$$
x(t) = C_{1}e^{ \Big(-\zeta + \sqrt{ \zeta^{2}-1 } \Big) \omega_{n}t }  + C_{2}e^{ \Big(-\zeta - \sqrt{ \zeta^{2}-1 } \Big) \omega_{n}t } 
$$
donde los coeficientes $C_{1},C_{2}$ tienen los valores:
$$
\left\{ \begin{align}
C_{1} &  = \frac{x_{0}\omega_{n}\Big(\zeta + \sqrt{ \zeta^{2}-1 } \Big) + \dot{x}_{0} }{2 \omega_{d}}  \\
 \\
C_{2} &  = \frac{-x_{0}\omega_{n}\Big(-\zeta - \sqrt{ \zeta^{2}-1 } \Big) - \dot{x}_{0} }{2 \omega_{d}}
\end{align} \right.
$$

El curso no contempla este tipo de soluciones, debido a que no contienen "vibraciones" per se.
### Comparación de los diferentes modelos.

![[Pasted image 20251211204921.png]]
![[Pasted image 20251211204939.png]]


## Decremento Logarítmico

El decremento logarítmico representa la velocidad en la cual la amplitud del movimiento en vibraciones libres subamortiguadas decrece. Se al decremento logarítmico como _el logaritmo natural de la relación entre dos amplitudes sucesivas_.

Si $X_{1}$ y $X_{2}$ son dos amplitudes consecutivas en los instantes $t_{1}, t_{2}$ que difieren en un periodo $\tau_{d}= \frac{2\pi}{\omega_{d}}$ se tiene:

$$
\frac{X_{1}}{X_{2}} = \frac{\mathbf{X}_{0} e^{ -\zeta \omega_{n}t_{1} } \cos \Big( \omega_{d}t_{1} - \phi \Big)}{\mathbf{X}_{0} e^{ -\zeta \omega_{n}t_{2} } \cos \Big( \omega_{d}t_{2} - \phi \Big)}
$$
Debido a la naturaleza periódica de la respuesta, y al hecho de que elegimos los tiempos de manera acorde, tenemos que:
$$
\cos(\omega_{d}t_{2}-\phi) = \cos(2\pi + \omega_{d}t_{1}-\phi) = \cos(\omega_{d}t_{1}-\phi)
$$
Lo que nos deja con:
$$
\frac{X_{1}}{X_{2}} = \frac{e^{ -\zeta \omega_{n}t_{1} }}{e^{ -\zeta \omega_{n}(t_{1}+\tau_{d}) }} = e^{ \zeta \omega_{n} \tau_{d} }
$$
El decremento logarítmico será:
$$
\delta = \ln \frac{X_{1}}{X_{2}} = \zeta \omega_{n}\tau_{d} = \zeta \omega_{n} \frac{2\pi}{\omega_{n}\sqrt{ 1-\zeta^{2} }} = \frac{2\pi \zeta}{\sqrt{ 1-\zeta_{2} }} = \frac{\pi c}{m \omega_{d}}
$$
A partir de $\delta = \frac{2\pi \zeta}{\sqrt{ 1-\zeta_{2} }}$ podemos determinar la relación de amortiguamiento crítico a partir de:
$$
\zeta=\frac{\delta}{\sqrt{ (2\pi)^{2} + \delta^{2}}}
$$
Esta ecuación permite determinar experimentalmente la relación de amortiguamiento crítico de un sistema a partir de la medición de dos desplazamientos consecutivos $X_{1}, X_{2}$.

Además, la relación de amortiguamiento crítico puede ser determinada a partir de la medición de dos desplazamientos separados un número completo de cilcios. Si se tiene $X_{1}, X_{1+m}$ correspondientes a los tiempos $t_{1}, t_{1+m}$ donde $t_{1+m} = t_{1} + m\tau_{d}$ siendo $m$ un número entero, entonces:
$$
\begin{align}
\frac{X_{1}}{X_{1+m}}  & = \frac{X_{1}}{X_{2}} \frac{X_{2}}{X_{3}} \dots \frac{X_{m}}{X_{m+1}} \\
 \\
 & = e^{ \zeta \omega_{n}\tau_{d} } \times e^{ \zeta \omega_{n}\tau_{d} } \times \dots \times e^{ \zeta \omega_{n}\tau_{d} } = e^{m \  \zeta \omega_{n}\tau_{d} }
\end{align}
$$
Lo que permite calcular al decrecimiento logarítmico como:
$$
\delta = \frac{1}{m} \ln \left( \frac{X_{1}}{X_{m+1}} \right)
$$

## Naturaleza de los coeficientes de Amortiguamiento
### Energía Disipada por un Amortiguador Viscoso

Sabiendo que la fuerza de un amortiguador viscoso es:
$$
F_{d} = -c \dot{x} (t)
$$
Siendo:
$$
\begin{flalign*}
& % 1. Este ampersand ancla todo a la izquierda
\begin{array}{ll}
\qquad c & \text{coeficiente de amortiguamiento} \\
\qquad \dot{x} & \text{velocidad relativa entre extremos}
\end{array}
&& % 2. Estos dos ampersands empujan el resto a la derecha
\end{flalign*}
$$

Para un resorte amortiguador en paralelo, la curva $\text{fuerza-desplazamiento}$ es:
![[Pictures/Unidad 3/Imagen 1.png]]
La energía disipada en un ciclo será entonces:
$$
W_{1-2}=\int_{0}^{T} F_{c} \cdot \dot{x} \; dt
$$
Donde:  
$$
\begin{flalign*}
& % 1. Este ampersand ancla todo a la izquierda
\begin{array}{ll}
\qquad W_{1-2} & \text{ : Energía disipada en un ciclo} \\
\qquad \dot{x} & \text{ : velocidad relativa entre extremos} \\
\qquad F_{c} & \text{ : Fuerza de amortiguación} \\
\qquad T & \text{ : Periodo del ciclo}
\end{array}
&& % 2. Estos dos ampersands empujan el resto a la derecha
\end{flalign*}
$$

Reemplazando $F_{c} = c \dot{x}(t)$ e integrando, llegamos a:
$$
\begin{align}
W_{1-2} & = \int_{0}^{T} (c \dot{x}(t)) \dot{x}(t)dt \\
 & =  \int_{0}^{T} c \, \dot{x}^{2}(t) dt \\
 & =  \int_{0}^{T} c [\omega X \cos(\omega t -\phi)]^{2} dt \\
 & =  \int_{0}^{T} c \omega^{2} X^{2} \cos ^{2}(\omega t-\phi)   dt \\
 & =  \int_{0}^{2\pi} c \omega^{2} X^{2} \cos ^{2}(\omega t-\phi)  \frac{d\theta}{\omega} \\
 & = c\omega X^{2} \int_{0}^{2\pi} \cos ^{2}(\theta)  d\theta \\
 & = \pi c \omega X^{2}
\end{align}
$$
Se realizó el cambio de variables $\theta=\omega t\implies dt=\frac{d\theta}{\omega}$ y de cotas de integración $[0,T] \implies [0, 2\pi]$.

### Energía Disipada por un Amortiguador con Fricción Seca (Coulomb)
Sabiendo que la fuerza en un disipador de fricción es:
$$
f_{r} = \mu N=\mu W=\mu mg
$$
Podríamos decir que la fuerza de fricción en un resorte se podría definir como:
$$
f_{r} =
\left\{
\begin{array}{lrl} 
\mu N  & , \quad \dot{x}<0 & \text{(lado dereho)}\\
-\mu N  & , \quad \dot{x}>0  & \text{(lado izquierdo)}\\
0 & , \quad \dot{x}=0  & \text{(extremos)}\\
\end{array}
\right.
$$
Gráficamente:

A partir de esto, puedo formar 3 Ecuaciones diferenciales
$$
\begin{align}
-kx + \mu N &= m\ddot{x} \tag {I} \\
-kx - \mu N &= m\ddot{x}  \tag {II}\\
-kx + \cancel{ \mu N } &= m\ddot{x} \tag {III}
\end{align}
$$
Sabiendo que $\mu N$ es una **constante**, nosotros podemos encontrar las soluciones de las 3 ecuaciones diferenciales.

###### Velocidad < 0
$$
\begin{align}
x_{\text{general}} &= x_{\text{homogenea}} + x_{\text{particular}} \\
x_{\text{homogenea}} &= A_{1}\cos(\omega t) + B_{1} \sin(\omega t) \\
x_{\text{particular}} &= \frac{\mu mg}{k}
\end{align}
$$
De las condiciones iniciales $x(0)=x_{0}$ y $\dot{x}(0)=0$, despejo:
$$
\begin{align}
A_{1} &= x_{0}-\frac{\mu mg}{k} \\
B_{1} &= 0
\end{align}
$$
Finalmente llegamos a:
$$
\begin{align}
x_{I}(t) &= \left( x_{0}-\frac{\mu mg}{k} \right) \cos(\omega t) + \frac{\mu mg}{k}  \tag I\\
\dot{x}_{I}(t) &= -\omega\left( x_{0}-\frac{\mu mg}{k} \right) \sin(\omega t) 
\end{align}
$$
Nos interesa saber que valores tiene $x$ y su derivada para un valor $t_{1}\neq 0$ para el cual la velocidad es nula. Es decir:
$$
\begin{align}
\dot{x}_{I} &= 0 \implies \omega t_{1} =\pi \\
x_{I}(t_{1}) &= x_{0}-2 \frac{\mu mg}{k} 
\end{align}
$$
Esta será la condición inicial para nuestra siguiente Ecuación diferencial.

###### Velocidad > 0
Nuevamente tenemos:
$$
\begin{align}
x_{\text{homogenea}} &= A_{1}\cos(\omega t) + B_{1} \sin(\omega t) \\
x_{\text{particular}} &= -\frac{\mu mg}{k}  \\ \\

x_{\text{general}} &= x_{\text{homogenea}} + x_{\text{particular}} \\ \\
 &= A_{2}\cos(\omega t) + B_{2} \sin(\omega t) - \frac{\mu mg}{k} \\
\end{align}
$$

De las condiciones iniciales $x(0)=x_{0}-2 \frac{\mu mg}{k}$ y $\dot{x}(0)=0$, despejo:
$$
\begin{align}
A_{2} &= x_{0}-3\frac{\mu mg}{k} \\
B_{1} &= 0
\end{align}
$$
Finalmente, llego a la solución:
$$
\begin{align}
x_{II}(t) &= \left( x_{0} - 3\frac{\mu mg}{k} \right) \cos(\omega t) + \frac{\mu mg}{k}  \tag {II}\\
\dot{x}_{II}(t) &= -\omega\left( x_{0} - 3\frac{\mu mg}{k} \right) \sin(\omega t) 
\end{align}
$$
Si yo busco un nuevo valor de tiempo $t_{2}>t_{1}$ y evaluó mi ecuación, llego a:
$$
\begin{align} 
\dot{x}_{II}(t_{2}) &= 0 \implies \omega t_{2} = 2\pi \\

x_{II}(t_{2}) &= x_{0} - 4\frac{\mu mg}{k} \\
\end{align}
$$
###### Conclusión
Vemos que se empiezan a resolver las ecuaciones $(I)$ y $(II)$ sucesivamente, donde los "valores iniciales" van cambiando cada vez que pasa una cantidad de tiempo $t=\frac{1}{2}T$.

Este amortiguamiento seguirá decreciendo de **manera lineal** hasta que la fuerza de fricción supere a la fuerza elástica, en dicho momento, el cuerpo cesará su movimiento y entrará en reposo. Es decir:

![[Coulomb2.png]]


El trabajo generado por este amortiguador será:
$$
W_{f} = 4\mu mgX
$$
Si busco encontrar un equivalente de un friccional con un viscoso será:
$$
\begin{align}
W_{\text{coulomb}} &=  4\mu mg X = \pi c_{eq} \omega X^{2} = W_{\text{viscoso}}\\ \\

c_{eq} &= \frac{4\mu mg}{\pi\omega X} & &
\end{align}
$$
Esto quiere decir que al variar la frecuencia de mi sistema viscoso, debo corregir mi coeficiente de amortiguamiento $c_{eq}$.


### Energía Disipada por un Amortiguador Histerético

**La energía disipada del amortiguador histerético no cambia con la frecuencia de la carga**. No confundir amplitud con frecuencia.

La energía disipada por este tipo de amartiguadores es:
$$
W_{1-2} = k\pi h X^{2}
$$
donde:
$$
\begin{flalign*}
& % 1. Este ampersand ancla todo a la izquierda
\begin{array}{ll}
\qquad h & \text{ : coeficiente de amortiguamiento histerético} \\
\qquad X^{2} & \text{ : cuadrado de la amplitud de la respuesta} \\
\qquad k & \text{ : rigidez del sistema} \\
\end{array}
&& % 2. Estos dos ampersands empujan el resto a la derecha
\end{flalign*}
$$

El coeficiente de amortiguamiento histerético se calcula como:
$$
h = \frac{c\omega}{k} = 2\zeta \beta
$$

![[Pasted image 20251217211138.png]]