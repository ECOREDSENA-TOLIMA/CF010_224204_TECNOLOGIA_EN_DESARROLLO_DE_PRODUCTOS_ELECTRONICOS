<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.degrade-intro.justify-content-center.p-4.align-items-center
      .col-12.col-lg-7(data-aos="fade-right")
        p En todo diseño de productos electrónicos es necesario pasar por el proceso de prototipado, el cual permite probar funcionalidad, hacer ajustes, cambiar parámetros, incluso adicionar funciones nuevas a medida que surgen ideas. 
        p.text-color-primario El prototipo no pasa a ser el producto final, es necesario aplicar todos los procedimientos técnicos, ya que la idea de este, es demostrar que es completamente funcional y construirlo en serie, no generaría un gasto innecesario.
        p Aunque no es necesario tener todo el montaje requerido para una producción en serie, si es muy importante tener en cuenta que, una vez se tenga implementado el prototipo funcional y se implementen estos procedimientos de producción en serie, no se generen cambios en parámetros importantes del producto. 
        p Es necesario contar con la mayoría de las herramientas para generar el prototipo. En la siguiente figura se presentan las principales.
      .col-lg-5.col-12(data-aos="fade-left")
        .titulo-sexto.color-primario
          p.titulo.pb-0.mb-0 <b>Figura 1.</b> <i>Diseño electrónico</i> 
        figure
          img(src="@/assets/curso/temas/intro-1.png", alt="alt")

    .row.justify-content-center.align-items-center.tarjeta--azul-custom.mb-0.p-4.pt-5
      .col-md-10.col-12(data-aos="fade-right")
        .titulo-sexto.color-primario
          p.titulo.pb-0.mb-0 <b>Figura 2.</b> <i>Herramientas de prototipado</i> 
      .col-md-8.col-12(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/intro-2.svg')
    .row.justify-content-center.align-items-center.mb-0.p-4.py-2
      .col-12.mt-5(data-aos="fade-right")
        p Conforme se vaya avanzando en este componente se irá profundizando en el procedimiento de prototipado. 



</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
