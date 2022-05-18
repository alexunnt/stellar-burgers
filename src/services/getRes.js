export const getRes = (res) => {
    if (res.ok) {
        return res.json();
    }
    Promise.reject(`Ошибка ${res.status}`);
};