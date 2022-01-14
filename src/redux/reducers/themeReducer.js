

import { ActionTypes } from "../constant/action-types"

const themeReducer = (state = { darkThemeEnabled: false }, {type}) => {
    console.log('ok')
    switch (type) {
      case ActionTypes.TOGGLE_DARK_MODE:
          const toggle=!state.darkThemeEnabled
          console.log({darkThemeEnabled: toggle })
        return { ...state, darkThemeEnabled: toggle };
  
      default:
        return state;
    }
  };


  export default themeReducer