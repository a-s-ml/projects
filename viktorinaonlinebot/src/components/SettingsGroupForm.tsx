export default function SettingsGroupForm() {
  const tg = window.Telegram.WebApp;
  function toggle() {
    tg.HapticFeedback.selectionChanged();
  }
  return (
    <form>
      <input
        onChange={() => toggle()} 
        type="range"
        className="transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200"
        min="0"
        max="5"
        step="0.5"
      />
    </form>
  );
}
