let state: any = null;

export const useState = (value: number) => {
  state = state || value;

  function dispatch(newValue: any) {
    state = newValue;
    // 假设此方法能触发页面渲染
    // render();
  }

  return [state, dispatch];
}
