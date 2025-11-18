import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownSection,
    DropdownItem,
    Avatar,
    Image,
} from '@heroui/react';
import Link from 'next/link';

const UserDropdown = ({ user, signOut, selectedTheme, handleThemeChange }) => (
    <Dropdown
        placement="bottom-end"
        className="border-gray-200 dark:text-white dark:bg-black"
    >
        <DropdownTrigger className="cursor-pointer">
            <Avatar
                isBordered
                as="button"
                className="transition-transform w-7 h-7"
                color="secondary"
                name={user?.user_metadata?.name ?? 'User'}
                size="sm"
                src={
                    user?.user_metadata?.avatar_url ??
                    'https://i.pravatar.cc/150?u=a04258a2462d826712d'
                }
            />
        </DropdownTrigger>

        <DropdownMenu
            aria-label="User menu"
            className="p-3"
            disabledKeys={['profile']}
            itemClasses={{
                base: [
                    'rounded-md',
                    'transition-opacity',
                    'data-[hover=true]:text-foreground',
                    'dark:data-[hover=true]:text-white',
                    'data-[hover=true]:bg-default-100',
                    'dark:data-[hover=true]:bg-gray-700',
                    'data-[selectable=true]:focus:bg-default-50',
                    'data-[pressed=true]:opacity-70',
                    'data-[focus-visible=true]:ring-default-500',
                ],
            }}
        >
            {/* Profile Section */}
            <DropdownSection showDivider aria-label="Profile & Actions">
                <DropdownItem
                    key="profile"
                    isReadOnly
                    className="h-14 gap-2"
                    textValue={user?.user_metadata?.name ?? 'John Doe'}
                >
                    <div className="flex gap-2">
                        <Image
                            isZoomed
                            className="rounded-full"
                            alt="user profile"
                            src={
                                user?.user_metadata?.avatar_url ??
                                'https://i.pravatar.cc/150?u=a04258a2462d826712d'
                            }
                            width={32}
                            height={32}
                        />
                        <div className="flex flex-col font-semibold">
                            <span>
                                {user?.user_metadata?.name ?? 'John Doe'}
                            </span>
                            <span>
                                {user?.user_metadata?.email ??
                                    'example@gmail.com'}
                            </span>
                        </div>
                    </div>
                </DropdownItem>
            </DropdownSection>

            {/* Preferences */}
            <DropdownSection aria-label="Preferences">
                <DropdownItem key="settings">
                    <Link className="block" href="profile">
                        Profile
                    </Link>
                </DropdownItem>
                <DropdownItem
                    key="theme"
                    isReadOnly
                    className="cursor-default"
                    endContent={
                        <select
                            id="theme"
                            name="theme"
                            value={selectedTheme}
                            onChange={handleThemeChange}
                            className="z-10 outline-none w-16 py-0.5 rounded-md border border-default-300 dark:bg-gray-950 dark:text-white dark:border-default-500 bg-transparent text-tiny text-default-500"
                        >
                            <option value="system">System</option>
                            <option value="dark">Dark</option>
                            <option value="light">Light</option>
                        </select>
                    }
                >
                    Theme
                </DropdownItem>
            </DropdownSection>

            {/* Logout */}
            <DropdownSection aria-label="Help & Feedback">
                <DropdownItem key="logout" color="danger" onClick={signOut}>
                    Log Out
                </DropdownItem>
            </DropdownSection>
        </DropdownMenu>
    </Dropdown>
);

export default UserDropdown;
