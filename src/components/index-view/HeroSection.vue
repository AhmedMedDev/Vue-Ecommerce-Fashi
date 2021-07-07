<template>
    <section class="hero-section">
        <div class="hero-items ">
            <carousel
                :loop= "true" :margin= "0"
                :nav= "false" :items= "1"
                :dots= "false" :smartSpeed= "1200" 
                
                :autoHeight= "false"  :autoplay= "true">
                    <div class="single-hero-items set-bg" :style="setBG1">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-5">
                                    <span>Bag,kids</span>
                                    <h1>Black friday</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore</p>
                                    <a href="#" class="primary-btn">Shop Now</a>
                                </div>
                            </div>
                            <div class="off-card">
                                <h2>Sale <span>50%</span></h2>
                            </div>
                        </div>
                    </div>
                    <div class="single-hero-items set-bg" :style="setBG2">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-5">
                                    <span>Bag,kids</span>
                                    <h1>Black friday</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore</p>
                                    <a href="#" class="primary-btn">Shop Now</a>
                                </div>
                            </div>
                            <div class="off-card">
                                <h2>Sale <span>50%</span></h2>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="single-hero-items set-bg" :style="someStyle3">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-5">
                                    <span>Bag,kids</span>
                                    <h1>Black friday</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore</p>
                                    <a href="#" class="primary-btn">Shop Now</a>
                                </div>
                            </div>
                            <div class="off-card">
                                <h2>Sale <span>50%</span></h2>
                            </div>
                        </div>
                    </div> -->
            </carousel>
        </div>
    </section>
</template>

<script>
// :animateIn= 'fadeIn' :animateOut= 'fadeOut'
import carousel from 'vue-owl-carousel'
import hero1 from '../../../public/assets/img/hero-1.jpg';
import hero2 from '../../../public/assets/img/hero-2.jpg';
import hero3 from '../../../public/assets/img/hero-3.jpg';
export default {
    components: { carousel },

    data() 
    {
        return {
            setBG1: {background:`url(${hero1})`},
            setBG2: {background:`url(${hero2})`},
            setBG3: {background:`url(${hero3})`},
        };
  },
  
}
</script>

<style>

</style>