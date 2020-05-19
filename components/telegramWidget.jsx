const TelegramWidget = () => {
  return (
    <div className="fixed bottom-0 right-0 z-50 pb-8 pr-8">
      <a href="https://t.me/naquiuddin1" className="block bg-teal-900 rounded-full telegram-shadow">
        <img className="w-12 h-12 rounded-full" src="/img/telegram-logo.svg" title="chat with me"/>
      </a>
    </div>
  );
};

export default TelegramWidget;
