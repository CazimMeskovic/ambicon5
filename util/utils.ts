export const formatDate = (date: Date) => {
    const d = new Date(date);
    // dd.mm.yyyy
    return `${d.getDate()}.${d.getMonth()}.${d.getFullYear()}`;
};

export const getRandomColor = () => {
    // color-bg-1 -- color-bg-10

    const random = Math.floor(Math.random() * 10) + 1;
    return `color-bg-${random}`;
};

export const getShareUrlFacebook = (url: string) => {
    return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
};

export const getShareUrlTwitter = (url: string) => {
    return `https://twitter.com/intent/tweet?url=${url}`;
};

export const getShareUrlLinkedin = (url: string) => {
    return `https://www.linkedin.com/shareArticle?url=${url}`;
};
