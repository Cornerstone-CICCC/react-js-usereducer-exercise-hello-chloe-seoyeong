type State = {
  isDark: boolean;
  fSize: number;
};

type Action = {
  type: "mode" | "increase" | "decrease";
};

export const exerciseReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "mode":
      return { ...state, isDark: !state.isDark };
    case "increase":
      return { ...state, fSize: state.fSize + 1 };
    case "decrease":
      return { ...state, fSize: state.fSize - 1 };
    default:
      return state;
  }
};
