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
            <input
              type="checkbox"
              :value="item"
              v-model="filters.material"
              @change="setQueryString"
            >
            {{ item }}
          </template>
        </menu-item-card>
        <menu-item-card :orientation="'horizontal'" :items="this.cardTags">
          <template slot="title">Tags</template>
          <template v-slot:item="{ item }">
            <a
              :id="`tag_${item.tag_name}`"
              @click="onClickTag(item.tag_name, $event)"
            >{{ item.tag_name }}</a>
          </template>
        </menu-item-card>
      </template>
    </menu-dropdown-fixed>
  </div>
</template>

<script>
import MenuDropdownFixed from "@/components/widgets/menu/MenuDropdownFixed";
import MenuItemCard from "@/components/widgets/menu/MenuItemCard";

import urlParams from "@/mixins/urlParams";

export default {
  mixins: [urlParams],
  components: {
    MenuDropdownFixed,
    MenuItemCard
  },
  data: () => ({
    cardCategories: ["Categoria 1", "Categoria 2", "Categoria 3"],
    cardMaterial: ["PVC", "ALGODÃO", "RESINA"],
    cardTags: [
      { tag_name: "Tag1" },
      { tag_name: "Tag2" },
      { tag_name: "Tag3" }
    ],
    filters: {
      tags: [],
      material: []
    }
  }),
  methods: {
    setQueryString() {
      // Add filter to URL and reload it
      this.addQueryStringObject(this.filters);
    },
    onClickTag(item, event) {
      this.toggleTag(item);
      this.setActive(event);
      this.setQueryString();
    },
    toggleTag(value) {
      const tags = [...this.filters.tags];
      const idx = tags.indexOf(value);

      if (idx !== -1) {
        tags.splice(idx, 1);
      } else {
        tags.push(value);
      }
      this.filters.tags = [...tags];
    },
    setActive(event) {
      const { id } = event.currentTarget;
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
