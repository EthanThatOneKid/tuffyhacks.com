const swEffect = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('/sw.js').then(
        async registration => {
          console.log('Service Worker registration successful with scope: ', registration.scope);
        },
        async err => {
          console.log('Service Worker registration failed: ', err);
        }
      );
    });
  }
};

export default swEffect;
