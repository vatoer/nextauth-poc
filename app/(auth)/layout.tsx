import Image from "next/image";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex">
      <div className="flex items-center justify-center w-full p-8">
        <div className="p-8 border shadow-md">
          <>
            <div className="flex justify-center mb-4">
              <Image src="/logo.svg" alt="logo" width={150} height={50} />
            </div>
            {children}
          </>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
