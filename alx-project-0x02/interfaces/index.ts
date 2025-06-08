export interface CardProps {
    id: string;
    title: string;
    content: string;
    className?: string;
}

export interface PostModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (post: { title: string; content: string }) => void;
}

export interface ButtonProps {
    size?: 'small' | 'medium' | 'large';
    shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
}

export interface PostProps {
  title: string;
  content: string;
  userId: number;
}

export interface PostData {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface PostsPageProps {
  posts: PostData[];
}

export interface UserProps {
    id: number;
    name: string;
    email: string;
    address: {
      street: string;
      city: string;
      zipcode: string;
    };
}

export interface UsersCardProps {
  users: UserProps[];
}

