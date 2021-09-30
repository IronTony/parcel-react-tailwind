export interface CardProps {}

export const Card: React.FC<CardProps> = ({ children }) => (
  <div className="w-full p-8 my-4 bg-white rounded-xl">{children}</div>
);
