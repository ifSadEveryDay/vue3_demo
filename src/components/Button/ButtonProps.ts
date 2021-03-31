
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
  delay: {
    type: Number,
    default: () => 2000
  },
  loading: Boolean,
  disabled: Boolean,
  plain: Boolean,
  round: Boolean,
  circle: Boolean,
  debounce: Boolean,
  
};
