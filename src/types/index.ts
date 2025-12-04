// union of string literals 
export type AlertType = 'success' | 'error' | 'warning' | 'info';

// describes an object structure (the props passed into a component
export interface AlertBoxProps {
    type: AlertType;
    message: string;
    onClose?: () => void;
    children?: React.ReactNode;
}

// User Shape
export interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    avatarUrl?: string;
}

// User Props
export interface UserProfileCardProps {
    user: User;
    showEmail?: boolean;
    showRole?: boolean;
    onEdit?: (userId: string) => void;
    children?: React.ReactNode;
}

// Product Shape
export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    imageUrl?: string;
    inStock: boolean;    
}

// Product Props
export interface ProductDisplayProps {
    product: Product;
    showDescription?: boolean;
    showStockStatus?: boolean;
    onAddToCart?: (productId: string) => void;
    children?: React.ReactNode;
}