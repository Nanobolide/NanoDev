import {
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  SwatchIcon,
  PhotoIcon,
  VideoCameraIcon,
  ServerIcon,
} from '@heroicons/vue/24/outline'
import { serviceImages } from './serviceImages'

export const services = [
  {
    id: 'web',
    title: 'Développement Web',
    icon: ComputerDesktopIcon,
    image: serviceImages.web,
    description:
      'Conception de solutions web modernes, sécurisées et évolutives adaptées aux entreprises, administrations, ONG et entrepreneurs. Nous construisons des plateformes performantes, faciles à utiliser et prêtes à évoluer avec votre activité.',
    prestations: [
      'Sites vitrines',
      'Applications web métier',
      'ERP & CRM',
      'Plateformes e-commerce',
      'API & intégrations',
      'Maintenance évolutive',
    ],
  },
  {
    id: 'mobile',
    title: 'Développement Mobile',
    icon: DevicePhoneMobileIcon,
    image: serviceImages.mobile,
    description:
      'Développement d\'applications Android et iOS performantes, intuitives et adaptées aux besoins de votre activité. Vos utilisateurs accèdent à vos services partout, avec une expérience fluide sur smartphone et tablette.',
    prestations: [
      'Applications Android & iOS',
      'Applications métier',
      'Géolocalisation',
      'Applications connectées',
    ],
  },
  {
    id: 'design',
    title: 'Design Graphique',
    icon: SwatchIcon,
    image: serviceImages.design,
    description:
      'Création d\'une identité visuelle professionnelle pour valoriser votre entreprise et vos supports de communication. Nous concevons des visuels cohérents qui renforcent votre image et inspirent confiance à vos clients.',
    prestations: [
      'Logo',
      'Charte graphique',
      'Flyers & affiches',
      'Cartes de visite',
      'Bannières publicitaires',
      'UI/UX Design',
    ],
  },
  {
    id: 'photo',
    title: 'Montage Photo',
    icon: PhotoIcon,
    image: serviceImages.photo,
    description:
      'Création et retouche de visuels professionnels adaptés au web, aux réseaux sociaux et à l\'impression. Des images soignées qui mettent en valeur votre marque sur tous vos canaux de communication.',
    prestations: [
      'Retouche photo',
      'Détourage',
      'Photomontage',
      'Visuels publicitaires',
      'Optimisation réseaux sociaux',
    ],
  },
  {
    id: 'video',
    title: 'Montage Vidéo',
    icon: VideoCameraIcon,
    image: serviceImages.video,
    description:
      'Production de vidéos professionnelles pour promouvoir votre activité et renforcer votre communication. Du montage au motion design, nous créons des contenus engageants pour vos campagnes et vos réseaux sociaux.',
    prestations: [
      'Publicités',
      'Présentations d\'entreprise',
      'Réseaux sociaux',
      'Motion Design',
      'Sous-titrage',
    ],
  },
  {
    id: 'maintenance',
    title: 'Maintenance Informatique',
    icon: ServerIcon,
    image: serviceImages.maintenance,
    description:
      'Accompagnement technique pour assurer la stabilité, la sécurité et la performance de vos outils informatiques. Nous intervenons en préventif comme en curatif pour que votre parc reste opérationnel au quotidien.',
    prestations: [
      'Maintenance préventive',
      'Dépannage',
      'Support technique',
      'Sécurisation',
      'Sauvegarde des données',
      'Installation et configuration Office / Windows / Antivirus',
    ],
  },
]
