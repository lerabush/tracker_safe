import de from './de';
import en from './en';
import fr from './fr';
import ru from './ru';

const locales = [de, en, fr, ru];

export default locales;

export const languages = locales.map((locale) => locale.language);

export const embeddedLocales = locales.reduce(
  (result, locale) => ({
    ...result,
    [locale.language]: locale.embeddedLocale,
  }),
  {},
);
