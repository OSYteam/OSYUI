import api from "../../../api/api";

export async function login(email: string, password: string): Promise<string> {
    const { data } = await api.post('/auth/login', { email, password });

    return data.accessToken;

}


export async function logout(): Promise<void> {
    const { data } = await api.post('/auth/logout');

    console.log(data);
    return;

}