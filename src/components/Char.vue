<script setup lang="ts">

interface CharDetail {
  char: string
  pinyinNum: string
  pinyinInitial: string
  pinyinFinal: string
  pinyinFinalNoTone: string
}

interface CharCheck {
  char: string
  // 声母
  initialStatus: 'right' | 'wrong' | 'normal'
  // 韵母
  finalStatus: 'right' | 'wrong' | 'normal'
  // 声调
  numStatus: 'right' | 'wrong' | 'normal'
}

const { origin, char, result } = defineProps<{
  origin: string,
  char: CharDetail,
  result: CharCheck
}>()

console.log(result);



const colorDict = {
  right: 'text-green-500',
  wrong: 'text-yellow-500',
  normal: 'text-white',
}

const colorStatus = (position: string) => {
  if (position === 'initial') {
    if (result.initialStatus === 'right') {
      return 'text-green-500'
    } else if (result.initialStatus === 'normal') {
      return 'text-yellow-500'
    } else {
      return 'text-white'
    }
  }

  if (position === 'final') {
    if (result.finalStatus === 'right') {
      return 'text-green-500'
    } else if (result.finalStatus === 'normal') {
      return 'text-yellow-500'
    } else {
      return 'text-white'
    }
  }

  if (position === 'num') {
    if (result.numStatus === 'right') {
      return 'text-green-500'
    } else if (result.numStatus === 'normal') {
      return 'text-yellow-500'
    } else {
      return 'text-white'
    }
  }

}

const charStatus = () => {
  if (char.char === origin) {
    return 'text-green-500'
  } else {
    return 'text-white'
  }
}

</script>

<template>
  <div inline-flex flex-col items-center my-1 :class="colorDict['normal']">
    <div text-xl>
      <span :class="colorStatus('initial')">{{ char.pinyinInitial }}</span>
      <span relative>
        <span opacity-0>{{ char.pinyinFinal }}</span>
        <span absolute left-0 :class="colorStatus('num')">{{
            char.pinyinFinal
        }}</span>
        <span absolute left-0 :class="colorStatus('final')" class="clip">{{ char.pinyinFinalNoTone }}</span>
      </span>
    </div>
    <div flex items-center justify-center text-2xl border border-white w-12 h-12 :class="charStatus()">
      {{ char.char }}
    </div>
  </div>
</template>

<style>
/* i 不需要显示上面那个点 要将他切割 */
.clip {
  overflow: hidden;
  clip-path: polygon(0% 40%, 100% 40%, 100% 100%, 0% 100%);
}
</style>
