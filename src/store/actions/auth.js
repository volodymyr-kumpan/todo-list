import AsyncStorage from '@react-native-community/async-storage';

import AppSettings from '../../constants/AppSettings';

export const getToken = async () => {
    try {
        let token = await AsyncStorage.getItem("@auth_token");
        const refreshToken = await AsyncStorage.getItem("@auth_refresh_token");
        const expires = await AsyncStorage.getItem("@auth_expires");
        let userId = await AsyncStorage.getItem("@auth_user_id");
        if (expires !== null && new Date(parseInt(expires)) <= new Date() && refreshToken !== null) {
            if (refreshToken !== null){
                const tokenObj = await getTokenByRefreshToken(refreshToken);
                token = tokenObj.accessToken;
                await AsyncStorage.setItem("@auth_token", token);
                await AsyncStorage.setItem("@auth_expires", tokenObj.expires.toString());
            }
        }
        if (token === null){
            const tokenObj = await getTokenByRegisterNewUser();
            token = tokenObj.accessToken;
            userId = tokenObj.userId;
            await AsyncStorage.setItem("@auth_token", token);
            await AsyncStorage.setItem("@auth_refresh_token", tokenObj.refreshToken);         
            await AsyncStorage.setItem("@auth_expires", tokenObj.expires.toString());
            await AsyncStorage.setItem("@auth_user_id", userId);
        }
        return {
            "token": token,
            "userId": userId
        };
    } catch(e) {
        throw new Error(e);
    }
};

const getTokenByRegisterNewUser = () => {
    return fetch(AppSettings.AuthApiEndpoint + '/accounts:signUp?key=' + AppSettings.ApiKey, {
        method: "POST",
        body: JSON.stringify({
            "returnSecureToken": true
        })
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(response.status);
        }
    })
    .then(parsedResponse => {
        const expiresIn = parseInt(parsedResponse.expiresIn);
        const dateNow = new Date();
        const expires = dateNow.setSeconds(dateNow.getSeconds() + expiresIn);
        return {
            "accessToken": parsedResponse.idToken,
            "refreshToken": parsedResponse.refreshToken,
            "expires": expires,
            "userId": parsedResponse.localId
        };
    });
};

const getTokenByRefreshToken = (refreshToken) => {
    return fetch(AppSettings.AuthApiEndpoint + '/token?key=' + AppSettings.ApiKey, {
        method: "POST",
        body: JSON.stringify({
            "grant_type": "refresh_token",
            "refresh_token": refreshToken
        })
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(response.status);
        }
    })
    .then(parsedResponse => {
        const expiresIn = parseInt(parsedResponse.expires_in);
        const dateNow = new Date();
        const expires = dateNow.setSeconds(dateNow.getSeconds() + expiresIn);
        return {
            "accessToken": parsedResponse.access_token,
            "expires": expires
        };
    });
};