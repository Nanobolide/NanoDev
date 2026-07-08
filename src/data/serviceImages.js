/**
 * Illustrations par service — Pexels (personnes noires africaines, contexte pro/tech)
 */
const pexels = (id, width = 800) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`

export const serviceImages = {
  web: { src: pexels(5749152), alt: 'Développeur africain travaillant sur une solution web' },
  mobile: { src: pexels(5239740), alt: 'Professionnelle africaine utilisant un smartphone et un ordinateur' },
  design: { src: pexels(9429372), alt: 'Créatrice africaine travaillant sur un projet de design' },
  photo: { src: pexels(6457556), alt: 'Professionnelle africaine préparant des visuels numériques' },
  video: { src: pexels(30689114), alt: 'Équipe africaine collaborant sur un projet vidéo' },
  maintenance: { src: pexels(5668878), alt: 'Technicien africain en environnement de bureau moderne' },
}
