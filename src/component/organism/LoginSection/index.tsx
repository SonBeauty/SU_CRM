import LoginForm from "../../molecules/LoginForm";

const LoginSection = () => {
  return (
    <section className="w-full max-w-md p-8 bg-white rounded shadow-2xl">
      <h1 className="text-3xl font-bold mb-4 text-center text-black">
        Welcome back!
      </h1>
      <LoginForm />
    </section>
  );
};

export default LoginSection;
