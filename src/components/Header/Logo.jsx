import Image from 'next/image';
import Link from 'next/link';

const Logo = ({ className = '' }) => (
    <Link href="/">
        <Image
            priority
            src="/logo.png"
            alt="Logo"
            width={140}
            height={50}
            className={className}
        />
    </Link>
);
export default Logo;
