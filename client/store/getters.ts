
export default {
    // ids of the items that should be currently displayed based on
    // current list type and current pagination
    activeIds(state) {
        const { activeType, itemsPerPage, lists } = state;

        if (!activeType) {
            return [];
        }

        const page = Number(state.route.params.page) || 1;
        const start = (page - 1) * itemsPerPage;
        const end = page * itemsPerPage;

        return lists[ activeType ].slice(start, end);
    },

};
