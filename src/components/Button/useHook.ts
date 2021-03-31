export const useClass = (props: any) => {
  return [
    props.type ? `L-button--${props.type}` : "",
    props.size ? `L-button--${props.size}` : "",
    {
      "is-disabled": props.disabled,
      "is-loading": props.loading,
      "is-plain": props.plain,
      "is-round": props.round,
      "is-circle": props.circle
    }
  ];
};
