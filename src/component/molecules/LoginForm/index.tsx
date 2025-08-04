import { Input } from "@/component/atoms/Input";
import { FiLock, FiMail } from "react-icons/fi";

const LoginForm = () => {
  return (
    <form className="flex flex-col gap-4">
      <Input iconLeft={<FiMail />} placeholder="Email" type="email"></Input>
      <Input
        iconLeft={<FiLock />}
        placeholder="Password"
        type="password"
      ></Input>
      <button type="submit" className="bg-blue-500 text-white py-2 rounded">
        Đăng nhập
      </button>
    </form>
  );
};

export default LoginForm;
