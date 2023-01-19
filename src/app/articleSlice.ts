import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

type Article = {
    "id": number,
    "featured": boolean,
    "title": string,
    "url": string,
    "imageUrl": string,
    "newsSite": string,
    "summary": string,
    "publishedAt": string,
    "launches": Array<Object>,
    "events": Array<Object>
}

type ArticleState = {
    list: Article[];
    loading: boolean;
    error: string | null;
}

export const fetchArticles = createAsyncThunk<Article[], undefined, { rejectValue: string }>(
    'articles/fetchArticles',
    async function () {

        const response = await fetch("https://api.spaceflightnewsapi.net/v3/articles?_limit=100");

        if (!response.ok) {
            throw new Error('Server Error!');
        }

        const data = await response.json();

        return data;
    }
)

const initialState: ArticleState = {
    list: [],
    loading: false,
    error: null,
}

export const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticles.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchArticles.fulfilled, (state, action: PayloadAction<Article[]>) => {
                state.list = action.payload
                state.loading = false;
                state.error = null;
            })
    },
})

export default articleSlice.reducer