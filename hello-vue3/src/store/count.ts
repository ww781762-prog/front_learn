import { defineStore } from 'pinia'

export const useCountStore = defineStore('count',{
  actions: {
    AddCount(value: number) {
      this.sum+=value
    },
    SubCount(value: number) {
      this.sum-=value
    }
  },
  state(){
    return{ sum:6,school:"bj"}
  }
  }
)