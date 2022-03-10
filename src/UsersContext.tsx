import { createContext, useEffect, useState, ReactNode } from "react"
import { api } from "./services/api";

interface Users {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
  employment: {
    title: string;
  }
}

interface UsersProviderProps {
  children: ReactNode;
}

export const UsersContext = createContext<Users[]>([])

export function UsersProvider({ children }: UsersProviderProps) {
  const [users, setUsers] = useState<Users[]>([])

  useEffect(() => {
    api.get("/users/random_user?size=26")
      .then(response => {
        setUsers(response.data)
      })
  }, [])

  return (
    <UsersContext.Provider value={users}>
      {children}
    </UsersContext.Provider>
  )
} 