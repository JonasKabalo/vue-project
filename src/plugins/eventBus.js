import { ref } from "vue";
const busOther = ref(new Map());

export default function useEventsBus(){

  function emit(event, ...args) {
    busOther.value.set(event, args);
  }

  return {
    emit,
    busOther,
  }
}