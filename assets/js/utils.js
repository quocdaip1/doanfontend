export const Datalink = 'https://6327c38a5731f3db995dcc95.mockapi.io';

export async function Get_Data(url, queryParams = null){
    const dataJson = await fetch(url);
    const data = await dataJson.json();
    return data;
}

export async function Post_Data(url, body){
    const dataJson = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    const data = await dataJson.json();
    return data;
}

export async function Patch_Data(url,body){
    const dataJson = await fetch(url, {
        method:'PATCH',
        body: JSON.stringify(body)
    })
}

export async function Delete_Data(url){
    const dataJson = await fetch(url, {
        method:'DELETE'
    })
    const data = await dataJson.json();
    return data;
}

