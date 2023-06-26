<template lang="pug">
.curso-main-container.pb-3.tema1
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Establecer parámetros del prototipo electrónico
      
    .row.degrade-intro.justify-content-center.p-4.align-items-center.mb-5
      .col-12.col-md-6(data-aos="fade-right")
        p Lo primero que se debe tener claro para iniciar el proceso de prototipado, es precisamente el sentido de este. Un prototipo es un montaje de prueba, eso es lo que indica el nombre: Proto «prueba», Tipo «modelo que reúne los caracteres esenciales de un conjunto y que sirve como pauta para imitarlo, reproducirlo o copiarlo». 
        p Al hacer referencia, entonces, al prototipo de un producto electrónico, se está hablando de un objeto determinado que debe cumplir con todas las especificaciones del producto final, y que al mismo tiempo sirve para corregir errores y hacer ajustes de funcionamiento.
        p #[strong Protoboard, elemento clásico de prototipado.] 
          | Una de las herramientas necesarias para iniciar el proceso de prototipado es la protoboard, la cual permite realizar montajes y pruebas previas sin destruir elementos, antes de llegar al diseño final.
      .col-md-6.col-12(data-aos="fade-left")
        .titulo-sexto.color-primario
          p.titulo.pb-0.mb-0 <b>Figura 3.</b> <i>Protoboard</i> 
        figure
          img(src="@/assets/curso/temas/tema1/tema1-01.svg", alt="alt")

    .row.justify-content-center.py-4.align-items-center
      .col-12(data-aos="fade-right")
        .cajon.color-primario.p-4.mb-4
          .row.justify-content-center.align-items-center
            .col-md-2.col-12.px-lg-5
              img(src="@/assets/curso/temas/tema1/tema1-02.svg", alt="alt")
            .col-md-10.col-12
              p Además de los elementos necesarios para el montaje del producto, como se indicó inicialmente, se necesitarán otras herramientas incluyendo el #[i software] de simulación y modelado, así como también la maquinaria; todo dependerá de las características del producto final.
      .col-12.mt-4(data-aos="fade-right")
        p De ahí la importancia de centrarse en los parámetros generales del producto, es decir aquello que no varía mucho de uno a otro, tal es el caso de los componentes electrónicos (resistores, capacitores, bobinas, circuitos integrados y cables) y la placa de circuito impreso, aunque se solicite la fabricación de esta a una empresa dedicada, las cuales solo se envían los archivos de fabricación, por lo que sus parámetros son establecidos por el desarrollador.

    .row.justify-content-center.p-4.align-items-center.mb-4
      .col-md-10.col-12(data-aos="fade-left")
        .titulo-sexto.color-primario
          p.titulo.pb-0.mb-0 <b>Figura 4.</b> <i>Componentes electrónicos</i> 
      .col-md-10.col-12(data-aos="fade-right")
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-03.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Es fundamental, para el caso de los componentes electrónicos, el poder definir bien estos parámetros, ya que cualquier error, por mínimo que parezca, puede desencadenar en un mal funcionamiento del producto.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-md-10.col-12(data-aos="fade-left")
        p Naturalmente estos procesos han evolucionado al igual que el producto y es el mismo desarrollo a través del tiempo el que ha dado las pautas para ir estableciendo reglas de diseño, todas ellas encaminadas al mejor desempeño, a la menor afectación posible al medio ambiente y a la salud de las personas.
        p Siempre será necesario consultar las normas si se quiere establecer parámetros conforme lo ordenan los estatutos, las normas IPC marcan la pauta para tener éxito en el desarrollo de productos y que estos puedan ser utilizados en cualquier parte del mundo. Las normas más utilizadas para este fin son:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-md-5.col-12.px-4(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/tema1/tema1-04.svg", alt="alt")
      .col-md-5.col-12(data-aos="fade-left")
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 1
            | IPC 2221B: Norma genérica sobre diseño de circuito impreso.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | IPC 2222A: Estándar de diseño seccional para placas orgánicas rígidas.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | IPC 2223D: Estándar de diseño seccional para placas impresas flexibles/rígidas-flexibles.
          li 
            .lista-ol--cuadro__vineta
              span 4
            |	IPC 2224: Estándar para PCB de PC.
          li 
            .lista-ol--cuadro__vineta
              span 5
            |	IPC 2225: Estándar de diseño seccional para módulos orgánicos multi chip (MCM-L) y MCM-L.
          li 
            .lista-ol--cuadro__vineta
              span 6
            |	IPC 2226: Estándar de diseño seccional para placas de interconexión de alta densidad (HDI).

      .col-12.col.md-10.mt-5(data-aos="fade-left")
        p Los parámetros más importantes para tener en cuenta en el proceso de prototipado son los siguientes:
        
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row.justify-content-center.align-items-center(titulo="Reglas de diseño del diagrama esquemático")
        .col-md-3.col-12
          figure
            img(src='@/assets/curso/temas/tema1/tema1-05.png', alt='')
        .col-md-7.mb-4.mb-md-0
          p Las reglas de diseño en sí son varios parámetros que establecen cómo quedará el prototipo al final, es necesario definir cantidad de capas, grosor de pistas en la placa, separación de pistas, colocación de componentes, pad, grilla, desacoples, etc. Aunque muchas de estas reglas se definen en el #[i software] de simulación y modelado, también es necesario establecer algunas reglas externas, tales como tipo de chasis, fijación de conectores y operación de la interfaz.

      .row.justify-content-center.align-items-center(titulo="Tipo de lámina")
        .col-md-3.col-12
          figure
            img(src='@/assets/curso/temas/tema1/tema1-06.svg', alt='')
        .col-md-7.mb-4.mb-md-0
          p La lámina es quizás uno de los componentes más influyentes en el funcionamiento final del prototipo. Es necesario definir bien el tipo de lámina a utilizar, la lámina más común es la de bakelita de una sola capa, pero también se pueden encontrar de fibra de vidrio.
          p En la actualidad, se utilizan mucho, las láminas multicapas, que consisten en un sándwich de placas con cobre conductor en medio. Los componentes suelen ir soldados en la parte superior e inferior, y en las capas intermedias sólo hay pistas conductoras de cobre. En las reglas de diseño, se establecen cuáles serán estas pistas; normalmente son los planos de tierra (GND) y el el positivo de la fuente de poder (Vcc).
      

      .row.justify-content-center.align-items-center(titulo="Archivos de fabricación")
        .col-md-10.col-12.mb-4.mb-md-0
          p Son datos que se le entregan al desarrollador para gestionar aspectos relacionados con el producto electrónico, pueden contener pautas para el modelado, archivos que alimentan las máquinas CNC (Control Numérico Computarizado) para la fabricación de las PCB, máscara de soldadura, tamaño de perforación, etc.
          p A estos archivos también se les conoce como #[i GERBER], los cuales son estándar en la industria electrónica; el más común es llamado #[i Gerber 274x.] 
          div.cajon.color-primario.not-before.p-3 
            p.mb-0 #[i Easy Eda] es un programa gratuito online, visualizador de circuitos impresos mediante el uso de archivos #[i Gerber], puede ser de gran utilidad para tener una idea del diseño final.
        .col-md-10.col-12.text-end
          a.boton.color-acento-contenido.indicador__container(@click="modal1 = true; mostrarIndicador = false")
            span Ver ejemplo
            .indicador--click(v-if="mostrarIndicador")

    Separador
    #t_1_1.titulo-segundo.color-acento-contenido.mt-4(data-aos="fade-right")
      h2 1.1 Materiales
    .row.justify-content-center.align-items-center.mb-4
      .col-12
        p(data-aos="fade-right") Los materiales son un punto importante en el desarrollo del prototipo. De ahí que su elección sea los que más se parezcan a los que se usarán en el producto final; esto incluye hasta el tipo de soldadura y su proceso, pues la forma en la que se realice puede cambiar algunas características del producto. Elaborar una lista con las descripciones de estos componentes y referencias exactas para evitar confusiones es la recomendación principal.
        p(data-aos="fade-right") Dada la gran variedad de elementos electrónicos, los riesgos de intercambio de componentes son altos; referencias similares pero características diferentes, son de los errores más comunes. 
        p(data-aos="fade-right") En la siguiente tabla se presenta una lista de componentes típica, describiendo cada componente.

    .row.justify-content-center.align-items-center.mb-0
      .col-md-10.col-12.titulo-sexto.color-primario.mt-2(data-aos="fade-right")
          p.titulo.pb-0.mb-0 <b>Tabla 1.</b> <i>Listado típico de materiales</i>
      .col-md-10.col-12.px-0(data-aos="fade-left")
        .tabla-a.color-acento-contenido.mb-5
          table
            thead
              tr
                th(style="width:15%") Cantidad
                th(style="width:25%") Referencia
                th Descripción
            tbody
              tr
                td.td-uno-table.text-center 1
                td.td-dos-table.text-center 509-010
                td.td-dos-table Protoboard de dos bloques
              tr
                td.td-dos-table.text-center 10 m
                td.td-dos-table.text-center A22N-100
                td.td-dos-table Cable color negro, calibre 22 AWG, para trabajos en protoboard
              tr
                td.td-dos-table.text-center 10m
                td.td-dos-table.text-center A22R-100
                td.td-dos-table Cable color rojo, calibre 22 AWG, para trabajos en protoboard
              tr
                td.td-dos-table.text-center 2
                td.td-dos-table.text-center BAT-9V
                td.td-dos-table Pila de 9V, cuadrada
              tr
                td.td-dos-table.text-center 4
                td.td-dos-table.text-center LM555
                td.td-dos-table CI Oscilador
              tr
                td.td-dos-table.text-center 20
                td.td-dos-table.text-center RC-10K/1/2
                td.td-dos-table Resistor de carbón 100 KΩ 1/2 watt
              tr
                td.td-dos-table.text-center 10
                td.td-dos-table.text-center RC-1K/1/2
                td.td-dos-table Resistor de carbón 1 KΩ 1/2 watt
              tr
                td.td-dos-table.text-center 10
                td.td-dos-table.text-center RC-4K7/1/2
                td.td-dos-table Resistor de carbón 4 K7Ω 1/2 watt
              tr
                td.td-dos-table.text-center 10
                td.td-dos-table.text-center RC-47K/1/2
                td.td-dos-table Resistor de carbón 4.7 KΩ 1/2 watt
              tr
                td.td-dos-table.text-center 20
                td.td-dos-table.text-center RC-330E/1/2
                td.td-dos-table Resistor de carbón 220 Ω 1/4 watt
              tr
                td.td-dos-table.text-center 5
                td.td-dos-table.text-center 9P5-1L
                td.td-dos-table Fotoresistencia 1M
              tr
                td.td-dos-table.text-center 10
                td.td-dos-table.text-center CC-.1/50V
                td.td-dos-table Capacitor Cerámico 0.22μF (220nF)
              tr
                td.td-dos-table.text-center 5
                td.td-dos-table.text-center CC-.22/50V
                td.td-dos-table Capacitor Cerámico 0.22μF (220nF)
              tr
                td.td-dos-table.text-center 2
                td.td-dos-table.text-center CM-.47/50V
                td.td-dos-table Capacitor Monolitico 0.47μF (470nF)
              tr
                td.td-dos-table.text-center 2
                td.td-dos-table.text-center CE-1/50V
                td.td-dos-table Capacitor Electrolítico 1μF
              tr
                td.td-dos-table.text-center 3
                td.td-dos-table.text-center BOC-250
                td.td-dos-table Bocina 8 Ω 1.5 watts
              tr
                td.td-dos-table.text-center 5
                td.td-dos-table.text-center IRF640N
                td.td-dos-table Mosfet canal N 18A 125W
              tr
                td.td-dos-table.text-center 7
                td.td-dos-table.text-center BC547C
                td.td-dos-table Transistor NPN 50V 0.2A 0.5W 300MHz
              tr
                td.td-dos-table.text-center 7
                td.td-dos-table.text-center BC557C
                td.td-dos-table Transistor PNP 50V 0.2A 0.5W 300MHz
              tr
                td.td-dos-table.text-center 4
                td.td-dos-table.text-center RAS-0510
                td.td-dos-table Relé 1 polo y 2 tiros. 5VDC 10A
              tr
                td.td-dos-table.text-center 10
                td.td-dos-table.text-center 1N4004
                td.td-dos-table Diodo rectificador 1A/400V
              tr
                td.td-dos-table.text-center 5
                td.td-dos-table.text-center 101-5K
                td.td-dos-table Potenciómetro 5KΩ
              tr
                td.td-dos-table.text-center 6
                td.td-dos-table.text-center 101-100k
                td.td-dos-table potenciómetro de 100kΩ
              tr
                td.td-dos-table.text-center 15
                td.td-dos-table.text-center AU-1012
                td.td-dos-table Pulsador de dos terminales
              tr
                td.td-dos-table.text-center 5
                td.td-dos-table.text-center S-116
                td.td-dos-table Switch de dos posiciones
              tr
                td.td-dos-table.text-center 5
                td.td-dos-table.text-center 250-535
                td.td-dos-table Conector Miniplug hembra
              tr
                td.td-dos-table.text-center 2
                td.td-dos-table.text-center SOL60-020
                td.td-dos-table tubo de soldadura
              tr
                td.td-dos-table.text-center 3
                td.td-dos-table.text-center L293NE  
                td.td-dos-table Puente H, para control de Motores
              tr
                td.td-dos-table.text-center 4
                td.td-dos-table.text-center LM386
                td.td-dos-table Amplificador operacional de bajo consumo
              tr
                td.td-dos-table.text-center 2
                td.td-dos-table.text-center HER-110
                td.td-dos-table Pinza de punta
              tr
                td.td-dos-table.text-center 1
                td.td-dos-table.text-center HER-120
                td.td-dos-table Pinza de corte
              tr
                td.td-dos-table.text-center 2
                td.td-dos-table.text-center HER-120
                td.td-dos-table Pinza pela cable
              tr
                td.td-dos-table.text-center 1
                td.td-dos-table.text-center MUL-011 B
                td.td-dos-table Multímetro digital
              tr
                td.td-dos-table.text-center 1
                td.td-dos-table.text-center CAU-140
                td.td-dos-table Cautín de 40 W

    .row.justify-content-center.align-items-center.mt-0.mb-4
      .col-md-8.col-lg-6.col-12
        TarjetaAudio.color-acento-botones.mb-3(
            texto=""
            :audio="require('@/assets/componentes/audios/audio-1.wav')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )

    p(data-aos="fade-right") Siempre será importante remitirse a la hoja de datos del elemento electrónico, las cuales contienen información detallada de cada uno de los elementos.

    .row.justify-content-center.py-4.align-items-center
      .col-md-10.col-12(data-aos="fade-right")
        .cajon.color-primario.p-4.mb-4
          p Existen páginas web dedicadas a suministrar este tipo de información, (https://alldatasheet.com/). Esta información es de libre consulta. También se encuentran algunos libros con este tipo de información, tal es el caso del manual de reemplazos NTE de #[i National Instruments.]
      
    p(data-aos="fade-right") En términos generales es importante tener a la mano la información detallada de cada componente, la recomendación general es remitirse a la web del fabricante y descargar las instrucciones de cada uno y tenerla siempre actualizada. La mayoría de #[i software] de simulación y modelado, incluyen los componentes más comunes, pudiendo también crear librerías con parámetros personalizados o modificar los existentes.
    p(data-aos="fade-right") Los materiales para productos electrónicos son muy diversos, a continuación, realiza una explicación breve de cada uno de ellos. 
    
    br

    TabsB.color-acento-contenido.mb-5
      .py-2.py-md-2(titulo="Componentes más usados" :icono="require('@/assets/curso/temas/tema1/tema1-08.svg')")
        .row.justify-content-center.py-4.align-items-center
          .col-md-8.col-12.mb-4.mb-md-0
            p Los materiales para productos electrónicos son muy diversos. Existen unos que están presentes en casi todos los diseños, tal es el caso de los resistores, capacitores y bobinas, Sin embargo, existen unos de aplicación especial y solo están presentes en aquellos casos donde se requieran, como lo son, sensores y actuadores.
          .col-md-4.col-12
            figure
              img(src='@/assets/curso/temas/tema1/tema1-12.png', alt='')

      .py-2.py-md-2(titulo="Materiales de mayor cambio" :icono="require('@/assets/curso/temas/tema1/tema1-09.svg')")
        .row.justify-content-center.py-4.align-items-center
          .col-md-8.col-12
            p También se encuentran los materiales de un solo uso o aquellos que se gastan y se deben reemplazar. Estos los encontramos en equipos que requieren de mucha manipulación o los materiales que se contagian como los sensores biométricos. 
          .col-md-4.col-12.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/tema1-13.png', alt='')
        
      .py-2.py-md-2(titulo="Materiales transformados" :icono="require('@/assets/curso/temas/tema1/tema1-10.svg')")
        .row.justify-content-center.py-4.align-items-center
          .col-md-8.col-12
            p Estos materiales son transformados y pasan a ser de consumo, tal es el caso de los alambres de soldadura de estaño plomo, que se convierten en la soldadura de los componentes o la misma pasta de soldar y el flux. Este tipo de materiales se debe ir reponiendo a medida que se consume.
          .col-md-4.col-12.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/tema1-14.png', alt='')

      .py-2.py-md-2(titulo="Materiales de protección" :icono="require('@/assets/curso/temas/tema1/tema1-11.svg')")
        .row.justify-content-center.py-4.align-items-center
          .col-md-8.col-12
            p También encontramos los materiales utilizados para protección, tanto de los componentes como de la persona que los manipula. En este tipo de materiales encontramos las manillas antiestáticas, guantes, gafas, protectores de oído.
          .col-md-4.col-12.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/tema1-15.png', alt='')
      
    p(data-aos="fade-right") Ahora bien, un prototipo electrónico es un producto con las mismas características que el diseño funcional, es decir que los materiales utilizados son exactamente iguales, por lo que esta clasificación se hace de la misma manera que la del producto electrónico. La siguiente infografía muestra la clasificación para estos materiales.

    .row.tarjeta--azul-custom.justify-content-center.p-4.align-items-center.mb-5
      .col-md-10.col-12(data-aos="fade-left")
        .titulo-sexto.color-primario
          p.titulo.pb-0.mb-0 <b>Figura 5.</b> <i>Clasificación de los materiales más utilizados en el prototipado electrónico</i> 
      .col-12(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/tema1/tema1-15.svg", alt="alt")

    Separador
    #t_1_1.titulo-segundo.color-acento-contenido.mt-4(data-aos="fade-right")
      h2 1.1 Técnicas de uso
    .row.justify-content-center.align-items-center.mb-4
      .col-12
        p(data-aos="fade-right") En el prototipado del producto electrónico pueden usarse los materiales y elementos de diferentes formas, dependiendo del enfoque del producto. Las tres formas más comúnmente usadas son las siguientes.
        
    TabsA.color-secundario.mb-5
      .tarjeta.tarjeta--azul.p-4(titulo="Simulación")
        .row.justify-content-center.align-items-center
          .col-12.col-md-7
            p La simulación de los componentes electrónicos se hace desde un #[i software] especializado. Esta simulación incluye las características más importantes de los componentes, tal es el caso de su valor, condiciones de funcionamiento, cálculos matemáticos asociados y dependiendo del #[i software], hasta su forma física. También se pueden incluir algunas características de modelado. Algunos de los #[i software] libre más utilizados son: #[i EasyEDA, Circuit Sims, DcAcLab, EveryCircuit, EveryCircuit, DoCircuits, PartSim, Thinkercard Circuits.]
          .col-12.col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/tema1-16.png', alt='')

      .tarjeta.tarjeta--azul.p-4(titulo="Montaje en Protoboard")
        .row.justify-content-center.align-items-center
          .col-12.col-md-7
            p Esta es quizás la técnica más utilizada ya que nos permite tener una idea clara del funcionamiento físico del producto. La principal ventaja de la protoboard es que se pueden intercambiar los componentes una y otra vez, sin que estos sufran mayores daños. La protoboard no es recomendada, cuando se trabaja con altas frecuencias, las placas contenidas en ella, se comportan como capacitores, que pueden alterar el funcionamiento del circuito en prueba.
          .col-12.col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/tema1-17.png', alt='')

      .tarjeta.tarjeta--azul.p-4(titulo="Montaje en PCB")
        .row.justify-content-center.align-items-center
          .col-12.col-md-7
            p Esta técnica consiste en armar los componentes directamente en la placa; no es recomendada hasta que no se tenga un resultado final del producto. Es necesario soldar los componentes, lo que los somete a calor y posibles daños, si existe la necesidad de removerlos una y otra vez.  
            p La gran ventaja de esta técnica es que se tiene una idea más cercana a lo que será el producto final, es recomendable para productos que trabajan con altas frecuencias. La placa final queda tal cual como quedaría en el producto, pero los errores y ajustes de parámetros requieren muchas veces del desmonte de componentes, lo que repercute en daños, a los componentes y a la placa misma.
          .col-12.col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/tema1-18.png', alt='')

    .row.justify-content-center.py-4.align-items-center
      .col-md-10.col-12(data-aos="fade-right")
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Es importante elegir la técnica de prototipado adecuada dependiendo de las características del producto, el no hacerlo puede incurrir en fallas en la funcionalidad del producto final, parámetros fuera de rango, así como también incurrir en gastos innecesarios.
    

    ModalA(:abrir-modal.sync="modal1")
      .row.align-items-center
        .col-12
          figure
            img(src='@/assets/curso/temas/tema1/tema1-07.png', alt='')
        .col-12.mt-3
          p.mb-0 En la imagen se puede apreciar el desarrollo de un  #[i gamepad] en el #[i software] libre. Aquí se visualiza el diseño final solo con cargar los archivos GERBER. Cada aplicación tiene diferentes formas de generar los archivos #[i GERBER], aunque el estándar es uno solo y puede ser leído por cualquier máquina CNC para el fresado.
    

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    mostrarIndicador: true,
    mostrarIndicadorTarjetaAudio: true,
    modal1: false,
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
