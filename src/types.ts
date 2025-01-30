export interface IReview {
    id?: string;
    name: string;
    text: string;
    rating: number;
}

export interface IModalActions {
    openModal: () => void;
    closeModal: () => void;
}