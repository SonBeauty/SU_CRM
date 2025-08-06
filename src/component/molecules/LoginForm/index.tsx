import { Button } from "@/component/atoms/Button";
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
      <Button variant={"secondary"} size="lg">
        Đăng nhập
      </Button>
    </form>
  );
};

export default LoginForm;
