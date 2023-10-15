import AuthInput from "@/components/shared/AuthInput";
import Button from "@/components/shared/Button";
import FormLabel from "@/components/shared/FormLabel";
import AuthLayout from "@/layouts/AuthLayout";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { LogoLg } from "@/components/shared/icons";
import Link from "next/link";
import { useAuthContext } from "@/contexts/AuthContext";

const loginSchema = yup
  .object({
    email: yup
      .string()
      .email("Email must be a valid email")
      .required("Email is required"),
    password: yup.string().required("Password is required"),
  })
  .required();

interface ILoginData {
  email: string;
  password: string;
}

const Login = () => {
  const { login, isLoginLoading } = useAuthContext();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ILoginData>({
    resolver: yupResolver(loginSchema),
    mode: "onBlur",
  });

  const onSubmit = handleSubmit(async (data) => {
    await login(data);
  });
  return (
    <AuthLayout title="Login">
      <div className="relative mx-auto w-[92%] lg:w-[35%] ">
        <div className="w-full">
          <LogoLg className="mx-auto h-[60px] w-[150px] !text-black lg:h-[53px] lg:w-[200px]" />
          <p className="mt-4 text-center text-[18px] font-semibold text-[#3F3F46] lg:text-[22px]">
            Let&apos;s get you started
          </p>
        </div>
        <form
          onSubmit={onSubmit}
          className="mt-6 rounded-md border border-[#F1F5F9] bg-white px-3 py-10 shadow-light lg:py-5"
        >
          <div>
            <FormLabel message="Email" />
            <AuthInput
              register={register("email")}
              type="email"
              placeholder="youramazingname@mail.com"
              hasError={(errors.email?.message?.length as number) > 0}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-[#DC3545]">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="mt-7 lg:mt-4">
            <FormLabel message="Password" />
            <AuthInput
              register={register("password")}
              type="password"
              placeholder="Enter your password"
              hasError={(errors.password?.message?.length as number) > 0}
            />
            {errors.password && (
              <p className="mt-1 text-xs text-[#DC3545]">
                {errors.password.message}
              </p>
            )}
          </div>
          <p className="mt-5 text-sm">
            Dont have an account?{" "}
            <Link href={"/auth/signup"}>
              <span className="text-primary-pink underline">
                Create an account
              </span>
            </Link>
          </p>

          <div className="mt-7 lg:mt-10">
            <Button
              text={"Log in"}
              bg="bg-black"
              color="text-white"
              type="submit"
              variant="solid"
              borderColor="border-black"
              disabled={isLoginLoading}
              className="w-full "
              isLoading={isLoginLoading}
            />
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Login;
