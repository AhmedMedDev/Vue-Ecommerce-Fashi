<template>
  <div class="">
    <HeroSection />
    <BannerSection />
    <Womenbanner />
    <DealofWeek />
    <ManBanner />
    <InstagramPhoto />
    <LatestBlog />
  </div>
</template>

<script>

import BannerSection from '../components/index-view/BannerSection.vue'
import HeroSection from '../components/index-view/HeroSection.vue'
import InstagramPhoto from '../components/index-view/InstagramPhoto.vue'
import LatestBlog from '../components/index-view/LatestBlog.vue'
import ManBanner from '../components/index-view/ManBanner.vue'
import Womenbanner from '../components/index-view/Womenbanner.vue'
import DealofWeek from '../components/index-view/DealofWeek.vue'

export default {
  name: "Home",
  components : 
  {
    HeroSection,
    BannerSection,
    Womenbanner,
    DealofWeek,
    ManBanner,
    InstagramPhoto,
    LatestBlog,
  }

};
</script>
