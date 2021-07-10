<template>
    <div class="instagram-photo">
        <div class="insta-item set-bg" :style="setBG1">
            <div class="inside-text">
                <i class="ti-instagram"></i>
                <h5><a href="#">colorlib_Collection</a></h5>
            </div>
        </div>
        <div class="insta-item set-bg" :style="setBG2">
            <div class="inside-text">
                <i class="ti-instagram"></i>
                <h5><a href="#">colorlib_Collection</a></h5>
            </div>
        </div>
        <div class="insta-item set-bg" :style="setBG3">
            <div class="inside-text">
                <i class="ti-instagram"></i>
                <h5><a href="#">colorlib_Collection</a></h5>
            </div>
        </div>
        <div class="insta-item set-bg" :style="setBG4">
            <div class="inside-text">
                <i class="ti-instagram"></i>
                <h5><a href="#">colorlib_Collection</a></h5>
            </div>
        </div>
        <div class="insta-item set-bg" :style="setBG5">
            <div class="inside-text">
                <i class="ti-instagram"></i>
                <h5><a href="#">colorlib_Collection</a></h5>
            </div>
        </div>
        <div class="insta-item set-bg" :style="setBG6">
            <div class="inside-text">
                <i class="ti-instagram"></i>
                <h5><a href="#">colorlib_Collection</a></h5>
            </div>
        </div>
    </div>
</template>

<script>

import insta1 from '../../../public/assets/img/insta-1.jpg';
import insta2 from '../../../public/assets/img/insta-2.jpg';
import insta3 from '../../../public/assets/img/insta-3.jpg';
import insta4 from '../../../public/assets/img/insta-4.jpg';
import insta5 from '../../../public/assets/img/insta-5.jpg';
import insta6 from '../../../public/assets/img/insta-6.jpg';

export default {
    data () {
        return  {
            setBG1: {background:`url(${insta1})`},      
            setBG2: {background:`url(${insta2})`},      
            setBG3: {background:`url(${insta3})`},      
            setBG4: {background:`url(${insta4})`},      
            setBG5: {background:`url(${insta5})`},      
            setBG6: {background:`url(${insta6})`},      
        };
    }
}
</script>

<style>

</style>