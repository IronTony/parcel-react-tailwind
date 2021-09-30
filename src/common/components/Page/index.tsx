export interface PageProps {}

export const Page: React.FC<PageProps> = ({ children }) => (
  <div className="container mx-auto p-4 min-h-screen">{children}</div>
);
