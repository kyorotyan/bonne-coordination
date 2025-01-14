import { AppState } from '../../contexts/AppContext';

export default async function signUp(
    appContext: AppState | null,
    name: string,
    password: string,
    passwordConfirmination: string,
) {
    const signUpUrl = 'http://localhost/api/sign-up';
    fetch(signUpUrl, {
        method: 'POST',
        body: JSON.stringify({
            name,
            password,
            passwordConfirmination,
        })
    })
        .then((response) => {
            if (response.status === 200) {
                return Promise.resolve(response.json());
            }
            return Promise.reject();
        })
        .then((json) => {
            appContext?.setUserName(json?.name);
            return Promise.resolve();
        }); 
}
