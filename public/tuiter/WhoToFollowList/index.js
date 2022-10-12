import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
    return (`
           <ul class="list-group">
           <!-- continue here -->
           <div class="list-group-item list-group-item-action fw-bolder">
                Who to follow
            </div>
            ${who.map(item => WhoToFollowListItem(item)).join('')}
           </ul>
`);
}

export default WhoToFollowList;