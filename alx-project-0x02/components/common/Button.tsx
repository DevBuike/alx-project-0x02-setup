import {type ButtonProps} from '@/interfaces';

const Button: React.FC<ButtonProps> = ({size = 'medium', shape = 'rounded-md'}) => {
  const sizeClasses = {
      small: 'text-xs px-2 py-1',
      medium: 'text-sm px-3 py-2',
      large: 'text-lg px-4 py-3',
  };

  const shapeClasses = {
      'rounded-sm': 'rounded-sm',
      'rounded-md': 'rounded-md',
      'rounded-full': 'rounded-full',
  };

  return (
    <button className={`bg-blue-500 p-2 rounded mt-1 hover:bg-blue-600 ${sizeClasses[size]} ${shapeClasses[shape]} text-white`}>
      Click Me
    </button>
  );
}

export default Button;