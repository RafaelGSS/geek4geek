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
        const items = [...state.itemsCart]
        items.push(obj)
        state.itemsCart = [...items]

        nuxtStorage.localStorage.setData('iki-cart', JSON.stringify(state.itemsCart), 60)
    },
    remove(state, idx) {
        const items = [...state.itemsCart]
        items.splice(idx, 1)

        state.itemsCart = [...items]

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
        let sum = 0
        state.itemsCart.forEach(item => {	
            sum += item.value
        })
        return parseFloat(sum)
    },
    initialized: state => {
        return state.initialized
    }
}