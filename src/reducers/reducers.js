export const reducer =(state,action)=>{
    switch(action.type){
        case "GET_DATA":
            return{...state, data:action.payload};
        case "ADD_FAV":
            return{...state, favs:[...state.favs,action.payload] };
        case "REMOVE_FAV":
            // eslint-disable-next-line no-case-declarations
            const favFiltrados = state.favs.filter(
                (fav) => fav.id !== action.payload.id
              );
              return { ...state, favs: favFiltrados };
        case "TOOGLE_THEME":
                return{...state, theme: !state.theme}       
            default:
                throw new Error();
    }
}