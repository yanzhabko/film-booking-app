import { FC } from "react";

const About: FC = () => {
  return (
    <section className="flex flex-col gap-2  mt-[60px]">
      <h1 className="font-bold text-[22px] text-start w-full">Про нас</h1>
      <div className="flex flex-col items-center gap-[10px] h-[200px]">
        <div className="bg-white flex-1 h-full px-[10px] py-[15px] rounded-lg shadow-lg">
          <p className="font-bold text-[22px] text-start w-full">Наша місія</p>
          <p className="font-semibold text-[18px]">
            Ми створили платформу, щоб полегшити процес запису на перегляд
            фільмів. Нашим головним завданням є забезпечити простоту та
            зручність для всіх кіноманів, дозволяючи вам без зайвих труднощів
            забронювати квитки на найбільш актуальні сеанси в кінотеатрах.
          </p>
        </div>
        <div className="bg-white w-full flex-1  h-full px-[10px] py-[15px]  rounded-lg shadow-lg">
          <p className="font-bold text-[22px] text-start w-full">
            Зручний процес реєстрації та бронювання{" "}
          </p>
          <p className="font-semibold text-[16px]">
            Легко реєструйтеся на сайті та бронюйте місця на сеанси без зайвих
            кроків. Наш інтерфейс інтуїтивно зрозумілий, що дозволяє вам за
            кілька кліків забронювати квиток на будь-який фільм.
          </p>
        </div>
        <div className="bg-white w-full flex-1  h-full px-[10px] py-[15px]  rounded-lg shadow-lg">
          <p className="font-bold text-[22px] text-start w-full">
            Інтерактивний сервіс
          </p>
          <p className="font-semibold text-[16px]">
            Ми пропонуємо вам не тільки реєстрацію на перегляд фільмів, але й
            можливість ділитися своїми враженнями, залишати відгуки та обирати
            сеанси за зручним часом.
          </p>
        </div>
        <div className="bg-white w-full flex-1  h-full px-[10px] py-[15px]  rounded-lg shadow-lg">
          <p className="font-bold text-[22px] text-start w-full">
            Команда професіоналів
          </p>
          <p className="font-semibold text-[16px]">
            Наша команда працює над тим, щоб ваш досвід на сайті був максимально
            комфортним. Ми постійно покращуємо сервіс, щоб зробити його швидким,
            зручним і приємним для вас.
          </p>
        </div>
        <div className="bg-white flex-1 w-full h-full px-[10px] py-[15px]  rounded-lg shadow-lg">
          <p className="font-bold text-[22px] text-start">
            Безпека та конфіденційність
          </p>
          <p className="font-semibold text-[16px]">
            Ми цінуємо вашу конфіденційність і забезпечуємо максимальний захист
            ваших особистих даних, гарантуючи безпечну реєстрацію та оплату
            через сайт.
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;
