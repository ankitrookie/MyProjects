import { HomeIcon, MixerVerticalIcon, GearIcon, DashboardIcon, IdCardIcon } from '@radix-ui/react-icons'

export const menuOption = [
  { name: 'Dashboard', Component: HomeIcon, href: '/dashboard' },
  { name: 'Workflows', Component: MixerVerticalIcon, href: '/workflows' },
  { name: 'Settings', Component: GearIcon, href: '/settings' },
  { name: 'Connections', Component: DashboardIcon, href: '/connections' },
  { name: 'Billing', Component: IdCardIcon, href: '/billing' },
  // { name: 'Templates', Component: Templates, href: '/templates' },
  // { name: 'Logs', Component: Logs, href: '/logs' },
]
