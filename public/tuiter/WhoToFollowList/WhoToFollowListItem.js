const WhoToFollowListItem = (who) => {
    return (`
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-2">
                    <img class="rounded-circle" width="50px" src=${who.avatarIcon}>
                </div>
                <div class="col-7">
                    <div class="fw-bolder">
                        ${who.userName} <i class="fa-solid fa-circle-check"></i>
                    </div>
                    <div>
                        @${who.handle}
                    </div>
                </div>
                <div class="col-3">
                    <button class="btn btn-primary rounded-pill mt-2">Follow</button>
                </div>
            </div>
        </div>
    `)
};

export default WhoToFollowListItem;