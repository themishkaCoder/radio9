<script setup>
  const props = defineProps(['light', 'icon'])

</script>
<template>
  <div class="flex flex-row items-center gap-2">
    <i v-if="props.icon == true" class="fa-solid fa-microphone-lines text-2xl"></i>
    <div v-if="props.light == false" class="boxContainer">
        <div class="box box1"></div>
        <div class="box box2"></div>
        <div class="box box3"></div>
        <div class="box box4"></div>
        <div class="box box5"></div>
    </div>
    
    <div v-else class="boxContainer">
        <div class="box-light box1"></div>
        <div class="box-light box2"></div>
        <div class="box-light box3"></div>
        <div class="box-light box4"></div>
        <div class="box-light box5"></div>
    </div>
  </div>
</template>

<style lang="scss">
@keyframes quiet {
  25%{
    transform: scaleY(.6);
  }
  50%{
    transform: scaleY(.4);
  }
  75%{
    transform: scaleY(.8);
  }
}

@keyframes normal {
  25%{
    transform: scaleY(1);
  }
  50%{
    transform: scaleY(.4);
  }
  75%{
    transform: scaleY(.6);
  }
}
@keyframes loud {
  25%{
    transform: scaleY(1);
  }
  50%{
    transform: scaleY(.4);
  }
  75%{
    transform: scaleY(1.2);
  }
}


.boxContainer{
  display: flex;
  justify-content: space-between;
  height: 40px;
  --boxSize: 5px;
  --gutter: 4px;
  width: calc((var(--boxSize) + var(--gutter)) * 4.5);
}

.box{
  transform: scaleY(.4);
  height: 100%;
  width: var(--boxSize);
  background: $base-purple;
  animation-duration: 1.2s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  border-radius: 8px;
}
.box-light{
  transform: scaleY(.4);
  height: 100%;
  width: var(--boxSize);
  background: $base-text-color;
  animation-duration: 1.2s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  border-radius: 8px;
}

.box1{
  animation-name: quiet;
}

.box2{
  animation-name: normal;
}

.box3{
  animation-name: quiet;
}

.box4{
  animation-name: loud;
}

.box5{
  animation-name: quiet;
}
</style>