'use client';

import { SearchIcon } from '@/components/SVG';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

const SearchBar = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = (term) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }

        replace(`${pathname}?${params.toString()}`);
    };

    return (
        <div className="relative">
            <span className="absolute left-2 top-1/2 -translate-y-1/2">
                <SearchIcon />
            </span>
            <input
                type="search"
                className="outline-none text-xl font-normal pl-12 pr-5 py-2 border border-gray-300 rounded-full w-full focus:ring focus:ring-indigo-600 transition-all duration-300"
                placeholder="Search product..."
                defaultValue={searchParams.get('query')?.toString()}
                onChange={(e) => handleSearch(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;
