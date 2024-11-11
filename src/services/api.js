import axiosInstance from "./instance"

async function getProducts(){
    const res = await axiosInstance.get("/products?limit=20&&page=5")
    return res.data.products
}
async function getPopulyar(){
    const res = await axiosInstance.get("/products?limit=20&&page=2")
    return res.data.products
}
async function getCategories(){
    const res= await axiosInstance.get('/categories')
    return res.data
}
async function getDiscounted(){
    const res= await axiosInstance.get("/products/discounted")
    return res.data.products
}
async function getProByCat(subid, pageId = 1){
    const res= await axiosInstance.get(`/products/subcategory/${subid}?page=${pageId}`)
    return res.data
}


export {getProducts ,getCategories ,getDiscounted,getProByCat,getPopulyar}