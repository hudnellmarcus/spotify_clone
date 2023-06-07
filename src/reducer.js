export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
};

// state is the current state and action is the action you want to take i.e. setUser
const reducer = (state, action) => {
    console.log(action);

   // Action -> type, [payload] 

    switch(action.type) {
        case 'SET_USER': 
        return {
            ...state,
            user: action.user
        }
        default: 
        return state;
    }
}