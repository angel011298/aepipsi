export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: '/',
    },
    {
      text: 'Servicios',
      href: '/#servicios',
    },
    {
      text: 'Nuestro Equipo',
      href: '/#equipo',
    },
    {
      text: 'Contacto',
      href: '#footer',
    },
  ],
  actions: [{
    variant: 'primary',
    text: 'Agendar Cita',
    href: 'https://wa.me/521XXXXXXXXXX', // REEMPLAZA CON TU NÚMERO
    target: '_blank'
  }],
};

export const footerData = {
  links: [],
  secondaryLinks: [
    { text: 'Aviso de Privacidad', href: '/privacy' },
  ],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: 'https://wa.me/521XXXXXXXXXX' },
  ],
  footNote: '© 2026 AEPI · Amar y Educar con Psicología Integral. Todos los derechos reservados.',
};