<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Procesos de fabricación mecánica

    .row.degrade-intro.justify-content-center.p-4.align-items-center.mb-5
      .col-12.col-md-6(data-aos="fade-right")
        p El proceso de fabricación está orientado, más que todo, a la construcción de la PCB y al montaje de los componentes. Estos procesos van desde la fabricación de la misma, usando diferentes técnicas y métodos, hasta el montaje de sus componentes, usando técnicas automatizadas o manuales.
        p El proceso de fabricación de la placa ha evolucionado, tal como lo expone la siguiente figura.
      .col-md-6.col-12(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/tema2/tema2-01.svg", alt="")

    .row.justify-content-center.px-4.align-items-center.mb-0
      .col-md-10.col-12(data-aos="fade-right")
        .titulo-sexto.color-primario
          p.titulo.pb-0.mb-0 <b>Figura 6.</b> <i>Evolución del proceso de fabricación mecánica</i> 
    .row.tarjeta--azul-custom.justify-content-center.px-4.align-items-center.mb-5
      .col-md-10.col-12(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/tema2/tema2-02.svg", alt="alt")

    p(data-aos="fade-right") El montaje de componentes, por su parte, también se hace de esta última forma, es decir, por posicionamiento en una máquina o de forma manual. A continuación, se sugiere ampliar su conocimiento sobre esta temática. 

    .row.justify-content-around.align-items-center
      .col-12.col-md-10
        .tarjeta.color-acento-contenido.mt-5.p-3.mb-5(data-aos="fade-down")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema2/tema2-03.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Proceso de fabricación de la PCB
                  p.text-small Fortalezca su conocimiento en el proceso de fabricación de una PBC.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="'https://www.youtube.com/watch?v=ljOoGyCso8s'" target="_blank")
                    span Ver video
                    i.fas.fa-video

        .tarjeta.color-primario.mt-3.p-3.mb-5(data-aos="fade-down")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema2/tema2-04.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Montaje de componentes de forma automática
                  p.text-small Comprenda el proceso de fabricación y montaje de placas de circuitos electrónicos.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="'https://www.youtube.com/watch?v=LqaRELYZ1yE'" target="_blank")
                    span Ver video
                    i.fas.fa-video
                
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido.mt-4(data-aos="fade-right")
      h2 2.1 Técnicas de fabricación
    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-md-10(data-aos="fade-down")
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-05.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La técnica más utilizada durante mucho tiempo fue la de hacer el dibujo directamente sobre la placa de baquelita, el cual se puede hacer a mano, utilizando un marcador de tinta indeleble; esta a su vez no permite que el ácido penetre el cobre y solo aquellas zonas donde no hay tinta, son oxidadas y removidas por el ácido.
      .col-12
        p(data-aos="fade-right") Tratándose de un dibujo, se pueden usar todas las técnicas aplicadas a este, tal como se presenta en la siguiente figura.

    .row.justify-content-center.px-4.align-items-center.mb-0
      .col-md-10.col-12(data-aos="fade-down")
        .titulo-sexto.color-primario
          p.titulo.pb-0.mb-0 <b>Figura 7.</b> <i>Técnicas de fabricación</i> 
        figure
          img(src="@/assets/curso/temas/tema2/tema2-06.svg", alt="alt")

    .row.justify-content-around.align-items-center
      .col-12.col-md-10
        .tarjeta.color-acento-contenido.mt-5.p-3.mb-5(data-aos="fade-down")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema2/tema2-07.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Fabricación de circuitos impresos con el método de planchado
                  p.text-small Amplíe su conocimiento en la técnica de transferencia térmica.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="'https://www.youtube.com/watch?v=6_3O5k5Cdrg'" target="_blank")
                    span Ver video
                    i.fas.fa-video

    p(data-aos="fade-left") En términos generales el objetivo final al construir una PCB, es retirar el cobre sobrante, dejando solo las líneas de cobre que servirán de conductores para la electricidad, la técnica más usada en la actualidad por las empresas desarrolladoras de productos electrónicos, es la de fresado por Control Numérico Computarizado (CNC). Una broca o un rayo láser eliminan directamente el cobre sobrante de la placa, esta técnica es más limpia y por lo tanto, menos contaminante. La imagen está contenida en el computador en forma de coordenadas numéricas, de ahí su nombre.
    p(data-aos="fade-left") Se utilizan brocas con diámetros muy pequeños y también un láser muy fino, logrando acabados mejorados con una escala muy pequeña, lo que permite el montaje de componentes diminutos.
    
    .row.justify-content-around.align-items-center.mt-5.mb-0(data-aos="fade-down")
      .col-12.col-md-10
        SlyderC(:datos="datosSlyder")

    .row.justify-content-around.align-items-center
      .col-12.col-md-10
        .tarjeta.color-acento-contenido.mt-3.p-3.mb-5(data-aos="fade-down")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema2/tema2-07.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Procesamiento de superficies 
                  p.text-small Conozca cómo se realiza la fabricación de PCB por fresado.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="'https://www.youtube.com/watch?v=egD9IjGccj4'" target="_blank")
                    span Ver video
                    i.fas.fa-video

    Separador
    #t_2_2.titulo-segundo.color-acento-contenido.mt-4(data-aos="fade-right")
      h2 2.2 Características de fabricación

    .row.justify-content-center.py-4.align-items-center.mb-4
      .col-md-3.col-12(data-aos="fade-left")
        img(src="@/assets/curso/temas/tema2/tema2-13.png")
      .col-md-7.col-12(data-aos="fade-left")
        p Dentro de las características principales en un proceso de fabricación manual está la facilidad y la asequibilidad. Es posible fabricar una PCB desde la casa comprando en el mercado electrónico, solo algunos productos, como lo son: la baquelita, marcador de tinta indeleble y percloruro de hierro.
        p Si se es un buen dibujante, se pueden lograr diseños con un acabado bastante aceptable, haciendo trazos finos en la placa con el marcador y dando una presentación con mucha estética y cumpliendo las normas de trazado.
        p La característica común en estas técnicas de dibujo, es el uso del percloruro de hierro para retirar el cobre sobrante, lo que la hace perjudicial para el medio ambiente, si bien es usada por algunos desarrolladores, debe hacerse bajo reglamentación especial.

    .row.justify-content-center.align-items-center.mb-4
      .col-md-10.col-12(data-aos="fade-left")
        .titulo-sexto.color-primario
          p.titulo.pb-0.mb-0 <b>Figura 8.</b> <i>Fabricación de PCB</i> 
      .col-md-10.col-12(data-aos="fade-right")
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-12.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La principal característica de la técnica del fresado es su acabado fino, es una técnica costosa, por lo que solo es posible encontrarla en empresas dedicadas a la fabricación de PCB, si bien se puede construir una máquina casera, se requiere de una inversión considerable. 
    
    .row.justify-content-around.align-items-center
      .col-12.col-md-10
        .tarjeta.color-acento-contenido.mt-3.p-3.mb-5(data-aos="fade-down")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema2/tema2-14.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Quiero mi CNC
                  p.text-small En el siguiente video se puede apreciar una CNC casera.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="'https://www.youtube.com/watch?v=X4BLydtpllo'" target="_blank")
                    span Ver video
                    i.fas.fa-video

    .row.justify-content-center.py-4.align-items-center
      .col-md-10.col-12(data-aos="fade-right")
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Lo más común es enviar los archivos GERBER a las empresas dedicadas y estas devuelven las tarjetas, ya elaboradas, en la actualidad es posible encontrar varias empresas dedicadas, y ofrecen servicios con costos asequibles.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'PCB final transferida desde una imagen de computador',
        texto: '',
        imagen: require('@/assets/curso/temas/tema2/tema2-08.png'),
      },
      {
        titulo:
          'PCB final por fresado CNC. Estas nuevas técnicas permiten la creación de productos, cada vez más pequeños',
        texto: '',
        imagen: require('@/assets/curso/temas/tema2/tema2-09.png'),
      },
      {
        titulo: 'Placa con componentes muy pequeños integrados',
        texto: '',
        imagen: require('@/assets/curso/temas/tema2/tema2-10.png'),
      },
    ],
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
