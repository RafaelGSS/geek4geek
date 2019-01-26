<template>
  <div class="shop-sidebar-wrapper gray-bg-7 mrg-top-md mrg-top-sm">
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
</template>

<style scoped>
.shop-sidebar-wrapper {
    border: 1px solid #efefef;
    padding: 17px 18px 29px;
}

.shop-category > ul {
    border-top: 1px solid #ebebeb;
    margin: 18px 0 0;
    padding: 27px 0 0;
}

</style>

<script>
import SidebarFilterList from '~/components/ShopArea/SidebarFilter/SidebarFilterList';
import SidebarFilterButton from '~/components/ShopArea/SidebarFilter/SidebarFilterButton';

export default {
    components: {
        SidebarFilterList, SidebarFilterButton
    }

};
</script>


