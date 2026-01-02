# Sistemas de 1 Grado de Libertad

Para encontrar la solución del modelo matemático de la vibración de un sistema, tenemos 3 herramientas. Puntualmente, en un sistema de 1 grado de libertad, podemos encontrar la solución mediante el uso de:

## 1. Principio de D'alambert
El principio de D'alembert es también llamada "Ecuación de Equilibrio **Dinámico**". Acá definimos una "Fuerza Efectiva" o "Fuerza Inercial" la cual tiene valor: 
$$ \vec{F}_{eff} = -m\vec{a}$$
Entonces, al plantear la segunda ley de Newton, obtenemos: 
$$ 
\begin{aligned}
\sum{\vec{F}} &=m \vec{a} \\
\sum{\vec{F}} - m \vec{a} &= 0 \\
\sum{\vec{F}} + \vec{F}_{eff} &= 0
\end{aligned}
$$
Esta última expresión es la previamente mencionada "Ecuación de Equilibrio **Dinámico**". Cabe aclarar que este principio también aplica para las ecuaciones de **pares de fuerzas**.

###### Ejemplo
![[Unidad 2 Img 1.png]]

Analizando todas las fuerzas del sistema en estado **estático**: 
$$
\begin{aligned}
	P_1 &= - kx_1 = -k(a\theta_0) \\
	P_2 &= - kx_2 = -k(b\theta_0) \\
	W &= mg
\end{aligned} $$
En el equilibrio, tomando como positivo el sentido anti horario: 
$$
\circlearrowleft^{+} \sum M_0 = +aP_1-cW+bP_2 = 0 
$$
Si aplicamos una rotación $\theta$ al sistema, obtendríamos la nueva ecuación: 
$$
\circlearrowleft^{+} \sum M_0 = +(P_1 + ka\theta)a - cW+(P_2 + kb\theta)b=J \ddot{\theta}
$$
Podemos despejar:
$$
\circlearrowleft^{+} \sum M_0 = [+P_1a - cW + P_2 b] + [-ka^2\theta - kb^2\theta] =J \ddot{\theta}
$$
Donde el primer corchete es nulo, debido a la ecuación de equilibrio estático, donde finalmente llegamos a la ecuación:
$$
\sum M_0 = -k(a^2+b^2)\theta = J \ddot{\theta}
$$
Despejando usando D'alambert, llegamos a:
$$
\ddot{\theta}+\frac{k(a^2+b^2)}{J}\cdot\theta = 0
$$


## 2. Principio de los Desplazamientos (Trabajos) Virtuales

Se establece que "_si un sistema dinámico que está en equilibrio bajo la acción de un conjunto de fuerzas, se somete a un desplazamiento virtual, entonces el trabajo virtual total realizado por las todas las fuerzas, incluyendo la fuerza de inercia, es igual a cero_". Es decir, el **Trabajo Virtual es nulo**. 

Definimos como *Desplazamiento Virtual* al desplazamiento infinitesimal, arbitrario e imaginario aplicado instantáneamente, el cual debe ser un desplazamiento físicamente posible que sea compatible con las condiciones de borde del sistema.

Definimos como *Trabajo Virtual* al trabajo realizado por todas las fuerzas del sistema en un desplazamiento virtual.

##### Ejemplo

![[Unidad 2 Img 2.png]]
Primero, buscamos todas las fuerzas del sistema, en orden: Fuerza Inercial, Fuerza Elástica, Fuerza Disipativa y Fuerza Externa: 
$$
\begin{aligned}
M_{\text{inercial}} &= -\frac{ml^2}{3} \ddot{\theta} \\
F_{\text{elástica}} &= -k \frac{l}{2}\theta \\
F_{\text{disipativa}} &= - cl\dot{\theta} \\
F_{\text{externa}} &= p_0 f(t)
\end{aligned}
$$
Sabiendo que estamos trabajando con una coordenada generalizada de tipo angular, y aplicando los trabajos virtuales en un desplazamiento virtual $\delta x$ y **sumando los trabajos provocados por los MOMENTOS** sería:

