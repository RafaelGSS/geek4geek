<template>
  <div class="shop-sidebar-wrapper mrg-top-md mrg-top-sm">
    <menu-dropdown-fixed>
      <template slot="title">Refinar</template>
      <template>
        <menu-item-card :orientation="'vertical'" :items="this.cardCategories">
          <template slot="title">Categorias Semelhantes</template>
          <template v-slot:item="{ item }">
            <a href="#">{{ item }}</a>
          </template>
        </menu-item-card>
        <menu-item-card :orientation="'vertical'" :items="this.cardMaterial">
          <template slot="title">Material</template>
          <template v-slot:item="{ item }">
            <input type="checkbox" @click="addToFilter('Material', item)">{{ item }}
          </template>
        </menu-item-card>
        <menu-item-card :orientation="'horizontal'" :items="this.cardTags">
          <template slot="title">Tags</template>
          <template v-slot:item="{ item }">
              <a :id="`Tag_${item}`" @click="addToFilter('Tag', item); setActive($event);">{{ item }}</a>
          </template>
        </menu-item-card>
      </template>
    </menu-dropdown-fixed>
  </div>
</template>

<script>
// TODO - Terminal filtro:
// Passar mt-20 como parametro para MenuItemCard
// Verificar se vale a pena busFilter aqui
import busFilter from "@/assets/js/eventBus_filter.js";
import MenuDropdownFixed from "@/components/widgets/menu/MenuDropdownFixed";
import MenuItemCard from "@/components/widgets/menu/MenuItemCard";

export default {
  components: {
    MenuDropdownFixed,
    MenuItemCard
  },
  data: () => ({
    cardCategories: ["List1", "List2", "List3"],
    cardMaterial: ["PVC", "MERDA", "RESINA"],
    cardTags: ["Tag1", "Tag2", "Tag3"]
  }),
  methods: {
    addToFilter(pType, pValue) {
      busFilter.$emit("ADD_TO_FILTER", { type: pType, value: pValue });
    },
    setActive(event) {
      const { id }= event.currentTarget;
      document.getElementById(id).classList.toggle("active");
    }
  }
};
</script>

<style scoped>
.shop-sidebar-wrapper {
  border: 1px solid #efefef;
  padding: 10px;
  background-color: #fdfdfd;
}

.active {
  border: 1px solid #3cb371;
  background-color: #3cb371;
  color: #fff !important;
}
</style>
