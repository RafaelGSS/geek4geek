export default function ({isBrowser, store}){
    if(process.server)
        return
    
    console.log("Joined")

    if(!store.getters['cart/initialized']){
        store.commit('cart/initializeStore')
    }
}