import Logo from '../../assets/Logo.png';
export function PromoPage() {
  return (
    <div className="text-center">
      <img className="mx-auto h-12 w-12" src={Logo} alt="https://80q.ru" />
      <h2 className="mt-2 text-base font-semibold leading-6 text-[var(--tg-theme-accent-text-color)]">
        ViktorinaOnlineBot
      </h2>
      <p className="mt-1 text-sm text-[var(--tg-theme-hint-color)]">
        Бот проводит викторины в группах/каналах используя собственную базу
        вопросов и вопросы, заданные участниками викторины
      </p>
    </div>
  );
}
