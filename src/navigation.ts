export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: '/',
    },
    {
      text: 'Próximos Eventos',
      href: '/#eventos',
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
      text: 'Artículos',
      href: '/articulos',
    },
    {
      text: 'Ubicación',
      href: '/#ubicacion',
    },
  ],
  actions: [{
    variant: 'primary',
    text: 'Agendar Cita',
    href: 'https://wa.me/525520381691',
    target: '_blank'
  }],
};

export const footerData = {
  links: [],
  secondaryLinks: [
    { text: 'Aviso de Privacidad', href: '/privacy' },
  ],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/aepi.sociedad' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/contagiandobienestar' },
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: 'https://wa.me/525520381691' },
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:aepi.sociedad@gmail.com' },
  ],
  footNote: '© 2026 AEPI · Amar y Educar con Psicología Integral. Todos los derechos reservados.',
};