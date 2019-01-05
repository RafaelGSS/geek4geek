import nuxtStorage from 'nuxt-storage'

export const state = () => ({
    itemsCart: [],
    sumCart: 0,
    initialized: false
})
  
export const mutations = {
    initializeStore(state) {
        if(nuxtStorage.localStorage.getData('iki-cart')){
           state = 
                Object.assign(state, JSON.parse(nuxtStorage.localStorage.getData('iki-cart')))
        }
        state.initialized = true
    },
    add (state, obj) {
        state.sumCart += obj.value
        state.itemsCart.push(obj)

        nuxtStorage.localStorage.setData('iki-cart', JSON.stringify(state))
    },
    remove (state, idx){
        state.sumCart -= state.itemsCart[idx].value
        state.itemsCart.splice(idx, 1)
        
        nuxtStorage.localStorage.setData('iki-cart', JSON.stringify(state))
    }
}

export const getters = {
    items: state => {
        return state.itemsCart
    },
    sum: state => {
        return state.sumCart
    },
    initialized: state => {
        return state.initialized
    }
}