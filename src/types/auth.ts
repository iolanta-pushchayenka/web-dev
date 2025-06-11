export interface AuthCallbacks {
    onLoginSuccess: () => void;
}

export interface SwitchCallbacks {
    onSwitchToRegister?: () => void;
    onSwitchToLogin?: () => void;
}