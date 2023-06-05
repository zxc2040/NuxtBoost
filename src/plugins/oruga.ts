import Oruga from '@oruga-ui/oruga-next'
import IconAdaptor from '~/oruga/IconAdaptor.vue';
// import '@oruga-ui/oruga-next/dist/oruga.css'
// import '@oruga-ui/oruga-next/dist/oruga-full.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp
    .component('icon-adaptor', IconAdaptor)
    .use(Oruga, {
      iconComponent: 'icon-adaptor',
      customIconPacks: {
        mdi: {
          sizes: {
              'default': '24px',
              'small': null,
              'medium': '36px',
              'large': '48px'
          },
          iconPrefix: '',
        }
      }
    });
})