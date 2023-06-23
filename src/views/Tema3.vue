<template lang="pug">
.curso-main-container.pb-3.tema3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Prototipos electrónicos

    .row.degrade-intro.justify-content-center.p-4.align-items-center.mb-5
      .col-12.col-md-7(data-aos="fade-right")
        p Un prototipo es un diseño funcional de un producto no comercializable, sirve para establecer parámetros, realizar ajustes, idear nuevas funciones y en muchos casos sirve para exhibición y muestra; en este último, es posible que vaya a consumidores finales, pero solo con el objetivo de probar el funcionamiento en condiciones parecidas a lo que hará el producto final.
        p Para elaborar un prototipo electrónico es necesario un diseño preliminar, de acuerdo con unas especificaciones; es posible que se requieran de varios procesos de experimentación, parametrización y validación. El diseño de la parte física se realiza utilizando #[i software] de diseño y modelado. También es posible simular gran parte del funcionamiento del prototipo, lo que permite realizar cálculos de variables y ajustes a las mismas.
        p Aunque es un paso muy importante en el desarrollo de un producto electrónico, construir un prototipo puede resultar en una tarea complicada. Actualmente es posible encontrar módulos prefabricados que facilitan esta tarea, es decir, es posible adquirir en el mercado electrónico un bloque funcional, comercial y validado que se puede integrar a cualquier prototipo que lo requiera. 
      .col-md-5.col-12(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/tema3/tema3-01.svg", alt="")

    .row.justify-content-center.align-items-center.mb-4
      .col-md-10.col-12(data-aos="fade-left")
        .titulo-sexto.color-primario
          p.titulo.pb-0.mb-0 <b>Figura 9.</b> <i>Tarjeta WIFI</i> 
      .col-md-10.col-12(data-aos="fade-right")
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/tema3-02.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Por ejemplo, si se desea transmitir y recibir datos de internet, de forma inalámbrica, es posible incorporar un módulo Wifi (como el que se ve en la imagen), y solo construir la parte de procesado de datos, ya que el módulo viene programado para recibir y entregar datos, utilizando unos estándares internacionales, lo que garantiza la compatibilidad total.
    
    .row.justify-content-center.align-items-center.mb-4
      .col-md-10.col-12(data-aos="fade-left")
        .titulo-sexto.color-primario
          p.titulo.pb-0.mb-0 <b>Figura 10.</b> <i>Módulo Arduino</i> 
      .col-md-10.col-12(data-aos="fade-right")
        .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/tema3-03.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 También es posible encontrar módulos para programar e integrar otros módulos, en este caso el prototipo se hace mucho más fácil; solo se requiere desarrollar el #[i software]. Arduino es un ejemplo de este tipo de plataformas.
    
    .row.justify-content-center.py-4.align-items-center
      .col-md-10.col-12(data-aos="fade-down")
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Utilizar este tipo de plataformas para la concepción inicial del prototipo, es de gran utilidad, pues es una forma práctica de establecer muchos parámetros y de realizar pruebas de funcionamiento; podría decirse que es una simulación, pero ya no en un ambiente virtual, es un ambiente real y completamente funcional. Lamentablemente no todo tipo de prototipado califica para ser preconcebido en este tipo de plataformas.

    p(data-aos="fade-left") En la actualidad, la construcción del prototipo es casi que necesaria, un producto que salga al mercado o entre en funcionamiento directo, si se trata de una planta de producción, está condenado al fracaso. Las principales características que tienen estos prototipos son las siguientes.
    
    .row.justify-content-center.align-items-center.tarjeta--azul-custom.mb-0.p-4.pt-5
      .col-md-10.col-lg-8.col-12(data-aos="fade-down")
        ImagenInfografica.color-acento-contenido
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema3/tema3-04.svg', alt='')

          .tarjeta.color-custom--borde.p-3(x="70%" y="14%" numero="1")
            .h5.mb-2 1. Son funcionales
            p Un prototipo es un producto completamente funcional, hace todo lo que debería hacer el producto final, aunque muchas veces no tenga la forma final del producto.

          .tarjeta.color-custom--borde.p-3(x="89%" y="50%" numero="2")
            .h5.mb-2 2. Vida útil corta
            p Una vez terminadas las pruebas, es posible que salga de circulación, más aún si se construye el producto final. También es posible que se transforme en otro prototipo, para un producto diferente.

          .tarjeta.color-custom--borde.p-3(x="70%" y="85%" numero="3")
            .h5.mb-2 3. Variedad de objetos
            p Al fabricar un prototipo, es probable que inicialmente sea para definir algunos parámetros, pero a medida que se desarrolla, se pueden ir estableciendo nuevos objetivos o cambiando su finalidad; por ejemplo, se puede desarrollar un prototipo para medir variables como: temperatura, humedad, punto de rocío, cantidad de lluvia, y ese mismo prototipo lo puedo utilizar luego, para transmitir esas variables y desarrollar otro que me permita luego  leerlas de forma remota.

          .tarjeta.color-custom--borde.p-3(x="31%" y="85%" numero="4")
            .h5.mb-2 4. Desarrollo rápido
            p Normalmente un prototipo se construye de forma relativamente rápida. Es posible ir integrando módulos prefabricados que permiten realizar funciones en tiempos cortos.

          .tarjeta.color-custom--borde.p-3(x="12%" y="50%" numero="5")
            .h5.mb-2 5. Evolución
            p A medida que se va desarrollando el prototipo va adquiriendo nuevas formas y nuevas funcionalidades. Es posible que un producto tenga, al final, funciones que en la concepción inicial, no fueron tenidas en cuenta.
            
          .tarjeta.color-custom--borde.p-3(x="31%" y="14%" numero="6")
            .h5.mb-2 6. Costo bajo en desarrollo
            p Para desarrollar el prototipo es probable que no se requieran de grandes inversiones, pues muchos de los procesos pueden hacerse con empresas externas y  en los mercados locales ya se consiguen una gran variedad de elementos electrónicos a bajo costo. Tal vez los costos más elevados se dan cuando se va a producir el producto en serie.

    Separador
    #t_3_1.titulo-segundo.color-acento-contenido.mt-4(data-aos="fade-right")
      h2 3.1 Técnicas de modelado

    .row.justify-content-center.align-items-center.mb-4.mt-4
      .col-md-4.col-12(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/tema3/tema3-07.svg", alt="alt")
      .col-md-8.col-12(data-aos="fade-left")
        p El modelado de un prototipo electrónico sigue las mismas reglas de cualquier prototipo, desde el mismo proceso de la preconcepción, hasta la fabricación del producto final. A continuación, se expondrá cada una de ellas.
        LineaTiempoD.color-acento-contenido
          .row.justify-content-center.align-items-center.text-small(numero="1" titulo="Desarrollo del boceto") 
            .col-md-6.col-12
              p En productos electrónicos, lo primero que se desarrolla es el diagrama en bloques de la idea general del proyecto para luego ir desarrollando cada módulo y hacer los respectivos ajustes. A continuación se presenta un diagrama de bloques típicos.
            .col-md-6.col-12
              figure
                img(src="@/assets/curso/temas/tema3/tema3-10.png", alt="alt")
          
          .row.justify-content-center.align-items-center.text-small(numero="2" titulo="Realizar la prueba concepto") 
            .col-md-6.col-12
              p El siguiente paso es desarrollar los diagramas esquemáticos. Si bien estos pueden hacerse a mano, existen infinidad de #[i software] que permiten hacerlos aplicando normas y en la mayoría de los casos simulando algunas funciones, que ayudan en el proceso de desarrollo. Se presenta un diagrama realizado en Proteus.
            .col-md-6.col-12
              figure
                img(src="@/assets/curso/temas/tema3/tema3-09.png", alt="alt")

          p.text-small(numero="3" titulo="Resolver el problema planteado") Este paso se hace antes de armar el  prototipo final, se debe plantear una solución viable. Es aquí donde se dan los intentos fallidos, estos ensayos también,  indican si se va por buen camino en la idea preconcebida.
          
          p.text-small(numero="4" titulo="Pruebas de funcionalidad") En este paso se logra encontrar la versión más eficiente y comercialmente viable.

          .row.justify-content-center.align-items-center.text-small(numero="5" titulo="Armar el prototipo") 
            .col-md-6.col-12
              p En este último momento es donde se requiere más tiempo e inversión y no se pueden hacer cambios profundos en el funcionamiento del producto.
            .col-md-6.col-12
              figure
                img(src="@/assets/curso/temas/tema3/tema3-08.png", alt="alt")

    Separador
    #t_3_2.titulo-segundo.color-acento-contenido.mt-4(data-aos="fade-right")
      h2 3.2 Control numérico computarizado en la fabricación de prototipos electrónicos

    p(data-aos="fade-left") El Control Numérico Computarizado o CNC, es un proceso en el que un #[i software] tiene las instrucciones para guiar una herramienta con un grado de precisión alto. Los movimientos asociados a la herramienta y a la máquina misma son como un GPS en miniatura. El programa tiene coordenadas de posición, tanto de la herramienta como de la máquina, en un espacio que corresponde al elemento a crear. 

    .row.justify-content-center.align-items-center.mb-4.mt-4
      .col-md-10.col-12(data-aos="fade-left")
        .titulo-sexto.color-primario
          p.titulo.pb-0.mb-0 <b>Figura 11.</b> <i>Fabricación de piezas</i> 
      .col-md-10.col-12(data-aos="fade-right")
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/tema3-05.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El uso más común de este sistema, es la fabricación de piezas, pero también es ampliamente utilizado en estampados en alto relieve, letreros, corte de láminas, la creación de PCB en el ámbito electrónico y muchas aplicaciones más.
    
    p(data-aos="fade-left") Esta técnica, aplicada a la electrónica, es un tipo de fresado; una broca o un láser eliminan el material sobrante, es como el arranque de viruta en mecanizado.  Las máquinas que utilizan láser, logran unos acabados muy finos y por lo tanto permiten el montaje de componentes muy pequeños, lo que ayuda con la miniaturización de equipos electrónicos.
    p(data-aos="fade-left") El uso de las técnicas CNC en la electrónica, eliminó el uso de los químicos abrasivos, perjudiciales para la salud de las personas y para el medio ambiente. Existen muchas empresas dedicadas a la fabricación de PCB usando estas técnicas y a costos asequibles. Si la producción del producto electrónico se hace en serie y con buenos resultados económicos, es posible encontrar en el mercado, máquinas a bajo costo y optimizadas para el trabajo en PCB.

    .row.justify-content-center.align-items-center.mb-4.mt-5
      .col-12.col-md-6.col-lg-5(data-aos="fade-down")
        figure
          img(src="@/assets/curso/temas/tema3/tema3-06.png", alt="alt")
      .col-12.col-md-6.col-lg-5(data-aos="fade-down")
        P Muchas de estas máquinas vienen con el kit completo: Fabricación de PCB, colocación de pasta para soldar, ubicación de componentes, hornos de reflujo, inserción de contacto para láminas multicapas; estos kit están pensados para empresas productoras.
        P Un prototipo electrónico puede partir desde algo muy simple y terminar en algo complejo. La misma característica de evolución del prototipo hace que sea difícil predecir con absoluta precisión todos los parámetros asociados a él. Lo primordial aquí es saber dimensionar el alcance de este y avanzar a medida que las mismas condiciones lo permitan.
        
    .row.justify-content-center.py-4.align-items-center
      .col-md-10.col-12(data-aos="fade-right")
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Es importante no desmotivarse por malos resultados en el funcionamiento del prototipo, ese es su sentido, encontrar lo que no es adecuado y quedarse con lo que es funcional, edificar en en esas ideas que pasen la prueba y seguir lo que es evidente.


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
