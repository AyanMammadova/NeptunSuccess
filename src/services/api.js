import axios from "axios"

async function getProducts(){
    const res = await axios.get("https://neptunbk.vercel.app/products?limit=20&&page=5")
    return res.data.products
}
async function getPopulyar(){
    const res = await axios.get("https://neptunbk.vercel.app/products?limit=20&&page=2")
    return res.data.products
}
async function getCategories(){
    const res= await axios.get('https://neptunbk.vercel.app/categories')
    return res.data
}
async function getDiscounted(){
    const res= await axios.get("https://neptunbk.vercel.app/products/discounted")
    return res.data.products
}
async function getProByCat(subid, pageId = 1){
    const res= await axios.get(`https://neptunbk.vercel.app/products/subcategory/${subid}?page=${pageId}`)
    return res.data
}


export {getProducts ,getCategories ,getDiscounted,getProByCat,getPopulyar}