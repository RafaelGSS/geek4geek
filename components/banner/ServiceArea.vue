<template>
  <div class="services-area pt-20 pb-35">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-4" v-for="(service, index) in services" :key="`service-card-${index}`">
          <card-service :title="service.title" :subtitle="service.subtitle" :iconImage="service.icon" :altImage="service.alt" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardService from "@/components/widgets/cards/CardService";

export default {
  components: {
    CardService
  },
  data: () => ({
    services: [
      {
        title: "Suporte Online",
        subtitle: "Suporte 24 Horas por dia",
        icon: "/img/icon-img/service-3.png",
        alt: "Icone suporte online"
      },
      {
        title: "Devolução do Dinheiro",
        subtitle: "30 dias para retorno livre",
        icon: "/img/icon-img/service-2.png",
        alt: "Icone devolução do dinheiro"
      },
      {
        title: "Entrega Grátis",
        subtitle: "Frete grátis nos pedidos para SJC",
        icon: "/img/icon-img/service-1.png",
        alt: "Icone frete grátis"
      }
    ]
  }) 
};
</script>

