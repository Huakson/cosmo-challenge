export declare class Group {
    readonly id: string;
    name: string;
    description: string;
    constructor(props: Omit<Group, 'id'>, id?: string);
}
