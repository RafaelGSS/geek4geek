<template>
  <div class="best-selling-area best-selling-area-toy pt-60 best-selling-small">
    <div class="container">
      <div class="top-bar section-border mb-35">
        <div class="section-title-wrapper section-bg-white">
          <h4 class="section-title">Produtos mais vendidos</h4>
        </div>
        <tab-pane>
          <template #title>
            <tab-pane-title :active="true" id="tab-cms">Camisetas</tab-pane-title>
            <tab-pane-title id="tab-cups">Copos</tab-pane-title>
          </template>
          <template #content>
            <tab-pane-content :active="true" id="tab-cms">
              <div class="best-selling-active-2">
                <div class="best-selling-bundle-2">
                  <div class="col-md-12">
                    <div class="row">
                      <div class="col-md-6">
                        <product
                          class="best-selling-pro-wrapper mb-20"
                          :onHover="false"
                          :product="tshirts[0]"
                          :hasRatting="false"
                          orientation="horizontal"
                        />
                      </div>
                      <div class="col-md-6">
                        <product
                          class="best-selling-pro-wrapper mb-20"
                          :hasRatting="false"
                          :onHover="false"
                          :product="tshirts[1]"
                          orientation="horizontal"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </tab-pane-content>
            <tab-pane-content id="tab-cups">
              <div class="best-selling-active-2">
                <div class="best-selling-bundle-2">
                  <div class="col-md-12">
                    <div class="row">
                      <div class="col-md-6">
                        <product
                          class="best-selling-pro-wrapper mb-20"
                          :onHover="false"
                          :product="cups[0]"
                          :hasRatting="false"
                          orientation="horizontal"
                        />
                      </div>
                      <div class="col-md-6">
                        <product
                          class="best-selling-pro-wrapper mb-20"
                          :hasRatting="false"
                          :onHover="false"
                          :product="cups[1]"
                          orientation="horizontal"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </tab-pane-content>
          </template>
        </tab-pane>
      </div>
    </div>
  </div>
</template>

<script>
import TabPane from "@/components/widgets/TabPane";
import TabPaneTitle from "@/components/widgets/TabPaneTitle";
import TabPaneContent from "@/components/widgets/TabPaneContent";

import Product from "@/components/shop-area/Product";

export default {
  components: {
    TabPane,
    TabPaneTitle,
    TabPaneContent,
    Product
  },
  props: {
    tshirts: {
      type: Array
    },
    cups: {
      type: Array
    }
  }
};
</script>


<style scoped>
.section-border {
  margin-right: 94px;
  overflow: hidden;
  position: relative;
}
.section-title-wrapper {
  display: inline-block;
  float: left;
}
.section-bg-white {
  background-color: #fff;
  position: relative;
  z-index: 9;
}
.section-title {
  font-size: 20px;
  font-weight: 500;
  margin: 0;
  padding-right: 30px;
  display: inline-block;
}
.best-selling-pro-wrapper {
  transition: all 0.3s ease 0s;
}
.best-selling-pro-wrapper:hover {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}
.best-selling-bundle {
  margin-top: 15px;
}
.best-selling-bundle-2 .row {
  margin-left: -10px;
  margin-right: -10px;
}
.best-selling-bundle-2 .row div[class^="col-"] {
  padding-left: 10px;
  padding-right: 10px;
}
</style>
