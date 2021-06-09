import { createStore } from 'vuex'

const GET_URL = 'http://localhost:3030/mock';
const POST_URL = 'http://localhost:3030/addtomock';

export default createStore({
    state() {
        return {
            book: [],
            newRecods: [],
            part: [],
            lineCount: 10,
            pageCount: 0,
            activePageIdx: 0,
            categoryList: [
                'Продукты питания',
                'Транспорт',
                'Здоровье',
                'Одежда и обувь',
                'Коммунальные услуги',
            ]
        }
    },
    mutations: {
        prepare(state, payload) {
            if (payload.new) {
                state.part = state.newRecods
            } else if (payload.range.whole) {
                state.part = state.book
            } else {
                state.part = state.book.filter(e =>
                    e.id > payload.range.start && e.id < payload.range.end
                )
            }
            if (payload.picked === '2') state.part = [...state.part].reverse();
            state.pageCount = Math.ceil(state.part.length / state.lineCount);
            state.activePageIdx = 0;
        },
        clear(state) {
            state.part = []
            state.pageCount = 0
            state.activePageIdx = 0
        },
        setActivePage(state, payload) {
            state.activePageIdx = payload
        },
        stepLeft(state) {
            if (state.activePageIdx !== 0) {
                state.activePageIdx = state.activePageIdx - 1
            }
        },
        stepRight(state) {
            if (state.activePageIdx !== (state.pageCount - 1)) {
                state.activePageIdx = state.activePageIdx + 1
            }
        },
        addCategory(state, payload) {
            state.categoryList.push(payload.category)
        },
        delCategory(state, payload) {
            state.categoryList = state.categoryList.filter((c, i) => i !== payload.idx)
        }
    },
    getters: {
        viewRecords(state) {
            let start = state.activePageIdx * state.lineCount
            let end = start + state.lineCount
            return state.part.slice(start, end)
        },
        activePage(state) {
            return state.activePageIdx
        },
        quantity(state) {
            return state.pageCount
        },
        categories(state) {
            return state.categoryList
        },
        summa(state) {
            return state.newRecods.reduce((sum, current) => sum + current.value, 0);
        }

    },
    actions: {
        async download({ state }) {
            try {
                const response = await fetch(GET_URL)
                state.book = await response.json();
            } catch (e) {
                console.log(e.message);
            }
        },
        async upload(context, { entry }) {
            try {
                const response = await fetch(POST_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json; charset=UTF-8'
                    },
                    body: JSON.stringify(entry)
                })
                const result = await response
                if (result.status === 200) {
                    context.state.newRecods.push(entry)
                    context.commit({
                        type: 'prepare',
                        picked: '2',
                        range: {},
                        new: true
                    })
                }
            } catch (e) {
                console.log(e.message);
            }
        },
    }
})