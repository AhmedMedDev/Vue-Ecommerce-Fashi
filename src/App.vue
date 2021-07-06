<template>
  <div id="app">
      <Preloder />
      <HeaderSection />

        <router-view />
        
      <PartnerLogo />
      <FooterSection />
  </div>
</template>

<script>
/**
 * Layout
 */
import Preloder from './components/layout/Preloder.vue'
import HeaderSection from './components/layout/HeaderSection.vue'
import PartnerLogo from './components/layout/PartnerLogo.vue'
import FooterSection from './components/layout/FooterSection.vue'



export default {
  name: 'App',
  components:   
  {
    Preloder,
    HeaderSection,
    PartnerLogo,
    FooterSection,
  }
}
</script>

