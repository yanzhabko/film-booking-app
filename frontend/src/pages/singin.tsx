import { useAuth } from "../providers/AuthProvider";
import { useForm } from "react-hook-form";
import Input from "../component/Input";
import Error from "../component/error";

type SingInType = {
  username: string;
  password: string;
};

function SingIn() {
  const { user, login } = useAuth();
  const { register, handleSubmit } = useForm<SingInType>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async ({ password, username }: SingInType) => {
    await login(username, password);
  };

  if (user) {
    return <Error />;
  }

  return (
    <section className="h-[calc(100vh-230px)] flex flex-col justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto flex flex-col gap-5 justify-center items-center bg-white rounded-lg shadow-lg md:w-[calc(100%-40%)] xl:w-[40%] p-10"
      >
        <h1 className="font-semibold text-2 sm:text-3 lg:text-4">
          Авторизація
        </h1>
        <Input label="Ім'я" {...register("username")} />
        <Input label="Пароль" {...register("password")} />
        <button
          type="submit"
          className="px-4 mt-2 py-2 cursor-pointer text-center w-auto text-2 lg:text-3 lg:px-5 lg:py-1 xl:px-10 rounded-lg text-white font-semibold bg-orange-500 hover:opacity-80"
        >
          Увійти
        </button>
      </form>
    </section>
  );
}

export default SingIn;
