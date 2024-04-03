import type { BuiltInProviderType } from 'next-auth/providers/index';

export interface AuthSignInOption {
  label: string;
  provider: BuiltInProviderType;
  icon: React.ReactNode;
}