$$\begin{aligned}
\delta W_{\text{inercial}} &= -(\frac{ml^2}{3} \ddot{\theta}) \; \delta \theta \\
\delta W_{\text{elástica}} &= - (k \frac{l}{2}\theta) \frac{l}{2} \; \delta \theta \\
\delta W_{\text{disipativa}} &= - (cl\dot{\theta}) \; l \; \delta \theta \\
\delta W_{\text{externa}} &= \int_0^l{(p_0 f(t) dx) \; x \; \delta \theta} = \frac{l^2}{2} p_0 f(t) \; \delta \theta
\end{aligned}
$$

La suma de todos estos trabajos debería ser cero: 
$$ 
W_{\text{virtual}} = W_{\text{inercial}} + W_{\text{elástica}} + W_{\text{disipativa}} + W_{\text{externa}} = 0
$$
Reemplazando, podemos llegar a: 
$$
[\frac{ml^2}{3} \ddot{\theta} + (k \frac{l}{2}\theta) \frac{l}{2} + (cl\dot{\theta}) \; l] \; \delta \theta = [\frac{l^2}{2} p_0 f(t)] \; \delta \theta
$$
Ahora, podemos "deshacernos" de los desplazamientos virtuales, y ordenando la ecuación llegamos a: 
$$

\frac{ml^2}{3} \ddot{\theta} + c l^2 \; \dot{\theta} + k \frac{l^2}{4}\theta = \frac{l^2}{2} p_0 f(t) \; 
$$
Y finalmente, llegamos a la ecuación que describe el sistema.
## 3. Principio de Hamilton
### Coordenadas Generalizadas

*Las coordenadas generalizadas para un sistema con N grados de libertad se definen aquí como cualquier conjunto de N cantidades independientes que especifiquen completamente la posición de cada  unto dentro del sistema.* 

En otras palabras, el nombre de coordenadas generalizadas se les da a cualquier conjunto de cantidades independientes que completamente especifican el estado de movimiento del sistema. Al ser completamente independientes, las coordenadas generalizadas no deben estar relacionadas de ninguna manera a través de restricciones geométricas impuestas al sistema.

Un ejemplo sería el siguiente sistema:

![[Pasted image 20251118105001.png]]

Si se buscase plantear este sistema utilizando coordenadas $x_{1}$, $x_{2}$, $y_{1}$, $y_{2}$ sería necesario introducir dos ecuaciones de restricciones geométricas:
$$
\begin{align}
x_{1}^{2}+x_{2}^{2}-L_{1}^{2} & =0 \\
(x_{2}-x_{1})^{2}+(y_{2}-y_{1})^{2}-L_{2}^{2} & = 0
\end{align}
$$


### Principio de Variación de Hamilton
El funcional de Hamilton se define como:

$$
\Pi = \int_{t_1}^{t_2}[T(t)-V(t)]dt+\int_{t_1}^{t_2}W_{nc}(t)dt 
$$
En el cual:
	$\text{T(t): Energia Cinética del sistema}$
	$\text{V(t): Energia Potencial del sistema}$
	$W_{nc} \text{(t): Trabajo de fuerzas no conservativas}$

Según el principio de variación de Hamilton: un sistema está en equilibrio dinámico si la variación del funcional de Hamilton es igual a cero. Lo que corresponde a que el funcional de Hamilton conduce a un mínimo.

$$
\delta \Pi = \int_{t_1}^{t_2} \delta[T(t)-V(t)]dt+\int_{t_1}^{t_2} \delta W_{nc}(t)dt = 0
$$

### Ecuaciones de Movimiento de Lagrange
Utilizando las expresiones anteriores, encontramos un sistema de coordenadas generalizadas $q_1$, $q_2$ , ... , $q_n$ en los cuales podemos expresar el sistema. Luego, tenemos en cuenta que se trabajaran con desplazamientos virtuales $\delta q_{k}$.

Vemos que la función Energía Cinética del sistema, Energía Potencial del sistema y Trabajo de Fuerzas No Conservativas son funciones tal que:

