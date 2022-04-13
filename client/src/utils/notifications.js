export function Notifications(setter) {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 1000);
}
