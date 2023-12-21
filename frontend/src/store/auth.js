import {create} from 'zustand'
import {persist} from 'zustand/middleware'

export const useAuthStore = create(
  persist(
    (set) => ({
      uid: '',
      username: '',
      token: '',
      avatar: '',
      setUid: (uid) => set({uid}),
      setUsername: (username) => set({username}),
      setToken: (token) => set({token}),
      setAvatar: (avatar) => set({avatar}),
      logout: () => set({uid: '', username: '', token: '', avatar: ''}),
    }),
    {
      name: 'loginData',
    }
    )
    )