$$
\begin{aligned}
T &= T(q_1, q_2,...,q_n,\dot{q_1},\dot{q_2},...,\dot{q_n}, t) \\ \\
V &= V(q_1, q_2,...,q_n) \\ \\
\delta W &= Q_1 \delta q_1 + Q_2 \delta q_2 + ... + Q_n \delta q_n
\end{aligned}
$$
Debido al principio de Hamilton, debemos ver los diferenciales de cada una de estas ecuaciones:
$$
\begin{aligned}
\delta T &= \frac{\partial T}{\partial q_1} \delta q_1+\frac{\partial T}{\partial q_2} \delta q_2+...+\frac{\partial T}{\partial q_n} \delta q_n +\frac{\partial T}{\partial \dot{q_1}} \delta \dot{q_1}+\frac{\partial T}{\partial \dot{q_2}} \delta \dot{q_2}+...+\frac{\partial T}{\partial \dot{q_n}} \delta \dot{q_n}  \\
\\
\delta V &= \frac{\partial V}{\partial q_1} \delta q_1+\frac{\partial V}{\partial q_2} \delta q_2 + ... + \frac{\partial V}{\partial q_n} \delta q_n \\
\\
\delta W &= Q_1 \delta q_1 + Q_2 \delta q_2 + ... + Q_n \delta q_n
\end{aligned}
$$

Aquellos términos con $\delta \dot{q}$ vuelven la expresión más difícil para trabajar, por lo que tratamos de buscar una expresión equivalente. Recordando que se esta trabajando en un intervalo de tiempo $[t_{1}, t_{2}]$, podemos realizar integración por partes para encontrar una expresión más útil:

$$
\int_{t_1}^{t_2}\frac{\partial T}{\partial \dot{q_k}} \delta \dot{q_k} = \Big[ \frac{\partial T}{\partial \dot{q_k}} \delta {q_k} \Big]_{t_1}^{t_2}- \int_{t_1}^{t_2} \frac{d}{dt} \Big( \frac{\partial T}{\partial \dot{q_k}} \Big) \delta {q_k} dt
$$
Como estamos utilizando desplazamientos virtuales, tenemos que $\delta q_k(t_1)=  \delta q_k(t_2)=0$, por lo que la primer expresión es nula. En cambio, los valores intermedios podrían ser **no nulos**, por lo que la integral podría ser no nula. A modo ilustrativo:

