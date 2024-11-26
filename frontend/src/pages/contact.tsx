import { FC } from "react";

const Contact: FC = () => {
  return (
    <section className="flex flex-col gap-2  mt-[60px]">
      <div className="bg-white flex-1  h-full px-[10px] py-[15px]  rounded-lg shadow-lg">
        <h1 className="font-bold text-[22px] text-start w-full">
          Зяв'язок з нами
        </h1>
        <p>
          Ми завжди раді допомогти вам! Якщо у вас є питання, пропозиції або ви
          хочете дізнатися більше про наші послуги, будь ласка, не соромтеся
          зв'язатися з нами.
        </p>
      </div>
      <div className="flex items-center gap-[10px] h-[200px]">
        <div className="bg-white flex-1 h-full px-[10px] py-[15px] rounded-lg shadow-lg">
          <h1 className="font-bold text-[22px] text-start w-full">
            Контактна іфромація
          </h1>
          <div>
            <p className="font-semibold text-[18px]">Адреса</p>
            <p>м. Хуст вул. Центральна 2а</p>
          </div>
          <div className="flex gap-5">
            <div>
              <p className="font-semibold text-[18px]">Телефон</p>
              <p>+38 (050) 161 3669</p>
              <p>м. +38 (050) 161 3669</p>
            </div>
            <div>
              <p className="font-semibold text-[18px]">Електронна адреса</p>
              <p>kinopalec@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="bg-white flex-1  h-full px-[10px] py-[15px]  rounded-lg shadow-lg">
          <h1 className="font-bold text-[22px] text-start w-full">
            Робочі дні
          </h1>
          <p className="font-semibold text-[16px]">
            Робочі дні: ПН-ПТ 9.00-18.00
          </p>
          <p className="font-semibold text-[16px]">Вихідні: СБ, НД</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
