import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({
        userId: localStorage.getItem('userId') || null,
    }),
    actions: {
        setUserId(id) {
            this.userId = id;
            localStorage.setItem('userId', id);
        },
    },
});
