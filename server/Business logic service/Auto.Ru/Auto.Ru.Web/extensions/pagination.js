function paginate(request){
    var size = Number(request.query.size) || 15;
    var page = Number(request.query.page) || 1;
    return {
        offset: size * (page - 1),
        page: page,
        size: size
    }
}

function generatePaginationResponse(items, pagination){
    return {
        items: {
            attributes: items.rows
        },
        paginationContext: {
            page: pagination.page,
            totalItems: items.count,
            size: pagination.size,
            pagesCount: Math.ceil(items.count / pagination.size)
        }
    }
}

module.exports = {paginate, generatePaginationResponse};