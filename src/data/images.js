/**
 * Images — banques gratuites (Pexels)
 * Licence : https://www.pexels.com/license/ — usage commercial autorisé, sans attribution obligatoire.
 *
 * Toutes les photographies représentent des personnes noires africaines
 * en contexte professionnel, technologique ou entrepreneurial.
 */

const pexels = (id, width = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`

export const images = {
  /** Hero — développeuse concentrée sur ordinateur portable */
  hero: {
    src: pexels(9429372),
    alt: 'Femme noire concentrée travaillant sur un ordinateur portable',
    credit: 'Pexels / Monstera Production',
    url: 'https://www.pexels.com/photo/focused-black-woman-working-on-laptop-remotely-9429372/',
  },

  /** À propos — entrepreneure au travail (laptop & smartphone) */
  about: {
    src: pexels(6457556),
    alt: 'Femme noire professionnelle utilisant un ordinateur et un smartphone',
    credit: 'Pexels / Alexander Suhorucov',
    url: 'https://www.pexels.com/photo/positive-black-woman-communicating-on-smartphone-while-using-laptop-6457556/',
  },

  /** Équipe — réunion professionnelle en Afrique (Lagos) */
  team: {
    src: pexels(30689114),
    alt: 'Équipe de professionnels africains en réunion de travail avec un ordinateur',
    credit: 'Pexels / Ninthgrid',
    url: 'https://www.pexels.com/photo/team-collaboration-meeting-in-lagos-office-30689114/',
  },

  /** Développeur — freelance sur ordinateur */
  developer: {
    src: pexels(5749152),
    alt: 'Développeur africain travaillant sur un ordinateur portable',
    credit: 'Pexels / Zen Chung',
    url: 'https://www.pexels.com/photo/african-american-male-freelancer-on-laptop-in-bright-room-5749152/',
  },

  /** Entrepreneur — dirigeant en bureau moderne */
  entrepreneur: {
    src: pexels(5668878),
    alt: 'Homme noir professionnel utilisant un ordinateur portable en bureau',
    credit: 'Pexels / Sora Shimazaki',
    url: 'https://www.pexels.com/photo/positive-ethnic-boss-using-laptop-in-light-office-5668878/',
  },

  /** Mobile — entrepreneure connectée */
  mobile: {
    src: pexels(5239740),
    alt: 'Femme noire entrepreneure travaillant avec un smartphone et un ordinateur',
    credit: 'Pexels / Anete Lusina',
    url: 'https://www.pexels.com/photo/crop-ethnic-businesswoman-chatting-on-smartphone-near-laptop-on-table-5239740/',
  },

  /** Open Graph / réseaux sociaux */
  og: {
    src: pexels(30689114, 1200),
    alt: 'Équipe africaine collaborant sur un projet numérique',
    credit: 'Pexels / Ninthgrid',
    url: 'https://www.pexels.com/photo/team-collaboration-meeting-in-lagos-office-30689114/',
  },
}
