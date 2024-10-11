import { redirect } from "react-router-dom"

export async function requireAuth(request) {
    const urlPathname = new URL(request.url).pathname
    const isLoggedIn = localStorage.getItem('isLoggedIn') || false
    
    if (!isLoggedIn) {
        throw mutateResponseToRedirect(`/login?auth=true&redirectTo=${urlPathname}`)
    }
    return null
}
//create a function
export function mutateResponseToRedirect(path){
 //redirect returns the patch response 
 let response = redirect(path)
 //body can be anything but undefined
 response.body = true 
 return response
}