import React, { ReactNode, useState } from 'react';
import * as HoverCard from '@radix-ui/react-hover-card';
import { styled, keyframes } from '@stitches/react';
import MarkdownRenderer from '../../MarkdownRender';

interface CustomHoverCardProps {
    trigger: ReactNode;
    text: string;
}

const CustomHoverCard: React.FC<CustomHoverCardProps> = ({ trigger, text }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleTouchStart = (event: React.TouchEvent) => {
        event.preventDefault(); // Prevent default touch behavior
        setIsOpen(!isOpen);
    };

    return (
        <HoverCard.Root open={isOpen} onOpenChange={setIsOpen}>
            <HoverCard.Trigger asChild>
                <TriggerWrapper onTouchStart={handleTouchStart}>
                    {trigger}
                </TriggerWrapper>
            </HoverCard.Trigger>
            <HoverCard.Portal>
                <HoverCardContent sideOffset={5}>
                    <ScrollContainer>
                        <MarkdownRenderer content={text} />
                    </ScrollContainer>
                    <HoverCardArrow />
                </HoverCardContent>
            </HoverCard.Portal>
        </HoverCard.Root>
    );
};

const slideUpAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateY(2px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateX(-2px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateY(-2px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateX(2px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' },
});

const HoverCardContent = styled(HoverCard.Content, {
    borderRadius: 6,
    padding: 20,
    width: 300,
    backgroundColor: 'white',
    boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
        '&[data-side="top"]': { animationName: slideDownAndFade },
        '&[data-side="right"]': { animationName: slideLeftAndFade },
        '&[data-side="bottom"]': { animationName: slideUpAndFade },
        '&[data-side="left"]': { animationName: slideRightAndFade },
    },
});

const HoverCardArrow = styled(HoverCard.Arrow, {
    fill: 'white',
});

const TriggerWrapper = styled('span', {
    fontFamily: '"Noto Sans", sans-serif',
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '26px',
    cursor: 'help',
    textDecoration: 'underline dotted',
    color: '#281015',
    '&:hover': {
        color: '#281015',
    },
});

const ScrollContainer = styled('div', {
    maxHeight: 150, // adjust this value as needed
    overflowY: 'auto',
    paddingRight: 10,
});

const Text = styled('div', {
    margin: 0,
    color: '#475467',
    fontSize: 12, // smaller font size for legal text
    lineHeight: 1.5,
    variants: {
        bold: {
            true: { fontWeight: 500 },
        },
    },
});

const Flex = styled('div', { display: 'flex' });

export default CustomHoverCard;


