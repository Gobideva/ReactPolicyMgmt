import * as actionName from './reducerAction';


const initialState = {
   userName:null,
   formData:{}
};

const reducer =(state =initialState,action) => {
    
switch(action.type){
    case(actionName.LOGIN_ACTION):
        return  {
            ...state,
            userName:action.userName,
            formData:action.formData
            
        }
        case(actionName.PROFILE_UPDATE_ACTION):
        return  {
            ...state,
            formData:action.formData
            
        }
}

return state;
};

export default reducer;