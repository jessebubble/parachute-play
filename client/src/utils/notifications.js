export function Notifcations(setter) {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 2000);
}
