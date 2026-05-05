const BASE = "http://localhost:3000/api/auth";

export async function login(data) {
    const res = await fetch(`${BASE}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(data)
    });

    return res.json();
}

export async function signup(data) {
    const res = await fetch(`${BASE}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(data)
    });

    return res.json();
}

export async function getAccount() {
    const res = await fetch(`${BASE}/account`, {
        credentials: "include"
    });

    return res.json();
}

export async function logout() {
    await fetch(`${BASE}/logout`, {
        method: "POST",
        credentials: "include"
    });
}