import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useStore = defineStore('app', {
  state: () => ({
    title: "Vue Page Builder",
    editable: true,
    layouts: ["one", "two"],
    entries: useStorage('entries', [
      {
        id: "26c33e4a",
        layout: "one",
        title: "section 1",
      },
    ])
  }),
  getters: {
    log() {
      console.table(this.entries)
    },
  },
  actions: {
    add(entries) {
      const newAdd = {
        id: Math.floor(Math.random() * Date.now()).toString(32),
        layout: entries,
        title: "Lorem Ipsum",
        body: "dolor sit amet",
      }
      this.entries.unshift(newAdd);
      this.log
    },
    remove(id) {
      this.entries.splice(this.entries.findIndex((x) => x.id === id), 1)
    },
    save() {
      console.trace("TODO")
    },
    preview() {
      window.location.hash = ""
      window.open(window.location.href + 'preview', '_blank')
    }
  },
})
