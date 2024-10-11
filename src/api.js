export async function getVans(id) {
    const url = id ? `/api/vans/${id}` : "/api/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw createErrorResponse("Failed to fetch vans", res.status, res.statusText);
    }
    const data = await res.json()
    return data.vans
}

export async function getHostVans(id) {
    const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw createErrorResponse("Failed to fetch host vans", res.status, res.statusText);
    }
    const data = await res.json()
    return data.vans
}
export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}
// Utility function to create a custom error response
function createErrorResponse(message, status, statusText) {
    const response = new Response(null, {
        status: status,
        statusText: statusText,
    });
    response.message = message; // Custom property for error message
    return response;
}
