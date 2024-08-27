import { useForm, SubmitHandler } from "react-hook-form";
import { SigninFormFieldsSchema, SigninFormFieldType } from "../../schemas/SigninFormFieldsSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateUser } from "../../hooks/employer/useCreateUser";
import { useAuthStore } from "../../state/AuthStore";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import useLogin from "../../hooks/auth/useLogin";

export default function SignIn() {

  const createUserMutation = useCreateUser();
  const loginUserMutation = useLogin();
  const setToken = useAuthStore((state) => state.setToken);
  const setUser = useAuthStore((state) => state.setUser);
  const navigate = useNavigate();

  const {
    register,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm<SigninFormFieldType>({
    resolver: zodResolver(SigninFormFieldsSchema)
  });

  const onSubmit: SubmitHandler<SigninFormFieldType> = (data) => {
    // do something with the data
    createUserMutation.mutate(data, {
      onSuccess: () => {
        const { email, password } = data;
        loginUserMutation.mutate({ email, password }, {
          onSuccess: (data) => {
            // Store the access token in local storage
            localStorage.setItem("accessToken", data.token);
            setUser(data.user);
            navigate("/employer/home");
          }
        })
      },
      onError: (errors) => {
        setError("root", {
          message: "This email is already used"
        })
      }
    })
  }
  return (
    <section className="h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-xl rounded-lg p-12 flex flex-col w-full mx-4 md:w-[500px]">
        <legend className="mb-4 block text-4xl   font-bold text-center">Sign in</legend>
        <fieldset>
          <legend className="mb-2 block text-xl font-bold text-center">Personnal Infos</legend>
          <div className="mb-4">
            <label htmlFor="name">Your full Name</label>
            <input
              {...register("name")}
              className="border rounded w-full py-2 px-3 mb-2"
              type="text"
              name="name"
              id="name"
              placeholder="Jhon Doe"
              required
            />
            {errors.name && (<div className="text-red-500 mb-4">{errors.name.message}</div>)}
          </div>
          <div className="mb-4">
            <label htmlFor="email">Your personnal email</label>
            <input
              {...register("email")}
              className="border rounded w-full py-2 px-3 mb-2"
              type="email"
              name="email"
              id="email"
              placeholder="jhondoe@gmail.com"
            />
            {errors.email && (<div className="text-red-500 mb-4">{errors.email.message}</div>)}
          </div>
        </fieldset>

        <fieldset>
          <legend className="mb-2 block text-xl font-bold text-center">Set a password</legend>
          <div className="mb-4">
            <label htmlFor="password">Type a strong password</label>
            <input
              {...register("password")}
              className="border rounded w-full py-2 px-3 mb-2"
              type="password"
              id="password"
              name="password"
              required
            />
            {errors.password && (<div className="text-red-500 mb-4">{errors.password.message}</div>)}
          </div>
          <div className="mb-4"><label htmlFor="retypePassword">Retype the password</label>
            <input
              {...register("retypePassword")}
              className="border rounded w-full py-2 px-3 mb-2"
              type="password"
              id="retypePassword"
              name="retypePassword"
              placeholder="Jhon Doe"
              required
            />
            {errors.retypePassword && (<div className="text-red-500 mb-4">{errors.retypePassword.message}</div>)}
          </div>
          <input type="submit" value="Login" className={clsx(
            "transition ease-in-out duration-150 rounded-xl px-4 py-2 w-full mb-4",
            createUserMutation.isPending
              ? "disabled:cursor-not-allowed bg-slate-500"
              : "bg-[#62cff4] font-medium text-center hover:bg-[#54b4d4]"
          )} disabled={createUserMutation.isPending} />

          {errors.root && (<div className="text-red-500">{errors.root.message}</div>)}
        </fieldset>
        <fieldset className="mt-2">
          <p className="text-center">Already got an account? <a href="/login" className="text-[#62cff4] underline">login</a></p>
        </fieldset>
      </form>
    </section>
  )
}
