// export const GET_USER_REQUEST = "GET_USER_REQUEST";
// export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";

// OR

export const Types = {
    GET_USERs_REQUEST: "GET_USER_REQUEST",
    GET_USERS_SUCCESS: "GET_USERS_SUCCESS",
};

export const getUserRequest = () => {
    return { type: Types.GET_USERs_REQUEST };
};

export const getUsersSuccess = (items) => {
    return { 
        type: Types.GET_USERS_SUCCESS,
        payload: { items },
     };
};

