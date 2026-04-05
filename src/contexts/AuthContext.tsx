import React, { createContext, useContext, useState, useCallback } from "react";

export type UserRole = "customer" | "nurse" | "admin";

interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (data: { email: string; password: string; name: string; role: UserRole }) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem("careconnect_user");
    return saved ? JSON.parse(saved) : null;
  });
  const [isLoading, setIsLoading] = useState(false);

  const login = useCallback(async (email: string, _password: string) => {
    setIsLoading(true);
    // Mock login - will be replaced with real auth
    await new Promise((r) => setTimeout(r, 500));
    const role: UserRole = email.includes("nurse") ? "nurse" : email.includes("admin") ? "admin" : "customer";
    const mockUser: User = { id: "1", email, name: email.split("@")[0], role };
    localStorage.setItem("careconnect_user", JSON.stringify(mockUser));
    setUser(mockUser);
    setIsLoading(false);
  }, []);

  const register = useCallback(async (data: { email: string; password: string; name: string; role: UserRole }) => {
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 500));
    const mockUser: User = { id: "1", email: data.email, name: data.name, role: data.role };
    localStorage.setItem("careconnect_user", JSON.stringify(mockUser));
    setUser(mockUser);
    setIsLoading(false);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("careconnect_user");
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, register, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
