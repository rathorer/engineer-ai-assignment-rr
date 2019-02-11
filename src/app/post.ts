export class Post {
    author: string;
    comment_text: string;
    created_at: Date;
    created_at_i: Int32Array;
    num_comments: Int16Array;
    objectID: Number;
    parent_id: Number;
    points: Int8Array;
    story_id: Number;
    story_text: string;
    story_title: string;
    story_url: string;
    title: string
    url: string;
    _highlightResults: object;
    _tags: string[];

    constructor() {

    }
}