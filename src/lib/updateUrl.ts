import { navigate } from 'gatsby';

export default function updateUrl(url: string) {
  // ! for this, a way to extract the hash each time the url is replaced must be made
  // if (typeof window !== undefined) {
    // window.history.replaceState('', 'Avila Tek', url);
  // }
  navigate(url, { replace: true });
  return;
}
