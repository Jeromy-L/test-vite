
export function createAction(options) {
    const api = {
        get:(a)=>{
            return new Promise((res, rej) => {
                return {success:1}
            })
        }};
    return {

        FETCH_DATA: ({commit}) => {
            const url = '/mock/cgi/data';
            return api.get(url).then(response => {

            });
        },

    };
}
