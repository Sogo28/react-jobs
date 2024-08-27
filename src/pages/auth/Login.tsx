import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { LoginFormFieldsType, LoginFormFieldsSchema } from "../../schemas/LoginFormFieldsSchema";
import useLogin from "../../hooks/auth/useLogin";
import { useAuthStore } from "../../state/AuthStore";
import { useNavigate, useLocation } from "react-router-dom";
import clsx from "clsx";
export default function Login() {

  const setToken = useAuthStore((state) => state.setToken);
  const setUser = useAuthStore((state) => state.setUser);
  const navigate = useNavigate();
  const loginMutation = useLogin();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginFormFieldsType>(
    {
      resolver: zodResolver(LoginFormFieldsSchema)
    }
  );
  const from = location.state?.from?.pathname || "/employer/home";

  const onSubmit: SubmitHandler<LoginFormFieldsType> = (data) => {
    loginMutation.mutate(data, {
      onSuccess: (data) => {
        setToken(data.token);
        // Store the access token in local storage
        localStorage.setItem("accessToken", data.token);
        setUser(data.user);
        navigate(from, { replace: true });
      },
      onError: (errors) => {
        setError("root", {
          message: "Wrong credentials"
        })
      }
    })

  };

  return (
    <section className="h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-xl rounded-lg p-12 flex flex-col w-full mx-4 md:w-[500px]">
        <fieldset className="">
          <legend className="mb-2 block text-xl font-bold text-center">Login</legend>
          <div className="mb-4">
            <label htmlFor="email">Email</label>
            <input
              {...register("email")}
              type="email"
              id="email"
              name="email"
              className="border rounded w-full py-2 px-3 mb-2"
              placeholder="example@mail.com"
            />
          </div>
          {errors.email && (<div className="text-red-500 mb-4">{errors.email.message}</div>)}
          <div className="mb-4">
            <label htmlFor="password">Password</label>
            <input
              {...register("password")}
              type="password"
              id="password"
              name="password"
              className="border rounded w-full py-2 px-3 mb-2"
            />
          </div>
          {errors.password && (<div className="text-red-500 mb-4">{errors.password.message}</div>)}
          <input type="submit" value="Login" className={clsx(
            "transition ease-in-out duration-150 rounded-xl px-4 py-2 w-full mb-4",
            loginMutation.isPending
              ? "disabled:cursor-not-allowed bg-slate-500"
              : "bg-[#62cff4] font-medium text-center hover:bg-[#54b4d4]"
          )} disabled={loginMutation.isPending} />
          {errors.root && (<div className="text-red-500">{errors.root.message}</div>)}
        </fieldset>
        <fieldset className="mt-2">
          <p className="text-center">No account? <a href="/sign-in" className="text-[#62cff4] underline">create</a> on right now !</p>
        </fieldset>
      </form>

    </section>
  )
}
