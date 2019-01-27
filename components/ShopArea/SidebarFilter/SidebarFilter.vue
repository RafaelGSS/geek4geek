<template>
  <div class="shop-sidebar-wrapper gray-bg-7 mrg-top-md mrg-top-sm">
    <a href="javascript:void(0);" class="filter-b" @click="showUnSidebar">
      <i class="fa fa-bars"></i> Refinar
    </a>
    <div class="items-sidebar" id="items-sidebar">
      <SidebarFilterList :title="'Categorias Semelhantes'">
        <li><a href="#">List1</a></li>
        <li><a href="#">List2</a></li>
        <li><a href="#">List3</a></li>
      </SidebarFilterList>
      <SidebarFilterList :title="'Checkbox'">
        <li><input type="checkbox">List1</li>
        <li><input type="checkbox">List2</li>
        <li><input type="checkbox">List3</li>
      </SidebarFilterList>
      <SidebarFilterButton :title="'Tag'">
        <li><a href="#">Tag1</a></li>
        <li><a href="#">Tag2</a></li>
        <li><a href="#">Tag3</a></li>
      </SidebarFilterButton>
    </div>
  </div>
</template>

<style scoped>

@media (max-width: 1024px) {
  .items-sidebar {
    display: none;
  }  
}

.filter-b {
  font-size: 1.2em;
}

.shop-sidebar-wrapper {
    border: 1px solid #efefef;
    padding: 17px 18px 29px;
}

</style>

<script>
import SidebarFilterList from '~/components/ShopArea/SidebarFilter/SidebarFilterList';
import SidebarFilterButton from '~/components/ShopArea/SidebarFilter/SidebarFilterButton';

export default {
    components: {
        SidebarFilterList, SidebarFilterButton
    },
    methods: {
      showUnSidebar(){
        if($('#items-sidebar').css('display') == 'none'){
          $('#items-sidebar').show(500);
        } else {
          $('#items-sidebar').hide(500);
        }
      }
    }
};
</script>


