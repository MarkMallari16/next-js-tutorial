import React from 'react'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from '../ui/navigation-menu'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='mt-2 flex justify-center list-none'>
            <NavigationMenu >
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href="/docs">Documentation</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href="/docs">Documentation</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href="/docs">Documentation</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenu>
        </div>
    )
}

export default Navbar