<template>
  <div>
    <button
      :class="['L-button', classname]"
      :disabled="loading"
      @click="debounceFunc"
    >
      <svg class="svgStyle" v-if="loading">
        <use xlink:href="#icon-loading"></use>
      </svg>
      <span><slot>主要样式</slot></span>
    </button>
  </div>
</template>

<script lang="ts">
import "@/icons/svg/loading.svg";
import {
  defineComponent,
  toRefs,
  reactive,
  computed,
  watch,
  onMounted
} from "vue";
import { debounce } from "throttle-debounce";
import { BtnProps } from "./ButtonProps";
import { useClass } from "./useHook";
type EmitFn = (evt?: Event) => void;
type Func = () => void;
export default defineComponent({
  name: "LButton",
  props: BtnProps,
  emits: ["click"],
  setup(props, contenxt) {
    const classname = useClass(props);
    const handlerClick: EmitFn = evt => {
      contenxt.emit("click", evt);
    };
    const debounceFunc: EmitFn = evt => {
      if (props.debounce) {
        debounce(props.delay, handlerClick)(evt);
      } else {
        handlerClick(evt);
      }
    };
    return {
      classname,
      debounceFunc
    };
  }
});
</script>

<style lang="scss" scoped>
.L-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  color: #8f98ac;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  padding: 10px;
  > span {
    display: inline-block;
    vertical-align: middle;
  }
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  font-size: 14px;
  border-radius: 4px;
  &.L-button--default {
    background: #57aaff;
    &:hover,
    &:focus {
      color: #222831;
      background-color: #eeeeee;
    }
  }
  &.L-button--primary {
    background: #00adb5;
    color: #eeeeee;
    &:hover,
    &:focus {
      color: #eeeeee;
      background-color: #40babf;
    }
  }
  &.L-button--success {
    background: #4ecca3;
    color: #eeeeee;
    &:hover,
    &:focus {
      color: #eeeeee;
      background-color: #6be3bc;
    }
  }
  &.L-button--danger {
    background: #d72323;
    color: #eeeeee;
    &:hover,
    &:focus {
      color: #eeeeee;
      background-color: #dd5656;
    }
  }
  &.L-button--info {
    background: #52616b;
    color: #eeeeee;
    &:hover,
    &:focus {
      color: #eeeeee;
      background-color: #6c777d;
    }
  }
  &.L-button--warning {
    background: #fce38a;
    color: #4a4444;
    &:hover,
    &:focus {
      color: #8e8282;
      background-color: #f7e4a4;
    }
  }
  &.L-button--text {
    background: #fff;
    border: 0;
    color: #4a4444;
    &:hover,
    &:focus {
      > span {
        color: #8e8282;
        // border-color: #222831;
        background-color: #f7e4a4;
      }
    }
  }
  &.L-button--large {
    padding: 15px 20px;
  }
  &.L-button--middle {
    padding: 12px 20px;
  }
  &.L-button--small {
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 4px;
  }
  &.is-plain {
    color: #409eff;
    background: #ecf5ff;
    border-color: #b3d8ff;
  }
  &.is-loading {
  }
  &.is-round {
    border-radius: 40px;
  }
}
.svgStyle {
  width: 12px;
  height: 12px;
  padding-right: 10px;
}
</style>
