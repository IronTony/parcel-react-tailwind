export interface TitleProps {}

export const Title: React.FC<TitleProps> = ({ children }) => (
  <h1 className="text-4xl text-white text-center font-serif font-bold">{children}</h1>
);
