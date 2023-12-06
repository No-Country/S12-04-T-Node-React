import {create} from 'zustand'
import {persist} from 'zustand/middleware'

export const useAuthStore = create(
  persist(
    (set) => ({
      uid: '',
      username: '',
      token: '',
      setUid: (uid) => set({uid}),
      setUsername: (username) => set({username}),
      setToken: (token) => set({token}),
      logout: () => set({uid: '', username: '', token: ''}),
    }),
    {
      name: 'loginData',
    }
    )
    )