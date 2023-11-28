import { Icon } from "@iconify/react"
import { NavItem } from "./types"

export const NAV_ITEMS: NavItem[] = [
    {
        title: 'inicio',
        path: '/',
        icon: <Icon icon='lucide:home' width='18' height='18' />
    },
    {
        title: 'nosotros',
        path: '/about',
        icon: <Icon icon='lucide:info' width='18' height='18' />
    },
    {
        title: 'proyectos',
        path: '/proyectos',
        icon: <Icon icon='lucide:folder' width='18' height='18' />,
        submenu: true,
        subMenuItems: [
            {title: '→ Cocinar la revolución en América', path: '/proyectos/cocinar-la-rev'}
        ]
    },
    {
        title: 'contacto',
        path: '/contacto',
        icon: <Icon icon='lucide:plug-2' width='18' height='18' />
    }
]