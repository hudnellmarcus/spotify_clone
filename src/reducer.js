export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token is used to authenticate the user 
    //MAKE SURE TO REMOVE AFTER DEVELOPING!!!
     token: 'BQDkNgXnjMyQeqy0hT-Oa16dbw_cAdgQpfgFC49xvQ21lj5_q6Scylo9-dwacLmWKwrwB1rNd4mrtjgRaujtJNcGi4LQE8o8iUhrKNF81pGKoND8KyMIv28qG9b_ZhXaJjL5uAy0drRl1crmUHjFlhZA5rnTwEv1pPiYxpMdeIK6y2zWzLINs_igQDuUKruD',
};

// state is the current state and action is the action you want to take i.e. setUser
export const reducer = (state, action) => {
    console.log(action);

    // Action -> type, [payload] 

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };

            case 'SET_PLAYLISTS':
                return {
                    ...state,
                    playlists: action.playlists,
                };

        default:
            return state;
    }
}