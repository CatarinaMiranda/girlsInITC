export interface FeedItem {
    id: number;
    url: string;
    caption: string;
    numberOfLikes: number;
    user: string;
}

export const feedItemMocks: FeedItem[] = [
    {
    id: 0,
    url: '/assets/mock/xander0.jpg',
    caption: 'Such a cute pup',
    numberOfLikes: 1,
    user: "test"
    },
    {
    id: 0,
    url: '/assets/mock/xander1.jpg',
    caption: 'Who\'s a good boy?',
    numberOfLikes: 2,
    user: "test"
    },
    {
    id: 0,
    url: '/assets/mock/xander2.jpg',
    caption: 'Majestic.',
    numberOfLikes: 6,
    user: "test"
    }
];
