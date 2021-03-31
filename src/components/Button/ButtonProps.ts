/*
 * @Author: your name
 * @Date: 2021-03-29 22:43:22
 * @LastEditTime: 2021-03-30 23:15:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3_demo\src\components\Button\ButtonProps.ts
 */
import { ButtonType, ButtonSize } from "./ButtonType";
import { PropType } from "vue";
export const BtnProps = {
  size: {
    type: String as PropType<ButtonSize>,
    defalut: () => "middle"
  },
  type: {
    type: String as PropType<ButtonType>,
    dafault: () => "primary"
  },
  icon: {
    type: String,
    default: () => ""
  },
  loading: Boolean,
  disabled: Boolean,
  plain: Boolean,
  round: Boolean,
  circle: Boolean,
  debounce: Boolean,
  delay: {
    type: Number,
    default: () => 2000
  }
};
