import { baseUrl } from "./constants";

class Api {
    constructor(baseUrl) {
        this._baseUrl = baseUrl;
        this._bodyPost = { 
            "ingredients": ["60d3b41abdacab0026a733ca","60d3b41abdacab0026a733cb"]
        };
    }

    _getRes(res) {
        if (res.ok) return res.json();
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getItems() {
        return fetch(`${this._baseUrl}/ingredients`)
            .then(res => this._getRes(res));
    }

    setOrder(ids) {
        return fetch(`${this._baseUrl}/orders`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ids),
        })
        .then(res => this._getRes(res))
        .then(res => res.order.number)
    }
}

const api = new Api(baseUrl);

export default api;