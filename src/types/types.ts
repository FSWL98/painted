import React from "react";

export type Lesson = {
    id: number,
    name: string,
    title: string,
    videos: string[],
    references: string[],
    results: string[],
    tags: string[]
};

export type State = {
    shown: Lesson[],
    favorites: Lesson[],
};

export type ProviderProps = {children: React.ReactNode}

export type Action = {
    type: string,
    id?: number,
    searchQuery?: string,
};

export type Dispatch = (action: Action) => void;