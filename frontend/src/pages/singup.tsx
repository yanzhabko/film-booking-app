import { useAuth } from "../providers/AuthProvider";
import { useForm } from "react-hook-form";
import Input from "../component/Input";
import Error from "../component/error";
import { Link } from "react-router-dom";

type SingUpType = {
  username: string;
  password: string;
  confirmedPassword: string;
};

function SingUp() {
  const { user, register: registerUser } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SingUpType>({
    defaultValues: {
      username: "",
      password: "",
      confirmedPassword: "",
    },
  });
  const password = watch("password");
  const onSubmit = async ({ password, username }: SingUpType) => {
    await registerUser(username, password);
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
        <h1 className="font-semibold text-2 sm:text-3 lg:text-4">Реєстрація</h1>
        <Input
          label="Ім'я"
          {...register("username", {
            required: true,
            minLength: {
              message: "Мінімальна довжина 2 символи",
              value: 2,
            },
          })}
          error={errors.username?.message}
          required
        />
        <Input
          label="Пароль"
          {...register("password", {
            minLength: {
              message: "Мінімальна довжина 2 символи",
              value: 3,
            },
            required: true,
          })}
        />
        <Input
          label="Повторити пароль"
          {...register("confirmedPassword", {
            validate: (value) => value === password || "Паролі не співпадають",
            required: true,
            minLength: {
              message: "Мінімальна довжина 2 символи",
              value: 2,
            },
          })}
          error={errors.username?.message}
          required
        />
        <button
          type="submit"
          className="px-4 mt-2 py-2 cursor-pointer text-center w-auto text-2 lg:text-3 lg:px-5 lg:py-1 xl:px-10 rounded-lg text-white font-semibold bg-orange-500 hover:opacity-80"
        >
          Зареєструватись
        </button>
        <p className="text-xs text-center flex gap-[5px]">
          Вже маєте аккаунт?
          <Link className="text-red-500 hover:underline" to="/singin">
            Увійти
          </Link>
        </p>
      </form>
    </section>
  );
}

export default SingUp;
