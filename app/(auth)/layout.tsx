const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex">
      <div className="flex items-center justify-center w-full p-8">
        <div className="p-8 border shadow-md">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
