const postItem = (post) => {
  return `
        <li class="list-group-item">
            <div class="row">
                <div class="col-1">
                    <img class="rounded-circle" style="width: 45px" src=${
                      post.avatarIcon
                    }>
                </div>
                <div class="col-11">
                    <div class="row">
                        <div class="row pe-0">
                            <div class="col-11">
                                <span class="fw-bolder">${post.userName}</span> 
                                <i class="fa-solid fa-circle-check"></i>
                                <span class="text-secondary"> @${
                                  post.handle
                                } - ${post.time}</span>
                            </div>
                            <div class="col-1 pe-0">
                                <span class="float-end text-secondary">...</span>
                            </div>
                        </div>
                    </div>
                    <div>${post.content}</div>
                    
                    <div class="card mt-2 border-secondary rounded-4">
                      <img src=${post.image} class="rounded-4">
                      ${
                        post.topicTitle || post.topicContent || post.topicLink
                          ? `<div class="card-body border-top border-secondary p-3">
                            ${
                              post.topicTitle
                                ? `<p class="card-text mb-0">${post.topicTitle}</p>`
                                : ``
                            }
                            ${
                              post.topicContent
                                ? `<p class="text-secondary mb-0">${post.topicContent}</p>`
                                : ``
                            }
                            ${
                              post.topicContent
                                ? `<p class="text-secondary mb-0"><i class="fa-solid fa-link"></i>${post.topicLink}</p>`
                                : ``
                            }
                          </div>`
                          : ``
                      }
                    </div>
                    
                    <div class="row mt-2">
                        <div class="col-3">
                            <a class="text-secondary text-decoration-none" href="#"><i class="fa-regular fa-comment"></i><span class="ms-3">${
                              post.comment
                            }</span></a>
                        </div>
                        <div class="col-3">
                            <a class="text-secondary text-decoration-none" href="#"><i class="fa-solid fa-retweet"></i><span class="ms-3">${
                              post.share
                            }</span></a>
                        </div>
                        <div class="col-3">
                            <a class="text-secondary text-decoration-none" href="#" class="wd-liked"><i class="fa-solid fa-heart"></i><span class="ms-3">${
                              post.like
                            }</span></a>
                        </div>
                        <div class="col-3">
                            <a class="text-secondary text-decoration-none" href="#"><i class="fa-solid fa-arrow-up-from-bracket"></i></a>
                        </div>
                          
                    </div>
                </div>
            
            </div>
        </li>
    `;
};

export default postItem;
