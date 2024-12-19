import Link from 'next/link'

interface Props {
    action?: () => void
}

const NavbarLinks: React.FC<Props> = ({ action }) => {
    return (
        <div className=''>
            <ul className='flex flex-col md:flex-row items-center gap-x-12 font-medium text-lg'>
                <li onClick={action} >
                    <Link href={"/category/men"}>Men</Link>
                </li>
                <li onClick={action} >
                    <Link href={"/category/women"}>Women</Link>
                </li>
                <li onClick={action} >
                    <Link href={"/product"}>All</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavbarLinks