10# Respuesta a una Carga Genérica

## Análisis Lineal: Integral de Convolución - Duhamel


>[!WARNING]
>La resolución por Integral de Duhamel solo es aplicable a sistemas que cuenten con linealidad geométrica y linealidad de constantes, es decir, sistemas LTI '_Lineal Time Invariant_' (los cuales se estudian mejor en la materia "Automática y Máquinas Eléctricas).
> 
>Esto quiere decir que para grandes deformaciones, solicitudes variables y coeficientes variables, la resolución por integral de Duhamel podría no ser correcta.
>
>$$
>m(t) \ddot{x}(t)+c(t) \dot{x}(t)+k(t)x(t)=P(t)
>$$
>En este tipo de ecuaciones, no sería correcto usar Duhamel.

### Introducción - Impulso Unitario

Una carga aperiódica usualmente tiene una magnitud que varía con el tiempo; a veces, actúa durante un periodo de tiempo finito y decae. La forma más simple de expresar dicha carga es a través de una fuerza impulsiva unitaria.

A partir de la teoría de la dinámica, cuando hablamos de impulso nos referimos a:
$$
\text{Impulso}: \;\; J=F\Delta t=m \dot{x}_{2}-m \dot{x}_{1}
$$
Donde:
$\qquad \Delta t\text{: Duración del Impulso}$
$\qquad \dot{x}_{1}\text{: Velocidad en el instante 1}$
$\qquad \dot{x}_{2}\text{: Velocidad en el instante 2}$

Suponiendo que la fuerza aplicada es aperiódica y variable en el tiempo, designamos la **magnitud de la fuerza** como:
$$
\hat{F}=\int_{t}^{t+\Delta t}F(t)dt
$$
Finalmente, denominamos como **impulso unitario** $\hat{f}$ que actúa en $t=0$ como:
$$
\hat{f}=\lim_{ \Delta t \to 0 }\int_{t}^{t+\Delta t}F(t)dt=1 
$$
En donde a $F(t)$ se la conoce como la función Delta de Dirac $\delta(t)$.

La Delta de Dirac tiene las siguientes propiedades:
$$
\begin{align}
\left\{
\begin{array}{lr} 
\delta(t-\tau) = \infty  & , \quad t=\tau \\
\delta (t-\tau) = 0 & , \quad t \neq \tau
\end{array}
\right. 
\end{align}
$$
$$
\begin{align}
&\int_{0}^{\infty}\delta(t-\tau)dt = 1 \\ \\

&\int_{0}^{\infty}\delta(t-\tau)F(t)dt = F(\tau)
\end{align}
$$
Para un sistema masa-resorte-amortiguador sometido a un impulso unitario en $t=0 \ s$:
![[Pasted image 20250415090642.png]]

En el sistema de la Figura (1), se conoce tanto la ecuación de movimiento del sistema como su solución. Este sistema tiene el mismo comportamiento que una sistema de __VIBRACIONES LIBRES__ que puede o no estar amortiguado (presencia de $\zeta$).

$$
\begin{array}{ll}
m \ddot{x}+c \dot{x}+kx = 0
 \\
x(t) = e^{ -\zeta \omega_{n}t } \left\{ x_{0} \cos(\omega_{d}t) + \frac{\dot{x}_{0}+\zeta \omega_{n}x_{0}}{\omega_{d}} \sin (\omega_{d}t) \right\}
\end{array}
$$
Sabiendo que se le aplica un "impulso unitario", se sabe que la fuerza aplicada tiene una expresión matemática igual a la función Delta de Dirac $\delta(t)$. Por lo tanto, la ecuación de movimiento será:
$$
m \ddot{x}+c \dot{x}+kx = \delta(t)
$$
donde gracias al impulso unitario, se tiene:
$$
\text{Impulso}: \;\; \hat{f} = 1 = m \dot{x}(0)-m \dot{x}(0^{-})
$$
Suponiendo que el sistema parte del reposo se tendrá que $x(0)=0$ y $\dot{x}(0)=0$, pero en un instante posterior se tendrá $\dot{x}(0^{-})=\dot{x}_{0}$. Despejando en la expresión de la solución, la respuesta del sistema será de la forma:
$$ \tag 1
x(t)=\frac{1}{m\omega_{d}}\cdot e^{ -\zeta \omega_{n}t }\cdot \sin(\omega_{d}t)
$$
debido a que $\dot{x}_{0}=\frac{1}{m}$ por la ecuación de impulso unitario.

La ecuación (1) es llamada **función respuesta al impulso unitario** denotada como $g(t)$. Si la magnitud del impulso no es unitario pero de valor $\hat{F}$, entonces la respuesta al sistema será:
$$
x(t)=\frac{\hat{F}}{m\omega_{d}}\cdot e^{ -\zeta \omega_{n}t }\cdot \sin(\omega_{d}t) = \hat{F}\cdot g(t)
$$
Si el impulso $\hat{F}$ se aplica en $t=\tau$, utilizando las propiedades de la función Delta de Dirac nos permite escribir:
$$
x(t) = \hat{F} \cdot \delta(t-\tau) \cdot g(t)
$$
![[Pasted image 20250415092251.png]]

### Respuesta a una Carga Genérica

Si consideramos una carga externa genérica $F(t)$:
![[Pasted image 20250415092753.png]]

Conceptualmente, nosotros podemos admitir a la carga como "una sucesión de impulsos de amplitud variable".

Si admitimos que la fuerza $F(\tau)$ actúa en el instante $t=\tau$ durante un periodo corto de tiempo $\Delta \tau$, entonces el impulso aplicado es de magnitud $\hat{F}=F(t-\tau) \Delta\tau$ y se puede plantear:

$$
\begin{align}
dx(t) & = \hat{F} \;\cdot\; g(t) \\
 & = F(t-\tau)\Delta\tau \cdot g(t)
\end{align}
$$

Por ello, se puede calcular la respuesta total en el dominio del tiempo, y se podría encontrar sumando la respuesta a todos los impulsos elementales actuando en cada uno de los instantes de tiempo $\tau$.

$$
x(t)\simeq \sum F(t-\tau) g(t) \cdot \Delta\tau
$$
Si nosotros aplicamos límites $\Delta \tau \to 0$, podemos llegar a la integral:
$$ \tag 2
x(t) = \int_{0}^{t}F(\tau)g(t-\tau)d\tau
$$
Esta operación matemática es conocida como __convolución__. Reemplazando $g(t)$ se llega a la solución general:
$$ \tag 3
x(t) = \frac{1}{m\omega_{d}}\int_{0}^{t}F(\tau)e^{ -\zeta \omega_{n}(t-\tau) }\sin(\omega_{d}\cdot(t-\tau)) \; d\tau
$$
donde dependiendo del tipo de función $F(\tau)$ de fuerza que se aplica al sistema, será la respuesta del mismo en el dominio del tiempo. Esta es la llamada Integral de Duhamel.

Algunas de las respuestas más usuales son:
$$
\begin{array}{ll}
F(t) = \delta(t)  & \to & x(t)=\frac{1}{m\omega_{d}}\cdot e^{ -\zeta \omega_{n}t }\cdot \sin(\omega_{d}t)\\
F(t) = u_{s}(t) & \to  & x(t) = \frac{1}{k}\left[ 1-e^{ -\zeta \omega_{n}t } \left(  \cos (\omega_{d}t)+\frac{\zeta}{\sqrt{ 1-\zeta^{2} }} \sin(\omega_{d}t) \right) \right]\\
F(t) = A\cos(\bar{\omega}t) & \to &  x(t) = Ae^{ -1\zeta\omega_{n}t }\cos(\omega_{d}t+\phi) +\frac{1}{k}\cdot D \cos(\bar{\omega}t-\theta)\\
\end{array}
$$
Como se puede ver, son los resultados de todas las situaciones previamente estudiadas. Los coeficientes $D$ y $\theta$ son los correspondientes a las unidades $3$ y $4$, mientras que los coeficientes $A$ y $\phi$ dependen de las condiciones iniciales, como visto en la unidad $5$.

### Evaluación Numérica de la Integral de Convolución

#### Sistemas No Amortiguados

Primero, se realiza el estudio para un sistema sin amortiguamiento $\zeta=0$, lo que nos da una respuesta de la forma:
$$\tag 4
x(t) = \frac{1}{m\omega_{n}}\int_{0}^{t}F(\tau)\sin(\omega_{n}\cdot(t-\tau)) \; d\tau
$$
y haciendo uso de identidades trigonométricas, podemos reemplazar la expresión del seno por:
$$
\sin(\omega_{n}(t-\tau)) = \sin(\omega_{n} t) \cos(\omega_{n}\tau)-\cos(\omega_{n}t)\sin(\omega_{n}\tau)
$$
donde se puede ver que las funciones que dependen de $\tau$ son sinusoidales "simples". Reemplazando en $(4)$ llegamos a:
$$
\begin{align}
x(t) & = \sin(\omega_{n}t) \left[ \frac{1}{m \omega_{n}} \int_{0}^{t} F(\tau) \cos(\omega_{n}\tau) d\tau \right] \\
 & - \cos(\omega_{n}t) \left[ \frac{1}{m \omega_{n}} \int_{0}^{t} F(\tau) \sin(\omega_{n}\tau) d\tau \right]
\end{align}
$$
Definimos los coeficientes $A, B$ como:
$$ \tag{5}
\left\{
\begin{align}
A  & = \frac{1}{m \omega_{n}} \int_{0}^{t} F(\tau) \cos(\omega_{n}\tau) d\tau   \\
 \\
B  &  = \frac{1}{m \omega_{n}} \int_{0}^{t} F(\tau) \sin(\omega_{n}\tau) d\tau  
\end{align}
\right.
$$
lo que permite expresar la respuesta del sistema lineal no amortiguado como:
$$
x(t) = A(t) \sin(\omega_{n}t) - B(t) cons(\omega_{n}t)
$$
Para hacer uso de herramientas numéricas, en vez de realizar la integración propiamente dicha de los coeficientes $A,B$ se realiza el método de integración numérica. Para ello, se particiona los integrandos en $N$ intervalos de tiempo separados por $\Delta \tau$. Esto quiere decir que $t_{n}=n\Delta \tau$ y se plantean los "coeficientes":
$$
 \tag{6}
\left\{
\begin{align}
y^{\cos}(\tau) & = F(\tau) \cos(\omega_{n}\tau)   \\
 \\
y^{\sin}(\tau) & = F(\tau) \sin(\omega_{n}\tau)
\end{align}
\right.
$$
donde las funciones evaluadas en $\tau=t_{n}$ quedarían de la forma:
$$
y^{\cos}(t_{n}) = y^{\cos}_{n} = F(t_{n}) \cos(\omega_{n}t_{n}) = F(n\Delta \tau) \cos(\omega_{n} n \Delta \tau)
$$
Los dos métodos de integración numérica vistos en la cátedra son:
1. __Suma simple__
$$
 \tag{Suma Simple}
\begin{align}
A_{n} & = A_{n-1} + \frac{\Delta \tau}{m \omega_{n}} y^{\cos}_{n-1}   \quad , \quad  A_{0}=0 \\
B_{n} & = B_{n-1} + \frac{\Delta \tau}{m \omega_{n}} y^{\sin}_{n-1}     \quad , \quad  B_{0}=0
\end{align}
$$
2. __Regla del trapecio__
$$
 \tag{Regla Trapecio}
\begin{align}
A_{n} & = A_{n-1} + \frac{\Delta \tau}{2m \omega_{n}} [y^{\cos}_{n} + y^{\cos}_{n-1}] \quad , \quad  A_{0}=0  \\
B_{n} & = B_{n-1} + \frac{\Delta \tau}{2m \omega_{n}} [y^{\sin}_{n} + y^{\sin}_{n-1}] \quad , \quad  B_{0}=0
\end{align}
$$

Y la respuesta en cada instante de tiempo $t_{n}=n\Delta \tau$ será:
$$
x(t_{n}) = A_{n} \sin(\omega_{n}t_{n}) - B_{n} \cos(\omega_{n}t_{n})
$$

#### Sistemas Sub Amortiguados

Para el caso de sistemas sub amortiguados, aparece un término de "disipación" y la frecuencia del sistema se convierte en frecuencia amortiguada $\omega_{n}\to \omega_{d}$. Queda entonces:

>[!WARNING]
>Cuidado con los frecuencias que se utilizan. Hay que ser cuidadosos al usar $\omega_{n}$ o $\omega_{d}$.

Coeficientes:
$$
 \tag{7}
\left\{
\begin{align}
y^{\cos}(\tau) & = F(\tau) \cos(\omega_{d}\tau)   \\
 \\
y^{\sin}(\tau) & = F(\tau) \sin(\omega_{d}\tau)
\end{align}
\right.
$$

1. __Suma simple__
$$
 \tag{Suma Simple}
\begin{align}
A_{n} & = e^{ -\zeta \omega_{n} \Delta \tau } \left[ A_{n-1}  + \frac{\Delta \tau}{m \omega_{d}} y^{\cos}_{n-1} \right]   \quad , \quad  A_{0}=0 \\
B_{n} & = e^{ -\zeta \omega_{n} \Delta \tau } \left[ B_{n-1} + \frac{\Delta \tau}{m \omega_{d}} y^{\sin}_{n-1}  \right]    \quad , \quad  B_{0}=0
\end{align}
$$
2. __Regla del trapecio__
$$
 \tag{Regla Trapecio}
\begin{align}
A_{n} & = A_{n-1}e^{ -\zeta \omega_{n} \Delta \tau } + \frac{\Delta \tau}{2m \omega_{d}} [y^{\cos}_{n} + y^{\cos}_{n-1}e^{ -\zeta \omega_{n} \Delta \tau }] \quad , \quad  A_{0}=0  \\
B_{n} & = B_{n-1}e^{ -\zeta \omega_{n} \Delta \tau } + \frac{\Delta \tau}{2m \omega_{d}} [y^{\sin}_{n} + y^{\sin}_{n-1}e^{ -\zeta \omega_{n} \Delta \tau }] \quad , \quad  B_{0}=0
\end{align}
$$

Y la respuesta en cada instante de tiempo $t_{n}=n\Delta \tau$ será:
$$
x(t_{n}) = A_{n} \sin(\omega_{d}t_{n}) - B_{n} \cos(\omega_{d}t_{n})
$$
### Relación entre Función de Respuesta en Frecuencia y Respuesta al Impulso Unitario

Teniendo en cuenta que la respuesta de un sistema de un grado de libertad lineal obtenida a través del dominio del tiempo a un impulso unitario es:
$$
\begin{align}
\hat{f} & = \int_{0}^{t} \delta(t)dt = 1 \\
 \\
x_{p}(t) & = g(t) = \frac{e^{ -\zeta \omega_{n}t }}{m \omega_{d}} \sin(\omega_{d}t)
\end{align}
$$
Por otro lado, la carga transitorio $F(t)$ puede ser expresada a través de su transformada de Fourier como:
$$
\mathbf{F}(\omega) = \int_{-\infty}^{\infty} F(t) e^{ -j\omega t }dt
$$
Se puede determinar la respuesta del sistema lineal de un grado de libertad a través del dominio de la frecuencia, cuya expresión es:
$$
x_{p}(t) = \frac{1}{2\pi} \int_{-\infty}^{\infty} \mathbf{F}(\omega)H(j\omega) e^{ j\omega t }d\omega
$$
siendo esta operación la _transformada inversa de Laplace_ (del dominio de la frecuencia al dominio del tiempo).

En el caso particular donde la función es la Delta de Dirac, se tiene el calculo:
$$
\mathbf{F}(\omega) = \int_{-\infty}^{\infty} \delta(t) e^{ -j\omega t }dt = \int_{-\infty}^{\infty} \delta(t-0) e^{ -j\omega t }dt = e^{0}=1
$$
y la respuesta obtenida a través del dominio de la frecuencia será:
$$
x_{p}(t) = \frac{1}{2\pi} \int_{-\infty}^{\infty} 1 \ H(j\omega) e^{ j\omega t }d\omega
$$
Al ya conocerse la respuesta particular a un impulso unitario, siendo esta la función $g(t)$, la igualdad debe respetar:
$$
g(t) = x_{p}(t) = \frac{1}{2\pi} \int_{-\infty}^{\infty} 1 \ H(j\omega) e^{ j\omega t }d\omega
$$
Esto quiere decir que si $g(t)$ es la transformada inversa de Fourier de $H(j\omega)$ entonces $H(j\omega)$ es la transformada directa de Fourier de $g(t)$:
$$
\mathcal{L}[g(t)] = H(j\omega) \iff \mathcal{L}^{-1}[H(j\omega)] = g(t)
$$
La consecuencia más importante de este resultado es que es posible determinar $H(j\omega)$ a partir de un ensayo de vibraciones libres de un sistema. En efecto, la respuesta a un impulso $g(t)$ es la respuesta del sistema en vibraciones libres la cual es relativamente fácil de determinar, luego, calculando su transformada directa de Fourier, se determina la función de respuesta en frecuencia $H(j\omega)$.


## Análisis No Lineal: Métodos Paso a Paso

Los métodos de análisis no lineal o __métodos paso a paso__ son adecuados para obtener la respuesta dinámica de sistemas __lineales__ y __no lineales__, debido a que dichos métodos _evitan el uso del principio de superposición_.

En estos métodos, tanto la carga como la historia de la respuesta son divididas en una secuencia de intervalos llamados _pasos_. Así, la respuesta en cada paso es un problema independiente.

El comportamiento no lineal del sistema se puede resolver fácilmente al asumir que las propiedades del sistema __permanecen constantes en cada paso__ y __pueden modificarse al pasar de un intervalo de tiempo a otro__.  De esta manera, el análisis no lineal es una secuencia de análisis lineales cuyos parámetros pueden cambiar de un paso a otro.

Los procedimientos usados para determinar la respuesta de sistemas dinámicos de un grado de libertad pueden ser extendidos a sistemas con múltiples grados de liberad al reemplazar entidades escalares por vectores o matrices.

Estos métodos emplean procedimientos numéricos basados en diferenciación e integración numérica para aproximar la solución de las ecuaciones de movimiento en cada paso. Existen una gran cantidad de métodos de integración paso a paso, pero en el curso solo se estudiarán algunos.
$$
\text{Paso 1} \to \text{Iteración} \to \text{Solución 1} \to \text{Paso 2} \to \dots \to \text{Paso }N \to \dots 
$$
Los métodos paso a paso se pueden clasificar en:
- __Explícitos__: son definidos como aquellos en el cual el valor de la respuesta del paso actual se calcula en función solamente de cantidades obtenidas en pasos anteriores. No hacen uso de la "convergencia numérica" o "iteración" en el mismo paso.
- __Implícitos__: son definidos como aquellos cuyo valor de respuesta del paso actual se calcula en función de uno o más valores obtenidos en una iteración previa del mismo paso y en pasos anteriores. Es necesario admitir valores tentativos que serán refinados en iteraciones sucesivas dentro del mismo paso de tiempo.

Para seleccionar un método paso a paso, el factor más importante es la eficiencia, el cual mide el costo computacional requerido para lograr un nivel de precisión deseado sobre el rango de tiempo en el cual la respuesta debe ser determinada.

### Formulación de la Segunda Diferencia Finita Central

La ecuación de movimiento para $t=t_{0}$ esta dada por:
$$
m \ddot{x}_{0} + c \dot{x}_{0} + k x_{0} = p_{0}
$$
donde:  
$\qquad x_{0}$ es el desplazamiento en $t=t_{0}$  
$\qquad \dot{x}_{0}$ es la velocidad en $t=t_{0}$  
$\qquad \ddot{x}_{0}$ es la aceleración en $t=t_{0}$  
$\qquad p_{0}$ es la carga en $t=t_{0}$  

Despejando la aceleración se llega a:
$$
\ddot{x}_{0} = \frac{1}{m} \big[p_{0} - c \dot{x}_{0} - k x_{0} \big]
$$
Para expresar la aceleración, __la velocidad es primero aproximada__ en la mitad del paso de tiempo __antes__ y __después__ del instante $t_{0}$:
$$
\dot{x}_{-1/2} = \frac{x_{0}-x_{-1}}{h} \qquad \dot{x}_{1/2} = \frac{x_{1}-x_{0}}{h}
$$
donde:  
$\qquad h$ denota la duración del paso de tiempo.  

Así como usamos $x_{0}$ para calcular $\dot{x}_{0}$ (algo del estilo $\dot{x}_{n} \propto  (x_{n}-x_{n-1})$) entonces podemos usar la velocidad para calcular una primera aproximación de la aceleración, es decir:
$$
\begin{align}
\ddot{x}_{0} & = \frac{\dot{x}_{1/2} - \dot{x}_{-1/2}}{h} = \frac{1}{h^{2}} (x_{1}-x_{0}) - \frac{1}{h^{2}}(x_{0}-x_{-1}) \\
 \\
\ddot{x}_{0} & = \frac{1}{h^{2}} (x_{1}-2x_{0}+x_{-1})
\end{align}
$$
el problema es que no contamos con el valor $x_{-1}$, por lo cual se calcula a partir de la siguiente expresión:
$$
\dot{x}_{0} = \frac{x_{1}-x_{-1}}{2h} \implies  \boxed{x_{-1} = x_{1} - 2h \dot{x}_{0}}
$$
esta expresión solo es necesaria al inicio del algoritmo, ya que en pasos no se requiere saber el valor de los parámetros de "dos pasos previos".

La velocidad para un instante de tiempo se puede calcular asumiendo que el promedio de las velocidades es igual a la expresión de la diferencia finita central, es decir:
$$
\frac{\dot{x}_{0}+\dot{x}_{1}}{2} = \frac{x_{1}-x_{0}}{h}
$$
Con esto, podemos calcular los sucesivos pasos:
$$
\left\{
\begin{align}
x_{1}  & = x_{0} + h \dot{x}_{0} + \frac{h^{2}}{2m} \big( p_{0} - c \dot{x}_{0} - k x_{0} \big)   \\
\dot{x}_{1}  & = \frac{2(x_{1}-x_{0})}{h} - \dot{x}_{0} \\
\ddot{x}_{1} & = \frac{1}{m} \big[p_{1} - c \dot{x}_{1} - k x_{1} \big]
\end{align}
\right.
$$

El método para la segunda diferencia finita central usa estas 3 ecuaciones para determinar los parámetros en un tiempo $t_{n}$ a partir de los parámetros conocidos en el instante $t_{n-1}$.

De manera genérica:
$$
\left\{
\begin{align}
x_{n+1}  & = x_{n} + h \dot{x}_{n} + \frac{h^{2}}{2m} \big( p_{n} - c \dot{x}_{n} - k x_{n} \big)   \\
\dot{x}_{n+1}  & = \frac{2(x_{n+1}-x_{n})}{h} - \dot{x}_{n} \\
\ddot{x}_{n+1} & = \frac{1}{m} \big[p_{n+1} - c \dot{x}_{n+1} - k x_{n+1} \big]
\end{align}
\right.
$$
El método es muy simple pero el tamaño de paso de tiempo debe cumplir con la siguiente condición para que el método sea estable:
$$
\boxed{\frac{h}{T} \leq \frac{1}{\pi} \approx 0.318}
$$
donde:  
$\qquad T$ es el periodo del sistema dinámico  

### Formulación por Integración

Estos métodos se basan en aplicar la integración numérica en cada paso de tiempo a través de las siguientes ecuaciones que expresan la velocidad y el desplazamiento final del intervalo en términos de valores iniciales de esas cantidades sumada una expresión integral.

El cambio de la velocidad depende de la integral de la historia de la aceleración y el cambio de desplazamiento depende de la correspondiente integral de la historia de la velocidad.
$$
\begin{align}
\dot{x}_{1} &  = \dot{x}_{0} + \int_{0}^{h} \ddot{x}(\tau)d\tau \\
x_{1} & = x_{0} + \int_{0}^{h} \dot{x}(\tau)d\tau
\end{align}
$$
Para llevar a cabo este tipo de análisis es necesario primero asumir la fomra de variación de la aceleración durante el intervalo de tiempo, de manera tal que quede determinada también la variación de la velocidad y el desplazamiento.

#### Método Newmark Beta

En la formulación de Newmark basada en la integración, la velocidad y el desplazamiento se expresan como:
$$
\begin{array}{ll}
\tag 4
\dot{x}_{1}=\dot{x}_{0}+(1-\gamma)h \ddot{x}_{0}+ \gamma h \ddot{x}_{1} \\ 

x_{1} = x_{0}+h \dot{x}_{0}+\left( \frac{1}{2}-\beta \right) h^{2} \ddot{x}_{0}+\beta h^{2} \ddot{x}_{1}
\end{array}
$$
Donde:  
$\qquad\gamma\text{: Factor de peso lineal entre aceleración inicial y final sobre el cambio de velocidad}$  
$\qquad\beta\text{: Factor de peso cuadrático entre aceleración inicial y final sobre el desplazamiento}$  

A partir del estudio de desempeño de esta formulación, uno puede darse cuenta que $\gamma$ controla la cantidad de amortiguamiento artificial introducido por el procedimiento, para que no haya amortiguamiento artificial se debe cumplir $\gamma=\frac{1}{2}$.

Para que el método considere la aceleración promedio constante se utiliza $\beta=\frac{1}{4}$ y para considerarse una variación lineal de la aceleración entre el inicio y el final del intervalo, se utiliza un $\beta=\frac{1}{6}$.

Tomando como valores $\gamma=\frac{1}{2}$ y $\beta=\frac{1}{6}$ (sistema sin amortiguamiento artificial y variación lineal de aceleración) y reemplazando en (4), podemos llegar a:
$$
\begin{array}{ll}

\dot{x}_{1}=\dot{x}_{0}+\frac{h}{2} (\ddot{x}_{0}+ \ddot{x}_{1}) \\ 

x_{1} = x_{0}+h \dot{x}_{0}+ \frac{h^{2}}{3} \ddot{x}_{0}+\frac{h^{2}}{6} \ddot{x}_{1}
\end{array}
$$
Para que el método logre la estabilidad numérica (convergencia) se debe verificar:
$$
\boxed{\frac{h}{T}\leq \frac{\sqrt{ 3 }}{\pi} \approx 0,55}
$$
Donde:
$\qquad T\text{: Periodo del sistema}$
$\qquad h\text{: Paso (o distancia) entre puntos equidistantes}$

![[Pasted image 20250415100826.png|En el gráfico toma $x \equiv v$]]


¿Cómo funciona la recurrencia del método?

1. Los valores iniciales son conocidos. Es decir:  
$\qquad x(t=t_{0})=x_{0}$  
$\qquad\dot{x} (t=t_{0})= \dot{x}_{0}$  
$\qquad\ddot{x}(t=t_{0})=\ddot{x}_{0}$  
2. Se admite un valor arbitrario para $t_{1}$ y tomando $\ddot{x}_{1}=\ddot{x}_{0}$ (se toma la igualdad al valor anterior, ya que no conocemos el valor real) y con las ecuaciones de (4) se aproximan $x_{1}$ y $\dot{x}_{1}$.
3. Se aproxima el valor de $\ddot{x}_{1}$ con la ecuación de movimiento $\ddot{x}_{1}=\frac{1}{m}(p_{1}-c \dot{x}_{1}-kx_{1})$.
4. Se reiteran los pasos 2 y 3 actualizando los valores con los nuevos valores calculados, hasta lograr una tolerancia para dos valores consecutivos de $\ddot{x}_{1}$.
5. Se avanza al próximo paso de tiempo $t_{2}=t_{1}+h$.

Estos pasos se repiten sucesivamente, hasta obtener el valor del desplazamiento, velocidad y aceleración del sistema.

#### Conversión a formulación explícita

El método de Newmark-Beta estándar es implícito, lo que usualmente requiere iteraciones para encontrar el equilibrio en el paso siguiente ($t_{n+1}$).

Esta formulación transforma el problema dinámico en un problema pseudo-estático. Algebraicamente, se despejan las incógnitas futuras ($\ddot{x}_{n+1}, \dot{x}_{n+1}$) en función del desplazamiento futuro ($x_{n+1}$) y se sustituyen en la ecuación de movimiento.

El resultado es una ecuación lineal directa de la forma:

$$\text{Rigidez Efectiva} \cdot \text{Desplazamiento} = \text{Carga Efectiva}$$
$$\tilde{k}_d \cdot x_{n+1} = \tilde{p}_{n+1}$$
##### A. Constantes del Sistema (Rigidez Efectiva)

Se calcula una sola vez si $h$ (paso de tiempo) es constante:

$$\tilde{k}_d = k + \frac{3c}{h} + \frac{6m}{h^2}$$
##### B. Carga Efectiva (Paso a Paso)

En cada instante $t_{n}$, calculamos una carga ficticia que incluye la fuerza externa real $p_{n+1}$ más los términos de inercia y amortiguamiento provenientes del estado anterior ($x_n, \dot{x}_n, \ddot{x}_n$):

$$\tilde{p}_{n+1} = p_{n+1} + m \left( \frac{6 x_n}{h^2} + \frac{6 \dot{x}_n}{h} + 2 \ddot{x}_n \right) + c \left( \frac{3 x_n}{h} + 2 \dot{x}_n + \frac{h}{2} \ddot{x}_n \right)$$

##### C. Resolución del Estado Futuro ($t_{n+1}$)

1. Desplazamiento ($x_{n+1}$): Se resuelve directamente dividiendo la carga efectiva por la rigidez efectiva:   $$x_{n+1} = \frac{\tilde{p}_{n+1}}{\tilde{k}_d}$$
2. Velocidad ($\dot{x}_{n+1}$): Se actualiza usando el nuevo desplazamiento calculado: $$\dot{x}_{n+1} = \frac{3}{h}(x_{n+1} - x_n) - 2\dot{x}_n - \frac{h}{2}\ddot{x}_n$$
3. Aceleración ($\ddot{x}_{n+1}$): Se impone la condición de equilibrio dinámico para minimizar el error: $$\ddot{x}_{n+1} = \frac{1}{m} (p_{n+1} - c \dot{x}_{n+1} - k x_{n+1})$$
### Formulación Incremental para Análisis No Lineal

> El método paso a paso descripto anteriormente es adecuado para sistemas lineales en los cuales las fuerzas resistentes son expresadas en términos de los valores de velocidad y desplazamiento que han sido calculados en la estructura hasta ese instante de tiempo. Para análisis de sistemas no lineales se asume que las propiedades físicas permanecen constantes para pequeños incrementos de tiempo o deformación. A veces es conveniente reformular las respuesta en términos de la ecuación de movimiento incremental

Considerando un sistema masa-resorte-amortiguador, las propiedades del sistema $m,k,c$, la carga $P(t)$, las fuerzas que actuan sobre la masa y las __propiedades no lineales del amortiguador y el resorte__:
![[Pasted image 20251214175325.png|Sistema dinámico no lineal. a) Sistema, b) equilibrio de fuerzas, c) amortiguamiento no lineal, d) rigidez no lineal, e) carga externa]]
denominamos como:  
$\qquad F^{I}\quad$  fuerza inercial del sistema (amortiguador)  
$\qquad F^{D}\quad$ fuerza disipativa del sistema (amortiguador)  
$\qquad F^{R}\quad$ fuerza restitutiva del sistema (resorte)  
$\qquad P\quad$   carga  

La ecuación de equilibrio en el instante $t=t_{0}$ es:
$$
F^{I}_{0} + F^{D}_{0} + F^{R}_{0} = P_{0}
$$
y en el instante $t=t_{1}$ es:
$$
F^{I}_{1} + F^{D}_{1} + F^{R}_{1} = P_{1}
$$
lo que nos permite plantear la siguiente ecuación incremental (con la diferencia de ambas ecuaciones):
$$
\Delta F^{I} + \Delta F^{D} + \Delta F^{R} = \Delta P
$$
de la cual se sabe:
$$
\left\{
\begin{align}
\Delta F^{I} & =  F^{I}_{1} -F^{I}_{0} = m \Delta \ddot{x}\\
\Delta F^{D}  & = F^{D}_{1} -F^{D}_{0} = c_{\mathrm{prom}} \Delta \dot{x} \\
\Delta F^{R}  & = F^{R}_{1} -F^{R}_{0} = k_{\mathrm{prom}} \Delta x \\
\Delta P  & = P_{1}-P_{0}
\end{align}
\right.
$$
En la práctica, para evitar iteración en el cálculo de $c_{\mathrm{prom}}$ y $k_{\mathrm{prom}}$ se utilizan el valor de la pendiente inicial:
$$
c_{\mathrm{prom}} = \left( \frac{dF^{D}}{d\dot{x}} \right)_{t_{0}} \equiv c_{0} \qquad k_{\mathrm{prom}} = \left( \frac{dF^{R}}{dx} \right)_{t_{0}} \equiv k_{0}
$$
A partir de la ecuación de equilibrio (fuerzas) se puede formular una expresión incremental de la ecuación de movimiento:
$$
m \Delta \ddot{x} + c_{0} \Delta \dot{x} + k_{0} \Delta x = \Delta P
$$
Haciendo uso de la _Conversión a formulación explícita_, se puede reformular el problema como:
$$
\tilde{k}_d \cdot \Delta x = \Delta \tilde{P}_{d}
$$
Donde:  
$\qquad \tilde{k}_d = k + \frac{3c}{h} + \frac{6m}{h^2}$  
$\qquad \Delta \tilde{P}_{d} = \Delta P + m \left( \frac{6 }{h}\dot{x}_0 + 3 \ddot{x}_0 \right) + c_{0} \left( 3 \dot{x}_0 + \frac{h}{2} \ddot{x}_n \right)$  

Finalmente, si evaluamos el desplazamiento incremental, el incremento de velocidad puede ser calculado como:
$$
\Delta \dot{x} = \frac{3}{h} - 3 \dot{x}_{0} - \frac{h}{2} \ddot{x}_{0}
$$

>[!SUMARY] Procedimiento
>1. Los valores en el inicio del intervalo $t=t_{0}$ son conocidos:
>
>$\qquad x(t=t_{0})=x_{0}$  
>$\qquad\dot{x} (t=t_{0})= \dot{x}_{0}$  
>$\qquad\ddot{x}(t=t_{0})=\ddot{x}_{0}$  
>
>2. Se calcula la rigidez efectiva $\tilde{k}_{d}$ y el incremento de carga efectiva $\Delta \tilde{P}_{d}$
>$$ \begin{align} \tilde{k}_d & = k + \frac{3c}{h} + \frac{6m}{h^2} \\ \Delta \tilde{P}_{d} & = \Delta P + m \left( \frac{6 }{h}\dot{x}_0 + 3 \ddot{x}_0 \right) + c_{0} \left( 3 \dot{x}_0 + \frac{h}{2} \ddot{x}_n \right) \end{align} $$
>
>3. Se calculan los incrementos en desplazamiento y velocidad mediante:
> $$ \begin{align} \Delta x  & = \frac{\Delta \tilde{P}_{d}}{\tilde{k}_d} \\ \Delta \dot{x}  & = \frac{3}{h} - 3 \dot{x}_{0} - \frac{h}{2} \ddot{x}_{0} \end{align}$$
>
>4. Se calcula el desplazamiento y velocidad del siguiente paso:
>$$ \begin{align} x_{1}  & = x_{0} + \Delta x \\ \dot{x}_{1}  & =  \dot{x}_{0} + \Delta \dot{x} \end{align}$$
>
>5. Finalmente, se calcula la aceleración a partir de la ecuación de movimiento
>$$ \ddot{x}_{1} = \frac{1}{2} ( P_{1} - c_{1} \dot{x}_{1} + k_{1} x_{1} )$$

### Comentarios
El método Newmark es utilizado para determinar la respuesta de sistemas lineales, como también no lineales, ajustando los parámetros $k$ y $c$ en cada paso de tiempo. Es decir, se mantienen constantes dentro del intervalo de tiempo y se ajustan en función de los valores de los parámetros actuales $x$, $\dot{x}$ antes de pasar al intervalo de tiempo siguiente. 

Se dice que el método de integración paso a paso descripto es de aproximación, porque estima la respuesta del sistema en cada paso de tiempo asumiendo que la aceleración varía linealmente y que los parámetros del sistema se mantienen constantes durante todo el intervalo de tiempo. Así, la precisión del procedimiento de integración depende directamente de la longitud del paso, $h$.

Fundamentalmente, hay tres factores que se deben tener en cuenta al seleccionar el tamaño de intervalo de tiempo: 
1. La velocidad de cambio de la carga aplicada
2. El cambio de las propiedades del sistema, $k$ y $c$ en función de $x$, $\dot{x}$ 
3. El periodo de vibración del sistema $T$. 

Usualmente, en la práctica se adopta la siguiente expresión para estimar el tamaño del intervalo de tiempo: 
$$
\boxed{\frac{h}{T}\leq \frac{1}{10} }
$$