![[Pasted image 20251210122023.png|https://www.youtube.com/watch?v=ax5Ne4liG6s]]

Por lo que se puede desarrollar:
$$
\int_{t_1}^{t_2}\frac{\partial T}{\partial \dot{q_k}} \delta \dot{q_k} = - \int_{t_1}^{t_2} \frac{d}{dt} \Big( \frac{\partial T}{\partial \dot{q_k}} \Big) \delta {q_k} dt
$$
Reemplazando esta expresión en el funcional de Hamilton y utilizando notación de subíndices, llegamos a:
$$
\begin{aligned}
\delta \Pi 
&= \int_{t_1}^{t_2} 
\Bigg\{ 
\sum_k  
\Bigg[ 
- \frac{d}{dt} \Big( \frac{\partial T}{\partial \dot q_k} \Big)\delta q_k 
+ \frac{\partial T}{\partial q_k}\,\delta q_k 
- \frac{\partial V}{\partial q_k}\,\delta q_k 
+ Q_k\,\delta q_k 
\Bigg]
\Bigg\}\,dt  = 0
\\[4pt]
&= \int_{t_1}^{t_2} 
\Bigg\{ 
\sum_k  
\Bigg[ 
- \frac{d}{dt} \Big( \frac{\partial T}{\partial \dot q_k} \Big) 
+ \frac{\partial T}{\partial q_k} 
- \frac{\partial V}{\partial q_k} 
+ Q_k 
\Bigg] \delta q_k(t) 
\Bigg\}\,dt  = 0 .
\end{aligned}
$$

Sabemos que los desplazamientos virtuales se anulan en los extremos del intervalo,  
$$
\delta q_k(t_1)=\delta q_k(t_2)=0,  
$$  
pero **en el interior** de $[t_1,t_2]$ las funciones $\delta q_k(t)$ son arbitrarias (siempre suaves) e independientes entre sí.

Por lo tanto, para que $\delta \Pi = 0$ se cumpla **para toda elección** de variaciones admisibles ${\delta q_k(t)}$, el factor que multiplica a cada $\delta q_k(t)$ debe anularse punto a punto en el intervalo. Esto es precisamente el lema fundamental del cálculo de variaciones.

>[!NOTE] Lema Fundamental del Cálculo de Variaciones
>Si $f(t)$ es continua en $[t_{1}, t_{2}]$ y  
>$$\int_{t_{1}}^{t_{2}}f(t)\eta(t)dt=0$$ 
>para **toda** función suave $\eta(t)$ que se anula en $t_{1}, t_{2}$​
>
>entonces $f(t)=0$ para todo $t\in(t_{1}, t_{2})$
>
>Es decir:
>$$\vec{F} \cdot d\vec{x} = 0 \implies \vec{F} = 0 $$



De este modo, para cada desplazamiento virtual $\delta q_k$ se obtiene

$$
- \frac{d}{dt} \Big( \frac{\partial T}{\partial \dot q_k} \Big) 
+ \frac{\partial T}{\partial q_k} 
- \frac{\partial V}{\partial q_k} 
+ Q_k = 0,
$$
$$
\Longrightarrow\quad
\frac{d}{dt} \Big( \frac{\partial T}{\partial \dot q_k} \Big) 
- \frac{\partial T}{\partial q_k} 
+ \frac{\partial V}{\partial q_k} 
= Q_k .
$$

Entonces, para cada coordenada generalizada $q_k$ obtenemos una ecuación diferencial (ecuación de Lagrange) que describe la evolución del sistema.


Adicionalmente, se tiene consideración especial para las fuerzas disipativas, por lo que se utiliza una ecuación especial, llamada *función de disipación de Raylight* la cual es:

$$ Q_{v, q_k}(t) = -\frac{\partial D_{v, q_k}(t)}{\partial q_k(t)} $$
Y obtenemos la pequeña modificación:
$$ \frac{d}{dt} \Big( \frac{\partial T}{\partial \dot{q_k}} \Big) - \frac{\partial T}{\partial q_k} + \frac{\partial V}{\partial{q_k}} +\frac{\partial D_v}{\partial \dot{q_k}} = Q_k$$
Recordando que:
	$T(t) \text{: Energia Cinética del Sistema}$
	$V(t) \text{: Energia Potencial del Sistema}$
	$D_v \text{: Elementos Disipativos del Sistema}$ 
	$Q_k \text{: Fuerzas Externas al Sistema}$


###### Ejemplo
![[Pasted image 20251118123122.png]]

En este ejemplo, se tiene el diagrama de cuerpo libre (el cuál es una parte considerable del problema en si). El primer paso es identificar los cuerpos en movimientos (masas), en este caso: la masa del carro $M$ y el eslabón abierto con vínculo a la caja en $O$ que llamamos masa del eslabón $m$.

La masa $M$ cuenta únicamente con desplazamiento lineal en el eje horizontal, mientras que la masa $m$ realiza movimiento plano general: __tiene tanto rotación como desplazamiento lineal__. Eso es importante tenerlo en cuenta.

Los elementos que guardan energía (potenciales) son: los resortes $k_{1}, k_{2}$ y la masa del eslabón $m$ (que almacena energía potencial).

Finalmente, los elementos disipativos son únicamente los amortiguadores viscosos $c_{1}, c_{2}$.

Con esto armamos:

$$
\begin{align}
T_{M}  & = \frac{1}{2} M \dot{x}^{2} \\
V_{M}  & = \frac{1}{2} k_{1} x^{2} + \frac{1}{2} k_{2} x^{2}\\
D_{M}  & = \frac{1}{2} c_{1} \dot{x}^{2} + \frac{1}{2} c_{2} \dot{x}^{2}
\end{align}
$$
$$
\begin{align}
T_{m}  & = \frac{1}{2} m (\dot{x}_{C}^{2}+ \dot{y}_{C}^{2}) + \frac{1}{2} J_{C} \dot{\theta}^{2}\\
V_{m}  & = \frac{1}{2} mgl (1-\cos \theta) \\
D_{m}  & = 0
\end{align}
$$
El sistema queda:
$$
\begin{align}
T & = \frac{1}{2} M \dot{x}^{2} + \frac{1}{2} m (\dot{x}_{C}^{2}+ \dot{y}_{C}^{2}) + \frac{1}{2} J_{C} \dot{\theta}^{2} \\
V & = \frac{1}{2} k_{1} x^{2} + \frac{1}{2} k_{2} x^{2} + \frac{1}{2} mgl (1-\cos \theta) \\
D & = \frac{1}{2} c_{1} \dot{x}^{2} + \frac{1}{2} c_{2} \dot{x}^{2}
\end{align}
$$
Recoordemos que los reeemplazos son $x_{C}=x+\frac{l}{2}\sin(\theta), \; y_{C}=\frac{l}{2}\cos (\theta)$. Por relaciones trigonométricas:
$$
\begin{align}
\dot{x}_{C}^{2} + \dot{y}_{C}^{2}  & = \left( \frac{d}{dt} \left( x+\frac{l}{2} \sin (\theta) \right)  \right)^{2} +\left( \frac{d}{dt} \frac{l}{2} \cos (\theta)  \right)^{2}  \\
 \\
 & = \frac{l^{2}}{4} \dot{\theta}^{2} (\cos^{2}(\theta) + \sin ^{2}(\theta)) + \dot{x} ^{2} + lx\cos(\theta)\\
 \\
 & = \frac{l^{2}}{4} \dot{\theta}^{2} + \dot{x}^{2} + lx\cos(\theta)
\end{align}
$$
Y llegamos a:

$$
T = \frac{1}{2} (M+m) \dot{x}^{2} + \frac{1}{2} \left( \frac{ml^{2}}{3} \right) \dot{\theta}^{2} + \frac{1}{2} \big(ml \cos(\theta)\big) \dot{x} \dot{\theta}
$$

Reemplazando para cada coordenada generalizada en la expresión:
$$
 \frac{d}{dt} \Big( \frac{\partial T}{\partial \dot{q_k}} \Big) - \frac{\partial T}{\partial q_k} + \frac{\partial V}{\partial{q_k}} +\frac{\partial D_v}{\partial \dot{q_k}} = Q_k
$$
Con esto, llegamos a:
$$
\begin{align}
\big(M+m\big)\ddot{x} + \frac{ml}{2} \Big[\cos(\theta)\ddot{\theta} - \sin(\theta)\dot{\theta}^{2}\Big] + \big(c_{1}+c_{2}\big)\dot{x} + \big(k_{1}+k_{2}\big)\dot{x}  & = F(t)\\
 \\
\frac{ml^{2}}{3}\ddot{\theta} + \frac{ml}{2} \Big[ \cos(\theta)\ddot{x} - \sin(\theta)\dot{\theta}\dot{x} \Big] + \frac{ml}{2} \dot{\theta}\dot{x} \sin (\theta) \frac{mgl}{2} \sin(\theta) & = M(t)
\end{align}
$$

> [!TIP]  __Cálculos auxiliares__
> $$ T = \tfrac12 (M+m)\dot q_1^{\,2} + \frac{mℓ^{2}}{6}\dot q₂ ^{2} + \tfrac12 \big(mℓcos q₂\big)\dot q₁ \dot q₂ $$
> 
> $$ \frac{\partial T}{\partial \dot q_1} = (M+m)\dot q_1 + \tfrac12 m\ell\cos q_2\,\dot q_2 = \frac{m\ell}{2}\cos q_2\,\dot q_2 + (M+m)\dot q_1 $$
> 
> $$ \frac{d}{dt}\!\left(\frac{\partial T}{\partial \dot q_1}\right) = (M+m)\ddot q_1 + \frac{m\ell}{2} \Big[ \cos q_2\,\ddot q_2 - \sin q_2\,\dot q_2^{\,2} \Big] $$
> 
> $$ \frac{\partial T}{\partial \dot q_2} = \frac{m\ell^{2}}{3}\dot q_2 + \frac{m\ell}{2}\cos q_2\,\dot q_1 $$
> 
> $$ \frac{d}{dt}\!\left(\frac{\partial T}{\partial \dot q_2}\right) = \frac{m\ell^{2}}{3}\ddot q_2 + \frac{m\ell}{2}  \Big[ -\sin q_2\,\dot q_1 \dot q_2 + \cos q_2\,\ddot q_1 \Big] $$
> 
> $$ \frac{\partial T}{\partial q_2} = -\frac{m\ell}{2}\,\dot q_1 \dot q_2 \,\sin q_2 $$


## Influencia de la Fuerza de Gravedad

Si consideramos un sistema masa–resorte vertical, podemos elegir el **origen de coordenadas** de dos maneras habituales:
1. En la posición en la que el resorte no tiene elongación (longitud natural, fuerza del resorte nula).
2. En la posición de **equilibrio estático**, en la que la fuerza del resorte compensa exactamente el peso de la masa.

Si tomamos el sistema de referencia (1) y medimos la elongación del resorte hacia abajo, al aplicar el equilibrio estático se obtiene la **deflexión estática** $\delta_{st}$:
$$
W = mg = k,\delta_{st}  
\quad\Rightarrow\quad  
\delta_{st} = \frac{mg}{k}.  
$$
Ahora introducimos una nueva coordenada (x), que mide el desplazamiento **respecto de la posición de equilibrio estático**. En ese caso, la elongación total del resorte respecto de su longitud natural es $\delta_{st} + x$, y la fuerza del resorte resulta
$$
F_{\text{resorte}} = -k(\delta_{st} + x),  
$$
donde el signo negativo indica que la fuerza es restauradora.

Tomando como positiva la dirección hacia abajo y aplicando la segunda ley de Newton a la masa:
$$
m\ddot x = -k(\delta_{st} + x) + W
$$
Utilizando la condición de equilibrio estático $k\delta_{st} = W$, la expresión se simplifica a
$$
m\ddot x = -kx  
\quad\Rightarrow\quad  
m\ddot x + kx = 0.  
$$
Es decir, la dinámica de (x) (las oscilaciones alrededor de la posición de equilibrio estático) está gobernada por la misma ecuación que un sistema masa–resorte **horizontal**.

En este sentido se dice que la energía potencial gravitatoria de la masa “no interviene en el análisis dinámico”: su efecto ya ha sido incorporado en la ubicación de la posición de equilibrio $\delta_{st}$. A partir de allí, las variaciones de energía que determinan el movimiento oscilatorio dependen solo de $x$ y del resorte.

>[!TIP] Mínimo de la función potencial en $q=0$
>  ¿Qué significa el término lineal físicamente?
>  Supongamos que tenés una coordenada $q$ y una energía potencial
>  $$V(q) = a q^2 + b q + c$$
>  - El **término cuadrático** $aq^{2}$ está asociado a una “rigidez” (resorte).
>  - El **término lineal** $bq$ representa una **fuerza constante** actuando cuando $q=0$.
>La fuerza generalizada es:
>$$Q = -\frac{\partial V}{\partial q} = -2aq - b$$
>Si en $q=0$ te queda $Q(0) = -b \neq 0$, significa:
> en la configuración $q=0$ hay una fuerza neta distinta de cero; no es equilibrio.
>Así que:
>> **Regla mental:**  
>> Término lineal $\Rightarrow$ hay una fuerza neta no nula en tu “cero” de coordenada.

## Influencia de la Excitación del Soporte

Cuando la base de un sistema del tipo masa-resorte-amortiguador experimenta un movimiento, podemos analizarlo teniendo en cuenta:
1. Movimiento absoluto de la base $y(t)$
2. Movimiento absoluto de la masa $x(t)$

Para los resortes y amortiguamientos la importancia recae en la distancia relativa y la velocidad relativa, es decir: $x-y$ para los resortes y $\dot{x}-\dot{y}$ para los amortiguamientos.

Analizando el sistema con la base en movimiento, vemos:
$$
m \ddot{x} + c (\dot{x}-\dot{y}) + k(x-y) = 0
$$
![[Pasted image 20251211183822.png]]

Con esto, definimos el movimiento relativo $z=x-y$. Haciendo el cambio de coordenadas, nos queda:
$$
m \ddot{z} + c \dot{z} + k z = - m \ddot{y}
$$
Esta expresión es la misma que la ecuación que modela un sistema masa-resorte-amortiguador con base fija. Para ello, denominamos el término de la aceleración de la base como la __fuerza efectiva__ $P_{ef}=-m \ddot{y}$.

Eso nos deja:

- Ecuación del sistema en términos de __movimiento absoluto__

$$
m \ddot{x} + c \dot{x} + k x = c \dot{y} + k y
$$

- Ecuación del sistema en términos de __movimiento relativo__

$$
m \ddot{z} + c \dot{z} + k z = - m \ddot{y}
$$
