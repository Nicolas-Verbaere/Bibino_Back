import axios from 'axios';

export async function requestsApi({ search, page, perPage = 9 }) {
    try {
        const result = await axios.get(
            'https://api.github.com/search/repositories',
            {
                params: {
                    q: search, // ajoute un parametre d'url q=${searchValue}
                    sort: 'stars',
                    order: 'desc',
                    page,
                    per_page: perPage
                }
            }
        );
        return result.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
}
