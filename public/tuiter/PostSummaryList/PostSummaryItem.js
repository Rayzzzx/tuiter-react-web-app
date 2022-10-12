const PostSummaryItem = (post) => {
    return (`
        <li class="list-group-item">
            <div class="row border-secondary pb-2">
                <div class="col-9">
                    <div class="text-secondary">
                        ${post.topic}
                    </div>
                    <div class="fw-bolder">
                        ${post.userName} <i class="fa-solid fa-circle-check"></i><span
                            class="text-secondary"> - ${post.time}</span>
                    </div>
                    <div class="fw-bolder">
                        ${post.title}
                    </div>
                </div>
                <div class="col-3">
                    <img class="float-end rounded" height="80px" width="80px"
                         src=${post.image}>
                </div>
            </div>
        </li>
    `)
}

export default  PostSummaryItem;