import { motion, useAnimation } from 'motion/react';

const lineVariants = {
    normal: {
        pathLength: 1,
        opacity: 1,
    },
    animate: {
        pathLength: [0, 1],
        opacity: [0.3, 1],
        transition: {
            duration: 0.8,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatDelay: 0.5,
        },
    },
};

const BarIcon = ({
    width = 24,
    height = 24,
    strokeWidth = 2,
    stroke = '#99a1af',
    ...props
}) => {
    const controls = useAnimation();

    return (
        <div
            style={{
                cursor: 'pointer',
                userSelect: 'none',
                padding: '0px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            onMouseEnter={() => controls.start('animate')}
            onMouseLeave={() => controls.start('normal')}
        >
            <svg
                className="w-8 h-8 text-gray-200 dark:text-white"
                xmlns="http://www.w3.org/2000/svg"
                width={width}
                height={height}
                viewBox="0 0 24 24"
                fill="none"
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
                {...props}
            >
                <motion.path
                    d="M17 12H7"
                    variants={lineVariants}
                    animate={controls}
                    initial="normal"
                    custom={0}
                />
                <motion.path
                    d="M19 18H5"
                    variants={lineVariants}
                    animate={controls}
                    initial="normal"
                    custom={1}
                />
                <motion.path
                    d="M21 6H3"
                    variants={lineVariants}
                    animate={controls}
                    initial="normal"
                    custom={2}
                />
            </svg>
        </div>
    );
};

export default BarIcon;
