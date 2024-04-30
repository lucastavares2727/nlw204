import { ComponentProps } from "react"

interface NavLinkProps extends ComponentProps < 'a' > {
    children : string
    href:string
}

export function NavLink(props: NavLinkProps) {
    return (
        <a {...props} className="font-medium text-sm text-white hover:bg-slate-800">

            {props.children}
        </a>

    )
}