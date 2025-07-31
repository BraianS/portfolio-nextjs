import React from 'react';

interface NavigationProps {
    items: string[];
    className?: string;
    itemClassName?: string;
    linkClassName?: string;
}

export const Navigation = ({
    items,
    className = '',
    itemClassName = '',
    linkClassName = ''
}: NavigationProps) => {
    return (
        <nav className={className}>
            <ul className={`flex flex-wrap gap-6 ${className}`}>
                {items.map((item) => (
                    <li key={item} className={itemClassName}>
                        <a href={`#${item.toLowerCase()}`} className={`text-gray-600
                             hover:text-gray-900 dark:text-gray-400 dark:hover:text-white 
                                transition-colors duration-200 ${linkClassName} ${linkClassName}`}>
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}