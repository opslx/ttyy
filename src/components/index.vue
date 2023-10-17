<template>
<component :is="liActiveClass"></component>
<div id="tab">
<menu class="menu">

    <button @click="Active('Home')" :class="{active: liActiveClass == 'Home'}" class="menu__item" style="--bgColorItem: #ff8c00;" >
      <svg class="tab-icon" viewBox="0 0 24 24">
        <path d="M3.8,6.6h16.4"/>
        <path d="M20.2,12.1H3.8"/>
        <path d="M3.8,17.5h16.4"/>
      </svg>
    </button>


    <button @click="Active('Calendar')" class="menu__item" :class="{active: liActiveClass == 'Calendar'}" style="--bgColorItem: #4343f5;" >
      <svg class="tab-icon" viewBox="0 0 24 24">
      <path  d="M3.4,11.9l8.8,4.4l8.4-4.4"/>
      <path  d="M3.4,16.2l8.8,4.5l8.4-4.5"/>
      <path  d="M3.7,7.8l8.6-4.5l8,4.5l-8,4.3L3.7,7.8z"/>
        </svg>
    </button>

    <button @click="Active(3)" class="menu__item" :class="{active: liActiveClass == 3}" style="--bgColorItem: #e0b115;" > 
<svg xmlns="http://www.w3.org/2000/svg" class="tab-icon" viewBox="0 0 24 24" ><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
    </button>

    <button @click="Active('User')" class="menu__item" :class="{active: liActiveClass == 'User'}" style="--bgColorItem:#65ddb7;">
<svg xmlns="http://www.w3.org/2000/svg" class="tab-icon"  viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
    </button>

    <div class="menu__border"></div>

  </menu>

</div>
</template>

<script lang="ts">
import Calendar from "../views/calendar/index.vue"
import Home from '../views/home/index.vue'
import User from '../views/user/index.vue'
import {defineComponent,ref} from "vue";
export default defineComponent({
  setup( ) {
    let liActiveClass = ref<any>('Home')
    function Active(id:any) {
      liActiveClass.value = id
      
    }
    return {liActiveClass,Active}
  },
  components:{
    Home,
    Calendar,
    User
  }
    

})
</script>
<style lang="scss">
html {

box-sizing: border-box;
--bgColorMenu : #1d1d27;
--duration: .7s;    

}

html *,
html *::before,
html *::after {

box-sizing: inherit;

}

#tab{
box-sizing: border-box;
--bgColorMenu : #1d1d27;
--duration: .7s;   
margin: 0;
display: flex;
align-items: flex-end;
position: fixed;
bottom: 3.5vh;
justify-content: flex-end;
transition: background-color var(--duration);
-webkit-tap-highlight-color: transparent;
}




.menu{
bottom: -6vh;
display: inline-flex;
width: 100vw;
font-size: 1.5em;
padding: 0 2.85em;
position: relative;
align-items: center;
justify-content: center;
background-color: var(--bgColorMenu);

}

.menu__item{

all: unset;
flex-grow: 1;
z-index: 100;
display: flex;
cursor: pointer;
position: relative;
align-items: center;
justify-content: center;
padding: 0.55em 0 0.85em;
transition: transform var(--duration);

}

.menu__item::before{

content: "";
z-index: -1;
width: 4.2em;
height: 4.2em;
border-radius: 50%;
position: absolute;
transform: scale(0);
transition: background-color var(--duration), transform var(--duration);

}


.menu__item.active {
transform: translate3d(0, -.8em , 0);
}

.menu__item.active::before{

transform: scale(1);
background-color: var(--bgColorItem);

}

.tab-icon{

width: 2.6em;
height: 2.6em;
stroke: white;
fill: transparent;
stroke-width: 1pt;
stroke-miterlimit: 10;
stroke-linecap: round;
stroke-linejoin: round;
stroke-dasharray: 400;

}

.menu__item.active .icon {
animation: strok 1.5s reverse;

}

@keyframes strok {
100% {
    stroke-dashoffset: 400;
}
}


.svg-container {

width: 0;
height: 0;
}


@media screen and (max-width: 50em) {
.menu{
    font-size: .8em;
}
} 
</style>