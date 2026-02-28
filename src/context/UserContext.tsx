
import { createContext, useContext, useState, ReactNode, useCallback } from 'react';

export interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  bio: string;
  avatarUrl: string;
  role: string;
}

interface UserContextValue {
  profile: UserProfile;
  updateProfile: (updates: Partial<UserProfile>) => void;
}

const defaultProfile: UserProfile = {
  firstName: 'Carlos',
  lastName: 'García',
  email: 'carlos.garcia@ejemplo.com',
  bio: 'Product manager apasionado por las decisiones basadas en datos',
  avatarUrl:
    'https://readdy.ai/api/search-image?query=professional%20latin%20american%20business%20man%20portrait%20clean%20white%20background%20corporate%20headshot%20confident%20smile&width=120&height=120&seq=user-avatar-carlos&orientation=squarish',
  role: 'Administrador',
};

const UserContext = createContext<UserContextValue | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<UserProfile>(defaultProfile);

  const updateProfile = useCallback((updates: Partial<UserProfile>) => {
    setProfile((prev) => ({ ...prev, ...updates }));
  }, []);

  return (
    <UserContext.Provider value={{ profile, updateProfile }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser(): UserContextValue {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUser must be used within a UserProvider');
  return ctx;
}
