import nuxtStorage from 'nuxt-storage'

export const state = () => ({
    itemsCart: [],
    initialized: false
})

export const mutations = {
    initializeStore(state) {
        state.initialized = true
    },
    add(state, obj) {
        const itens = [...state.itemsCart]
        itens.push(obj)
        state.itemsCart = [...itens]

        nuxtStorage.localStorage.setData('iki-cart', JSON.stringify(state.itemsCart), 60)
    },
    remove(state, idx) {
        const itens = [...state.itemsCart]
        itens.splice(idx, 1)

        state.itemsCart = [...itens]

        nuxtStorage.localStorage.setData('iki-cart', JSON.stringify(state.itemsCart), 60)
    },
    setItems(state, items) {
        state.itemsCart = [...items]
    }
}

export const actions = {
    addToCart(context, obj) {
        context.commit('add', obj)
    },
    removeToCart(context, idx) {
        context.commit('remove', idx)
    },
    initializeStore(context) {
        if (nuxtStorage.localStorage.getData('iki-cart')) {
            let cartStorage = JSON.parse(nuxtStorage.localStorage.getData('iki-cart'))
            context.commit('setItems', cartStorage)
        }
        context.commit('initializeStore')
    }
}

export const getters = {
    items: state => {
        return state.itemsCart
    },
    sum: state => {
        let sum = 
        state.itemsCart.forEach(item => {	
            sum += item.value
        });
        return sum
    },
    initialized: state => {
        return state.initialized
    }
}