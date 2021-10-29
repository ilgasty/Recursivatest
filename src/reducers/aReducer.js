import { types } from "../types/types";

export const aReducer=(state={}, action)=>{
  switch (action.type) {
    case types.punto0:
      return {...action.payload, loged:true};
    case types.punto1:
      return {...action.payload, loged:true};
    case types.punto2:
      return {...action.payload,loged:false};
      case types.punto3:
        return {...action.payload,loged:false};
    case types.punto4:
      return {...action.payload,loged:false};
    case types.punto5:
      return {...action.payload,loged:false};
    default:
      return state;
  }
}